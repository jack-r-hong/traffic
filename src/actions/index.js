import {createActions} from 'redux-actions';
import axios from 'axios';

const ser = ['localhost:3000','retext119.nde.tw'];
const server = ser[0];

const createData = createActions({
    CREATE_LOCATION:{
		'REQUEST':()=>({}),
		'RESPONSE':(data)=>({data}),
		'ERROR':(err)=>({err})		
    },
    CREATE_TRAFFIC:{
		'REQUEST':()=>({}),
		'RESPONSE':(data)=>({data}),
		'ERROR':(err)=>({err})	        
    }
})

const findData = createActions({
    COUNTY:{
		'REQUEST':()=>({}),
		'RESPONSE':(data)=>({data}),
		'ERROR':(err)=>({err})		
    },
    CREATE_TRAFFIC:{
		'REQUEST':()=>({}),
		'RESPONSE':(data)=>({data}),
		'ERROR':(err)=>({err})	        
    }
})

const findReadData = createActions({
    READ_COUNTY:{
		'REQUEST':()=>({}),
		'RESPONSE':(data)=>({data}),
		'ERROR':(err)=>({err})		
    },
    READ_TRAFFIC:{
		'REQUEST':()=>({}),
		'RESPONSE':(data)=>({data}),
		'ERROR':(err)=>({err})	        
    }
})

export const createLocationData = (data) => dispatch => {
	dispatch(createData.createLocation.request());
	axios.post(`http://${server}/loction_data`,data)
	.then(response => {
		console.log(response)
		dispatch(createData.createLocation.response(response.data));		
	}).catch((error) => {
		dispatch(createData.createLocation.error(error));
	});
}

export const createTrafficData = (data) => dispatch => {
	dispatch(createData.createTraffic.request());
	axios.post(`http://${server}/traffic_data`,data)
	.then(response => {
		console.log(response)
		dispatch(createData.createTraffic.response(response.data));		
	}).catch((error) => {
		dispatch(createData.createTraffic.error(error));
	});
}

export const findCountyData = (data) => dispatch => {
	dispatch(findData.county.request());
	axios.post(`http://${server}/loction_data_find_county`, data)
	.then(response => {
		console.log(response)
		dispatch(findData.county.response(response.data));		
	}).catch((error) => {
		dispatch(findData.county.error(error));
	});
}

export const findCountyDataRead = (data) => dispatch => {
	dispatch(findReadData.readCounty.request());
	axios.post(`http://${server}/loction_data_find_county`, data)
	.then(response => {
		
		dispatch(findReadData.readCounty.response(response.data));		
	}).catch((error) => {
		dispatch(findReadData.readCounty.error(error));
	});
}

export const findLocationDataRead = (data) => dispatch => {
	dispatch(findReadData.readTraffic.request());
	console.log(data)
	axios.post(`http://${server}/find_traffic_data`, data)
	.then(response => {
		console.log(response)
		dispatch(findReadData.readTraffic.response(response.data));		
	}).catch((error) => {
		dispatch(findReadData.readTraffic.error(error));
	});
}

