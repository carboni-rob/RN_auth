import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/common/header';
import Loginform from './src/components/Loginform';
import Button from './src/components/common/Button';
import Card from './src/components/common/Card';
import CardSection from './src/components/common/CardSection';
import Spinner from './src/components/common/Spinner';

class App extends Component {

	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp ({
	    apiKey: 'AIzaSyDxHGWryir6WkmlUWarpmbwGd3Vohxbk7Q',
	    authDomain: 'authentication-56f88.firebaseapp.com',
	    databaseURL: 'https://authentication-56f88.firebaseio.com',
	    projectId: 'authentication-56f88',
	    storageBucket: 'authentication-56f88.appspot.com',
	    messagingSenderId: '173704136277'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState ({ loggedIn: true });
			} else {
				this.setState ({ loggedIn: false });
			}
		});			
	}

	renderContent() {

		switch (this.state.loggedIn) {
			
			case true:
				return (
				<Card>
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				</Card>
			);
			
			case false:
				return <Loginform />;
			
			default: 
				return (
					<Card>
						<CardSection>
							<Spinner size={'large'} />
						</CardSection>
					</Card>
				);
		}

	}

	render() {
    return (
    	<View>
    		<Header headerText={'Authentication'} />
      		{this.renderContent()}
    	</View>
    );
  }
}

export default App;