import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './MeasureEditModal.css'
import Measure from '../../components/chart/Measure'
import { showMeasureModal } from '../../store/actions/chartActions';

const MeasureEditModal = () => {
    const dispatch = useDispatch();
    const { measureModal, editingMeasure } = useSelector(state => state.chart)
    return (

        < div className={measureModal ? 'modal' : "hide"} >
            <div onClick={() => dispatch(showMeasureModal(false, null))} style={{ backgroundColor: 'white', width: '50px', border: '1px solid black' }}>close</div>
            <div>set time Signature</div>
            <div>set barline options on measure {editingMeasure}</div>
            {editingMeasure !== null && <div><Measure measureNumber={editingMeasure} /></div>}

        </div >


    )
}

export default MeasureEditModal
