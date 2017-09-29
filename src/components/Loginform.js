import React, { Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import Input from './common/Input';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Spinner from './common/Spinner';

class Loginform extends Component {

	state = { email: '', password: '', error:'', loading: false };

	onButtonPress() {
		const {email, password} = this.state;
		this.setState({error: '', loading: true});
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then (this.onLoginSuccess.bind(this))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then (this.onLoginSuccess.bind(this))
			.catch(this.onLoginFail.bind(this))
		});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed.',
			loading: false
		});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size={'small'}/>;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in
			</Button>
		);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
					label='Email'
					placeholder='user@yourmail.com'
					value={this.state.email}
					onChangeText={email => this.setState({email})}
					/>
				</CardSection>
				
				<CardSection>
					<Input
					secureTextEntry
					label='Password'
					placeholder='password'
					value={this.state.password}
					onChangeText={password => this.setState({password})}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>{this.state.error}</Text>
				
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles= {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default Loginform;