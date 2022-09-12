import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { getContactTableColumnData } from "./TableColumn";

import { CONTACT_DETAILS } from "../constants";

const Table = ({ showAlert }) => (
  <NeetoUITable
    allowRowClick
    columnData={getContactTableColumnData(showAlert)}
    rowData={CONTACT_DETAILS}
  />
);
export default Table;
