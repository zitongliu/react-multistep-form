import React from 'react';

const TextareaField = (props) => {

  return (
    <div className="ctrl-holder">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="ctrl">
        <input type="textarea" id={props.id} name={props.name} placeholder={props.placeholder} onChange={(event)=> { props.handleInputChange(props.name, event.target.value ) }} value={props.value} />
      </div>
    </div>
  );
}

export default TextareaField;
