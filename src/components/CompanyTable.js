import React from "react";
import {useSelector} from "react-redux";
import '../componentStyles/Table.css'
import Table from "./Table";
import {MODEL_NAME} from "../redux/actions/companyActions";

const columnNames = ['ID', 'Название компании', 'Количество сотрудников', 'Головная компания']

const mapCompanyToValueArray = company => (
    Object.values({
        ...company,
        headCompany: company.headCompany ? company.headCompany.name : null
    })
)

const CompanyTable = () => {
    const companies = useSelector(state => state.list[MODEL_NAME])
    if (!companies)
        return <div>Больше компаний нет</div>
    return (
        <Table
            columnNames={columnNames}
            objects={companies.items}
            mapObjectToValues={mapCompanyToValueArray}/>
    )
}

export default CompanyTable