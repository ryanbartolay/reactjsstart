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

// nesting component (Presentation Component - render html to the browser)
var GreeterForm = React.createClass({
    onFormSubmit: function (event) {
        event.preventDefault(); // The event.preventDefault() method stops the default action of an element from happening.
        // For example: 
        //  Prevent a submit button from submitting a form
        //  Prevent a link from following the URL

        var name = this.refs.name.value; // refs are for the reference name on input types

        if (typeof name === "string" && name.length > 0) {
            this.props.onNewName(name);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name" />
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

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
    handleNewName: function (name) {
        if (typeof name === "string" && name.length > 0) { // this will check if name is a string and length is greater than 0
            this.setState({
                name: name
            });
        }
    },
    render: function () { // this is predefined element in react, renders html to be replaced on the greeter place holder
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName} />
            </div>
        ); // encapsulates the form into a nested component GreeterForm
    }
});

var name = "Ryan";

ReactDOM.render(
    <Greeter name={name} message="overrided component message" />,
    document.getElementById("app")
);