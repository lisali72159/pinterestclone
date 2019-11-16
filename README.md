# README


# Kimterest
![alt text](https://github.com/lisali72159/pinterestclone/blob/master/app/assets/images/header_logo.png)

### Kimterest is a single-page application inspired by Pinterest. Users can create boards, collections that store images called "kims", which can be uploaded, and allow images to be viewed on a feed. 

## Live Link
https://kimterest.herokuapp.com


## Technologies

* Ruby on Rails
* React/ Redux
* PostgreSQL database
* AWS for hosting images


## Features
* User authentication
* User profile feed with user's information and boards
* Create and edit boards
* Upload and delete kims
* Home feed with responsive masonry layout
* Modal forms

![alt text](https://github.com/lisali72159/pinterestclone/blob/master/app/assets/images/profile.png)

## Modals
The majority the forms on Kimterest are implemented using modals. A modal component was utilitzed to render the correct forms based on switch cases. Since some forms required information about a specific board or pin, an optional props argument was used to encompass these cases. Furthermore, the rendering of the login and signup modals were modified to prevent closing of the modal in the splash page and to display only one form at all times.

![alt text](https://github.com/lisali72159/pinterestclone/blob/master/app/assets/images/modal.png)

```javascript
function Modal({ modal, props, closeModal }) {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "createBoard":
      component = <BoardFormContainer />;
      break;
    case "editBoard":
      component = <EditBoardFormContainer id={props.id} />;
      break;
    case "editPin":
      component = <EditPinFormContainer id={props.pinId} />;
      break;
    default:
      return null;
  }
  if (modal === "login" || modal === "signup") {
    return (
      <div className="modal-background">
        <div className="modal-child">{component}</div>
      </div>
    )
  } else {
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}
```

## Responsive CSS Masonry Layout
CSS grid was used to implement the mosaic-like appearance of a Pinterest feed. Image sizes and columns are adjusted based on the size of the screen, allowing for a more visually appealing user interface.

![alt text](https://github.com/lisali72159/pinterestclone/blob/master/app/assets/images/feed.png)

## Future Implementations
* Followers for boards and users
* Infinity scrolling
* Search bar


