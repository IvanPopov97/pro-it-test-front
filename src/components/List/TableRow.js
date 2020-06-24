import React from "react";

const TableRow = ({columnNames, values}) => {
    return (
        <tr>
            {
                columnNames.map(
                    (name, i) => <td key={i}><span>{name}</span>{values[i]}</td>
                )
            }
        </tr>
    )
}

export default TableRow