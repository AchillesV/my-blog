import React from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';
import { Divider, Input, Button} from 'antd';
import { getCommentData } from './../../Store/actionCreators';

const { TextArea } = Input;

class Post extends React.Component {
  
  state = {
    comment: '',
    visibleComment: false,
    visibleButton: false,
  }

  componentDidMount(){
    
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  handleSubmit = (payload) => {
    const {comment} = this.state;
    this.setState({
      visibleComment: comment ? true : false,
    },() => {
      this.props.reqCommentData(payload)
    })
    console.log(payload)
    
  }

  isInputed = () => {
    const {comment} = this.state;
    comment ? this.setState({visibleButton: true}) :  this.setState({visibleButton: false})
  }


  render() {

    
    const {article, comments} = this.props;
    const {comment, visibleComment, visibleButton} = this.state;
    console.log(this.props.comments)

    
    
    return(
        <div style={{ padding: 24, background: '#fff', textAlign: 'left' }}>
          <h3>| {article[0].title}</h3>
          <p style={{fontWeight: "lighter"}}>发表于 {article[0].time} 分类于 {article[0].category}</p>
          <p>{article[0].content}</p>
          <br/>        
          {/* <Divider dashed orientation="left" ><Icon type='scissor' /></Divider>
          <br /> */}
          <div style={{width: '500px', margin: '0 auto'}}> <Divider><span style={{fontSzie: '22px'}}>评论</span></Divider> </div>
          <br />
          <div>
          <TextArea 
            placeholder='请输入评论...' 
            onChange={e => this.setState({comment: e.target.value})} 
            onFocus={() => this.setState({visibleButton: true})}
            onBlur={() => this.isInputed()}
            onPressEnter={() => this.handleSubmit({commentes:comment})}
          />
            <Button
              
              style={{ marginTop: '10px', display: visibleButton ? 'block': 'none' }} 
              type="primary"
              onClick={() => this.handleSubmit({commentes:comment})}
              >
              提交
            </Button>
          </div>
          <br />
          {visibleComment ? <Comments msg={comments.commentes} /> : null}
        </div>

    )
  }
}

const mapStatetoProps = (state) => {
    return {
      article: state.homeData,
      comments: state.comments
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
      reqCommentData(payload) {
        const action = getCommentData(payload)
        dispatch(action)
      }
    }
}
  
export default connect(mapStatetoProps, mapDispatchtoProps)(Post);