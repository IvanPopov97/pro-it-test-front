import React from "react";
import '../componentStyles/Pagination.css'
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

    return (
        <nav className="Pagination Center-alignment">
            <ul className="Pagination-items">
                {
                    first
                        ? null
                        : <PaginationItem link={pageNumber - 1} text='🡐'/>
                }
                {
                    first && last
                        ? null
                        : links.map(
                        link => <PaginationItem key={link} link={link} text={link}/>
                        )
                }
                {
                    last
                        ? null
                        : <PaginationItem link={pageNumber + 1} text='🡒'/>
                }
            </ul>
        </nav>
    )
}

export default Pagination;