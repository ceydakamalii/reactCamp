import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import {Route} from 'react-router'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import {ToastContainer} from "react-toastify"
import ProductAdd from '../pages/ProductAdd'
//router işlemi istenilen componentte yapılabilir.

export default function Dashboard() { //kapsayıcı
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={ProductList}/>
                        <Route exact path="/products" component={ProductList}/>
                        <Route path="/products/:name" component={ProductDetail}/>
                        <Route exact path="/cart" component={CartDetail}/>
                        <Route exact path="/product/add" component={ProductAdd}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>



        </div>
    );
}
