export const openDateModal = (dateId) => {
    console.log('ACTION CALLED - opening date modal:', dateId);
    return {
        type: 'SHOW',
        dateId
    }
}
export const closeDateModal = (dateId) => {
    console.log('ACTION CALLED - closing date modal', dateId);
    return {
        type: 'HIDDEN',
        dateId
    }
}