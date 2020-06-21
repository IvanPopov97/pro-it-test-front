import React from "react";
import {useSelector} from "react-redux";
import '../componentStyles/Table.css'
import Table from "./Table";

const columnNames = ['ID', 'Название компании', 'Количество сотрудников', 'Головная компания']

const mapCompanyToValueArray = (company) => (
    Object.values({
        ...company,
        headCompany: company.headCompany ? company.headCompany.name : null
    })
)

const CompanyTable = () => {
    const companies = useSelector(state => state.company.companies)
    if (!companies.length)
        return <div>Больше компаний нет</div>
    return (
        <Table
            columnNames={columnNames}
            objects={companies}
            mapObjectToValues={mapCompanyToValueArray}/>
    )
}

export default CompanyTable