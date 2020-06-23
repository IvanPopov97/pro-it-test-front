import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {fetchCompanyNames} from "../redux/actions/companyActions";

const name = 'companyNames'

const CompanyCombobox = ({ form, changeHandler }) => {


    const dispatch = useDispatch()
    useEffect(() => { dispatch(fetchCompanyNames(name)) }, [dispatch])

    const companies = form ? form[name].items : null

    if (!companies)
        return null

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <label className="input-group-text bg-primary text-second" htmlFor="headCompany">Головная
                    компания</label>
            </div>
            <select className="custom-select input text-black"
                    name={name}
                    onChange={changeHandler}
                    id="headCompany">
                <option defaultValue={null}>Отсутствует</option>
                {
                    companies.map((company, i) => <option key={i} value={company.id}>{company.name}</option>)
                }
            </select>
        </div>
    )

}

export default CompanyCombobox