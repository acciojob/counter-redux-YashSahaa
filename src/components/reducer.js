import { Decreament, Increament } from "./action";

const Initial_Store = {count:0}

const counterReducer = (state = Initial_Store , action)=>{
    switch(action.type){
        case Increament :
            return {...state , count : state.count+1};

        case Decreament :
            return {...state , count : state.count-1};

        default :
            return state;
    }
};

export default counterReducer;