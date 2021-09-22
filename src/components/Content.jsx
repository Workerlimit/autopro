import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Catalogue from "./catalogue/Catalogue";
import CataloguePage from './cataloguePage/CataloguePage';
import Support from './support/Support';
import Footer from './footer/Footer';

const Content = () => {
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    return (
        <>
            <Header isSearchClicked={isSearchClicked} setIsSearchClicked={setIsSearchClicked}/>
            <Route path={`/`} exact>
                <Home isSearchClicked={isSearchClicked} setIsSearchClicked={setIsSearchClicked} />
            </Route>
            <Route path={`/catalogue`} component={Catalogue} />
            <Route path="/catalogue:id" component={CataloguePage} />
            <Route path={`/help`} component={Support} />
            <Footer />
        </>
    );
}

export default Content;