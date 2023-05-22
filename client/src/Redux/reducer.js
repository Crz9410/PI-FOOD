import { GET_RECIPES, FILTER_BY_STATUS, ORDER_BY_NAME, GET_NAME_RECIPE, FILTER_CREATED
 } from "./actions";

const initialState = {
    recipes: [],
    allRecipes: []
};
function rootReducer(state = initialState, action) {
    console.log("HHHHHHHHHHHH", action.type)
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
              };
            
        
            case GET_NAME_RECIPE:
              return {
                ...state,
                recipes: action.payload
            }
        case FILTER_BY_STATUS:
            const allRecipes = state.allRecipes
            const statusFiltered = action.payload === 'All' ? allRecipes : allRecipes.filter(el => el.continents[0] === action.payload)
            return {
                ...state,
                recipes: statusFiltered

            }
        case FILTER_CREATED:
            const allCountrie = state.allRecipes;
            const cretedFilter = action.payload === 'created' ? allCountrie.filter(el => el.created) : allCountrie.filter(el => !el.creted)
            return {
                ...state,
                recipes: action.payload === 'All' ? state.allRecipes : cretedFilter
            }
        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'asc' ?
                state.recipes.sort(function (a, b) {

                    if (a.name.common > b.name.common) {
                        return 1;
                    }
                    if (b.name.common > a.name.common) {
                        return -1;
                    }
                    return 0;
                }) :
                state.recipes.sort(function (a, b) {
                    if (a.name.common > b.name.common) {
                        return -1;
                    }
                    if (b.name.common > a.name.common) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                recipes: sortedArr
            }
        default:
            console.log("DDDDDDDDDDDDDD")
            return state;
    }
}


export default rootReducer;