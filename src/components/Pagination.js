import React from "react";
import '../componentStyles/Pagination.css'
import PaginationItem from "./PaginationItem";
import {useSelector} from "react-redux";

const Pagination = ({path}) => {

    const links = useSelector(state => state.pagination.links)
    const pageNumber = useSelector(state => state.pagination.pageNumber)
    const first = useSelector(state => state.pagination.first)
    const last = useSelector(state => state.pagination.last)
    const isHidden = useSelector(state => state.pagination.isHidden)

    if (isHidden)
        return null

    return (
        <nav className="Pagination">
            <ul className="Pagination-items">
                {
                    first
                        ? null
                        : <PaginationItem path={path} link={pageNumber - 1} text='🡐'/>
                }
                {
                    first && last
                        ? null
                        : links.map(
                        link => <PaginationItem key={link} path={path} link={link} text={link}/>
                        )
                }
                {
                    last
                        ? null
                        : <PaginationItem path={path} link={pageNumber + 1} text='🡒'/>
                }
            </ul>
        </nav>
    )
}

export default Pagination;