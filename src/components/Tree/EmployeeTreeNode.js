import React from "react";
import TreeNode from "./TreeNode";
import {employeeActionCreator} from "../../redux/actions/EmployeeActionCreator";

const EmployeeTreeNode = ({ recordId, item, tree }) => {

    return <TreeNode recordId={recordId}
                     item={item}
                     actionCreator={employeeActionCreator}
                     tree={tree}/>
}

export default EmployeeTreeNode