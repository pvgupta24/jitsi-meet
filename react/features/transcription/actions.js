import {
    ENDPOINT_MESSAGE_RECEIVED,
    ADD_TRANSCRIPT_MESSAGE,
    UPDATE_TRANSCRIPT_MESSAGE,
    REMOVE_TRANSCRIPT_MESSAGE
} from './actionTypes';

/**
 * Signals that a participant sent an endpoint message on the data channel.
 *
 * @param {JitsiConference} conference - The JitsiConference which had its lock
 * state changed.
 * @param {Object} participant - The participant details sending the message.
 * @param {Object} p - The payload carried in the message.
 * @returns {{
 *      type: ENDPOINT_MESSAGE_RECEIVED,
 *      conference: JitsiConference,
 *      participant,
 *      p
 * }}
 */
export function endpointMessageReceived(
        conference: Object,
        participant: Object, p: Object) {
    return {
        type: ENDPOINT_MESSAGE_RECEIVED,
        conference,
        participant,
        p
    };
}

export function addTranscriptMessage(transciptMessageID, participantName) {
    return {
        type: ADD_TRANSCRIPT_MESSAGE,
        transciptMessageID,
        participantName
    };
}

export function updateTranscriptMessage(transciptMessageID, newTranscriptMessage) {
    return {
        type: UPDATE_TRANSCRIPT_MESSAGE,
        transciptMessageID,
        newTranscriptMessage
    };
}

export function removeTranscriptMessage(transciptMessageID) {
    return {
        type: REMOVE_TRANSCRIPT_MESSAGE,
        transciptMessageID
    };
}
