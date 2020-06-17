import React from "react";
import '../componentStyles/Pagination.css'
import PaginationItem from "./PaginationItem";
import {connect} from "react-redux";

const Pagination = ({path, links, pageNumber, first, last}) => {
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


const mapStateToProps = state => ({
    links: state.pagination.links,
    pageNumber: state.pagination.pageNumber,
    first: state.pagination.first,
    last: state.pagination.last
})

export default connect(mapStateToProps)(Pagination);