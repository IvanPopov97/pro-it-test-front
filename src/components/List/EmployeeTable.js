import React from "react";
import {useSelector} from "react-redux";
import '../../componentStyles/Table.css'
import Table from "./Table";
import {MODEL_NAME} from "../../redux/actions/employeeActions";

const columnNames = ['ID', 'Имя сотрудника', 'Организация', 'Руководитель']

const mapEmployeeToValueArray = employee => Object.values({
    ...employee,
    company: employee.company ? employee.company.name : null,
    boss: employee.boss ? employee.boss.name : null
})

const EmployeeTable = () => {
    const employees = useSelector(state => state.list[MODEL_NAME])
    if (!employees)
        return <div>Больше сотрудников нет</div>
    return (
        <Table
            columnNames={columnNames}
            objects={employees.items}
            mapObjectToValues={mapEmployeeToValueArray}
        />
    )
}

export default EmployeeTable