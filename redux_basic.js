const redux=require('redux')
//const createStore=redux.createStore();
const initialState={
    counter:0
}

//Reducer

const rootReducer=(state=initialState,action)  =>
{
    if(action.type==='INC_counter')
    {
    return {...state,counter:state.counter+1}
    }

    if(action.type==='DEC_counter')
    return {...state,counter:state.counter+action.value}

    else 
    return state;
    
};

//store
//reducer is paased in the store
const store=redux.createStore(rootReducer)
console.log(store.getState());

//subscription-to know something has changed,It always get trigerred whenever the state changes
store.subscribe(()=>{
    console.log('Subscription',store.getState())
})

//dispatching action
store.dispatch({type: 'INC_counter'})
store.dispatch({type: 'DEC_counter',value:10})
console.log(store.getState());


