import { memo, useState } from "preact/compat";
import { InputWithSubmit, getNewComment } from "./helperFn/helpers";
import { CommentItemType } from "./types/types";
import { Comment } from "./components/Comment";

const App: preact.FunctionalComponent = () => {
  const intialCommentText = "Welcome please add reply or comment";
  const [comments, setComments] = useState<CommentItemType[]>([getNewComment(intialCommentText, true, null)]);

  const [parentNewComment, setParentNewComment] = useState<string>("");

  const onAddNewComment = () => {
    if (parentNewComment !== "") {
      const addNewComment = {
        id: new Date(),
        commentText: parentNewComment,
        childComments: [],
        isRootNode: true,
        parentNodeId: null,
      };
      setComments((prevComments) => [...prevComments, addNewComment]);
      setParentNewComment("");
    }
  };
  return (
    <div className="App p-4 max-w-2xl m-auto flex flex-col h-screen place-content-center ">
      <div className="text-2xl text-center mb-4">Recursive Nested Comment</div>
      <div className="max-h-96 overflow-x-auto scroll-pr-1.5 pr-1 mb-4">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <InputWithSubmit ctaText={"Add a new comment"} value={parentNewComment} handleValue={setParentNewComment} handleSubmit={onAddNewComment} />
    </div>
  );
};

export default memo(App);
