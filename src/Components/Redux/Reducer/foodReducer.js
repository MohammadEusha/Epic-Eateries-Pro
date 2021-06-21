import allFoods from "../../fakeData/fakeData.json"

const initialState = {
    // foodsList: allFoods,
    foodsList: [],
    orderedList: []
}


const foodReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_FOODS': {
            const newState = {
                ...state,
                foodsList: action.payload
            }
            return newState
        }

        case 'LOAD_FOODS': {
            const newState = {
                ...state,
                foodsList: action.payload
            }

            return newState
        }

        case 'ORDERED_FOOD': {
            const newState = {
                ...state,
                orderedList: [...state.orderedList, action.payload]
            }
            return newState
        }
        default: {
            return state
        }

    }
}

export default foodReducer