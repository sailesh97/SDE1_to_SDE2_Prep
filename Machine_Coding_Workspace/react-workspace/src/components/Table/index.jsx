import Paper from '@mui/material/Paper';
import {makeStyles} from '@mui/styles';
import MaterialTable from '@mui/material/Table';
import Skeleton from '@mui/material/Skeleton';
import React, { useEffect, useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import { maxTabLimit } from '../../../containers/dashboard/common/constant';
// import { maxTabsNotification, openNewTab } from '../../../containers/virtualTabs/store/actions';
// import Body from './body';
// import Head from './head';
// import Pagination from './pagination';
import './style.scss';
// import { updateSessionData } from '../../../utils/common/commonUtilities';


export default function SortTable(props) {
    return (
    <Paper className={containerClasses}>
      <div className={classes} style={{ maxHeight: `${tableHeight}px` }} ref={tableRef}>
        <MaterialTable
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
          stickyHeader={stickyHeader}
          classes={tableClasses}
        >
          <>Table Header</>
          <>Table Body</>
        </MaterialTable>
        {showSkeleton &&
          [...Array(noOfRows)].map((_, index) => (
            <>Skeleton</>
          ))}
      </div>

      {<>Pagination</>}
    </Paper>
  );
};