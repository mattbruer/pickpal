import {
  CHANGE_TEMPO,
  EDIT_TITLE,
  TOGGLE_EDIT_MODE,
  PLAY_STOP,
  START_NEW_SONG,
  EDIT_CHORDS,
  ADD_MEASURE,
  DELETE_MEASURE,
  SHOW_MEASURE_MODAL,
  EDIT_TIME_SIG
} from '../actions/chartActions';


const initialState = {
  title: 'untitled',
  tempo: 0,
  editMode: false,
  isPlaying: false,
  measureModal: false,
  editingMeasure: null,
  song: [
    {
      measureIndex: 0,
      timeSig: [2, 2],
      showTimeSig: true,
      leftBarline: "none",
      rightBarline: "single",
      chords: ["G", "C"]
    }
  ]

};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TIME_SIG:
      const { measure, timeSig } = action.payload
      let newTime = [...state.song];
      newTime[measure].timeSig = timeSig
      //change till end of song
      for (let i = 0; i < newTime.length; i++) {
        if (i > measure) {
          newTime[i].timeSig = timeSig;
          newTime[i].showTimeSig = false;
        }
      }
      const cur = newTime[measure].timeSig.toString();
      const prev = newTime[measure - 1].timeSig.toString() || ""
      newTime[measure].showTimeSig = measure === 0 ? true : cur !== prev;
      return {
        ...state,
        song: [...newTime]
      }
    case SHOW_MEASURE_MODAL:
      return {
        ...state,
        measureModal: action.payload.bool,
        editingMeasure: action.payload.measureNumber
      }
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
        showTimeSig: false,
        leftBarline: "single",
        rightBarline: 'single',
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

