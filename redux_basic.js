const redux=require('redux')
//const createStore=redux.createStore();
const initialState={
    counter:0
}

//Reducer

const rootReducer=(state=initialState,action)  =>
{
    if(action.type="INC_counter")
    {
    counter: state.counter+1 
       return counter
    };
};

//store
//reducer is paased in the store
const store=redux.createStore(rootReducer)
console.log(store.getState());

//dispatching action
store.dispatch({type: INC_counter})
store.dispatch({type: DEC_counter,values:10})