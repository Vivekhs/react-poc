import React from 'react';

export default class Article extends React.Component{

  render(){
      return(
            <div class="col-md-4">
                <h3>{this.props.title}</h3>
                <p>In the “Writing with Purpose” section of the Pattern Based Writing: Quick & Easy Essay program,
                students learn to apply their new writing strategies to different types (or modes) of writing.
                The truth is — it’s quite easy to get students writing many different types of paragraphs when they have the right foundation.
                </p>
            </div>
      );

  }
}
