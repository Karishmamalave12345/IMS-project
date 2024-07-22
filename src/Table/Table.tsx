import React from "react";


interface TableDataProps {
  text: string | null;
  type: "heading" | "data";
}

const Table: React.FC<TableDataProps> = ({
  text,
  type,
}) => {
  return <>{type === "heading" ? <th>{text}</th> : <td>{text}</td>}</>;
};


export default Table;