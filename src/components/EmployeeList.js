import React from "react";
import EmployeeTable from "./EmployeeTable";
import List from "./List";
import {fetchEmployees, updateEmployeeCount} from "../redux/actions/employeeActions";

const EmployeeList = ({path}) => {

    return <List path={path}
                 actionBeforeRender={updateEmployeeCount}
                 actionAfterPageNumberValidation={fetchEmployees}
                 TableComponent={EmployeeTable}/>
}

export default EmployeeList