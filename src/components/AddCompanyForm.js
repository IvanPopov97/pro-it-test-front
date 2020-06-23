import React, {useEffect} from "react";
import '../componentStyles/Form.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchCompanyNames, MODEL_NAME} from "../redux/actions/companyActions";

const AddCompanyForm = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(fetchCompanyNames()) }, [dispatch])
    const form = useSelector(state => state.addForm[MODEL_NAME])

    if (!form)
        return null

    const companies = form['companies']

    console.log(companies)

    return (
        <form>
            <div className="row justify-content-end">
                <button type="submit" className="Create-button Margin-right">Создать</button>
            </div>
            <div className="input-group input">
                <input type="text" className="form-control text-black" id="name" placeholder="Название компании"/>
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text bg-primary text-second" htmlFor="headCompany">Головная
                        компания</label>
                </div>
                <select className="custom-select input text-black" id="headCompany">
                    <option defaultValue={null}>Выберите...</option>
                    {
                        companies.map((company, i) => <option key={i} value={company.id}>{company.name}</option>)
                    }
                </select>
            </div>
        </form>
    )
}

export default AddCompanyForm