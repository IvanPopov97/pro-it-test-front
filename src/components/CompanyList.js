import React from "react";
import CompanyTable from "./CompanyTable";
import List from "./List";
import {fetchCompanies, updateCompanyCount} from "../redux/actions/companyActions";

const CompanyList = ({path}) => {

    return <List path={path} a
                 actionBeforeRender={updateCompanyCount}
                 actionAfterPageNumberValidation={fetchCompanies}
                 TableComponent={CompanyTable}/>
}

export default CompanyList