import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import Faq from "./Container/Faq";
import Home from "./Container/Home";
import Invoice from "./Container/Invoice";
import Privacy from "./Container/Privacy";
import Question from "./Container/Question";
import Toc from "./Container/Toc";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <DynamicScrollToTop/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/faq" component={Faq}/>
                    <Route path="/tac" component={Toc}/>
                    <Route path="/privacy" component={Privacy}/>
                    <Route path="/question" component={Question}/>
                    <Route path="/invoice/:idtrx" component={Invoice}/>
            </HashRouter>
        )
    }
}

export default Main;