import React from "react";
import '../../componentStyles/Pagination.css'
import PaginationItem from "./PaginationItem";
import {useSelector} from "react-redux";

const Pagination = () => {

    const links = useSelector(state => state.pagination.links)
    const pageNumber = useSelector(state => state.pagination.pageNumber)
    const first = useSelector(state => state.pagination.first)
    const last = useSelector(state => state.pagination.last)
    const isHidden = useSelector(state => state.pagination.isHidden)

    if (isHidden)
        return null

    const linkToPaginationItem = link => <PaginationItem key={link} link={link} text={link}/>

    return (
        <nav className="Pagination Center-alignment">
            <ul className="Pagination-items">
                {first || <PaginationItem link={pageNumber - 1} text='🡐'/>}
                {(first && last) || links.map(linkToPaginationItem)}
                {last || <PaginationItem link={pageNumber + 1} text='🡒'/>}
            </ul>
        </nav>
    )
}

export default Pagination;