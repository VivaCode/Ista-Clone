import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import Heart from '../../assets/heart.svg'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newcomment: "",
      likes: 0
    };
  }

  commentHandler = e => {
    this.setState({comment: e.target.value});
  };

  commentSubmit = (e) => {
    e.preventDefault();
    //build out comment ojc
    const newComment = { text: this.state.comment, username: "Leroy Gibbs"};
    //clone comments array
    const comments = this.state.comments.slice();
    // push obj to new clone
    comments.push(newComment);
    //set new clone as state & reset comment str
    this.setState({ comments, comment: ""});
  }

  likeCounter= e => {
    this.setState({likes: this.state.likes + 1})
  }

  render() {
    return (
      <div>
        {this.state.likes}
        <img onClick={this.likeCounter} className='heart' src={Heart} alt="heart" />
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput 
          submitHandler={this.commentSubmit}
          changeComment={this.commentHandler}
          comment={this.state.comment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
