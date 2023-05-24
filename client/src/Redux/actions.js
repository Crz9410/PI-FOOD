import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_COUNTRY = "GET_COUNTRY";
export const FILTER_BY_STATUS = "FILTER_BY_STATUS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_NAME_RECIPE = "GET_NAME_RECIPE";
export const ORDER_BY_HEALTH = "ORDER_BY_HEALTH";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
const apiKey = process.env.REACT_APP_API_KEY;

export const getRecipes = (offset) => async (dispatch) => {
    try {
        const number = 100;

       
        const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&offset=${offset}&number=${number}`);
        const apiRecipes = apiResponse.data.results.map((recipe) => ({
          ...recipe,
          source: "api",
        }));
  
        
        const localResponse = await axios.get(`http://localhost:3001/recipe?offset=${offset}`);
        const localRecipes = localResponse.data.map((recipe) => ({
          ...recipe,
          source2: "bdd",
        }));;
  
       
        const recipes = [...apiRecipes, ...localRecipes];
      dispatch({ type: GET_RECIPES, payload: recipes });
     
    } catch (error) {
      console.error(error);
    }
  };

export const getCountry = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
        const country = apiData.data;
        dispatch({ type: GET_COUNTRY, payload: country });
    }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByHealth(payload) {
    return {
        type: 'ORDER_BY_HEALTH',
        payload
    }
}

export function getNameRecipe(name) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`https://api.spoonacular.com/food/search?query=${name}&apiKey=${apiKey}`);
            const results = json.data?.searchResults;
            
            return dispatch({
                type: "GET_NAME_RECIPE",
                payload: results
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export function filterDiets(payload) {
    return {
        type: 'FILTER_BY_STATUS',
        payload
    }
}

export function filterByStatus(payload) {
    return {
        type: "FILTER_BY_ORIGIN",
        payload,
    };
}

export function filterCreated(payload) {
    return {
        type: 'FILTER_CREATED',
        payload
    }
}