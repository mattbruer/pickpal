export const CHANGE_TEMPO = 'CHANGE_TEMPO';
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export const EDIT_TITLE = 'EDIT_TITLE';
export const PLAY_STOP = 'PLAY_STOP';
export const START_NEW_SONG = 'START_NEW_SONG';
export const EDIT_CHORDS = 'EDIT_CHORDS';
export const ADD_MEASURE = 'ADD_MEASURE'
export const DELETE_MEASURE = "DELETE_MEASURE";
export const SHOW_MEASURE_MODAL = 'SHOW_MEASURE_MODAL';
export const EDIT_TIME_SIG = "EDIT_TIME_SIG"

export function editTimeSig(timeSig, measure) {
  return {
    type: EDIT_TIME_SIG,
    payload: { timeSig, measure }
  }
}
export function showMeasureModal(bool, measureNumber) {
  return {
    type: SHOW_MEASURE_MODAL,
    payload: { bool, measureNumber }
  }
}
export function addMeasure() {
  return {
    type: ADD_MEASURE
  }
}

export function deleteMeasure() {
  return {
    type: DELETE_MEASURE
  }
}
export function editChords(measureNumber, position, chord) {
  return {
    type: EDIT_CHORDS,
    payload: { measureNumber, position, chord },
  };
}
export function startNewSong() {
  return {
    type: START_NEW_SONG,
  };
}

export function togglePlayStop() {
  return {
    type: PLAY_STOP,
  };
}
export function changeTempo(tempo) {
  return {
    type: CHANGE_TEMPO,
    payload: tempo,
  };
}

export function toggleEditMode() {
  return {
    type: TOGGLE_EDIT_MODE,
  };
}

export function editTitle(title) {
  return {
    type: EDIT_TITLE,
    payload: title,
  };
}
