import React, {useEffect} from "react";
import '../../componentStyles/Form.css'
import {Field, reduxForm} from "redux-form";
import Input from "./Input";
import Select from "./Select";
import {useDispatch, useSelector} from "react-redux";
import {employeeActionCreator} from "../../redux/actions/EmployeeActionCreator";
import {required} from "./index";
import SubmitButton from "./SubmitButton";
import {companyActionCreator} from "../../redux/actions/CompanyActionCreator";

const mapValuesToDto = values => {
    const companyId = values.company ? Number(values.company) : null
    const bossId = values.boss ? Number(values.boss) : null
    return (
        {
            name: values.name,
            company: companyId ? {id: companyId} : null,
            boss: bossId ? {id: bossId} : null
        }
    )
}

const nameRequired = values => required(values, 'Обязательно укажите имя сотрудника')

const AddEmployeeForm = ({ handleSubmit, reset, pristine, submitting }) => {

    const dispatch = useDispatch()

    const companyChangeHandler = (event, value) => {
        const companyId = Number(value)
        if (companyId)
            dispatch(employeeActionCreator.fetchNames(companyId))
        else
            dispatch(employeeActionCreator.createEmptyNameList())
    }

    // useEffect(() => {
    //     window.addEventListener('unhandledRejection', afterSubmit);
    //     return () => {
    //         window.removeEventListener('unhandledRejection', afterSubmit);
    //     }
    // }, [])

    useEffect(() => {
        //console.log(pristine)
        if (pristine)
            dispatch(employeeActionCreator.createEmptyNameList())
    }, [dispatch, pristine])

    useEffect(() => {
        dispatch(companyActionCreator.fetchNames())
    }, [dispatch])

    const submit = values => {
        employeeActionCreator.addName(mapValuesToDto(values), false)
        reset()
    }

    const companyItemContainer = useSelector(state => state.selectControl[companyActionCreator.modelName])
        || {items: []}
    const employeeItemContainer = useSelector(state => state.selectControl[employeeActionCreator.modelName])
        || {items: []}

    return (
        <form onSubmit={ handleSubmit(submit) }>
            <SubmitButton submitting={submitting}/>
            <Field
                name='name'
                placeholder='Имя сотрудника'
                type='text'
                validate={nameRequired}
                component={Input}
            />
            <Field
                name='company'
                label='Компания'
                onChange={companyChangeHandler}
                //onChange={(event, value) => console.log(value)}
                component={Select}
                items = {companyItemContainer.items}
            />
            <Field
                name='boss'
                label='Руководитель'
                component={Select}
                items = {employeeItemContainer.items}
            />
        </form>
    )
}

export default reduxForm({ form: 'employee' })(AddEmployeeForm)