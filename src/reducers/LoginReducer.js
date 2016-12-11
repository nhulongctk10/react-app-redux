'use strict'

var LoginAction = require('../actions/LoginAction.js'),
	_ = require('underscore');

var initialState = {
	loginValidate: true,
	loginSuccess: false
};

function validate(email, password) {
	if (_.isNull(email) || _.isNull(password)) {
		return false;
	}

	return false;
};

function submit(email, password) {
	if(validate(email, password)) {
		if (email==='longntran@kms-technology.com' && password==='12345') {
			return true;
		}
	}

	return false;
}


module.exports = function(state, action) {
	var nextState = _.clone(state);

	switch(action.type) {
		case LoginAction.Types.LOGIN_VALIDATE:
			if (validate(action.email, action.password)) {
				return true;
			} else {
				return false;
			}
			break;

		case LoginAction.Types.LOGIN_SUBMIT:
			if (submit(action.email, action.password)) {
				return true;
			} else {
				return false;
			}

			break;
		case LoginAction.Types.LOGIN_SUCCESS:
		case LoginAction.Types.LOGIN_FAILED:
		default:
			return state || initialState;
	}

	return nextState;
}