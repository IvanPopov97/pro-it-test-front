import React from "react";
import '../../componentStyles/Form.css'
import {useDispatch, useSelector} from "react-redux";
import CompanyCombobox from "./CompanyCombobox";
import {setFormElementCurrentValue} from "../../redux/actions/addFormActions";
import {MODEL_NAME} from "../../redux/actions/companyActions";
import Input from "./Input";

const AddCompanyForm = () => {

    const form = useSelector(state => state.addForm[MODEL_NAME])
    const dispatch = useDispatch()

    const submitHandler = event => {
        event.preventDefault()
    }

    const inputChangeHandler = event => {
        dispatch(setFormElementCurrentValue(MODEL_NAME, event.target.name, event.target.value))

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='row justify-content-end'>
                <button type='submit' className='Create-button Margin-right'>Создать</button>
            </div>
            <Input
                name='name'
                placeholder='Название компании'
                onChange={inputChangeHandler}
                errorMessage='Обязательно укажите название компании'
            />
            <CompanyCombobox form={form}
                             changeHandler={inputChangeHandler}
            />
        </form>
    )
}

export default AddCompanyForm