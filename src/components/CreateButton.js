import React from "react";
import {useSelector} from "react-redux";

const CreateButton = () => {
    const path = useSelector(state => state.app.currentPath)

    const clickHandler = () => {
        console.log(`${path}/add`)
    }

    return (
        <button onClick={clickHandler} className='Create-button'>Создать</button>
    )
}

export default CreateButton;