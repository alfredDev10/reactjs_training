const initialState = {username: 'blandine'}

const username = (state = initialState, action)=>{
    switch (action.type) {
      case 'CHANGE_NAME':
        if(state.username !== action.newName){
          const newState = {...state};
          newState.username = action.newName;
          return newState;
        }
        return state;
      default: {
        return state;
      }
    }
  }
  export default username;