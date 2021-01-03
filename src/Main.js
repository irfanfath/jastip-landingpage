import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import Faq from "./Container/Faq";
import Home from "./Container/Home";
import Invoice from "./Container/Invoice";
import Question from "./Container/Question";
import Toc from "./Container/Toc";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <DynamicScrollToTop/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/faq" component={Faq}/>
                    <Route path="/toc" component={Toc}/>
                    <Route path="/question" component={Question}/>
                    <Route path="/invoice/:idtrx" component={Invoice}/>
            </HashRouter>
        )
    }
}

export default Main;