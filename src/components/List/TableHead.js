import React from "react";

const TableHead = ({columnNames}) => (
    <thead>
    <tr>
        {
            columnNames.map((name, i) => <th key={i}>{name}</th>)
        }
    </tr>
    </thead>
)

export default TableHead