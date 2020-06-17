import React, {useEffect} from "react";
import Pagination from "./Pagination";
import {Route, Switch} from "react-router";
import {useDispatch} from "react-redux";
import {fetchCompanies, updateCompanyCount} from "../redux/actions";
import CompanyTable from "./CompanyTable";
import PageNumberValidator from "./PageNumberValidator";

const componentWithAction = (Component, action) => (
    () => <Component action={action}/>
)

const CompanyList = ({path}) => {

    const dispatch = useDispatch()
    const effect = () => {dispatch(updateCompanyCount())}
    useEffect(effect, [Pagination])

    const render = componentWithAction(PageNumberValidator, fetchCompanies)

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path} render={render}/>
                <Route path={path + '/:pageNumber'} render={render}/>
            </Switch>
            <CompanyTable/>
            <Pagination path={path}/>
        </React.Fragment>
    )
}

export default React.memo(CompanyList, () => true);