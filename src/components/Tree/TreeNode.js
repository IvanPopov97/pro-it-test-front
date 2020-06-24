import React from "react";
import {useDispatch, useSelector} from "react-redux";

const TreeNode = ({ recordId,
                      item: {id, name, isOpened, hasChild, childItemsId},
                      fetchChildItems,
                      switchItemsNodeState,
                      mapStateToModel}) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        if (!isOpened)
            dispatch(fetchChildItems(recordId, id))
        dispatch(switchItemsNodeState(recordId))
    }

    const items = useSelector(mapStateToModel).items

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
                        id => (
                            <TreeNode key={id}
                                      recordId={id}
                                      item={items[id]}
                                      fetchChildItems={fetchChildItems}
                                      switchItemsNodeState={switchItemsNodeState}
                                      mapStateToModel={mapStateToModel}
                            />
                        )
                    )
                }
            </ul>
        </li>
    )
}

export default TreeNode