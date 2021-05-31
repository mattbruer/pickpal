import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editChords } from '../../store/actions/chartActions';

const ChordInput = ({ measureNumber, position }) => {
    const dispatch = useDispatch();
    const { editMode, song } = useSelector(state => state.chart)
    return (
        <input
            onChange={(e) => {
                dispatch(editChords(measureNumber, position, e.target.value));
            }}
            value={song[measureNumber][position]}
            className="chord-input"
            disabled={!editMode}
            style={editMode ? { border: '1px solid lightblue' } : null}
        />
    )
}

export default ChordInput

