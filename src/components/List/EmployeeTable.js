import React from "react";
import {useSelector} from "react-redux";
import '../../componentStyles/Table.css'
import Table from "./Table";
import {employeeActionCreator} from "../../redux/actions/EmployeeActionCreator";

const columnNames = ['ID', 'Имя сотрудника', 'Организация', 'Руководитель']

const mapEmployeeToValueArray = employee => Object.values({
    id: employee.id,
    name: employee.name,
    company: employee.company ? employee.company.name : null,
    boss: employee.boss ? employee.boss.name : null
})

const EmployeeTable = () => {
    const employees = useSelector(state => state.list[employeeActionCreator.modelName])
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