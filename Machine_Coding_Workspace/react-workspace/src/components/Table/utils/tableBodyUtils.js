import { TableRow, TableCell } from "@mui/material";
import getObjectProperty from "./commonUtilities";
import Tooltip from "../atoms/tooltips/tooltips";

const fetchUniqueRowkeyValueForEachRecord = ({
    row,
    rowKey
}) => {
    let key;
    if (rowKey) {
        key = getObjectProperty(row, rowKey);
    }
    return key;
}

const updateCheckBoxStateOfTheRecord = ({
    row, // Each line object to be shown in table
    rowKey, // Propert whose value is unique for each row object or for each record/line.
    allowRowSelectionInGroup, // boolean
    selectedOrderLines, // List of order_line_keys of selected records: ['1234','32445']
    key // value of order_line_key in record 
}) => {
    let checked;
    if (allowRowSelectionInGroup && rowKey) {

        const filteredAssociatedLines = row.associatedLines.filter(
            line => selectedOrderLines.includes(line[rowKey])
        );

        checked = row.associatedLines.length === filteredAssociatedLines.length;
    } else {
        checked = selectedOrderLines
            ? selectedOrderLines.indexOf(key) > -1
            : undefined;
    }
    return checked;
}

export {
    fetchUniqueRowkeyValueForEachRecord,
    updateCheckBoxStateOfTheRecord
};

const onEnterPress = () => {};
const onMouseEnter = () => {};
const onMouseLeave = () => {};

/**
 * @function getRowTooltipTitle
 * @description Return the row tooltip title
 * @param {*} value - [String] rowTooltipText value
 * // @param {*} isChecked - [Boolean] is row checked
 * @param {*} hideCheckedRowTooltip - [Boolean]
 * @returns [String]
 */
function getRowTooltipTitle(value, /* isChecked ,*/ hideCheckedRowTooltip) {
    let result = '';
    if (value && hideCheckedRowTooltip /* && !isChecked */) {
        result = value;
    } else if (value && !hideCheckedRowTooltip) {
        result = value;
    }
    return result;
}

const getTableRowProps = ({
    row,
    index,
    tabIndexValue,
    classes,
    rowClass,
    rowDisabled,
    rowNeedsToBeDisabled,
    rowNeedsHighlight,

    selectedRow,
    disableHover,
    showRowSeparator,
    rowSelection,
    rowKey
}) => {
    return {
        tabIndex: tabIndexValue,
        id: row?.rowKey,
        className: `oms-table-row oms-table-row-${index} ${rowClass}`,
        "data-testid": "selected-table-row-item",
        selected: { rowSelection },
        classes: {
            root: [
                !disableHover && classes?.row,
                rowDisabled && classes.disabledRow,
                rowNeedsHighlight && classes.highlightActiveGroup,
                showRowSeparator && classes.separator,
            ].filter(Boolean).join(' '),
            selected: classes?.selectedRow,
        },
        onClick: (e) => {
            if (rowDisabled) return;
            if (selectedRow) selectedRow(e, row, index);
        },
        onKeyDown: (e) => {
            if (rowDisabled) return;
            if (onEnterPress) onEnterPress(e, row, index);
        },
        onMouseEnter: () => {
            if (onMouseEnter) onMouseEnter(index, !!rowNeedsHighlight, !!rowNeedsToBeDisabled);
        },
        onMouseLeave: () => {
            if (onMouseLeave) onMouseLeave(!!rowNeedsHighlight, !!rowNeedsToBeDisabled);
        },
        onFocus: () => { }
    }
}

/**
 * @function getBorderStatus
 * @description check with the services then return the border required or not
 * @param {*} services - Array => orderline services array
 * @returns - String => class name
 */
const getBorderStatus = services =>
    services && Array.isArray(services) && services.length > 0
        ? 'no-border'
        : 'cell-border';

const generateTableRow = ({
    cell,
    row,
    classes,
    index,
    columnKey,
    selectedOrderLines,
    onlyFullCancellationAllowed,
    getBorderStatus,
    innerCheckbox,
    onRowSelect,
    tableBody,
    showCheckedIcon,
    hideTableHeader,
    serviceClass,
    isBadgingScreen,
    renderRowLevelHeader,
    selectedServiceLines
}) => {
    const tableCellColSpan = {};
    // determineColSpan is the function to calculate colSpan for the cell
    if (cell.determineColSpan) {
        tableCellColSpan.colSpan = cell.determineColSpan(row);
    }
    // cell.hide would be true if colSpan for the other cell is greater than 1
    // If it's true, then do not display content for the cell
    if (cell.hide && cell.hide(row)) {
        return null;
    }

    const contentWrappedWithTooltip = (
        <Tooltip
            customLeaveTouchDelay={200}
            customTitle={cell.tooltip ? cell.tooltip(row[cell.key], row) : ''}
            customPlacement="bottom"
            key={index}
        >
            <div className={`cell-container`} data-qtag-cell={`cellNumber-${index}`}>
                {
                    cell?.output(
                        row[cell?.key],
                        row,
                        selectedOrderLines,
                        onlyFullCancellationAllowed,
                        selectedServiceLines,
                        onRowSelect,
                        tableBody
                    )
                }
            </div>
        </Tooltip>
    );

    return (
        <TableCell
            align={cell.align ? cell.align : 'inherit'}
            style={cell.style}
            scope="row"
            key={index}
            data-qtag-table-cellnumber={index}
            classes={{
                root: classes.tableRow
            }}
            className={`${serviceClass}`}
            {...tableCellColSpan}
        >
            {contentWrappedWithTooltip}
        </TableCell>
    );
}
/**
 * @function generateEachRecord
 * @description Generate the Individual table row
 * @param {*} row - [OBJECT] Individual Orderline
 * @param {*} key - [STRING] rowKey value
 * @param {*} index - [NUMBER] Individual Orderline Index
 * @param {*} rowSelection - [STRING] Selected Row OrderLineKey
 * @returns Array of (<TableRow> 
 *  <TableCell>{content}</TableCell>
 *  </TableRow>)
 */

export const generateEachRecord = ({
    row,
    key,
    index,
    rowSelection,


    tabIndexValue,
    rowKey,
    selectedRow,
    classes,
    selectedOrderLines,
    onlyFullCancellationAllowed,
    onRowSelect,
    tableBody,
    showCheckedIcon,
    hideTableHeader,
    isBadgingScreen,
    checked,
    headerData

}) => {
    /** TODO: Styling for disabled rows */
    /**
     * const checkBoxCell = getCheckBoxCell()
     */
    const rowClass = row.rowClass || '';
    return (
        <>
            <Tooltip
                customLeaveTouchDelay={200}
                arrow
                customTitle={getRowTooltipTitle(
                    row.rowTooltip,
                    checked,
                    row.hideCheckedRowTooltip
                )}
                customPlacement={
                    row.rowTooltipPlacement ? row.rowTooltipPlacement : 'bottom'
                }
                key={index}
            >

                <TableRow
                    {...getTableRowProps({ tabIndexValue, classes, rowSelection, rowKey })}
                >
                    {/* {checboxCell} */}
                    {headerData.map((cell, columnKey) =>
                        generateTableRow({
                            cell,
                            row,
                            classes,
                            columnKey,
                            selectedOrderLines,
                            onlyFullCancellationAllowed,
                            getBorderStatus: (services) => getBorderStatus(services),
                            // innerCheckbox: false,
                            onRowSelect,
                            tableBody,
                            // showCheckedIcon,
                            hideTableHeader,
                            // isBadgingScreen
                        })
                    )}
                </TableRow>
            </Tooltip>
        </>
    )
}