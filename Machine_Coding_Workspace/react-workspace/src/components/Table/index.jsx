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

const useStyles = makeStyles(() => ({
  root: {
    borderCollapse: 'collapse'
  }
}));

const Table = () => {
    return (
        <div>
            Table
        </div>
    )
}

export default Table;
