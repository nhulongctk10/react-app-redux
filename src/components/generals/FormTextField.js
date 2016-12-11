var React = require('react');

var FormTextField = React.createClass({

<<<<<<< HEAD
	getInitialState: function() {
		return {
			value: ''
		};
	},

	_handleChange: function(e) {
		this.props.handleChange(e);
=======
	PropTypes: {
		className: React.PropTypes.string,
		isRequired: React.PropTypes.bool,
		type: React.PropTypes.string,
		id: React.PropTypes.string
>>>>>>> 9e89172e98715e6057ec64bd30976b5af8c1b967
	},

	getDefaultProps: function() {
		return {
<<<<<<< HEAD
			type: 'text',
			className: 'form-control'
=======
			className: "form-control",
			type: "text",
			isRequired: false
>>>>>>> 9e89172e98715e6057ec64bd30976b5af8c1b967
		};
	},

	render: function() {
<<<<<<< HEAD
		var fieldText = this.props.fieldText;
		return (
			<input type={this.props.type} value={fieldText} className={this.props.className} onChange={this._handleChange} />
=======
		return (
			<input type={this.props.type} id={this.props.id} onChange={this.props.onChange}  className={this.props.className} />
>>>>>>> 9e89172e98715e6057ec64bd30976b5af8c1b967
		);
	}

});

module.exports = FormTextField;