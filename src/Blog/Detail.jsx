import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';



class Detail extends React.Component {

  state = {
    detail : {
      title: 'JS',
      count: '8',
      content: [
        {
          id: '1',
          article: '你不知道的JS',
          time: '8/16'
        },
        {
          id: '2',
          article: '你不知道的ES',
          time: '8/18'
        },
        {
          id: '3',
          article: '你不知道的TS',
          time: '8/18'
        },
        {
          id: '4',  
          article: '你不知道的JS',
          time: '8/16'
        },
        {
          id: '5',  
          article: '你不知道的ES',
          time: '8/18'
        },
        {
          id: '6',
          article: '你不知道的TS',
          time: '8/18'
        },
        {
          id: '7',
          article: '你不知道的ES',
          time: '8/18'
        },
        {
          id: '8',
          article: '你不知道的TS',
          time: '8/18'
        },
      ]
    }
  }

  render() {
    const { detail } = this.state;
    
    return(
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          <h2><Icon type='appstore'/>&nbsp;JS</h2>
          <p>目前共计 {detail.count} 篇文章</p>
          <div style={{textAlign: 'left', marginLeft: '30px'}}>
            <ul>
              {
                detail.content.map((item,key) => {
                  const url = 'http://localhost:3000/post/' + item.id;
                  return (<li key={key}><a href={url}>{item.time}|{item.article}</a></li>)
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
    
    
export default connect(mapStatetoProps, null)(Detail);
