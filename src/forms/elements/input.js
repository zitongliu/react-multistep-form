import React from 'react';

const InputField = (props) => {

  return (
    <div className="ctrl-holder">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="ctrl">
        <input type="text" id={props.id} name={props.name} placeholder={props.placeholder} onChange={(event)=> { props.handleInputChange(props.name, event.target.value ) }} />
      </div>
    </div>
  );
}

export default InputField;
