import React from "react";
import {fetchChildEmployees, switchEmployeesNodeState} from "../redux/actions/employeeActions";
import TreeNode from "./TreeNode";

const EmployeeTreeNode = ({ recordId, item, mapStateToModel }) => {

    return <TreeNode recordId={recordId}
                     item={item}
                     fetchChildItems={fetchChildEmployees()}
                     switchItemsNodeState={switchEmployeesNodeState}
                     mapStateToModel={mapStateToModel}/>
}

export default EmployeeTreeNode