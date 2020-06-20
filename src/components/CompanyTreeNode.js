import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchChildCompanies, switchCompaniesNodeState} from "../redux/actions";

const CompanyTreeNode = ({recordId, company}) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(fetchChildCompanies(recordId, company.id))
        dispatch(switchCompaniesNodeState(recordId))
    }

    const companies = useSelector(state => state.company.companies)


    if (!company.hasChild)
        return <li>{company.name}</li>

    const spanClassName = company.isOpened ? 'Closed-state Opened-state' : 'Closed-state'
    const ulClassName = company.isOpened ? 'Child-nodes Active' : 'Child-nodes'
    return (
        <li>
            <span onClick={clickHandler} className={spanClassName}>{company.name}</span>
            <ul className={ulClassName}>
                {
                    company.childCompaniesId.map(
                        id => <CompanyTreeNode key={id} company={companies[id]}/>
                    )
                }
            </ul>
        </li>
    )
}

export default CompanyTreeNode