import React from "react";
import {fetchChildCompanies, switchCompaniesNodeState} from "../redux/actions/companyActions";
import TreeNode from "./TreeNode";

const CompanyTreeNode = ({ recordId, item, mapStateToModel }) => {

    return <TreeNode recordId={recordId}
                     item={item}
                     fetchChildItems={fetchChildCompanies}
                     switchItemsNodeState={switchCompaniesNodeState}
                     mapStateToModel={mapStateToModel}/>
}

export default CompanyTreeNode