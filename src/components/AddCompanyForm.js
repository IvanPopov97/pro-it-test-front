import React from "react";
import '../componentStyles/Form.css'
import {useSelector} from "react-redux";
import {MODEL_NAME} from "../redux/actions/companyActions";
import CompanyCombobox from "./CompanyCombobox";

const AddCompanyForm = () => {

    const form = useSelector(state => state.addForm[MODEL_NAME])


    const submitHandler = event => {
        event.preventDefault()
    }

    const inputChangeHandler = event => {
        console.log(event.target.name)
        console.log(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="row justify-content-end">
                <button type="submit" className="Create-button Margin-right">Создать</button>
            </div>
            <div className="input-group input">
                <input type="text"
                       onChange={inputChangeHandler}
                       className="form-control text-black"
                       name="name"
                       placeholder="Название компании"/>
            </div>
            <CompanyCombobox form={form}
                             changeHandler={inputChangeHandler}/>
        </form>
    )
}

export default AddCompanyForm