export const CHANGE_TEMPO = 'CHANGE_TEMPO';
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export const EDIT_TITLE = 'EDIT_TITLE';
export const PLAY_STOP = 'PLAY_STOP';
export const START_NEW_SONG = 'START_NEW_SONG';

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
