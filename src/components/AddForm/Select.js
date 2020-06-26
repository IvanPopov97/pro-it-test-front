//import {Field} from "redux-form";
import React from "react";

const Select = ({name="headCompany", items=[]}) => {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <label className="input-group-text bg-primary text-second" htmlFor={name}>Головная компания</label>
            </div>
            <select
                className="custom-select text-black"
                name={name}
                id={name}>
                <option defaultValue={undefined}>Выберите...</option>
                {items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default Select