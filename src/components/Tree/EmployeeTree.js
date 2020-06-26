import React from "react";
import '../../componentStyles/Tree.css'
import EmployeeTreeNode from "./EmployeeTreeNode";
import Tree from "../Tree/Tree";
import {employeeActionCreator} from "../../redux/actions/EmployeeActionCreator";
//import {useSelector} from "react-redux";

const EmployeeTree = () => {

    //const tree = useSelector(state => state.tree[employeeActionCreator.modelName])

    return (
        <Tree actionCreator={employeeActionCreator}
              treeNodeComponent={EmployeeTreeNode}
        />
    )
}

export default EmployeeTree;