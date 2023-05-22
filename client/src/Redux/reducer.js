import { GET_COUNTRIES, GET_COUNTRY, FILTER_BY_STATUS, ORDER_BY_NAME, GET_NAME_COUNTRY } from "./actions";

const initialState = {
    countries: [],
    allCountries: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
            case GET_NAME_COUNTRY:
              return {
                ...state,
                countries: action.payload
            }
        case FILTER_BY_STATUS:
            const allCountries = state.allCountries
            const statusFiltered = action.payload === 'All' ? allCountries : allCountries.filter(el => el.continents[0] === action.payload)
            return {
                ...state,
                countries: statusFiltered

            }
        case 'FILTER_CREATED':
            const allCountrie = state.allCountries;
            const cretedFilter = action.payload === 'created' ? allCountrie.filter(el => el.created) : allCountrie.filter(el => !el.creted)
            return {
                ...state,
                countries: action.payload === 'All' ? state.allCountries : cretedFilter
            }
        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'asc' ?
                state.countries.sort(function (a, b) {

                    if (a.name.common > b.name.common) {
                        return 1;
                    }
                    if (b.name.common > a.name.common) {
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
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
                countries: sortedArr
            }
        default:
            return state;
    }
}

export default rootReducer;