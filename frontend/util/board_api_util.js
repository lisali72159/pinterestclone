export const fetchAllBoards = boards =>
  $.ajax ({
    url: "/api/boards",
    method: 'GET',
    data: { boards }
  })

export const createBoard = board =>
  $.ajax({
    url: "/api/boards",
    method: "POST",
    data: { board }
  });

export const deleteBoard = boardId =>
  $.ajax({
    url: `/api/boards/${boardId}`,
    method: "DELETE",
  });

export const editBoard = (board) =>
  $.ajax({
    url: `/api/boards/${board.id}`,
    method: "PATCH",
    data: { board }
  });
