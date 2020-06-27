//import {Field} from "redux-form";
import React from "react";
//import {useSelector} from "react-redux";

const Select = ({input, name="headCompany", label, items=[]}) => {

    //const items = useSelector(state => state.selectControl.items) || []

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <label className="input-group-text bg-primary text-second" htmlFor={name}>{label}</label>
            </div>
            <select
                {...input}
                className="custom-select text-black"
                name={name}
                id={name}>
                <option value={undefined}>Выберите...</option>
                {items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default Select