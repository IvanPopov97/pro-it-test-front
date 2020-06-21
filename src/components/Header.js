import React, {useEffect} from "react";
import MainNavigation from "./MainNavigation";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {hideHeaderCreateButton, showHeaderCreateButton} from "../redux/actions/headerActions";

const Header = () => {
    const showCreateButton = useSelector(state => state.header.showCreateButton)

    const items = useSelector(state => state.app.items)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        return history.listen(location => {

            const item = items.find(item => item.link === location.pathname)
            if (item) {
                if (item.showCreateButton)
                    dispatch(showHeaderCreateButton())
                else
                    dispatch(hideHeaderCreateButton())
            }
        })
    }, [history, dispatch, items])

    return (
        <header>
            <MainNavigation items={items} showCreateButton={showCreateButton}/>
        </header>
    )
}

export default Header