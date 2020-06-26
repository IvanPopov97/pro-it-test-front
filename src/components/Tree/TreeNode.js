import React from "react";
import {useDispatch} from "react-redux";

const TreeNode = ({recordId, item: {id, name, isOpened, hasChild, childItemsId}, actionCreator, tree}) => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        if (!isOpened)
            dispatch(actionCreator.fetchChildItems(recordId, id))
        dispatch(actionCreator.switchTreeNodeState(recordId))
    }

    const items = tree.items

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
                                      actionCreator={actionCreator}
                                      tree={tree}
                            />
                        )
                    )
                }
            </ul>
        </li>
    )
}

export default TreeNode