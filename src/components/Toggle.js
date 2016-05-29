"use strict";

var React = require("react");

var Toggle = React.createClass({

    propTypes: {
        id: React.PropTypes.string,
        className: React.PropTypes.string,
        value: React.PropTypes.bool,
        toggled: React.PropTypes.bool,
        onToggle: React.PropTypes.func
    },

    getDefaultProps: function () {
        return {
            id: "toggle"
        }
    },

    getInitialState: function () {
        toggled: this.props.toggled ? true : false 
    },

    render: function () {

    }
});

module.exports = Toggle;