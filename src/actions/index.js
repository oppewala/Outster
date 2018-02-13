export const addDate = (date) => {
    console.log('adding date:', date);
    return {
        type: 'ADD_DATE',
        date
    }
}
export const addDateCategory = (category) => {
    console.log('adding category:', category);
    return {
        type: 'ADD_DATE_CATEGORY',
        category
    }
}