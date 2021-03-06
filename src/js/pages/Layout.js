import React from 'react';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

export default class Layout extends React.Component {

    render(){
      console.log(this.props.children);
      const containerStyle ={
        marginTop:"60px"
      }
      const {location} = this.props;
        return(
            <div>
            <Nav location ={location} />

            <div class="container" style={containerStyle}>
              <div class="row">
                <div class="col-lg-12">
                  <h2>problemsToDo.com</h2>
                </div>
              </div>
              {this.props.children}
              <Footer />
              </div>

            </div>
        );
    }

}
