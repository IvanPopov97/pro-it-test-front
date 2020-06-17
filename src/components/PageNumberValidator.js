import {useEffect} from "react";
import {withRouter} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updatePageNumber} from "../redux/actions";

const isNaturalNumber = new RegExp('^[1-9][0-9]*$')

const extractPageNumber = match =>
    match.params.pageNumber === undefined ? '1' : match.params.pageNumber

const PageNumberValidator = ({match, action}) => {

    const pageNumber = extractPageNumber(match)
    const pageSize = useSelector(state => state.pagination.pageSize)

    const dispatch = useDispatch()
    const effect = () => {
        if (isNaturalNumber.test(pageNumber)) {
            dispatch(updatePageNumber(pageNumber))
            dispatch(action(pageNumber, pageSize))
        }
    }
    useEffect(effect)

    return null
}

export default withRouter(PageNumberValidator)