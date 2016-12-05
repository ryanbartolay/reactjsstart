var React = require("react");
var GreeterMessage = require("./GreeterMessage");
var GreeterForm = require("./GreeterForm");

// Container Components - keeps the state of the component and the related components
var Greeter = React.createClass({ // basic class creation and will return as a component
    getDefaultProps: function () { // this is predefined as it gets and sets default component propertieS
        return {
            name: "React",
            message: "This is a component"
        }
    },
    getInitialState: function () { // Sets initial state of the form
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewUpdates: function (updates) {
        this.setState(updates);
    },
    render: function () { // this is predefined element in react, renders html to be replaced on the greeter place holder
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewUpdates={this.handleNewUpdates} />
            </div>
        ); // encapsulates the form into a nested component GreeterForm
    }
});

module.exports = Greeter;