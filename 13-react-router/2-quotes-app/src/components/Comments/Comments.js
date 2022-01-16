import { useRef, useState } from "react";
import "./Comments.css";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const commentTextAreaRef = useRef("");

  // // TODO: the double click problem
  // const loadCommentsHandler = () => {
  //   // TODO: find better appraoch
  //   const div = document.getElementById("comments");
  //   console.log(div.style.display);
  //   if (div.style.display === "none") {
  //     div.style.display = "block";
  //     setLoadCommentsTitle("User Comments");
  //   } else {
  //     div.style.display = "none";
  //     setLoadCommentsTitle("Load Comments");
  //   }
  // };

  // const addCommentHandler = () => {
  //   // TODO: find better appraoch
  //   const div = document.getElementById("comments-textarea");
  //   const display = window.getComputedStyle(div).getPropertyValue("display");
  //   if (display === "none") {
  //     div.style.display = "block";
  //   } else if (display === "block") {
  //     setComments((prevComments) => {
  //       return [...prevComments, commentTextAreaRef.current.value];
  //     });
  //     // TODO: find better appraoch
  //     setTimeout(() => {
  //       commentTextAreaRef.current.value = "";
  //     }, 1000);
  //     div.style.display = "none";
  //   }
  // };
  return (
    <div className="comments-card">
      {/* <div onClick={loadCommentsHandler} id="load-comments">
        {loadCommentsTitle}
      </div> */}
      <div id="comments">
        <div id="comments-textarea">
          <label>Your Comment</label>
          <textarea ref={commentTextAreaRef} />
        </div>
        <button id="add-comments-btn">Add Comment</button>
        <div id="all-comments">
          {comments.length
            ? comments.map((comment) => <p key={Date.now()}>{comment}</p>)
            : "No comments were added yet"}
        </div>
      </div>
    </div>
  );
};
