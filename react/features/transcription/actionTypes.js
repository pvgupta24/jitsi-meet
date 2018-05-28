/**
 * The type of (redux) action which indicates that an end point message
 * sent by another participant to the data channel is received
 *
 * {
 *     type: ENDPOINT_MESSAGE_RECEIVED,
 *     conference: JitsiConference,
 *     participant: Object,
 *     p: Object
 * }
 */
export const ENDPOINT_MESSAGE_RECEIVED = Symbol('ENDPOINT_MESSAGE_RECEIVED');

export const ADD_TRANSCRIPT_MESSAGE = Symbol('ADD_TRANSCRIPT_MESSAGE');

export const REMOVE_TRANSCRIPT_MESSAGE = Symbol('REMOVE_TRANSCRIPT_MESSAGE');

export const UPDATE_TRANSCRIPT_MESSAGE = Symbol('UPDATE_TRANSCRIPT_MESSAGE');
