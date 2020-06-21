import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {MODEL_NAME} from "../redux/actions/employeeActions";
import {fetchChildEmployees, switchEmployeesNodeState} from "../redux/actions/employeeActions";

const EmployeeTreeNode = ({recordId, employee: {id, name, isOpened, hasChild, childItemsId}}) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        if (!isOpened)
            dispatch(fetchChildEmployees(recordId, id))
        dispatch(switchEmployeesNodeState(recordId))
    }

    const employees = useSelector(state => state.tree[MODEL_NAME].items)

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
                        id => <EmployeeTreeNode key={id} recordId={id} company={employees[id]}/>
                    )
                }
            </ul>
        </li>
    )
}

export default EmployeeTreeNode