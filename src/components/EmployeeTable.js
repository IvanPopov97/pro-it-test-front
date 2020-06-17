import React from "react";
import {useSelector} from "react-redux";
import '../componentStyles/Table.css'
import Table from "./Table";

const columnNames = ['ID', 'Имя сотрудника', 'Организация', 'Руководитель']

const mapEmployeeToValueArray = (employee) => [
    employee.id,
    employee.name,
    employee.company ? employee.company.name : null,
    employee.boss ? employee.boss.name : null
]

const EmployeeTable = () => {
    const companies = useSelector(state => state.employee.employees)
    if (!companies.length)
        return <div>Больше сотрудников нет</div>
    return (
        <Table
            columnNames={columnNames}
            objects={companies}
            mapObjectToValues={mapEmployeeToValueArray}/>
    )
}

export default EmployeeTable