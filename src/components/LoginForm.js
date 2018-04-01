import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, styles, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
onEmailChange(text) {
		this.props.emailChanged(text);
	}
onPasswordChange(text) {
	this.props.passwordChanged(text);
}
onButtonPress() {
const { email, password } = this.props;
this.props.loginUser({ email, password });
}
renderError() {
const { errorTextStyle } = styles;
	if (this.props.error) {
		return (
			<View>
				<Text style={errorTextStyle}>
				{this.props.error}
				</Text>
			</View>
			);
	}
}
renderButton() {
	const loading = this.props.loading;
	return loading ? <Spinner size='large' />
	:
	<Button onPress={this.onButtonPress.bind(this)}>
			Log In
		</Button>;
}

render() {
return (
	<Card>
		<CardSection>
		<Input 
		label='Email' 
		placeholder='abc@gmail.com'
		onChangeText={this.onEmailChange.bind(this)}
		value={this.props.email}
		/>
		</CardSection>

		<CardSection>
		<Input
		secureTextEntry 
		label='Password'
		placeholder='Password'
		onChangeText={this.onPasswordChange.bind(this)}
		value={this.props.password}
		/>
		</CardSection>
		{this.renderError()}
		<CardSection>
		{this.renderButton()}
		</CardSection>
	</Card>
	);
}	
}
const mapStateToProps = ({ auth }) => {
const { email, password, error, loading } = auth;

return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
