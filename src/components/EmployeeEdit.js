import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { CardSection, Card, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}
componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}
onButtonPress() {
const { name, phone, shift } = this.props;
this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
}
onTextPress() {
	const { phone, shift } = this.props;
	Communications.text(phone, `Your upcoming working day is ${shift}`);
}
onDecline() {
	this.setState({ showModal: false });
}
onAccept() {
	const { uid } = this.props.employee;
this.props.employeeDelete({ uid });
}
showModal() {
	this.setState({ showModal: !this.state.showModal });
}
render() {
	return (
		<Card>
			<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
					Save Changes
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}>
					Text Schedule
					</Button>
				</CardSection>

				<CardSection>
				<Button onPress={this.showModal.bind(this)}>
				Fire Employee
				</Button>
				</CardSection>

				<Confirm
				visible={this.state.showModal}
				onDecline={this.onDecline.bind(this)}
				onAccept={this.onAccept.bind(this)}
				>
				Are You sure you want to delete this? 
				</Confirm>
		</Card>
			);
	}
}
const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};
export default connect(mapStateToProps, { 
	employeeUpdate,
	employeeSave,
	employeeDelete })(EmployeeEdit);
