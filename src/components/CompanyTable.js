import React from "react";
import {useSelector} from "react-redux";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import '../componentStyles/Table.css'

const columnNames = ['ID', 'Название компании', 'Количество сотрудников', 'Головная компания']

const CompanyTable = () => {
    const companies = useSelector(state => state.company.companies)
    if (!companies.length)
        return <div>Больше компаний нет</div>
    return (
        <div className="Table-container">
            <table className="Flex-table">
                <TableHead columnNames={columnNames}/>
                <tbody>
                {
                    companies.map((company, i) => <TableRow
                        key = {i}
                        columnNames={columnNames}
                        values={[
                            company.id,
                            company.name,
                            company.employeeCount,
                            company.headCompany ? company.headCompany.name : null] }/>
                        )
                }
                </tbody>
            </table>
        </div>
    )
}

export default CompanyTable