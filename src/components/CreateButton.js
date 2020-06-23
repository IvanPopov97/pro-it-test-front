import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

const CreateButton = () => {
    const path = useSelector(state => state.app.currentPath)
    const history = useHistory()

    const clickHandler = () => {
        history.push(`/add${path}`)
    }

    return (
        <button onClick={clickHandler} className='Create-button'>Создать</button>
    )
}

export default CreateButton;