import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";




class Category extends React.Component {
  render() {
    const { categories } = this.props;
    
    return(
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          <h2><Icon type='appstore'/>&nbsp;分类</h2>
          <p>目前共计 {categories.length} 个分类</p>
          <div style={{textAlign: 'left', marginLeft: '30px'}}>
            <ul>
              {
                categories.map((item,key) => {
                const url = './detail/' + item.category;
                return  <li key={key}><Link to={url}>{item.category}（{item.count}）</Link></li>
                })
              }
            </ul>

          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </div>

    )
  }
}


const mapStatetoProps = (state) => {
  return {
    categories: state.categoryData
  }
}
    
    
export default connect(mapStatetoProps, null)(Category);
