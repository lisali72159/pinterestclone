export const fetchAllPins = () =>
  $.ajax({
    url: "/api/pins",
    method: "GET"
  });

export const createPin = pin => {
  // debugger
  return $.ajax({
    url: "/api/pins",
    method: "POST",
    data: { pin }
  });
};

export const fetchPin = (id) =>
  $.ajax({
    url: `/api/pins/${id}`,
    method: "GET"
  });

export const deletePin = pinId =>
  $.ajax({
    url: `/api/pins/${pinId}`,
    method: "DELETE"
  });

export const editPin = pin =>
  $.ajax({
    url: `/api/boards/${pin.id}`,
    method: "PATCH",
    data: { pin }
  });
