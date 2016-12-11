// ActionCreator

import { CHANGE_AUTH } from './../constants/actionTypes';

function auth(usrename, password) {
    if(usrename === "longntran@gmail.com" && password === "1234")
        return true;
    return false;
}

export default function(username, password) {
	return {
		type: CHANGE_AUTH, 
		payload: auth(username, password)
	};
}