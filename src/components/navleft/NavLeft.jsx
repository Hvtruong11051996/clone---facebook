import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../images/img_3.jpg';
import DataLeft from '../../JsonData/nav_left.json';
import './navleft.scss';

class NavLeft extends Component {
  render() {
    return (
      <div className="fb-left">
        <div className="fb-left__title">
          <img src={Avatar} alt="avatar" />
          <h5>Hoàng Văn Trường</h5>
        </div>
        {DataLeft && DataLeft.map((data, index) => {
          return (
            <div className="fb-left__content" key={index}>
              <Link to={data.path} >
                <img src={data.url} alt="img" />
                <h5>{data.title}</h5>
              </Link>
            </div>
          )
        })
        }
      </div >
    );
  }
}

export default NavLeft;
