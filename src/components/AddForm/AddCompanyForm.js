import React, {useEffect} from "react";
import '../../componentStyles/Form.css'
import {Field, reduxForm} from "redux-form";
import Input from "./Input";
import Select from "./Select";
import {useDispatch, useSelector} from "react-redux";
import {companyActionCreator} from "../../redux/actions/CompanyActionCreator";

const mapValuesToDto = values => ({
    name: values.name,
    headCompany: {id: Number(values.headCompany)}
})

// const validate = values => {
//     const errors = {};
//     if (!values.name || values.name.trim().length === 0) {
//         console.log("It's wrong. You're fucking prick!")
//         errors.name = 'Обязательно укажите название компании';
//     }
//     return errors
// }

const required = values => (values && values.trim().length > 0)
    ? undefined
    : 'Обязательно укажите название компании'

const AddCompanyForm = ({ handleSubmit, reset }) => {
    const submit = values => {
        companyActionCreator.addItem(mapValuesToDto(values))
        reset()
    }

    //console.log(error)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(companyActionCreator.fetchNames())
    }, [dispatch])

    const items = useSelector(state => state.selectControl.items)

    return (
        <form onSubmit={ handleSubmit(submit) }>
            <div className='row justify-content-end'>
                <button type="submit" className='Create-button Margin-right'>Сохранить</button>
            </div>
            <Field
                name="name"
                placeholder="Название компании"
                component={Input}
                validate={required}
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