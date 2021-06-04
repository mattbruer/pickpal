import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './MeasureEditModal.css'
import Measure from '../../components/chart/Measure'
import { showMeasureModal } from '../../store/actions/chartActions';

const MeasureEditModal = () => {
    const dispatch = useDispatch();
    const { measureModal, editMode, editingMeasure } = useSelector(state => state.chart)
    return (

        < div className={measureModal && editMode ? 'modal' : "hide"} >
            <div className="closeBtn" onClick={() => dispatch(showMeasureModal(false, null))} style={{ backgroundColor: 'white', width: '50px', border: '1px solid black' }}>close</div>
            <div>set time Signature</div>
            <div>set barline options on measure {editingMeasure}</div>
            {editingMeasure !== null && <div className='modalMeasure' ><Measure timeSigSize={6.5} width={90} measureNumber={editingMeasure} /></div>}
            <div className="timeSigButtonContainer">
                Time Signature:
                <button className="timeBtn">2/2</button>
                <button className="timeBtn">3/2</button>
                <button className="timeBtn">3/4</button>
                <button className="timeBtn">4/4</button>
                <button className="timeBtn">5/4</button>
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
