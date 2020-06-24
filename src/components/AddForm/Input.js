import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setValidationFunction} from "../../redux/actions/addFormActions";


const Input = ({ formName, name, placeholder, onChange, errorMessage }) => {

    const dispatch = useDispatch()
    const validationFunc = value => value.trim().length > 0

    useEffect(() => {
        dispatch(
            setValidationFunction(formName, name, validationFunc)
        )
    }, [dispatch, formName, name])

    const form = useSelector(state => state.addForm[formName]) || {}
    const elem = form[name] || {}
    const valid = elem.valid === undefined ? true : elem.valid

    return (
        <Fragment>
            <div className='input-group input'>
                <span className='text-danger'>{valid ? null : errorMessage}</span>
            </div>
            <div className="input-group">
                <input type='text'
                       className='form-control text-black'
                       name={name}
                       placeholder={placeholder}
                       onBlur={onChange}
                />
            </div>
        </Fragment>
    )
}

export default Input