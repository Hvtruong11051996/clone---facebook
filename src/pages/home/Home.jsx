import React, { Component } from 'react';
import './home.scss';
import Topbar from '../../components/topbar/Topbar.jsx';
import NavLeft from '../../components/navleft/NavLeft';
import Main from '../../components/main/Main';
import NavRight from '../../components/navright/NavRight';

class Home extends Component {
  render() {
    return (
      <div className="fb-home">
        <Topbar></Topbar>
        <div className="fb-home__content">
          <NavLeft></NavLeft>
          <Main></Main>
          <NavRight></NavRight>
        </div>
      </div>
    );
  }
}

export default Home;