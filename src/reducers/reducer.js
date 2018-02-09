import { combineReducers } from "redux";
// import { dateListReducer, profileReducer } from ""

// const initialState = {
//     // Dates: [
//     //     { Out: ["Movie", "Bowling"] },
//     //     { In: ["The Simpsons", "Last Airbender"] },
//     //     { Eating: ["Universal", "400 Gradi"]}
//     // ],
//     dateList: [
//         { type: "Out", dates: [ "Movie" , "Bowling" ] },
//         { type: "Eating", dates: [ "Universal" ] }
//     ],
//     Profile: [{ name: "Michelle" }]
// };

function dateListReducer(state = [], action){
    return state;
}
function profileReducer(state = {}, action) {
    return state;
}

const rootReducer = combineReducers({
    dateListReducer,
    profileReducer
});

export default rootReducer;