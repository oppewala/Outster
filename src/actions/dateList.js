export const addDate = (item) => {
    console.log('adding item:', item);
    return {
        type: 'ADD_DATE',
        item
    }
}