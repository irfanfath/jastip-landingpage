import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import About from "./Container/About";
import Faq from "./Container/Faq";
import Forgot from "./Container/Forgot";
import Home from "./Container/Home";
import Invoice from "./Container/Invoice";
import Privacy from "./Container/Privacy";
import Question from "./Container/Question";
import Success from "./Container/Success";
import Failed from "./Container/Failed";
import Toc from "./Container/Toc";
import Validate from "./Container/Validate";
import TrxSuccess from "./Container/TrxSuccess";
import TrxFail from "./Container/TrxFail";
import TrxWait from "./Container/TrxWait";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <DynamicScrollToTop/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/faq" component={Faq}/>
                    <Route path="/tac" component={Toc}/>
                    <Route path="/privacy" component={Privacy}/>
                    <Route path="/about" component={About}/>
                    <Route path="/validate/:validId" component={Validate}/>
                    <Route path="/forgot/:verifId" component={Forgot}/>
                    <Route path="/success" component={Success}/>
                    <Route path="/trxsuccess" component={TrxSuccess}/>
                    <Route path="/trxfail" component={TrxFail}/>
                    <Route path="/trxwait" component={TrxWait}/>
                    <Route path="/failed" component={Failed} />
                    <Route path="/question" component={Question}/>
                    <Route path="/invoice/:idtrx" component={Invoice}/>
            </HashRouter>
        )
    }
}

export default Main;