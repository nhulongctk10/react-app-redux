var React = require("react");
var Badge = require("../src/components/Badges");

var Demo = React.createClass({

    render: function () {
        return (
            <div>
                <button className="btn btn-primary">
                    Message
                    <Badge
                        value={3}
                    />
                </button>
            </div>
        );
    }

});

module.exports = Demo;