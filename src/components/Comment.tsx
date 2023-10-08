import { useState } from "preact/hooks";
import { CommentItemType } from "../types/types";
import { InputWithSubmit, formattedDate, getNewComment } from "../helperFn/helpers";

export const Comment: preact.FunctionalComponent<{ comment: CommentItemType }> = ({ comment }) => {
  const [childComment, setChildComment] = useState<string>("");
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);

  const onAddReply = () => {
    // @ts-ignore
    const newComment: CommentItemType = getNewComment(childComment, false, comment.id);
    comment.childComments.push(newComment);
    setChildComment("");
    setShowReplyBox(false);
  };

  return (
    <div className="p-2 border border-gray-300 rounded-lg mb-2">
      <div className="flex justify-between gap-2">
        <span>{comment.commentText}</span>
        <span>{formattedDate(comment.id)}</span>
      </div>
      <div className="mt-2">
        <button className="text-blue-500 cursor-pointer" onClick={() => setShowReplyBox(!showReplyBox)}>
          Reply
        </button>
        {showReplyBox && <InputWithSubmit ctaText={"Submit Reply"} value={childComment} handleValue={setChildComment} handleSubmit={onAddReply} />}
      </div>
      {comment.childComments.map((childComment) => (
        <Comment key={childComment.id} comment={childComment} />
      ))}
    </div>
  );
};
