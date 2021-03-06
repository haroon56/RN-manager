import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Picker, Text } from 'react-native';
// import { Text, View } from 'react-native';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

// const { labelStyle } = styles;
class EmployeeCreate extends Component {
onButtonPress() {
	const { name, phone, shift } = this.props;
	this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
}
render() {
return (
<Card>
	<EmployeeForm {...this.props} />
	<CardSection>
	<Button onPress={this.onButtonPress.bind(this)}>Create</Button>
	</CardSection>
</Card>

	);
}
}
const mapStateToProps = ({ employeeForm }) => {
const { name, phone, shift } = employeeForm;

return { name, phone, shift };
};


export default connect(mapStateToProps, { 
	employeeUpdate, 
	employeeCreate })(EmployeeCreate);
