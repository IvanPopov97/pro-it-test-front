import {SET_CHILD_ITEMS, SET_ROOT_ITEMS, SWITCH_NODE_STATE} from "../types";
import {range} from "./index";

const initialState = {}

const treeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROOT_ITEMS:
            return {
                ...state,
                [action.payload.name]: {
                    items: action.payload.content.map(item => itemMapper(item)),
                    rootItemsId: range(0, action.payload.content.length)
                }
            }
        case SWITCH_NODE_STATE:
            return switchNodeState(state, action)
        case SET_CHILD_ITEMS:
            return setChildItems(state, action)
        default: return state
    }
}

const itemMapper = item => ({
    ...item,
    isOpened: false,
    childItemsId: []
})

const switchNodeState = (state, action) => {
    const nodeId = action.payload.id
    const treeName = action.payload.name


    const tree = state[treeName]

    const node = tree.items[nodeId]

    const updatedNode = {
        ...node,
        isOpened: !node.isOpened
    }

    const updatedItems = Object.assign(
        [...tree.items],
        {[nodeId] : updatedNode}
    )

    return {...state, [treeName]: {...tree, items: updatedItems}}
}

const setChildItems = (state, action) => {
    const childItems = action.payload.content.map(
        childItem => itemMapper(childItem)
    )

    const treeName = action.payload.name

    const tree = state[treeName]

    const childItemsId = range(
        tree.items.length,
        tree.items.length + childItems.length
    )

    const parentId = action.payload.id
    const updatedParent = {
        ...tree.items[parentId],
        childItemsId
    }

    const updatedItems = Object.assign(
        tree.items.concat(childItems),
        {[parentId]: updatedParent}
    )
    return {
        ...state,
        [treeName]: {...tree, items: updatedItems}
    }
}

export default treeReducer