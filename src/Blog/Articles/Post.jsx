import React from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';
import { Divider, Input, Icon, Button} from 'antd';

const { TextArea } = Input;

class Post extends React.Component {
  
  state = {
    comment: '要把所有的夜归还给星河，把所有的春光归还给疏疏篱落，把所有的慵慵沉迷与不前，归还给过去的我。明日之我，胸中有丘壑，立马振山河。'
  }

  handleSubmit = (e) => {
    
    console.log(e)
  }


  render() {

    
    const {article} = this.props;
    const {comment} = this.state;

    
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    return(
        <div style={{ padding: 24, background: '#fff', textAlign: 'left' }}>
          <h3>| {article[0].title}</h3>
          <p style={{fontWeight: "lighter"}}>发表于 {article[0].time} 分类于 {article[0].category}</p>
          <p>{article[0].content}</p>
          <br/>        
          <Divider dashed orientation="left" ><Icon type='scissor' /></Divider>
          <br />
          <div>
          <TextArea  onChange={e => this.setState({comment: e.target.value})} />
            <Button
              style={{ marginTop: '10px'}} 
              type="primary"
              onClick={() => this.handleSubmit({comment})}
              >
              提交
            </Button>
          </div>
          <br />
          <Comments />     
        </div>

    )
  }
}

const mapStatetoProps = (state) => {
    return {
      article: state.homeData
    }
  }
  
  
  export default connect(mapStatetoProps, null)(Post);