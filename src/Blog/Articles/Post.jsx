import React from 'react';
import { connect } from 'react-redux';
import Comments from './Comments';
import { Divider, Input, Button} from 'antd';
import { getCommentData } from './../../Store/actionCreators';

const { TextArea } = Input;

class Post extends React.Component {
  
  state = {
    comment: '',
    userName: '',
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
    const {comment, userName } = this.state;
    comment || userName ? this.setState({visibleButton: true}) :  this.setState({visibleButton: false})
  }


  render() {

    
    const {article, commentInfos} = this.props;
    const {comment, userName, visibleComment, visibleButton} = this.state;
    console.log(this.props.article[0].comments)


    
    
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

            <Input 
              style={{ marginBottom: '10px', border: 'none', borderLeft: '3px solid #D9D9D9',}} 
              placeholder='请输入姓名...'
              onChange={e => this.setState({userName: e.target.value})} 
              onFocus={() => this.setState({visibleButton: true})}
              onBlur={() => this.isInputed()}
            />


          <TextArea 
            style={{ border: 'none', borderLeft: '3px solid #D9D9D9'}}
            placeholder='请输入评论...' 
            onChange={e => this.setState({comment: e.target.value})} 
            onFocus={() => this.setState({visibleButton: true})}
            onBlur={() => this.isInputed()}
            onPressEnter={() => this.handleSubmit({commentes:comment})}
          />
            <Button              
              style={{ marginTop: '10px', display: visibleButton ? 'block': 'none' }} 
              type="primary"
              onClick={() => this.handleSubmit({commentes:comment, userNames: userName})}
              >
              提交
            </Button>
          </div>
          <br />
          {visibleComment ? 
            <Comments 
              comment={commentInfos.commentes} 
              userName={commentInfos.userNames}
            /> 
          : null}
          {
            article[0].comments.map((comment,key)=> <Comments key={key} comment={comment.comment} userName={comment.userName} />)
          }

        </div>

    )
  }
}

const mapStatetoProps = (state) => {
    return {
      article: state.homeData,
      commentInfos: state.comments
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