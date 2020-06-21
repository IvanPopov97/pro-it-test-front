import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchChildCompanies, switchCompaniesNodeState} from "../redux/actions";

const CompanyTreeNode = ({recordId, company: {id, name, isOpened, hasChild, childCompaniesId}}) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        if (!isOpened)
            dispatch(fetchChildCompanies(recordId, id))
        dispatch(switchCompaniesNodeState(recordId))
    }

    const companies = useSelector(state => state.company.companies)
    
    if (!hasChild)
        return <li>{name}</li>
    
    const spanClassName = isOpened ? 'Node Opened-state' : 'Node'
    const ulClassName = isOpened ? 'Child-nodes Active' : 'Child-nodes'

    return (
        <li>
            <span onClick={clickHandler} className={spanClassName}>{name}</span>
            <ul className={ulClassName}>
                {
                    childCompaniesId.map(
                        id => <CompanyTreeNode key={id} recordId={id} company={companies[id]}/>
                    )
                }
            </ul>
        </li>
    )
}

export default CompanyTreeNode