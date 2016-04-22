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