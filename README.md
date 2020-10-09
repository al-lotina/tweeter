# Tweeter Project

Tweeter is a simple, single-page Twitter clone. The nav button activates the Compose Tweets section, which doesn't allow empty messages or messages over 140 characters. Error messages will be displayed in those cases. When message is sent, input area is cleared and character counter resets to 140. New tweets are added at the bottom of the input area asynchronously, diplaying a random user, message and date.  Tweets change style when cursor is moved on them. The layout and colors of the app are responsive to screen width changes.

This project has been created to practice HTML, CSS, JS, jQuery and AJAX front-end skills, and Node and Express back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above

## Screenshots

!["Desktop styles"](https://raw.githubusercontent.com/al-lotina/tweeter/master/docs/desktop%20style.png)
!["Mobile Styles"](https://raw.githubusercontent.com/al-lotina/tweeter/master/docs/mobile%20styles.png)
!["Nav action button to show input area"](https://raw.githubusercontent.com/al-lotina/tweeter/master/docs/nav%20button.png)
!["Tweets mouse hover styles"](https://raw.githubusercontent.com/al-lotina/tweeter/master/docs/tweets%20styles.png)