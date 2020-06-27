import React, {useEffect} from "react";
import '../../componentStyles/Form.css'
import {Field, reduxForm} from "redux-form";
import Input from "./Input";
import Select from "./Select";
import {useDispatch, useSelector} from "react-redux";
import {companyActionCreator} from "../../redux/actions/CompanyActionCreator";
import {required} from "./index";
import SubmitButton from "./SubmitButton";

const mapValuesToDto = values => {
    const headCompanyId = values.headCompany ? Number(values.headCompany) : null
    return (
        {
            name: values.name,
            headCompany: headCompanyId ? {id: headCompanyId} : null
        }
    )
}

const nameRequired = values => required(values, 'Обязательно укажите название компании')

const AddCompanyForm = ({ handleSubmit, reset, submitting }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        //dispatch(companyActionCreator.createEmptyNameList())
        dispatch(companyActionCreator.fetchNames())
    }, [dispatch])

    const submit = values => {
        //console.log(values)
        dispatch(companyActionCreator.addName(mapValuesToDto(values)))
        reset()
    }

    const itemContainer = useSelector(state => state.selectControl[companyActionCreator.modelName])
        || {items: []}

    return (
        <form onSubmit={ handleSubmit(submit) }>
            <SubmitButton submitting={submitting}/>
            <Field
                name='name'
                placeholder='Название компании'
                type='text'
                validate={nameRequired}
                component={Input}
            />
            <Field
                name='headCompany'
                label='Головная компания'
                //onChange={(event, value) => console.log(value)}
                component={Select}
                items = {itemContainer.items}
            />
        </form>
    )
}

export default reduxForm({ form: 'company' })(AddCompanyForm)