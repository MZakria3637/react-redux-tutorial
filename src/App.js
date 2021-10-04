import logo from './logo.svg';
import './App.css';
import { connect, useStore } from "react-redux";
import { startAction } from "./actions/startAction"
import { stopAction } from "./actions/stopAction"

function App(props) {
    const store = useStore()
    return ( <
        div className = "App" >
        <
        header className = "App-header" >

        = { log o }
        className = { "Ap p - logo " + props.rotating ? " " : " app-logo-paused" }
        alogo "  = {pro p s.rotating ? props.stopAction : props.startAction } / > <
        p >
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        reac t js.org "
        "  
        oopener nor e ferrer " >
        eact <
        /a> < /
        header > <
        /div>

    }
    const mapStateToProps = state => ({


                const mapDispatchToProps = dispatch => ({
                        () => dispatch(startAction),
                        stopAction: () => dispatch(stopAction)
                    }


                    apStateToProps, mapDispatchToProps)(App);