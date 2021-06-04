import React, { Component } from 'react';
import Header from './components/Header';
import Home from "./components/home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/about/Aboutme";
import Contact from "./components/contact/Contact";
import Product from "./components/product/Product";
import Section2 from "./components/home/Section2";
import Footer from "./components/Footer";


class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/service" component={Product}/>
                    {/*<Route component={Error}/>*/}
                </Switch>
                {/*<Footer/>*/}
            </>
        );
    }
}

export default App;