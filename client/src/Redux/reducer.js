import {
    GET_RECIPES, FILTER_BY_STATUS, ORDER_BY_NAME, GET_NAME_RECIPE, FILTER_CREATED, ORDER_BY_HEALTH, FILTER_BY_ORIGIN
} from "./actions";

const initialState = {
    recipes: [],
    allRecipes: []
};
function rootReducer(state = initialState, action) {

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
                recipes: action.payload,
                allRecipes: action.payload
            }
        case FILTER_BY_STATUS:
            const allRecipes = state.allRecipes;
            const dietsFiltered =
                action.payload === 'All'
                    ? allRecipes
                    : allRecipes.filter((el) => el.diets.includes(action.payload));
            return {
                ...state,
                recipes: dietsFiltered
            };
        case FILTER_CREATED:
            const allCountrie = state.allRecipes;
            const cretedFilter = action.payload === 'created' ? allCountrie.filter(el => el.created) : allCountrie.filter(el => !el.creted)
            return {
                ...state,
                recipes: action.payload === 'All' ? state.allRecipes : cretedFilter
            }
        case FILTER_BY_ORIGIN:
            const allOrigin = state.allRecipes;
            const filteredByStatus = action.payload !== "api" ? allOrigin.filter((el) => el.source !== action.payload ) : allOrigin.filter((el) => el.source === action.payload);
            return {
                ...state,
                recipes: filteredByStatus,
            };

        case ORDER_BY_NAME:
            console.log("MMMMMMMMMMMMMM", state.recipes)
            let sortedArr = action.payload === 'asc' ?
                state.recipes.sort(function (a, b) {
                    if (a.title > b.title) {
                        return 1;
                    }
                    if (b.title > a.title) {
                        return -1;
                    }
                    return 0;
                }) :
                state.recipes.sort(function (a, b) {
                    if (a.title > b.title) {
                        return -1;
                    }
                    if (b.title > a.title) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                recipes: sortedArr
            }

        case ORDER_BY_HEALTH:
            console.log("MMMMMMMMMMMMMM", state.recipes)
            let sorteArrHealth = action.payload === 'mas' ?
                state.recipes.sort(function (a, b) {
                    if (a.healthScore > b.healthScore) {
                        return 1;
                    }
                    if (b.healthScore > a.healthScore) {
                        return -1;
                    }
                    return 0;
                }) :
                state.recipes.sort(function (a, b) {
                    if (a.healthScore > b.healthScore) {
                        return -1;
                    }
                    if (b.healthScore > a.healthScore) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                recipes: sorteArrHealth
            }
        default:

            return state;
    }
}


export default rootReducer;