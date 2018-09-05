import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitHandler} >
      <input 
      onChange={props.changeComment}
      value={props.comment}
      type="text" placeholder="Add comment... " />
    </form>
  );
};

export default CommentInput;
