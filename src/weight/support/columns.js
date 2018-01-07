const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const columns = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
    // "Average",
    // "Median",
    // "Delta",
    // "BMI"
];

export const capitalizedColumns = columns.map(capitalize);
export const colSpan = columns.length;
export default columns;