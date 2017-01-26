import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class Nav extends React.Component{

    constructor(){
      super();
      this.state={
        collapsed:true
      }

    }

    toggleCollapse(){

      const collapsed = !this.state.collapsed;
      this.setState({collapsed});
    }


    render(){
      const {location} = this.props;
      const {collapsed} = this.state;
      const featuresClass = location.pathname =='/' ? 'active':'';
      const archivesClass = location.pathname.match('/^\/archives/') ? 'active':'';
      const settingsClass = location.pathname.match('/^\/settings/') ? 'active':'';
      const navClass = collapsed ? "collapse":"";


        return(
            <div class="container">

            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" onClick={this.toggleCollapse.bind(this)} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand">Demo App</a>
                </div>

                <div class={"navbar-collapse "+navClass} id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li class={featuresClass}><IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Features</IndexLink></li>
                  <li class={archivesClass}><Link to="/archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link></li>
                  <li class={settingsClass}><Link to="/settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link></li>
                </ul>
                </div>
            </nav>

            </div>
        );

    }
}
