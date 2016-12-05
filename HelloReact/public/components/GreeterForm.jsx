var React = require("react");

// nesting component (Presentation Component - render html to the browser)
var GreeterForm = React.createClass({
    onFormSubmit: function (event) {
        event.preventDefault(); // The event.preventDefault() method stops the default action of an element from happening.
        // For example: 
        //  Prevent a submit button from submitting a form
        //  Prevent a link from following the URL

        var updates = {};

        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (typeof name === "string" && name.length > 0) {
            this.refs.name.value = "";
            updates.name = name;
            this.props.onNewUpdates(updates);
        }

        if(typeof message === "string" && message.length > 0) {
            this.refs.message.value = "";
            updates.message = message;
            this.props.onNewUpdates(updates);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name" /><br />
                    <textarea ref="message" /><br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = GreeterForm;