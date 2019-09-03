import React from 'react';
import { connect } from 'react-redux';
import { Button, Divider } from 'antd';
import { Link } from "react-router-dom";

class Index extends React.Component {
   state = {
    articlesId: '',

  }

  handleClick = (article) => {
    this.setState({
      articlesId: article.id,
    })
  }

  render() {
    const { articles } = this.props;
    console.log(this.state.articlesId);
    return(
      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        {articles.map((article,key) => {
          const url = 'post/' + article.id;
          return (
            <div key={key}>
              <h3><Link style={{color: '#555555'}} to={url}>{article.title}</Link></h3>
              <div style={{fontWeight: "lighter"}}>
                发表于 {article.time} 
                <Divider type='vertical' />
                分类于 {article.category}
              </div>
              <p style={{ textAlign: 'left' }}>{article.content.length > 50 ? `${article.content.substring(0,150)}...` : article.content}</p>
              <Button onClick={() => this.handleClick(article)}><Link to={url}>阅读全文</Link></Button>
              <Divider dashed />
              <br/>
              <br/>
              <br/>
            </div>
          )
        })}
        <br/>

      </div>
    )
  }
}



const mapStatetoProps = (state) => {
  return {
    articles: state.homeData
  }
}


export default connect(mapStatetoProps, null)(Index);