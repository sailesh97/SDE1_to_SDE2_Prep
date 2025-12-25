import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Skeleton from '@mui/material/Skeleton';
import PropTypes from 'prop-types';
import Icons from './icons/Icons';

const useStyles = makeStyles(() => ({
  checkboxCell: {
    backgroundColor: '#D7D7D7',
    height: '72px'
  },
  headerCell: {
    backgroundColor: '#D7D7D7',
    height: '72px',
    fontSize: '16px',
    fontWeight: 'bold',
    minWidth: '0'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  },
  colorPrimary: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  checkboxChecked: {
    color: '#003baf'
  },
  checkboxCheckedDisabled: {
    color: grey[600]
  }
}));

export default function Head(props) {
  const {
    headerData,
    hideTableHeader,

    // For accessibility purposes, to navigate through tabs.
    tabIndexValue,
    
    // Skeleton Props
    showSkeleton,
    animationType,

    // Sorting
    orderBy,
    order,
    initialOrder,
    disableSort,
    
    // Sorting Function
    onRequestSort,
    
    // Props for table-row checkbox
    /** For any table, the header will be a single row. 
     * The checkbox in table header will be checked status, 
     * only when all lines of table body are checked 
    * */
    rowCount,
    showCheckbox,
    showCheckedIcon,
    disableCheckBox,
    selectedOrderLines: selectedLines,
    onSelectAll,
    hideSelectAllCheckbox
  } = props;
  const classes = useStyles();
  
  /** DERIVED PROPS START */
  const defaultOrder = initialOrder || 'desc';

  const checkIfCheckboxDisabled = selectedLines?.length !== rowCount &&
   disableCheckBox;
  /** DERIVED PROPS END */

  /** Functions Start */
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  /** Functions End */


  const generateHeader = () => {
    return <>
      {showCheckbox ? (
        <TableCell
          padding="checkbox"
          align="center"
          className={classes.checkboxCell}
        >
          <Checkbox
             {...showCheckedIcon ? {checkedIcon: <Icons type='newUXSortTableCheckedIcon' color={checkIfCheckboxDisabled ? 'rgba(0, 0, 0, 0.26)' : '#0072CE'}/>} : {}}
             inputProps={{
              tabIndex: `${tabIndexValue}`
            }}
            classes={{
              colorPrimary: classes.colorPrimary,
              checked: disableCheckBox
                ? classes.checkboxCheckedDisabled
                : classes.checkboxChecked
            }}
            checked={
              selectedLines.length > 0 &&
                selectedLines.length === rowCount
            }
            color="default"
            style={{display: !!hideSelectAllCheckbox ? 'none' : 'contents'}}
            onChange={e => onSelectAll(e)}
            data-qtag-heading-checkbox="checkbox"
            disabled={checkIfCheckboxDisabled}
          />
        </TableCell>
      ) : null}
      {headerData.map(headCell => (
        <TableCell
          key={headCell.key}
          align={headCell.align ? 'right' : 'left'}
          style={headCell.style}
          sortDirection={orderBy === headCell.key ? order : false}
          className={classes.headerCell}
          data-qtag-table-heading={headCell.name}
        >
          {disableSort ? (
            <>{headCell.name} </>
          ) : (
            <TableSortLabel
              active={orderBy === headCell.key}
              // EOI-351 fix The default sort for each column will be descending first.
              direction={orderBy === headCell.key ? order : defaultOrder}
              onClick={createSortHandler(headCell.key)}
              tabIndex={tabIndexValue}
            >
              {headCell.name}
              {orderBy === headCell.key ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc'
                    ? 'sorted descending'
                    : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          )}
        </TableCell>
      ))}
    </>
  }

  return (
    !hideTableHeader ? <TableHead>
      <TableRow>
        {showSkeleton
          ? [...Array(headerData.length)].map((_, index) => (
            <TableCell key={index}>
              <Skeleton
                className="col-skeleton"
                variant="rect"
                animation="wave"
                disableAnimate={animationType === false}
                key={index}
              />
            </TableCell>
          ))
          : generateHeader()}
      </TableRow>
    </TableHead> : <></>
  )
}

Head.defaultProps = {
  showCheckbox: false,
  selectedOrderLines: [],
  rowCount: 0,
  onSelectAll: () => {},
  disableCheckBox: false,
  disableSort: false,
  showSkeleton: false,
  animationType: 'wave'
};

Head.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  showCheckbox: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  selectedOrderLines: PropTypes.arrayOf(PropTypes.string),
  rowCount: PropTypes.number,
  onSelectAll: PropTypes.func,
  disableCheckBox: PropTypes.bool,
  tabIndexValue: PropTypes.number.isRequired,
  disableSort: PropTypes.number,
  showSkeleton: PropTypes.bool,
  animationType: PropTypes.string
};