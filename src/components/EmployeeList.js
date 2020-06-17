import React, {useEffect} from "react";
import Pagination from "./Pagination";
import {Route, Switch} from "react-router";
import {useDispatch} from "react-redux";
import {fetchEmployees, updateEmployeeCount} from "../redux/actions";
import EmployeeTable from "./EmployeeTable";
import PageNumberValidator from "./PageNumberValidator";

const componentWithAction = (Component, action) => (
    () => <Component action={action} />
)

const EmployeeList = ({path}) => {

    const dispatch = useDispatch()
    const effect = () => {dispatch(updateEmployeeCount())}
    useEffect(effect, [Pagination])

    const render = componentWithAction(PageNumberValidator, fetchEmployees)

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path} render={render}/>
                <Route path={path + '/:pageNumber'} render={render}/>
            </Switch>
            <EmployeeTable/>
            <Pagination path={path}/>
        </React.Fragment>
    )
}

export default React.memo(EmployeeList, () => true);