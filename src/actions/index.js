export const addDate = (date) => {
    console.log('ACTION CALLED - adding date:', date);
    return {
        type: 'ADD_DATE',
        date
    }
}
export const addDateCategory = (category) => {
    console.log('ACTION CALLED - adding category:', category);
    return {
        type: 'ADD_DATE_CATEGORY',
        category
    }
}