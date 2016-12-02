// nesting component
var GreeterMessage = React.createClass({
    render: function () { // always remember that a component MUST always have a render function
        return ( // Static content to be injected in main component
            <div>
                <h1> Some H1</h1>
                <p>Some paragraph</p>
            </div>
        );
    }
});

// nesting component
var GreeterForm = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <input type="text" ref="name" />
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

var Greeter = React.createClass({ // basic class creation and will return as a component
    getDefaultProps: function () { // this is predefined as it gets and sets default component propertieS
        return {
            name: "React",
            message: "This is a component"
        }
    },
    getInitialState: function () { // Sets initial state of the form
        return {
            name: this.props.name
        };
    },
    onButtonClick: function (event) {
        event.preventDefault(); // The event.preventDefault() method stops the default action of an element from happening.
        // For example: 
        //  Prevent a submit button from submitting a form
        //  Prevent a link from following the URL
        var nameRef = this.refs.name;
        var name = nameRef.value; //  this will get the value in the form

        if (typeof name === "string" && name.length > 0) { // this will check if name is a string and length is greater than 0
            this.setState({
                name: name
            });
        }

        nameRef.value = ""; // this will reset the input type text
    },
    render: function () { // this is predefined element in react, renders html to be replaced on the greeter place holder
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello from {name}!</h1>
                <p>{message + "!!!"}</p>

                <GreeterMessage />

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name" />
                    <button>Set Name</button>
                </form>

                <GreeterForm />
            </div>
        ); // encapsulates the form into a nested component GreeterForm
    } 
});

var name = "Ryan";

ReactDOM.render(
    <Greeter name={name} message="overrided component message" />,
    document.getElementById("app")
);