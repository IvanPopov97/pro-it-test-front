import React from "react";
import TreeNode from "./TreeNode";
import {companyActionCreator} from "../../redux/actions/CompanyActionCreator";

const CompanyTreeNode = ({ recordId, item, tree }) => {

    return <TreeNode recordId={recordId}
                     item={item}
                     actionCreator={companyActionCreator}
                     tree={tree}/>
}

export default CompanyTreeNode