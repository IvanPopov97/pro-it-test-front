import React from "react";
import CompanyTable from "./CompanyTable";
import List from "./List";
import {companyActionCreator} from "../../redux/actions/CompanyActionCreator";

const CompanyList = () => {

    return (
        <List actionCreator={companyActionCreator}
              TableComponent={CompanyTable}
        />
    )
}

export default CompanyList