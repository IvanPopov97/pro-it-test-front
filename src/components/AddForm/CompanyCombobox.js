import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchCompanyNames} from "../../redux/actions/companyActions";
import {setValueMapper} from "../../redux/actions/addFormActions";


const CompanyCombobox = ({ formName, name, onChange }) => {

    const mapper = id => ({id: Number(id)})

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCompanyNames(name))
        dispatch(
            setValueMapper(formName, name, mapper)
        )
    }, [dispatch, formName, name])

    const form = useSelector(state => state.addForm[formName]) || {}
    const companies = form[name] ? form[name].items : null

    if (!companies)
        return null

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <label className="input-group-text bg-primary text-second" htmlFor="headCompany">Головная
                    компания</label>
            </div>
            <select className="custom-select text-black"
                    name={name}
                    onChange={onChange}
                    id="headCompany">
                <option defaultValue={null}>Выберите...</option>
                {
                    companies.map((company, i) => <option key={i} value={company.id}>{company.name}</option>)
                }
            </select>
        </div>
    )

}

export default CompanyCombobox