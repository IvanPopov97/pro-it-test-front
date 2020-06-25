import React from "react";
import '../../componentStyles/Form.css'
import {useDispatch, useSelector} from "react-redux";
import CompanyCombobox from "./CompanyCombobox";
import {setShouldValidate, setValue} from "../../redux/actions/addFormActions";
import {addCompany, MODEL_NAME} from "../../redux/actions/companyActions";
import Input from "./Input";

const AddCompanyForm = () => {

    const dispatch = useDispatch()

    const form = useSelector(state => state.addForm[MODEL_NAME]) || {}

    const submitHandler = event => {
        event.preventDefault()
        Object.keys(form).forEach(formElemName => {
            dispatch(setShouldValidate(MODEL_NAME, formElemName, true))
        })
        if (Object.values(form).every(elem => elem.valid)) {
            const company = Object.assign(...Object.entries(form).map(
                entry => ({
                    [entry[0]]: entry[1].value
                })
            ))
            console.log(JSON.stringify(company))
            addCompany(company);
        }
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
                             name='headCompany'
                             onChange={inputChangeHandler}
            />
        </form>
    )
}

export default AddCompanyForm