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
export const editDate = (date) => {
    console.log('ACTION CALLED - editing date:', date);
    return {
        type: 'EDIT_DATE',
        date
    }
}
export const closeDateModal = (dateId) => {
    console.log('ACTION CALLED - closing date modal:', dateId);
    return {
        type: 'CLOSE_DATE_MODAL',
        dateId
    }
}