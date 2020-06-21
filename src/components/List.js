import React, {Fragment, useEffect} from "react";
import Pagination from "./Pagination";
import {Route, Switch} from "react-router";
import {useDispatch} from "react-redux";
import PageNumberValidator from "./PageNumberValidator";

const List = ({path, actionBeforeRender, actionAfterPageNumberValidation, TableComponent}) => {

    const dispatch = useDispatch()
    const effect = () => {dispatch(actionBeforeRender())}
    useEffect(effect)

    const render = () => <PageNumberValidator action={actionAfterPageNumberValidation}/>

    return (
        <Fragment>
            <Switch>
                <Route path={`${path}/:pageNumber?`} render={render}/>
            </Switch>
            <TableComponent/>
            <Pagination path={path}/>
        </Fragment>
    )
}

export default React.memo(List, () => true);