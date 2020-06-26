import React from "react";
import '../../componentStyles/Tree.css'
import Tree from "../Tree/Tree";
import CompanyTreeNode from "./CompanyTreeNode";
import {companyActionCreator} from "../../redux/actions/CompanyActionCreator";

const CompanyTree = () => {
    return (
        <Tree actionCreator={companyActionCreator}
              treeNodeComponent={CompanyTreeNode}
        />
    )
}

export default CompanyTree;