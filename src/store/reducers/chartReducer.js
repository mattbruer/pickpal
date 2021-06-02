import {
  CHANGE_TEMPO,
  EDIT_TITLE,
  TOGGLE_EDIT_MODE,
  PLAY_STOP,
  START_NEW_SONG,
  EDIT_CHORDS,
  ADD_MEASURE,
  DELETE_MEASURE
} from '../actions/chartActions';


const initialState = {
  title: 'untitled',
  tempo: 0,
  editMode: false,
  isPlaying: false,
  song: [
    {
      measureIndex: 0,
      timeSig: [2, 2],
      showTimeSig: true,
      leftBarline: "startRepeat",
      rightBarline: "single",
      chords: ["", ""]
    }
  ]

};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_CHORDS:
      const { measureNumber, position, chord } = action.payload;
      const newSong = [...state.song];
      newSong[measureNumber].chords[position] = chord;
      return { ...state, song: [...newSong] };
    case ADD_MEASURE: return {
      ...state,
      song: [...state.song,
      {
        timeSig: state.song[state.song.length - 1].timeSig,
        measureIndex: state.song.length,
        showTimeSig: true,
        leftBarline: "double",
        rightBarline: 'double',
        chords: ["", ""]

      }
      ]
    }
    case DELETE_MEASURE: return { ...state, song: [...state.song.slice(0, -1)] }
    case START_NEW_SONG: return { ...initialState };
    case PLAY_STOP: return { ...state, isPlaying: !state.isPlaying };
    case EDIT_TITLE: return { ...state, title: action.payload };
    case TOGGLE_EDIT_MODE: return { ...state, editMode: !state.editMode };
    case CHANGE_TEMPO: return { ...state, tempo: action.payload };
    default: return state;
  }
};

export default chartReducer;

