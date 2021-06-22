import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { useForm } from './../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    
    const {msgError} = useSelector(state => state.ui);

    const [values, handleInputChange]= useForm({
        name: 'Fernando',
        email: 'fernando@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password, password2} = values;

    const handleRegister = (e)=> {
        e.preventDefault();

        if ( isFormValid() ){
            dispatch(startRegisterWithEmailPassword(email, password, name));
        }  

    }
    const isFormValid = ()=> {
        if ( name.trim().length === 0 ) {
            dispatch(setError('Name is required'))
            return false;
        }
        if ( !validator.isEmail(email) ){
            dispatch(setError('Email isnt valid'))
            return false;
        }
        if ( password !== password2 || password.lenght < 5) {
            dispatch(setError('Pass error'))
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form 
                onSubmit={handleRegister} 
                className="animate__animated animate__backInDown animate__faster"
            >
                {
                    msgError && 
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                <input
                    className="auth__input" 
                    type="text" 
                    name="name"
                    autoComplete="off"
                    placeholder="Name"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input" 
                    type="text" 
                    name="email"
                    autoComplete="off"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input" 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input" 
                    type="password" 
                    name="password2"
                    placeholder="Confirm password"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>

                
                <Link
                    className="link"
                    to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </>
    )
}
