import React from "react";
import {fetchCompanies, updateCompanyCount} from "../redux/actions";
import CompanyTable from "./CompanyTable";
import List from "./List";

const CompanyList = ({path}) => {

    return <List path={path}
                 actionBeforeRender={updateCompanyCount}
                 actionAfterValidation={fetchCompanies}
                 TableComponent={CompanyTable}/>
}

export default CompanyList