import React from 'react';
import { Tag, Divider } from 'antd';


class Profile extends React.Component {
  render(){
    return (
      <div>
        <div style={{ margin: '20px 90px 20px 90px', textAlign: 'center'}}>
          <img src={this.props.logo} alt='logo' style={{ width: '60px', borderRadius: '50%' }} />
          <span>个人简介</span>
        </div>
        <div style={{textAlign: 'center', display: 'flex'}}>
          <span>9<br/>文章</span>
          <Divider type='vertical' />
          <span>9<br/>分类</span>
          <Divider type='vertical' />
          <span>9<br/>标签</span>
        </div>
        <br />
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
      </div>
    )
  }
}


export default Profile;