import { BUY_CAKE } from "./cakeTypes"

const initialState={
    numberOfCakes:10
}

const cakeReducer = (state = initialState, action)=>{
        switch (action.type) {
              case BUY_CAKE: return{
                  numberOfCakes:state.numberOfCakes - 1
              }

              default: return{state}
        }
}

export default cakeReducer