import {useEffect} from "react";
import {withRouter} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updatePageNumber} from "../redux/actions/paginationActions";

const isNaturalNumber = new RegExp('^[1-9][0-9]*$')

const getPageNumber = params =>
    params.pageNumber === undefined ? '1' : params.pageNumber

const PageNumberValidator = ({match: {params}, action}) => {
    const pageNumber = getPageNumber(params)
    const pageSize = useSelector(state => state.pagination.pageSize)

    const dispatch = useDispatch()

    useEffect(() => {
        if (isNaturalNumber.test(pageNumber)) {
            dispatch(updatePageNumber(pageNumber))
            dispatch(action(pageNumber, pageSize))
        }
    }, [action, dispatch, pageNumber, pageSize])

    return null
}

export default withRouter(PageNumberValidator)