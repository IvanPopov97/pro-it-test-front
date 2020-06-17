import React from "react";
import Pagination from "./Pagination";
import {Route, Switch} from "react-router";
import {useDispatch} from "react-redux";
import {updateCompanyCount} from "../redux/actions";
import CompanyTable from "./CompanyTable";
import NumberValidator from "./NumberValidator";

const CompanyList = ({path}) => {

    const dispatch = useDispatch()
    dispatch(updateCompanyCount())

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path} component={NumberValidator}/>
                <Route path={path + '/:pageNumber'} component={NumberValidator}/>
            </Switch>
            <CompanyTable/>
            <Pagination path={path}/>
        </React.Fragment>
    )
}

export default React.memo(CompanyList, () => true);