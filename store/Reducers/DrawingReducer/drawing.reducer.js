import { FILTERED_DRAWING, SELECT_DRAWING } from '../../Actions/DrawingAction/drawing.action';

import { DRAWINGS } from '../../../DATA/Drawings/Drawings';

const initialState = { 
    drawings: DRAWINGS,
    filteredDrawing: [],
    selected: null
}

const DrawingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_DRAWING:
            return {
                ...state,
                selected: state.drawings.find(drawing => drawing.id === action.drawingID)
            }
        case FILTERED_DRAWING:
            return {
                ...state,
                filteredDrawing: state.drawings.filter(drawing => drawing.category === action.categoryID)
            }
        default: 
            return state
    }
}

export default DrawingReducer;