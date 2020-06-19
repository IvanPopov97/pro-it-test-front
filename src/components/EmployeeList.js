import React from "react";
import {fetchEmployees, updateEmployeeCount} from "../redux/actions";
import EmployeeTable from "./EmployeeTable";
import List from "./List";

const EmployeeList = ({path}) => {

    return <List path={path}
                 actionBeforeRender={updateEmployeeCount}
                 actionAfterValidation={fetchEmployees}
                 TableComponent={EmployeeTable}/>
}

export default EmployeeList