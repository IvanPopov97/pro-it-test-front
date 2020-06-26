import React from "react";

const ErrorMessage = ({ message }) => (
    <div className='input-group input'>
        <span className='text-danger'>{message}</span>
    </div>
)

export default ErrorMessage