import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import '../../componentStyles/Tree.css'

const Tree = ({ fetchRootItems, treeNodeComponent, mapStateToModel }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRootItems())
    }, [dispatch, fetchRootItems])

    const tree = useSelector(mapStateToModel)

    if (!tree)
        return null

    const Component = treeNodeComponent

    return (
        <div className='Center-alignment'>
            <ul className='Tree'>
                {
                    tree.rootItemsId.map(
                        id => {
                            return (
                                <Component key={id}
                                           recordId={id}
                                           item={tree.items[id]}
                                           mapStateToModel={mapStateToModel}/>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default Tree