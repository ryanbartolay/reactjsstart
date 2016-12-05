var React = require("react");
var ReactDOM = require("react-dom");
var Greeter = require("Greeter");

var name = "Ryan";

ReactDOM.render(
    <Greeter name={name} message="overrided component message" />,
    document.getElementById("app")
);