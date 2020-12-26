import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import Stock from './pages/Stock';
import Report from './pages/Report';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Login } />
                <Route path="/home" component={ Home } />
                <Route path="/register" component={ Register } />  
                <Route path="/products" component={ Product } />
                <Route path="/product/create" component={ CreateProduct } />
                <Route path="/stock" component={ Stock } />
                <Route path="/report" component={ Report } />
            </Switch>
        </BrowserRouter>
    )


}