import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
    
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const handleSave = ()=> {
        dispatch(startSaveNote(active));
    }

    const hanldePictureClick = ()=> {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e)=> {
        const file = e.target.files[0];
        if (file){
            dispatch(startUploading(file));
        }
    }
    const noteDate = moment(active.date);
    return (
        <div className="notes__appbar">
            <span>{noteDate.format("MMM Do YY")}</span>

            <input 
                id='fileSelector'
                type='file'
                name='file'
                style={{display: 'none'}}
                onChange = {handleFileChange}
            />
            <div>
                <button 
                    className="btn"
                    onClick={hanldePictureClick}
                >Picture</button>
                <button 
                    className="btn"
                    onClick={handleSave}
                >Save</button>
            </div>
        </div>
    )
}
