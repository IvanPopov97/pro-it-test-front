import React, {useEffect} from "react";
import '../../componentStyles/Form.css'
import {Field, reduxForm} from "redux-form";
import Input from "./Input";
import Select from "./Select";
import {useDispatch, useSelector} from "react-redux";
import {companyActionCreator} from "../../redux/actions/CompanyActionCreator";

const mapValuesToDto = values => ({
    name: values.name,
    headCompany: values.headCompany ? {id: Number(values.headCompany)} : null
})

const required = values => {
    return (
        (values && values.trim().length > 0)
            ? undefined
            : 'Обязательно укажите название компании'
    )
}

const AddCompanyForm = ({ handleSubmit, reset, submitting }) => {
    const submit = values => {
        console.log(values)
        dispatch(companyActionCreator.addItem(mapValuesToDto(values)))
        reset()
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(companyActionCreator.fetchNames())
    }, [dispatch])

    const items = useSelector(state => state.selectControl.items)

    return (
        <form onSubmit={ handleSubmit(submit) }>
            <div className='row justify-content-end'>
                <button type="submit" disabled={submitting} className='Create-button Margin-right'>Сохранить</button>
            </div>
            <Field
                name="name"
                placeholder="Название компании"
                type="text"
                validate={required}
                component={Input}
            />
            <Field
                name="headCompany"
                items={items}
                component={Select}
            />
        </form>
    )
}

export default reduxForm({ form: 'company' })(AddCompanyForm)