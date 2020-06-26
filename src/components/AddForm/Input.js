//import {Field} from "redux-form";
import React, {Fragment} from "react";
import ErrorMessage from "./ErrorMessage";

const Input = ({type="text", placeholder="Название", meta: { touched, error }}) => {

    return (
        <Fragment>
            {touched && error && <ErrorMessage message={error}/>}
            <div className="input-group">
                <input
                    className='form-control text-black'
                    type = {type}
                    placeholder={placeholder}
                />
            </div>
        </Fragment>
    )
}

export default Input