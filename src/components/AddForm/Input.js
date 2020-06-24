import React, {Fragment} from "react";

const Input = ({ name, placeholder, onChange, errorMessage }) => {

    const showError = false

    return (
        <Fragment>
            <div className='input-group input'>
                <span className='text-danger'>{showError ? errorMessage : null}</span>
            </div>
            <div className="input-group">
                <input type='text'
                       className='form-control text-black'
                       name={name}
                       placeholder={placeholder}
                       onChange={onChange}
                />
            </div>
        </Fragment>
    )
}

export default Input