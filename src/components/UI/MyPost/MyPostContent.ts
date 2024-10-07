export const columns = [
  { name: "TITLE", uid: "title" },
  { name: "CATEGORY", uid: "category" },
  { name: "TOTAL LIKES", uid: "upVotes" },
  { name: "TOTAL UNLIKES", uid: "downVotes" },
  { name: "TOTAL COMMENTS", uid: "comments" },
  { name: "POST STATUS", uid: "status" },

  { name: "ACTIONS", uid: "actions" },
];

export const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
