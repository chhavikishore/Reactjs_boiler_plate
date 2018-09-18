import React from "react";
import { render } from "react-dom";

//importing component using .js extension file in app.js
import "./Component/Header";

//importing scss files
import './styles/base.scss';
import './styles/styles.scss';

//importing component of material ui
import Button from "../node_modules/@material-ui/core/Button";

console.log("it doesn't work !!");

class App extends React.Component {
    render() {
        return (
            <Button>Working..</Button>

        );
    }
}

render(<App />, document.getElementById("root")); //rendering to root div in html