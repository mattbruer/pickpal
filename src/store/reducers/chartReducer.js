import {
  CHANGE_TEMPO,
  EDIT_TITLE,
  TOGGLE_EDIT_MODE,
  PLAY_STOP,
  START_NEW_SONG,
} from '../actions/chartActions';

const initialState = {
  title: 'untitled',
  tempo: 0,
  editMode: false,
  isPlaying: false,
  song: [[], [], [], []],
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_NEW_SONG:
      return {
        ...initialState,
      };
    case PLAY_STOP:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case EDIT_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case TOGGLE_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode,
      };
    case CHANGE_TEMPO:
      return {
        ...state,
        tempo: action.payload,
      };
    default:
      return state;
  }
};

export default chartReducer;
