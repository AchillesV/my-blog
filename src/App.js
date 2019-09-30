import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import { Menu, Icon, Layout, Tooltip, Input } from 'antd';
import store from './Store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './Router';
import Profile from './Blog/Profile';
import logo from './assets/logo.jpg'

const { Search } = Input;


const { Content, Footer } = Layout;





class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      currentPage: '',
      toTop: '',
      searchKeys: '',
      visibleSearch: true,
    }
  }




  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.location.href.length < 23 ? this.setState({visibleSearch: true}) : this.setState({visibleSearch: false}) 

  }

  fetchBlogLists = () => {

  }

  handleScroll = () => {
    this.setState({toTop: window.scrollY})
  }


  handleClick = (e) => {
    window.location.href.length < 23 ? this.setState({visibleSearch: true}) : this.setState({visibleSearch: false}) 
    console.log(e.key)
    console.log(store)
    this.setState({
      currentPage: e.key
    })
  }

  handleSearch = (payload) => {
    
    this.setState({searchKeys: payload}, ()=>{
      const {searchKeys} = this.state;
      console.log(searchKeys)
    })
  }

  render() { 
    const { currentPage, toTop,visibleSearch } = this.state;
    console.log(document.body.scrollTop)

    return (      
      <Provider store={store}>
        <Router>
          <Layout>
            {/* 左侧导航栏 */}
            <div className='sider'> 
              <div className='sider-top'>
                
                <p>WHT | Blog</p>
                <p style={{fontWeight: 'lighter'}}>Welcome!</p>
                {visibleSearch ? 
                  <Search
                    placeholder="搜索"
                    onSearch={value => this.handleSearch(value)}
                    style={{ width: 180 }}                  
                  />
                  
                : null}

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

              <div 
                style={{visibility: toTop ? 'visible' : 'hidden' }}
                className = 'toTop'                
                onClick = {() => document.documentElement.scrollTop = document.body.scrollTop = 0}
              >
                <Tooltip title="返回顶部"><Icon type='up' style={{width: '25px', height: '25px'}}/></Tooltip>
              </div>

              <Footer style={{ textAlign: 'center', width: '790px' }}> ©2019 ❤ WHT</Footer>
            </Layout>
          </Layout>
        </Router>
      </Provider>      
    );
  }
}

export default App;
