import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import CompanyTreeNode from "./CompanyTreeNode";
import '../componentStyles/Tree.css'
import {fetchRootCompanies, MODEL_NAME} from "../redux/actions/companyActions";
import {hideHeaderCreateButton} from "../redux/actions/headerActions";

const CompanyTree = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRootCompanies())
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
                                <CompanyTreeNode key={id}
                                                 recordId={id}
                                                 company={tree.items[id]}/>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default CompanyTree;