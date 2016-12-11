<<<<<<< HEAD
import React from 'react';
import FormTextField from '../generals/FormTextField';
import { connect } from 'react-redux';
import LoginAction from './../../actions/loginAction';

var Login = React.createClass({

	getInitialState: function() {
		return {
			email: '',
			password: ''
		};
	},

	_handleChangeEmail: function(e) {
		this.setState({
			email: e.target.value
		})
	},

	_handleChangePassword: function(e) {
		this.setState({
			password: e.target.value
		})
	},

	_handleSubmit: function(e) {
		e.preventDefault();
		this.props.dispatch(LoginAction(this.state.email, this.state.password));
	},

	render: function() {
		return (
			<div>
				<h2>Login Page</h2>
				<form className="form-horizontal" onSubmit={this._handleSubmit}>
					<div className="form-group">
						<label htmlFor="email" className="col-md-2 control-label">Email</label>
						<div className="col-sm-10">
							<FormTextField type="email" id="email" handleChange={this._handleChangeEmail} fieldText={this.state.email} />
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="password" className="col-md-2 control-label">Password</label>
						<div className="col-sm-10">
							<FormTextField type="password" id="password" handleChange={this._handleChangePassword} fieldText={this.state.password} />
						</div>

					</div>

					<div className="form-group">
					    <div className="col-sm-offset-2 col-sm-10">
					      <div className="checkbox">
					        <label>
					          <input type="checkbox" /> Remember me
					        </label>
					      </div>
					    </div>
					  </div>
					  <div className="form-group">
					    <div className="col-sm-offset-2 col-sm-10">
					      <button type="submit" className="btn btn-default">Sign in</button>
					    </div>
					  </div>

				</form>
			</div>
		);
	}

});

function mapStateToProp(state) {
	return {
		auth: state.login
	}
};

export default connect(mapStateToProp)(Login);
=======
var React = require('react'),
    ReactRedux = require('react-redux'),
    Redux = require('redux'),
    LoginAction = require('../../actions/LoginAction'),
    LoginStore = require('../../stores/LoginStore'),
    FormLabel = require('../generals/FormLabel.js'),
    FormTextField = require('../generals/FormTextField.js'),
    CheckBox = require('../generals/FormCheckBox.js'),
    Button = require('../generals/Button.js');

var Login = React.createClass({

    getInitialState: function() {
        return {
            email: '',
            password: ''
        };
    },

    componentDidMount: function() {
        this.actions = Redux.bindActionCreators(LoginAction, this.props.dispatch);
        this.actions.validate();
    },

    _loginPanelAjaxSubmit: function(e) {
        console.log(e);
    },

    _handleEmail: function(e) {
        this.setState({
            email: e.target.value
        })
    },

    _handlePassword: function(e) {
        this.setState({
            password: e.target.value
        });
    },
    
    render: function() {
        return (
            <div>
                <h3>Please sign on.</h3>
                <form className="form-horizontal" onSubmit={this._loginPanelAjaxSubmit}>
                    <div className="form-group">
                        <FormLabel value="Email" htmlFor="email" />
                        <div className="col-md-10">
                            <FormTextField id="email" onChange={this._handleEmail} value={this.state.email}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <FormLabel value="Password" htmlFor="password" />
                        <div className="col-md-10">
                            <FormTextField  type="password" id="password" className="form-control" onChange={this._handlePassword} value={this.state.password}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <CheckBox label="Remember me" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-offset-2 col-md-10">
                            <Button value="Sign On" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
    
});

function mapStateToProps(state) {
    return { validate: state.loginReducer }
};

Login = ReactRedux.connect(mapStateToProps)(Login);
module.exports = Login;
>>>>>>> 9e89172e98715e6057ec64bd30976b5af8c1b967
