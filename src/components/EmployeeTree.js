import React from "react";
import '../componentStyles/Tree.css'
import {fetchRootEmployees, MODEL_NAME} from "../redux/actions/employeeActions";
import EmployeeTreeNode from "./EmployeeTreeNode";
import Tree from "./Tree";

const EmployeeTree = () => {

    const mapStateToModel = state => state.tree[MODEL_NAME]

    return (
        <Tree fetchRootItems={fetchRootEmployees}
              treeNodeComponent={EmployeeTreeNode}
              mapStateToModel={mapStateToModel}/>
    )
}

export default EmployeeTree;