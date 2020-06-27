import React from "react";

const SubmitButton = ({ submitting }) => (
    <div className='row justify-content-end'>
        <button type='submit' disabled={submitting} className='Create-button Margin-right'>Сохранить</button>
    </div>
)

export default SubmitButton