import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppBar from './compontent/AppBar';
import { Route, Switch, Redirect,BrowserRouter,link } from 'react-router-dom';
import HomePage from './compontent/HomePage.js';
import ReadDataContainer from './container/ReadDataContainer';
import AddDataContainer from './container/AddDataContainer';
import AddNewLocationData from './container/AddNewLocationData';
import store from './store/index';



export default function App(){

 

    return(
        <Provider store={store}>
            
            <BrowserRouter >
                
                    <Route path='/' component={AppBar} />
                    <Switch>
                        
                        <Route exact={true} path='/' component={HomePage} />	
                        <Route path='/read-data' component={ReadDataContainer} />
                        <Route path="/add-data" component={AddDataContainer}/>
                        <Route path="/add-new-location-data" component={AddNewLocationData}/>
                         
                    </Switch>       
                      	
            </BrowserRouter>
            
        </Provider>

    );
}


