import {useEffect} from "react";
import {withRouter} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updatePageNumber} from "../redux/actions/paginationActions";

const isNaturalNumber = new RegExp('^[1-9][0-9]*$')

const extractPageNumber = params =>
    params.pageNumber === undefined ? '1' : params.pageNumber

const PageNumberValidator = ({match: {params}, action}) => {
    const pageNumber = extractPageNumber(params)
    const pageSize = useSelector(state => state.pagination.pageSize)

    const dispatch = useDispatch()
    const effect = () => {
        if (isNaturalNumber.test(pageNumber)) {
            //console.log(pageNumber)
            dispatch(updatePageNumber(pageNumber))
            dispatch(action(pageNumber, pageSize))
        }
    }
    useEffect(effect)

    return null
}

export default withRouter(PageNumberValidator)