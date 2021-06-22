import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeletingNote } from '../../actions/notes';

export const NoteScreen = () => {

    const {active: note} = useSelector(state => state.notes);
    const dispatch = useDispatch();
    
    const [values, handleInputChange, reset] = useForm(note);
    const {body, title} = values;
    
    const activeId = useRef(note.id);
    useEffect(() => {
        if ( note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(values.id,{...values}));
    }, [values, dispatch])
    
    const handleDelete = ()=> {
        dispatch(startDeletingNote(note.id));
    }


    return (
        <div className="notes__main-content animate__animated animate__fadeIn animate__faster">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                    value={body}
                    name="body"
                    onChange={handleInputChange}
                ></textarea>
                {
                    note.url &&
                    <div className="notes__image">
                        <img 
                            src={note.url}
                            alt="imagen"
                        />
                    </div>
                }
            </div>
            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >Delete</button>
        </div>
    )
}
