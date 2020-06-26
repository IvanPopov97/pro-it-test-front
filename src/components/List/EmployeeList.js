import React from "react";
import EmployeeTable from "./EmployeeTable";
import List from "./List";
import {employeeActionCreator} from "../../redux/actions/EmployeeActionCreator";

const EmployeeList = () => {

    return (
        <List actionCreator={employeeActionCreator}
              TableComponent={EmployeeTable}
        />
    )
}

export default EmployeeList