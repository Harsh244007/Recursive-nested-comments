export interface CommentItemType {
  id: Date;
  commentText: string;
  childComments: CommentItemType[];
  isRootNode: boolean;
  parentNodeId: number | null;
}

export interface InputWithSubmitType {
  ctaText: string;
  value: string;
  handleValue: (newValue: string) => void;
  handleSubmit: () => void;
}