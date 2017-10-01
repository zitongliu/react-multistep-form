import React, {Component} from 'react';

import InputField from './elements/input';
import ContactComponent from './multi-step-contact';

class MultiStepForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    }

    this.updateTopLevelState = this.updateTopLevelState.bind(this);
  }


  updateTopLevelState(state) {
    this.setState(state)
  }

  render() {
    return (
      <form action="" className="multistep-form">
        <h2>Multi Step Form</h2>
        <ContactComponent updateTopLevelState={this.updateTopLevelState}/>
      </form>
    );
  }
}

export default MultiStepForm;
