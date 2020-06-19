import React, {useEffect} from "react";
import Pagination from "./Pagination";
import {Route, Switch} from "react-router";
import {useDispatch} from "react-redux";
import PageNumberValidator from "./PageNumberValidator";

const List = ({path, actionBeforeRender, actionAfterValidation, TableComponent}) => {

    const dispatch = useDispatch()
    const effect = () => {dispatch(actionBeforeRender())}
    useEffect(effect, [Pagination])

    const render = () => <PageNumberValidator action={actionAfterValidation}/>

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path} render={render}/>
                <Route path={path + '/:pageNumber'} render={render}/>
            </Switch>
            <TableComponent/>
            <Pagination path={path}/>
        </React.Fragment>
    )
}

export default React.memo(List, () => true);