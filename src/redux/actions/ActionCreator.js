import {calcOffset, createAction, fetchAndDispatch, postRequest} from "./index";
import {
    HIDE_PAGINATION,
    SET_CHILD_ITEMS,
    SET_ITEM_COUNT,
    SET_LIST_ITEMS,
    SET_ROOT_ITEMS, SET_SELECT_CONTROL_ITEMS,
    SWITCH_NODE_STATE
} from "../types";

export class ActionCreator {

    constructor({modelName, requestPath}) {
        this.modelName = modelName
        this.requestPath = requestPath
    }

    fetchItems (pageNumber, pageSize) {
        return fetchAndDispatch(
            `${this.requestPath}/list`,
            {offset: calcOffset(pageNumber, pageSize), pageSize},
            page => createAction(
                SET_LIST_ITEMS, {
                    name: this.modelName,
                    items: page.content
                }
            )
        )
    }

    updateCount() {
        return fetchAndDispatch(
            `${this.requestPath}/count`,
            null,
            count => createAction(SET_ITEM_COUNT, count),
            {type: HIDE_PAGINATION}
        )
    }

    fetchRootItems() {
        return fetchAndDispatch(
            `${this.requestPath}/tree`,
            null,
            items => createAction(
                SET_ROOT_ITEMS, {
                    name: this.modelName,
                    items
                }
            )
        )
    }

    fetchChildItems(parentRecordId, parentId) {
        return fetchAndDispatch(
            `${this.requestPath}/tree`,
            {'parentId': parentId},
            items => createAction(
                SET_CHILD_ITEMS, {
                    id: parentRecordId,
                    name: this.modelName,
                    items
                }
            )
        )
    }

    switchTreeNodeState(nodeId) {
        return createAction(SWITCH_NODE_STATE, {
            id: nodeId,
            name: this.modelName
        })
    }

    fetchNames() {
        console.log("Ok, I'm fetching names right now")
        return fetchAndDispatch(
            `${this.requestPath}/names`,
            null,
            items => createAction(
                SET_SELECT_CONTROL_ITEMS,
                items.map(item => ({ id: item.id, name: item.name }))
            )
        )
    }

    addItem(item) {
        postRequest(this.requestPath, item).then(response => console.log(response))
    }
}