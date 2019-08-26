import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import { Menu, Icon, Layout } from 'antd';
import store from './Store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './Router';
import Profile from './Blog/Profile';
import logo from './assets/logo.jpg'



const { Content, Footer } = Layout;





class App extends React.Component{

  state={
    currentPage: ''
  }


  handleClick = (e) => {
    console.log(e.key)
    console.log(store)
    this.setState({
      currentPage: e.key
    })


  }

  render() { 
    const { currentPage } = this.state;
    return (      
      <Provider store={store}>
        <Router>
          <Layout>
            {/* 左侧导航栏 */}
            <div className='sider'> 
              <div className='sider-top'>
                <p>WHT | Blog</p>
                <p style={{fontWeight: 'lighter'}}>Welcome!</p>
              </div> 
              {/* 导航组件 */}          
              <Menu
                onClick={this.handleClick}
                style={{color: 'black', paddingTop: 20, paddingBottom: 20}}
                defaultSelectedKeys={[currentPage]}
                mode="inline"
              >

                <Menu.Item key='index'><Icon type='home' />首页<Link to='' /></Menu.Item>
                <Menu.Item key='category'><Icon type='appstore' />分类<Link to='../category' /></Menu.Item>
                <Menu.Item key='tag'><Icon type='tag' />标签<Link to='../tag'/></Menu.Item>
              </Menu>  
            </div>
            <div className='profile'>
              <Profile logo={logo} />
            </div>
            <Layout style={{ marginLeft: 409 }}>
              {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
              <Content style={{ margin: '0 168px 0 20px', overflow: 'initial' }}>
                {
                  routes.map((route,key) => {
                    if(route.exact) {
                      return (
                        <Route 
                          exact
                          key={key} 
                          path={route.path} 
                          component={route.component}
                          /* render={props => <route.component {...props} />} */ 
                        />)
                    } else {
                      return (
                        <Route 
                          key={key} 
                          path={route.path} 
                          component={route.component}
                          /* render={props => <route.component {...props} />}  */
                        />
                      )
                    }
                  })
                                  
                }
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        </Router>
      </Provider>      
    );
  }
}

export default App;
