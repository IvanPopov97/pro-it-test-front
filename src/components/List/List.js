import React, {Fragment, useEffect} from "react";
import Pagination from "./Pagination";
import {Route, Switch} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import PageNumberValidator from "../PageNumberValidator";
import {setPageNumber} from "../../redux/actions/paginationActions";

const List = ({actionCreator, TableComponent}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionCreator.updateCount())
        }, [dispatch, actionCreator]
    )

    const pageSize = useSelector(state => state.pagination.pageSize)

    const actions = [
        setPageNumber,
        pageNumber => actionCreator.fetchItems(pageNumber, pageSize)
    ]

    const path = useSelector(state => state.app.currentPath)

    const render = () => <PageNumberValidator actions={actions}/>

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