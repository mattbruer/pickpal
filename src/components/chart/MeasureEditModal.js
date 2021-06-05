import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './MeasureEditModal.css'
import Measure from '../../components/chart/Measure'
import { showMeasureModal, editTimeSig } from '../../store/actions/chartActions';

const MeasureEditModal = () => {
    const dispatch = useDispatch();
    const { measureModal, editMode, song, editingMeasure } = useSelector(state => state.chart);
    let timeSig = [null, null];
    if (editingMeasure !== null) {
        timeSig = song[editingMeasure].timeSig
    }

    const selected = { border: "4px solid green" }
    return (

        < div className={measureModal && editMode ? 'modal' : "hide"} >
            <div className="closeBtn" onClick={() => dispatch(showMeasureModal(false, null))} style={{ backgroundColor: 'white', width: '50px', border: '1px solid black' }}>close</div>
            <div>set time Signature</div>
            <div>set barline options on measure {editingMeasure}</div>
            {editingMeasure !== null && <div className='modalMeasure' ><Measure timeSigSize={6.5} width={90} measureNumber={editingMeasure} /></div>}
            <div className="timeSigButtonContainer">
                Time Signature:
                <button onClick={() => dispatch(editTimeSig([2, 2], editingMeasure))} style={timeSig[0] === 2 && timeSig[1] === 2 ? selected : null} className="timeBtn">2/2</button>
                <button onClick={() => dispatch(editTimeSig([3, 2], editingMeasure))} style={timeSig[0] === 3 && timeSig[1] === 2 ? selected : null} className="timeBtn">3/2</button>
                <button onClick={() => dispatch(editTimeSig([3, 4], editingMeasure))} style={timeSig[0] === 3 && timeSig[1] === 4 ? selected : null} className="timeBtn">3/4</button>
                <button onClick={() => dispatch(editTimeSig([4, 4], editingMeasure))} style={timeSig[0] === 4 && timeSig[1] === 4 ? selected : null} className="timeBtn">4/4</button>
                <button onClick={() => dispatch(editTimeSig([5, 4], editingMeasure))} style={timeSig[0] === 5 && timeSig[1] === 4 ? selected : null} className="timeBtn">5/4</button>
            </div>
            <div className="barlineBtnContainer">
                <div className='barline-options'>
                    Left Barline
                    <button className="barlineBtn">single</button>
                    <button className="barlineBtn">double</button>
                    <button className="barlineBtn">Start Repeat</button>
                </div>
                <div className='barline-options'>
                    Right Barline
                    <button className="barlineBtn">single</button>
                    <button className="barlineBtn">double</button>
                    <button className="barlineBtn">End Repeat</button>
                </div>



            </div>


        </div >


    )
}

export default MeasureEditModal
