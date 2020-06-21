import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../componentStyles/Tree.css'
import {fetchRootEmployees, MODEL_NAME} from "../redux/actions/employeeActions";
import EmployeeTreeNode from "./EmployeeTreeNode";
import {hideHeaderCreateButton} from "../redux/actions/headerActions";

const EmployeeTree = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRootEmployees())
    }, [dispatch])

    useEffect(() => {
            dispatch(hideHeaderCreateButton())
        }, [dispatch]
    )

    const tree = useSelector(state => state.tree[MODEL_NAME])

    if (!tree)
        return null

    return (
        <div className='Center-alignment'>
            <ul className='Tree'>
                {
                    tree.rootItemsId.map(
                        id => {
                            return (
                                <EmployeeTreeNode key={id}
                                                 recordId={id}
                                                 employee={tree.items[id]}/>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default EmployeeTree;