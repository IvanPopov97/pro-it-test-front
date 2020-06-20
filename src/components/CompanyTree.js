import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import CompanyTreeNode from "./CompanyTreeNode";
import {fetchRootCompanies} from "../redux/actions";

const CompanyTree = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRootCompanies())
    }, [dispatch])
    const rootCompaniesId = useSelector(state => state.company.rootCompaniesId)
    const companies = useSelector(state => state.company.companies)
    return (
        <div className='Tree-container'>
            <ul className='Tree'>
                {
                    rootCompaniesId.map(
                        id => {
                            return (
                                <CompanyTreeNode key={id} recordId={id} company={companies[id]}/>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default CompanyTree;