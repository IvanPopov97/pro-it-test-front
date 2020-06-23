import {useDispatch} from "react-redux";
import React, {useEffect} from "react";

const ActionDispatcher = ({ action, Component}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(action())
    }, [dispatch, action])
    return <Component/>
}

export default ActionDispatcher