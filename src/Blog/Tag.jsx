import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';


class Tag extends React.Component {
  render() {
    const { tagData } = this.props;
    return(
  
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          <h2><Icon type='tag'/>&nbsp;标签</h2>
          <p>目前共计 {tagData.length+1} 个标签</p>
          <br/>
          <div style={{textAlign: 'center', marginLeft: '30px'}}>
            {
              tagData.map((item,key) => {
                return (
                    <span style={{fontSize: `${item.count}px`, borderBottom: '1px solid #900b09', marginLeft: '20px'}}>{item.tag}</span>
                )
              }
                
              )
            }
            

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
      tagData: state.tagData,
    }
  }

export default connect(mapStatetoProps, null)(Tag);

