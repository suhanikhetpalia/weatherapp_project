import React, { Component } from 'react';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : [],
            userComment:null,
            }
        this.postComment = this.postComment.bind(this);
      }
      updateUserComment(e) {
        this.setState({ userComment: e.target.value })
      }
      postComment() {
        if((this.state.userComment.length))
        {
          this.setState({
            userComment: "",
        })
        console.log('postComment fired');
        this.state.comments.push(this.state.userComment);
        }
    }
  render() {
    const listOfComments = this.state.comments.map(eachComment => (
        <p 
        style={{   textAlign: 'left' }}
        >
        <i class="fa fa-user" aria-hidden="true"></i> {eachComment}
        </p>
    ))
    return (
     <div>
        <div style={{}}>
          <div 
          >
          <div className='comment' >
            <textarea className='commentbox'
          placeholder="Enter your comment here..."
          value={this.state.userComment}
          onChange={e => this.updateUserComment(e)}>
          </textarea>                   
<br/>
    <button 
       onClick={this.postComment}
       className="buttoncomment"
        >Comment</button>
        <br/>
        <br/>
                 <div
                  style={{ background: '#f7f2ff', padding: '10px',}}>
                 <p style={{textAlign: 'left', display: 'block', color:'rgb(80, 80, 80)'}}><b>Comments ({listOfComments.length})</b> </p> 
                  {listOfComments}
                 </div>

            </div>
          </div>
      </div>
     
     </div>
    );
  }
}
export default AddComment;
