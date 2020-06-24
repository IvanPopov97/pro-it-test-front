import React from "react";
import '../../componentStyles/Form.css'
import {useDispatch} from "react-redux";
import CompanyCombobox from "./CompanyCombobox";
import {setValue} from "../../redux/actions/addFormActions";
import {MODEL_NAME} from "../../redux/actions/companyActions";
import Input from "./Input";

const AddCompanyForm = () => {

    const dispatch = useDispatch()

    const submitHandler = event => {
        event.preventDefault()
    }

    const inputChangeHandler = event => {
        dispatch(setValue(MODEL_NAME, event.target.name, event.target.value))

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='row justify-content-end'>
                <button type='submit' className='Create-button Margin-right'>Создать</button>
            </div>
            <Input
                formName={MODEL_NAME}
                name='name'
                placeholder='Название компании'
                onChange={inputChangeHandler}
                errorMessage='Обязательно укажите название компании'
            />
            <CompanyCombobox formName={MODEL_NAME}
                             name='companies'
                             onChange={inputChangeHandler}
            />
        </form>
    )
}

export default AddCompanyForm