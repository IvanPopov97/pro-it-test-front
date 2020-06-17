import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import '../componentStyles/Table.css'

const Table = ({columnNames, objects, mapObjectToValues}) => {
    return (
        <div className="Table-container">
            <table className="Flex-table">
                <TableHead columnNames={columnNames}/>
                <tbody>
                {
                    objects.map((object, i) => <TableRow
                        key = {i}
                        columnNames={columnNames}
                        values={mapObjectToValues(object)}/>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table