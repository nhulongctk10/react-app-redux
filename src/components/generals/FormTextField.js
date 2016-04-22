var React = require('react');

var FormTextField = React.createClass({

	PropTypes: {
		className: React.PropTypes.string,
		isRequired: React.PropTypes.bool,
		type: React.PropTypes.string,
		id: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			className: "form-control",
			type: "text",
			isRequired: false
		};
	},

	render: function() {
		return (
			<input type={this.props.type} id={this.props.id} onChange={this.props.onChange}  className={this.props.className} />
		);
	}

});

module.exports = FormTextField;