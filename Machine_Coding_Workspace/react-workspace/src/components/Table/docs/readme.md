### Props of SortTable:

- classes, 
- containerClasses, 
- tableHeight 
    - Assigned to Parent div of `<MaterialTable>`.
    - `MaterialTable` takes a children, which should have material `TableHeader` & `TableBody`
- stickyHeader = true,
- showLoader,
- noOfRowsInLoader,
- tableData
- pagination: A boolean value, If true show the pagination footer
- fetchMoreData: Call this function based on no. of records present in `tableData.body`, current `page` & current `rowsPerPage`
- totalData 
    - Required to decide whether the next button in `Pagination` footer should be enabled or not, based on current `page` and current `rowsPerPage`.
    - There're other purposes

### Passed to Body. Check docs of Body to see the purpose of this
- disableHover - 
- selectedRow
- rowKey
- selectedRowKey
- allowRowSelectionInGroup

### Props of Head:
- TableSortLabel
- TableHead
- TableCell
- TableRow 

### Reference:
- [Reference to Material Table Docs](https://mui.com/material-ui/react-table/#introduction)

Tables are implemented using a collection of related components:

- `<Table />`: The main component for the table element. Renders as a `<table>` by default.
- `<TableHead />`: The container for the header row(s) of `<Table />`. Renders as a `<thead>` by default.
- `<TableBody />`: The container for the body rows of `<Table />`. Renders as a `<tbody>` by default.
- `<TableRow />`: A row in a table. Can be used in `<TableHead />`, `<TableBody />`, or `<TableFooter />`. Renders as a `<tr>` by default.
- `<TableCell />`: A cell in a table. Can be used in `<TableRow />` . Renders as a `<th>` in `<TableHead />` and `<td>` in `<TableBody />` by default.
- `<TablePagination />`: A component that provides controls for paginating table data. See the 'Sorting & selecting' example and 'Custom Table Pagination Action' example.