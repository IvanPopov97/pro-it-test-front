import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../../componentStyles/Tree.css'

const Tree = ({ actionCreator, treeNodeComponent }) => {

    const tree = useSelector(state => state.tree[actionCreator.modelName])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionCreator.fetchRootItems())
    }, [dispatch, actionCreator])

    if (!tree)
        return null

    const treeItems = tree.rootItemsId || []

    const Component = treeNodeComponent

    return (
        <div className='Center-alignment'>
            <ul className='Tree'>
                {
                    treeItems.map(
                        id => {
                            return (
                                <Component key={id}
                                           recordId={id}
                                           item={tree.items[id]}
                                           actionCreator={actionCreator}
                                           tree={tree}/>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default Tree