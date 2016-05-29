var React = require("react"),
    css = require("classnames");

var Badges = React.createClass({

    propTypes: {
        id: React.PropTypes.string,
        className: React.PropTypes.string,
        value: React.PropTypes.number,
        disabled: React.PropTypes.bool
    },

    getDefaultProps: function () {
        return {
            id: "badge",
            className: "",
            disabled: false
        }
    },

    render: function () {
    
        var labelCss = css(this.props.className, {
            "badge": true,
            disabled: this.props.disabled
        });

        if (typeof(this.props.value) === "undefined") {
            return;
        }
        return (
            <span className={labelCss}>{this.props.value}</span>
        );
    }
});

module.exports = Badges;