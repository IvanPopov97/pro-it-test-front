import React, {Fragment, useEffect} from "react";
import Pagination from "./Pagination";
import {Route, Switch} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import PageNumberValidator from "./PageNumberValidator";
import {showHeaderCreateButton} from "../redux/actions/headerActions";

const List = ({actionBeforeRender, actionAfterPageNumberValidation, TableComponent}) => {

    const dispatch = useDispatch()
    useEffect(() => { dispatch(actionBeforeRender()) },
        [dispatch, actionBeforeRender]
    )

    useEffect(() => { dispatch(showHeaderCreateButton()) },
        [dispatch]
    )

    const path = useSelector(state => state.app.currentPath)

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

export default React.memo(List, () => true)