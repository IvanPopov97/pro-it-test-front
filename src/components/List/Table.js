import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import '../../componentStyles/Table.css'

const Table = ({columnNames, objects, mapObjectToValues}) => {
    if (!objects)
        return null
    return (
        <table className="Flex-table">
            <TableHead columnNames={columnNames}/>
            <tbody>
            {
                objects.map((object, i) => (
                        <TableRow key = {i}
                                  columnNames={columnNames}
                                  values={mapObjectToValues(object)}
                        />
                    )
                )
            }
            </tbody>
        </table>
    )
}

export default Table