import { combineReducers } from "redux";
// import { dateListReducer, profileReducer } from ""

const initialState = {
    // Dates: [
    //     { Out: ["Movie", "Bowling"] },
    //     { In: ["The Simpsons", "Last Airbender"] },
    //     { Eating: ["Universal", "400 Gradi"]}
    // ],
    dates: [
        { 
            id: 0,
            description: 'Out', 
            dates: [
                { id: 0, description: 'Movies' },
                { id: 1, description: 'Bowling' }
            ] 
        },
        {
            id: 1,
            description: 'Eating',
            dates: [
                { id: 2, description: 'Samurai' },
                { id: 3, description: 'Universal' }
            ]
        }
    ],
    profileApp: [{ name: "Michelle" }]
};
let index = 0;

function datesReducer(state = initialState.dates, action){
    console.log('dateAppReducer:', action);
    index++;
    switch (action.type) {
        case 'ADD_DATE_CATEGORY':
            return [
                ...state,
                {
                    id: index,
                    description: action.category.description,
                    dates: []
                }
            ]
        case 'ADD_DATE':
            var newState = [...state];
            newState[action.date.categoryId].dates = [ 
                ...newState[action.date.categoryId].dates, 
                {
                    id: index,
                    description: action.date.description
                }
            ]
            return newState;
        default:
            break;
    }
    return state;
}
function profileReducer(state = initialState.profileApp, action) {
    return state;
}

const rootReducer = combineReducers({
    datesReducer,
    profileReducer
});

export default rootReducer;