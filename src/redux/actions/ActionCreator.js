import {calcOffset, fetchAndDispatch, postAndDispatch, postRequest} from "./index";
import {hidePagination, setItemCount} from "./paginationActions";
import {setListItems} from "./listActions";
import {setChildItems, setRootItems, switchNodeState} from "./treeActions";
import {addSelectControlItem, setSelectControlItems} from "./selectControlActions";

export class ActionCreator {

    constructor({ modelName, requestPath }) {
        this.modelName = modelName
        this.requestPath = requestPath
    }

    fetchItems (pageNumber, pageSize) {
        return fetchAndDispatch(
            `${this.requestPath}/list`,
            {offset: calcOffset(pageNumber, pageSize), pageSize},
            page => setListItems(this.modelName, page.content)
        )
    }

    updateCount() {
        return fetchAndDispatch(
            `${this.requestPath}/count`,
            null,
            count => setItemCount(count),
            hidePagination()
        )
    }

    fetchRootItems() {
        return fetchAndDispatch(
            `${this.requestPath}/tree`,
            null,
            items => setRootItems(this.modelName, items)
        )
    }

    fetchChildItems(parentRecordId, parentId) {
        return fetchAndDispatch(
            `${this.requestPath}/tree`,
            {'parentId': parentId},
            items => setChildItems(this.modelName, parentRecordId, items)
        )
    }

    switchTreeNodeState(nodeId) {
        return switchNodeState(this.modelName, nodeId)
    }

    createEmptyNameList() {
        return setSelectControlItems(this.modelName, [])
    }

    fetchNames(companyId) {
        console.log("Ok, I'm fetching names right now")
        return fetchAndDispatch(
            `${this.requestPath}/names`,
            companyId ? {companyId} : null,
            items => setSelectControlItems(
                this.modelName,
                items.map(item => ({ id: item.id, name: item.name }))
            )
        )
    }

    addName(item, dispatch = true) {
        const mapResponseToAction = dispatch && (
            id => addSelectControlItem(this.modelName, {id, name: item.name})
        )
        //console.log(item)
        //console.log(mapResponseToAction)
        return mapResponseToAction
            ? postAndDispatch(this.requestPath, item, mapResponseToAction)
            : postRequest(this.requestPath, item)
    }
}