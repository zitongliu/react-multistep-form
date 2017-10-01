import React, {Component} from 'react';
import InputField from './elements/input';

class ContactComponent extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      testFieldd: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateStepState = this.updateStepState.bind(this);
  }

  updateStepState(fieldName, newValue) {
    this.setState({[fieldName]: newValue});
  }

  handleInputChange(fieldName, newValue) {
    this.updateStepState(fieldName, newValue);
  }

  render() {
    return (
      <div>
        <InputField label="First Name" name="firstName" value={this.state.firstName} handleInputChange={this.handleInputChange} />
        <InputField label="Last Name" name="lastName" value={this.state.lastName} handleInputChange={this.handleInputChange} />
        <InputField label="Email" name="email" placeholder="example@email.com" value={this.state.email} handleInputChange={this.handleInputChange} />
      </div>
    );
  }
}

export default ContactComponent;
