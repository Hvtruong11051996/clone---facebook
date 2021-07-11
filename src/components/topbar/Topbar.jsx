import { AppstoreOutlined, BellOutlined, CaretDownOutlined, GiftOutlined, HomeOutlined, LayoutOutlined, MessageOutlined, SearchOutlined, UsergroupAddOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Col, Input, Row, Tooltip } from 'antd';
import React, { Component } from 'react';
import Avatar from '../../images/img_3.jpg';
import Logo from '../../images/logo.png';
import './topbar.scss';

const topIcon = [
  {
    title: "Trang chủ",
    icon: <HomeOutlined />
  },
  {
    title: "Watch",
    icon: <YoutubeOutlined />
  },
  {
    title: "Marketplace",
    icon: <GiftOutlined />
  },
  {
    title: "Nhóm",
    icon: <UsergroupAddOutlined />
  },
  {
    title: "Trò chơi",
    icon: <LayoutOutlined />
  }
]

const topIconAction = [
  {
    title: "Menu",
    icon: <AppstoreOutlined />
  },
  {
    title: "Messenger",
    icon: <MessageOutlined />
  },
  {
    title: "Thông báo",
    icon: <BellOutlined />
  },
  {
    title: "Tài khoản",
    icon: <CaretDownOutlined />
  }
]

class Topbar extends Component {

  handleAddClass = (number) => {
    // const elmentClass = document.getElementsByClassName('fb-topbar__center-icon')
  }

  render() {
    return (
      <div className="fb-topbar">
        <Row>
          <Col span={6}>
            <div className="fb-topbar__left">
              <div className="fb-topbar__left-logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="fb-topbar__left-search">
                <Input size="large" placeholder="Tìm kiếm facebook" prefix={<SearchOutlined />} />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="fb-topbar__center">
              {topIcon && topIcon.map((icon, index) => {
                return (
                  <Tooltip title={icon.title} key={index}>
                    <div onClick={() => this.handleAddClass(index)} className="fb-topbar__center-icon" >
                      {icon.icon}
                    </div>
                  </Tooltip>
                )
              })}
            </div>
          </Col>
          <Col span={6}>
            <div className="fb-topbar__right">
              <div className="fb-topbar__right-user">
                <img src={Avatar} alt="avatar" />
                <h5>Hoàng Văn Trường</h5>
              </div>
              {topIconAction && topIconAction.map((action, index) => {
                return (
                  <Tooltip title={action.title} key={index}>
                    <div className="fb-topbar__right-action" >
                      {action.icon}
                    </div>
                  </Tooltip>
                )
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Topbar;