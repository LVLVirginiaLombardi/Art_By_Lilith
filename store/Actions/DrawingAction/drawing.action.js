export const SELECT_DRAWING = 'SELECT_DRAWING';
export const FILTERED_DRAWING = 'FILTERED_DRAWING';

export const selectDrawing = (id) => ({
    type: SELECT_DRAWING,
    drawingID: id
})

export const filteredDrawing = (id) => ({
    type: FILTERED_DRAWING,
    categoryID: id 
})