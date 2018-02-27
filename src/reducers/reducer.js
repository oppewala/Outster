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
                { 
                    id: 0, 
                    description: 'Ice Skating',
                    addedBy: 0,
                    addedOn: new Date(2018, 1, 1),
                    notes: 'Fun activity, but a lot of pressure for Michelle. Good for a second or third date, as people get really close'
                },
                { 
                    id: 1, 
                    description: 'Bowling', 
                    addedBy: 0,
                    addedOn: new Date(2018, 1, 1)
                }
            ] 
        },
        {
            id: 1,
            description: 'Eating',
            dates: [
                { 
                    id: 2, 
                    description: 'Samurai',
                    addedBy: 1,
                    addedOn: new Date(2018, 1, 1)
                },
                { 
                    id: 3, 
                    description: 'Universal',
                    addedBy: 0,
                    addedOn: new Date(2018, 1, 1)
                }
            ]
        }
    ],
    filter: 'SHOW_ALL',
    users: [
        {
            id: 0,
            name: 'Arend Oppewal'
        },
        {
            id: 1,
            name: 'Michelle Suprapto'
        }
    ]
};
let index = 0;

function datesReducer(state = initialState.dates, action){
    console.log('datesReducer:', action);
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
function filterReducer(state = initialState.filter, action) {
    console.log('filterReducer', action);
    switch(action.type){
        case 'SHOW_ALL':
            return 'SHOW_ALL';
        case 'LIKED':
            return 'LIKED';
        case 'DISLIKED':
            return 'DISLIKED';
        default:
            break;
    }
    return state;
}

const rootReducer = combineReducers({
    datesReducer,
    filterReducer
});

export default rootReducer;