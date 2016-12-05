var React = require("react");

// nesting component (Presentation Component - render html to the browser)
var GreeterMessage = React.createClass({
    render: function () { // always remember that a component MUST always have a render function

        var name = this.props.name; // props is for the properties rendered in html tags
        var message = this.props.message;

        return ( // Static content to be injected in main component
            <div>
                <h1>Hello {name}!@#</h1>
                <p>{message}</p>
            </div>
        );
    }
});

module.exports = GreeterMessage;