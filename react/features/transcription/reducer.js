import {
    ENDPOINT_MESSAGE_RECEIVED,
    ADD_TRANSCRIPT_MESSAGE,
    UPDATE_TRANSCRIPT_MESSAGE,
    REMOVE_TRANSCRIPT_MESSAGE
} from './actionTypes';
import { ReducerRegistry } from '../base/redux';
import React from 'react';


const defaultState = {
    // participantIDs: [],
    transcriptMessages: {},
    transcriptionSubtitles: ''
};

/**
 * Listen for actions for the transcription feature
 */
ReducerRegistry.register('features/transcription', (state = defaultState, action) => {
    switch (action.type) {
    case ENDPOINT_MESSAGE_RECEIVED:
        return _endpointMessageReceived(state, action);

    case ADD_TRANSCRIPT_MESSAGE:
        return _addTranscriptMessage(state, action);

    case UPDATE_TRANSCRIPT_MESSAGE:
        return _updateTranscriptMessage(state, action);

    case REMOVE_TRANSCRIPT_MESSAGE:
        return _removeTranscriptMessage(state, action);
    }

    return state;
});

/**
 * Reduces a specific Redux action ENDPOINT_MESSAGE_RECEIVED of the feature
 * base/conference.
 *
 * @param {Object} state - The Redux state of the feature base/conference.
 * @param {Action} action -The Redux action ENDPOINT_MESSAGE_RECEIVED to reduce.
 * @returns {Object} The new state of the feature base/conference after the
 * reduction of the specified action.
 */
function _endpointMessageReceived(state, action) {

    const paragraphs = [];

    console.log('Rendering Transcription Subtitles');
    Object.keys(state.transcriptMessages).forEach((id, index) => {
        console.log(id, index);
        const transcriptMessage = state.transcriptMessages[id];
        let text;

        if (transcriptMessage) {
            text = `${transcriptMessage.participantName}: `;

            if (transcriptMessage.final) {
                text += transcriptMessage.final;
            } else {
                const stable = transcriptMessage.stable ? transcriptMessage.stable : '';
                const unstable = transcriptMessage.unstable ? transcriptMessage.unstable : '';

                text += stable + unstable;
            }
        }

        paragraphs.push(<p key = { id }> { text } </p>);
    });

    return {
        ...state,
        transcriptionSubtitles: paragraphs
    };
}


function _addTranscriptMessage(state, { transciptMessageID, participantName }) {
    console.log('Adding Message');

    return {
        ...state,
        transcriptMessages: Object.assign({}, state.transcriptMessages,
            { [transciptMessageID]: { participantName } })
    };
}

function _updateTranscriptMessage(state, { transciptMessageID, newTranscriptMessage }) {
    console.log('Updating Message');

    return {
        ...state,
        transcriptMessages: Object.assign({}, state.transcriptMessages,
        { [transciptMessageID]: newTranscriptMessage })
    };
}

function _removeTranscriptMessage(state, { transciptMessageID }) {
    console.log('Removing Message');

    return {
        ...state,
        transcriptMessages: Object.assign({}, state.transcriptMessages,
            { [transciptMessageID]: undefined })
    };
}
