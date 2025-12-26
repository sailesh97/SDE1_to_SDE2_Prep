import React from 'react';
import './style.scss';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Icons from './icons/Icons';
import Link from './atoms/links/links';
import ToolTips from './atoms/tooltips/tooltips';
import getObjectProperty, { isNumeric } from './utils/commonUtilities';
import { tableBodyStyle } from './tableStyles/tableBodyStyles';
/* 
import { addOrCancelBadgingColumn, enterPressed, lineServiceItemTypes } from '../../../utils/common/commonConstants';
import { associatedServicesData } from '../../../utils/common/commonConstants';
import {groupByProjectIdAndSort} from '../../../containers/order-details/common/utils';
import { orderType, typeOfOrder } from '../../../utils/common/commonUtilities';
import { lineOptionsSstiOrders } from '../../../utils/common/appFlags'; */

const useStyles = makeStyles(() => (tableBodyStyle));

export default function Body() {
  const headerData = tableData.header;
  const classes = useStyles();

  let sortLinesForExchangeOrder = [], stableSortedLines = [];
  stableSortedLines = stableSort(tableData.body, getSorting(order, orderBy));
  sortLinesForExchangeOrder = getSortedOrderLines(stableSortedLines);
  return (
    <div>Body</div>
  )
}
