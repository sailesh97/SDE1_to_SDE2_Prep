import React from 'react';
import './style.scss';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Icons from './icons/Icons';
import Link from './atoms/links/links';
import ToolTips from './atoms/tooltips/tooltips';
import getObjectProperty, { isNumeric } from './utils/commonUtilities';
import { tableBodyStyle } from './tableStyles/tableBodyStyles';

import { stableSort, getSorting } from './utils/tableSortingUtils';
import { fetchUniqueRowkeyValueForEachRecord, updateCheckBoxStateOfTheRecord, generateEachRecord } from './utils/tableBodyUtils';

/* 
import { addOrCancelBadgingColumn, enterPressed, lineServiceItemTypes } from '../../../utils/common/commonConstants';
import { associatedServicesData } from '../../../utils/common/commonConstants';
import {groupByProjectIdAndSort} from '../../../containers/order-details/common/utils';
import { orderType, typeOfOrder } from '../../../utils/common/commonUtilities';
import { lineOptionsSstiOrders } from '../../../utils/common/appFlags'; */

const useStyles = makeStyles(() => (tableBodyStyle));

export default function Body(props) {
  const {
    tableData,
    key,

    page,
    rowsPerPage,

    order,
    orderBy,

    rowKey, // 'order_line_key'
    selectedRowKey, // '1234',

    selectedRow,

  } = { ...props };

  const headerData = tableData.header;
  const classes = useStyles();

  let stableSortedLines = []/* , sortLinesForExchangeOrder = [] */;
  stableSortedLines = stableSort(tableData.body, getSorting(order, orderBy));

  // Required for exchange orders, Hence skipping for now
  // sortLinesForExchangeOrder = getSortedOrderLines(stableSortedLines);

  const startIndex = page * rowsPerPage;
  const endIndex = page * rowsPerPage + rowsPerPage;


  return (
    <TableBody>
      {/**
       * <TableRow>
       *    <TableCell>{content}</TableCell>
       *    <TableCell>{content}</TableCell>
       * </TableRow>
       */}
      {
        stableSortedLines.slice(startIndex, endIndex).map(
          (row, index, tableBody) => {

            const key = fetchUniqueRowkeyValueForEachRecord({
              record: row,
              property: rowKey
            });

            // Row selection logic when row clicked
            const rowSelection = key ? key === selectedRowKey : false;

            /* const checked = updateCheckBoxStateOfTheRecord({
              row, // Each line object to be shown in table
              rowKey, // Propert whose value is unique for each row object or for each record/line.
              allowRowSelectionInGroup, // boolean
              selectedOrderLines, // List of order_line_keys of selected records: ['1234','32445']
              key // value of order_line_key in record 
            }); */

            return (
              <React.Fragment key={key || index}>
                {/**
                 * <TableRow>
                 *    <TableCell>{content}</TableCell>
                 *    <TableCell>{content}</TableCell>
                 * </TableRow>
                 */}
                 
                 {/** Table line representation */}
                 {
                  generateEachRecord({
                    row,
                    key,
                    index,
                    rowSelection,
                    // checked,
                    // showGroupSeparator && index !== 0,
                    // tableBody: null,
                    // isBadgingScreen,
                    selectedRow,
                    headerData,
                    classes
                  })
                 }
              </React.Fragment>
            )
          }
        )
      }
    </TableBody>
  )
}
