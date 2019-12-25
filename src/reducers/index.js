import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { useSelector, useDispatch } from 'react-redux';



const addDataReducers = handleActions({
    'COUNTY/RESPONSE' : (state, action) => {
        return { ...state, location: action.payload.data.location.map(item => {
            return(item)
            
        })}
    }
},{})

const readDataReducers = handleActions({
    'READ_COUNTY/RESPONSE' : (state, action) => {
        return { ...state, location: action.payload.data.location.map(item => {
            return(item)        
        }),
            image: action.payload.data.location.map(item => {
                return({[item.location] : item.image})   
            }
        ),

            
        }
    },
    // 'READ_TRAFFIC/RESPONSE' : (state, action) => {
       
                 
    // }

},{})

const readDataLocationReducers = handleActions({
    'READ_TRAFFIC/RESPONSE' : (state, action) => {
        return { ...state, 
            holidayCarTraffic: action.payload.data.data.holidayCarTraffic ,
            holidayMotorcycleTraffic: action.payload.data.data.holidayMotorcycleTraffic ,       
            weekdayCarTraffic: action.payload.data.data.weekdayCarTraffic , 
            weekdayMotorcycleTraffic: action.payload.data.data.weekdayMotorcycleTraffic , 
            image : action.payload.data.data.image
        }
    }


},{holidayCarTraffic:[], holidayMotorcycleTraffic:[],weekdayCarTraffic:[],weekdayMotorcycleTraffic:[],image:''})



export default combineReducers({
    addDataReducers,
    readDataReducers,
    readDataLocationReducers
});