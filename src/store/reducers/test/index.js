// import * as c from '../actionContants'


const initialState = {

    loading: false,
    error: ''
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
            return { ...state, loading: true }

        default: {
            return state
        }


    }

}
export default testReducer