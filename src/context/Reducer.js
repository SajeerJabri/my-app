const Reducer=(state,action)=>{
    switch(action.type){
        
        case "ADD_STUDENT":{
            return {
                ...state,
               records : [...state.records,action.payload]
            }
        }
   
        case "DELETE_STUDENT":{
            return {
                ...state,
                records: state.records.filter(record => record.id !== action.payload)
              }
        }
        
        default:
            return state;
    }
}

export default Reducer;