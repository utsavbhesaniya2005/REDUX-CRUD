export const addCamel = (data) => {
    return{
        type : "ADD_DATA",
        payload : data
    }
}

export const findSingleCamel = (id) => {
    return{
        type : "FIND_CAMEL",
        payload : id
    }
}

export const updateCamel = (updateRecs) => {
    return{
        type : "UPDATE_CAMEL",
        payload : updateRecs
    }
}

export const deleteCamel = (id) => {
    return{
        type : "DELETE_CAMEL",
        payload : id
    }
}

export const loading = () => {
    return{
        type : "LOADING"
    }
}

// thunk is used to give logics in action and thunk always return a function and action always return a logics and also it dispatch method which used to pass data from actions to reducer and it is provided by think.

export const getAsyncDelete = (id) => {
    return (dispatch) => {

        dispatch(loading())
        
        setTimeout(() => {
            dispatch(deleteCamel(id))
        }, 2000)
    }
}