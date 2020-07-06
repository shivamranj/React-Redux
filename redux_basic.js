const redux=require('redux')
//const createStore=redux.createStore();
const initialState={
    counter:0
}

//Reducer

function rootReducer(state=initialState,action)  
{
    return state;
};

//store
//reducer is paased in the store
const store=redux.createStore(rootReducer)
console.log(store.getState());