//import the librarie to create component
import React from 'react';
import { Text, View } from 'react-native';

//create a component
const Header = (props) => {
	const { viewStyle, textStyle } = styles;//links to the styles function

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#f8f8f8',
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 4},
		shadowOpacity: 0.4,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 30
	}
};

//make the component available to other parts of the app
export default Header;
