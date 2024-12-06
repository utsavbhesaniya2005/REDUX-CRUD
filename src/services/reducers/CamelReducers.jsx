/* eslint-disable no-case-declarations */
import generateUniqueId from "generate-unique-id";

const initialState = {
    camels : JSON.parse(localStorage.getItem('camels')) || [],
    camel : null,
    isLoading : false,
}

const CamelReducers = (state = initialState, action) => {

    
    switch(action.type){
        
        case 'ADD_DATA' :

            // eslint-disable-next-line no-case-declarations
            let rec = [...state.camels, 
                {
                    ...action.payload, 
                    id : generateUniqueId({ length : 4, useLetters: false})
                }
            ];

            localStorage.setItem('camels', JSON.stringify(rec));

            return { ...state, camels : rec} 

        case 'FIND_CAMEL' : 
            
            let recs = JSON.parse(localStorage.getItem('camels'));

            let findCamel = recs.find(rec => {
                return rec.id == action.payload
            })

            return {
                ...state,
                camel : findCamel,
            }

        case 'UPDATE_CAMEL' :

            let recs1 = JSON.parse(localStorage.getItem('camels'));

            let updateCamel = recs1.map((rec) => {
                if(rec.id == action.payload.id){
                    return action.payload
                }else{
                    return rec
                }
            })

            localStorage.setItem('camels', JSON.stringify(updateCamel))

            return{
                ...state,
                camels : updateCamel,
                camel : null 
            }
            
        case 'DELETE_CAMEL' :

            let rec2 = JSON.parse(localStorage.getItem('camels'));

            let deletedRec = rec2.filter(rec => rec.id !== action.payload )

            localStorage.setItem('camels', JSON.stringify(deletedRec))

            return{
                ...state,
                camels : deletedRec,
                isLoading : false
            }

        case 'LOADING' : 
            return{
                ...state,
                isLoading : true
            }

        default : 
            return state;

    }

}

export default CamelReducers;