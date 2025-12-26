import { isNumeric } from "./commonUtilities";
/**
 *
 * it return the data sorted
 * based on order and order by
 * @function stableSort
 * @param {*} array - data
 * @param {*} cmp -
 * @returns
 */
function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });

    return stabilizedThis.map(el => el[0]);
}
/**
 * compare the two data to check
 * which one is greater or smaller for sorting
 * Convert to lowercase if is a string and sort
 * @function compareValues
 * @param {*} a - data
 * @param {*} b - data
 * @param {*} orderBy - header key
 * @returns data a is greater than b return -1,
 * data b is greater than a return 1 and 0 if equal
 */

export const orderbyOfDateFields = [
    'expected_fulfillment_date',
    'order_created_time'
]
function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }
        // check if it is numeric else treat it as string for sorting
        const varA = isNumeric(a[key]) ? parseFloat(a[key]) : (typeof a[key] === 'string' ? a[key].toLowerCase() : a[key]);
        const varB = isNumeric(b[key]) ? parseFloat(b[key]) : (typeof b[key] === 'string' ? b[key].toLowerCase() : b[key]);
        let comparison = 0;

        if ((Number.isNaN(varA) && Number.isNaN(varB)) || (typeof varA === 'string' && typeof varB === 'string')) {
            if (orderbyOfDateFields.includes(key) && varA && varB) {
                let dateA = new Date(varA);
                let DateB = new Date(varB);
                comparison = dateA > DateB ? 1 : DateB > dateA ? -1 : 0;
            }
            else {
                comparison = varA > varB ? 1 : varB > varA ? -1 : 0;
            }
        } else {
            let tempVarA = varA; let tempVarB = varB;
            if (typeof varA === 'string') {
                tempVarA = 0;
            } else if (typeof varB === 'string') {
                tempVarB = 0;
            }
            comparison = tempVarA > tempVarB ? 1 : tempVarB > tempVarA ? -1 : 0;
        }

        return order === 'desc' ? comparison * -1 : comparison;
    };
}

/**
 * it compare the data based on asc or des
 * and based on selected header key for sorting
 * @function getSorting
 * @param {*} order - asc or dec
 * @param {*} orderBy - header key selected
 * @returns - smallest data if asc and greatest if desc
 */
function getSorting(order, orderBy) {
    return compareValues(orderBy, order);
    // return order === 'desc'
    //   ? (a, b) => desc(a, b, orderBy)
    //   : (a, b) => -desc(a, b, orderBy);
}

export {
    stableSort,
    getSorting
}