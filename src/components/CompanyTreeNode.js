import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchChildCompanies, MODEL_NAME, switchCompaniesNodeState} from "../redux/actions/companyActions";

const CompanyTreeNode = ({recordId, company: {id, name, isOpened, hasChild, childItemsId}}) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        if (!isOpened)
            dispatch(fetchChildCompanies(recordId, id))
        dispatch(switchCompaniesNodeState(recordId))
    }

    const companies = useSelector(state => state.tree[MODEL_NAME].items)
    
    if (!hasChild)
        return <li>{name}</li>

    const [spanClassName, ulClassName] = isOpened
        ? ['Node Opened-state', 'Child-nodes Active']
        : ['Node', 'Child-nodes']

    return (
        <li>
            <span onClick={clickHandler} className={spanClassName}>{name}</span>
            <ul className={ulClassName}>
                {
                    childItemsId.map(
                        id => <CompanyTreeNode key={id} recordId={id} company={companies[id]}/>
                    )
                }
            </ul>
        </li>
    )
}

export default CompanyTreeNode