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

function dateAppReducer(state = initialState.dateApp, action){
    switch (action.type) {
        case 'ADD':
            break;
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