import React from "react";
import '../componentStyles/Tree.css'
import Tree from "./Tree";
import {fetchRootCompanies, MODEL_NAME} from "../redux/actions/companyActions";
import CompanyTreeNode from "./CompanyTreeNode";

const CompanyTree = () => {
    const mapStateToModel = state => state.tree[MODEL_NAME]

    return (
        <Tree fetchRootItems={fetchRootCompanies}
              treeNodeComponent={CompanyTreeNode}
              mapStateToModel={mapStateToModel}/>
    )
}

export default CompanyTree;