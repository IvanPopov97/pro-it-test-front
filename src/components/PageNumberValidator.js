import {useEffect} from "react";
import {withRouter} from "react-router";
import {useDispatch} from "react-redux";

const isNaturalNumber = new RegExp('^[1-9][0-9]*$')

const getPageNumber = params =>
    params.pageNumber === undefined ? '1' : params.pageNumber

const PageNumberValidator = ({match: {params}, actions}) => {
    const pageNumber = getPageNumber(params)

    const dispatch = useDispatch()

    useEffect(() => {
        if (isNaturalNumber.test(pageNumber)) {
            actions.forEach(action => {
                dispatch(action(pageNumber))
            })
        }
    }, [actions, dispatch, pageNumber])

    return null
}

export default withRouter(PageNumberValidator)