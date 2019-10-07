export const edit = user => {
  // debugger
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user }
  });
}