'use strict';

var keyMirror = require('keyMirror');
    //api = require('../../../core/WebPortalDataSourceApi.js');

exports.Types = keyMirror({
    PID_LOAD_USER_GROUP: null
});

exports.receiveUserGroups = function (data) {
    return {
        type: exports.Types.PID_LOAD_USER_GROUP,
        data: data
    };
};

exports.loadUserGroup = function () {
    return function (dispatch) {
        //api.get('rest-ng/dock/generalbranding', null, function (resp) {
            dispatch(exports.receiveUserGroups("test"));
        //});
    };
};
