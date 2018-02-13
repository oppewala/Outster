import { combineReducers } from "redux";
// import { dateListReducer, profileReducer } from ""

const initialState = {
    // Dates: [
    //     { Out: ["Movie", "Bowling"] },
    //     { In: ["The Simpsons", "Last Airbender"] },
    //     { Eating: ["Universal", "400 Gradi"]}
    // ],
    dateApp: [
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

function dateAppReducer(state = initialState.dateApp, action){
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
            console.log(newState, action.date.categoryId)
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
    dateAppReducer,
    profileReducer
});

export default rootReducer;