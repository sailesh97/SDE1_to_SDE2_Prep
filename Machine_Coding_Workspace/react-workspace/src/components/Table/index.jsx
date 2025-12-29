import Paper from '@mui/material/Paper';
import {makeStyles} from '@mui/styles';
import MaterialTable from '@mui/material/Table';
import Skeleton from '@mui/material/Skeleton';
import React, { useEffect, useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import { maxTabLimit } from '../../../containers/dashboard/common/constant';
// import { maxTabsNotification, openNewTab } from '../../../containers/virtualTabs/store/actions';
import Head from './head';
import Body from './body';
// import Pagination from './pagination';
import './style.scss';
// import { updateSessionData } from '../../../utils/common/commonUtilities';

const useStyles = makeStyles(() => ({
  root: {
    borderCollapse: 'collapse'
  }
}));

export default function SortTable(props) {
    const { 
      // Props of Container of Table Container
      containerClasses, 
      
      // Table Container Props
      classes, 
      tableHeight,
      stickyHeader = true,
      
      // Table Header Props
      hideTableHeader = false,
      
      // Skeleton Props
      showLoader,
      noOfRowsInLoader,

      // Required props for both table header & table body
      tableData,

      // Sorting
      disableSort,
      handleOrderBy,

      totalData,

      // Checkbox
      showCheckbox,
      showCheckedIcon = false,
      disableCheckBox,
      hideSelectAllCheckbox,
      selectedOrderLines,
      selectedServiceLines,
      onSelectAll,

      // Accessibility
      tabIndexValue,

      // OrderLine or TableBody props
      disableHover,
      selectedRow,
      rowKey,
      selectedRowKey,
      onRowSelect,
      allowRowSelectionInGroup,
      onlyFullCancellationAllowed,
      serviceHeaders,
      showGroupSeparator,
      groupByProjects,
      orderData
    } = props;
    // Cloned original props, so that it won't get modified in this or any of its child component
    const propsData = { ...props };

    const [page, setPage] = React.useState(propsData.page ? propsData.page : 0);

    // Sorting States start
    const initialOrder = propsData.order; // asc or desc
    const [order, setOrder] = React.useState(initialOrder);

    const initialOrderBy = propsData.orderBy || tableData.header[0].key; // column
    const [orderBy, setOrderBy] = React.useState(initialOrderBy);
    // Sorting States end
    
    const [rowsPerPage, setRowsPerPage] = React.useState(
        propsData.rowsPerPage ? propsData.rowsPerPage : 10
    );

    const totalDataCount = totalData || tableData.body.length;

    const tableRef = useRef(null);

    // Animation type for table
    const animationType = null; /* useSelector(
        state =>
        state.virtualTabsReducer && state.virtualTabsReducer.loaderAnimationType
    ); */
    
    const tableClasses = useStyles();

    // If the data is still being fetched for the table pages, show skeleton.
    const showSkeleton =
        showLoader ||
        (page > 0 &&
        tableData.body &&
        !(tableData.body.length > page * rowsPerPage));

    const noOfRows = noOfRowsInLoader || 10;

    /**
     * it request to change the sorting based on orderby and order
     * @function handleRequestSort
     * @param {*} event - click event
     * @param {*} property - the clicked header property
     */
    const handleRequestSort = (event, property) => {
      const isDesc = orderBy === property && order === 'desc';
      setOrder(isDesc ? 'asc' : 'desc');
      setOrderBy(property);
      handleOrderBy && handleOrderBy(property);
    };

    /**
     * @function getSelectedOrderLines
     * @description return selected orderlines and services lines merge
     * @returns Array of merge orderlines and service lines.
     */
    const getSelectedOrderLines = () => {
      let lines = [];
      if (Array.isArray(selectedOrderLines)) {
        lines = selectedOrderLines;
      }
      if (Array.isArray(selectedServiceLines)) {
        lines = lines.concat(selectedServiceLines);
      }
      return lines;
    };

    const selectRowHandler = () => {};

    return (
    <Paper className={containerClasses}>
      <div className={classes} style={{ maxHeight: `${tableHeight}px` }} ref={tableRef}>
        <MaterialTable
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
          stickyHeader={stickyHeader}
          classes={tableClasses}
        >
          <Head
            headerData={tableData.header}

            // Hide header, when hideTableHeader is true
            hideTableHeader={hideTableHeader}

            // For accessibility purposes, to navigate through tabs.
            tabIndexValue={tabIndexValue}

            // Skeleton Props
            showSkeleton={showLoader}
            animationType={animationType}
            
            // Sorting Props
            orderBy={orderBy} // column name by which you want to sort the table records
            order={order} // 'asc' || 'desc' | local state created from props.order | If state is updated, trigger re-render
            initialOrder={initialOrder} // JS constant holds props.order | Acts as a default value If order prop is not passed to <Head>
            disableSort={disableSort} // Boolan value, Helps to decide whether to allow sorting or not. If true, then only wrap the column name with `TableSortLabel`
            
            // Sorting Functions
            onRequestSort={handleRequestSort}
            
            // Props for table-row checkbox - start
            
            /** For any table, the header will be a single row. 
             * The checkbox in table header will be checked status, 
             * only when all lines of table body are checked 
            * */
            rowCount={totalDataCount}
            showCheckbox={showCheckbox} // To show checkbox or not
            showCheckedIcon={showCheckedIcon} // Checkbox has two variant, one with icon, one without icon
            disableCheckBox={disableCheckBox}
            selectedOrderLines={getSelectedOrderLines()}
            onSelectAll={onSelectAll}
            // Decides whether to show checkbox in table header or not.
            hideSelectAllCheckbox={hideSelectAllCheckbox}
            // Props for table-row checkbox - end
          />
          {!showSkeleton && (
            <Body

              // Hide header, when hideTableHeader is true
              hideTableHeader={hideTableHeader}
              tableData={tableData}
              
              page={page}
              rowsPerPage={rowsPerPage}

              order={order}
              orderBy={orderBy}

              disableHover={disableHover}

              rowKey={rowKey} // 'order_line_key'
              
              // a single rowKey, which is selected. - In non-checkbox view
              selectedRowKey={selectedRowKey} 

              // Click handler for row selection
              selectedRow={selectedRow}
              
              showCheckbox={showCheckbox}
              showCheckedIcon={showCheckedIcon}
              disableCheckBox={disableCheckBox}

              // selectedOrderLines: Array => list of checked rowKeys of orderlines
              selectedOrderLines={selectedOrderLines}
              // onRowSelect - Click handler for checkbox, in item selection screen
              onRowSelect={onRowSelect}

              /** In checkbox view, we pass selectedOrderLines prop, which is an array of rowKeys(order_line_key), which are checked.
               * In case of item selection screen, we pass allowRowSelectionInGroup prop as true
               * And If selectedOrderLines holds order_line_keys of all children lines of a parent line, then we pass `checked: true` to checkbox element of parent line
               */
              allowRowSelectionInGroup={allowRowSelectionInGroup}

              onlyFullCancellationAllowed={onlyFullCancellationAllowed}

              /** In order details table, if a line has an associated child line, we show some info only under first column i.e; Product Details columns
               * The other columns just return null.
               * This header config is available in serviceHeaders.
               * Added an example in order-details-table-props.js : oderLineServicesHeaderData constant
               */
              serviceHeaders={serviceHeaders}
              selectedServiceLines={selectedServiceLines}

              // Accessibility
              tabIndexValue={tabIndexValue}

              showGroupSeparator={showGroupSeparator}
              groupByProjects={groupByProjects}

              // Click handler for Exchange links that is shown for sales order.
              selectRowHandler={selectRowHandler}

              orderData={orderData} // Just to distinguish If order has project_id or quote_id, based on which we decide to show groups. Could have done that outside and pass only required info.
              // Show specific lines for mileage fees in different UX
              // showSSTIMileageFee={"showSSTIMileageFee"}
            />
          )}
        </MaterialTable>
        {showSkeleton &&
          [...Array(noOfRows)].map((_, index) => (
            <Skeleton
              className={`row-skeleton ${classes.animate}`}
              variant="rect"
              animation="wave"
              disableAnimate={animationType === false}
              key={index}
            />
          ))}
      </div>

      {/* {pagination !== false ? (
        <Pagination
          count={moreDataAvailable ? -1 : totalDataCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          data-testid="table-pagination"
          onChangeRowsPerPage={handleChangeRowsPerPage}
          // Disable next page button when skeleton is being showed (i.e., data is being fetched from API) or last page is active
          nextIconButtonProps={{
            disabled: nextButtonDisable === undefined
              ? (!moreDataAvailable &&
                ((page + 1) * rowsPerPage >= totalDataCount)) || showSkeleton
              : nextButtonDisable
          }}
          rowsPerPageOptions={rowsPerPageOptions}
        />
      ) : (
        ''
      )} */}
    </Paper>
  );
};