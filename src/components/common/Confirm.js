import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';
import { styles } from './styles';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
// onButtonPress = () => {
const { cardSectionStyle, modalTextStyle, modalContainerStyle } = styles;
// 	};
return (
	<Modal
	visible={visible}
	animationType='slide'
	onRequestClose={() => {}}
	transparent
	>
	<View style={modalContainerStyle}>
	<CardSection style={cardSectionStyle}>
	<Text style={modalTextStyle}>{children}</Text>
	</CardSection>
	<CardSection>
	<Button onPress={onAccept}>Yes</Button>
	<Button onPress={onDecline}>No</Button>
	</CardSection>

	</View>
	</Modal>
	);
};


export { Confirm };
