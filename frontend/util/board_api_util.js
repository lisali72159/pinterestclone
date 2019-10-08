export const fetchAllBoards = () =>
  $.ajax ({
    url: "/api/boards",
    method: 'GET'
  })

export const createBoard = board => {
  // debugger
  return ($.ajax({
    url: "/api/boards",
    method: "POST",
    data: { board },
    }))
  };

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
