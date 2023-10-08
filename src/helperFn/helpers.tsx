import { CommentItemType, InputWithSubmitType } from "../types/types";

export const formattedDate = (currentDate: Date) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const second = currentDate.getSeconds();

  const formattedHours = hours % 12 || 12;

  return `${dayOfWeek}, ${day} ${month} ${year} ${formattedHours}:${minutes < 10 ? "0" : ""}${minutes}:${second} ${ampm}`;
};

export const InputWithSubmit = ({ ctaText, value, handleValue, handleSubmit }: InputWithSubmitType) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onInput={(e) => handleValue(e.currentTarget.value)}
        placeholder={ctaText}
        className="w-full border border-gray-300  p-2 mt-1 mb-2"
      />
      <button onClick={handleSubmit} className="bg-blue-500 max-w-full text-white py-2 px-2  mt-2">
        {ctaText}
      </button>
    </>
  );
};

export const getNewComment = (commentValue: string, isRootNode = false, parentNodeId: number | null): CommentItemType => {
  return {
    id: new Date(),
    commentText: commentValue,
    childComments: [],
    isRootNode,
    parentNodeId,
  };
};