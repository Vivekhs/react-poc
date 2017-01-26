import React from 'react';

export default class ToDo extends React.Component{


    render(){
      console.log(this.props);
        const {text, complete} = this.props;
        const icon = complete ? "\u2714" : "\u2716";
        console.log(text);

        return(
          <li>
          <span>{text}</span>
            <span> {icon}</span>
          </li>
        );

    }

}
