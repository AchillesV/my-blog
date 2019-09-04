import React from 'react';
import { Tag, Divider, Icon, Tooltip } from 'antd';
import wechat from './../assets/wechat.jpg'
import { Link } from 'react-router-dom'


class Profile extends React.Component {
  wechat = () => {
    return (
      <img style={{width: '120px', }} src={wechat} alt='wechat' />
    )
  }
  render(){
    return (
      <div>
        <div style={{textAlign: 'center', marginBottom: '10px'}}>
          <img src={this.props.logo} alt='logo' style={{ margin: '20px 90px 10px 90px', width: '60px', borderRadius: '50%' }} />
          <br/>
          <span >wang.hai.tao</span>
        </div>
        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'space-around'}}>
          <Link style={{color: '#555555'}} to='/'><span>4<br/>文章</span></Link>
          
          <Link style={{color: '#555555'}} to='../category'><span>4<br/>分类</span></Link>
          
          <Link style={{color: '#555555'}} to='../tag'><span>8<br/>标签</span></Link>
        </div>
        <br />
        <div style={{margin: '0 20px 10px 40px'}}>
          <Tag color="#f50">PC</Tag>
          <Tag color="#2db7f5">移动端</Tag>
          <Tag color="#87d068">小程序</Tag>
          
        </div>
        <div style={{width: '200px', margin: '30px 26px 30px 26px'}}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div><Tooltip placement='top' title={this.wechat}><Icon type='wechat'/>&nbsp;微信</Tooltip></div>
            <div><a style={{color: 'black'}} href='https://github.com/AchillesV'><Icon type='github'/>&nbsp;GitHub</a></div> 
          </div>
          <br/>
          <div style={{display: 'flex', justifyContent: 'space-around', }}>
            <div><a style={{color: 'black'}} href='https://www.zhihu.com/'><Icon type='global'/>&nbsp;知乎</a></div> 
            <div><a style={{color: 'black'}} href='https://weibo.com'><Icon type='weibo'/>&nbsp;微博</a></div> 
          </div>
        </div>




      </div>
    )
  }
}


export default Profile;