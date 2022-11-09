const head = require('./head');
const header = require('./header');

module.exports = {
  render: function (user, params) {
    let image =
      user.image ||
      'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg';

    return `
        <!DOCTYPE html>
            ${head.render('Activate')}
            <body>
            ${header.render('User Settings', image)}
                <main class="loginMain">
                    <form class="loginForm" action="/settings" method="POST">
                      ${
                        params.saved
                          ? `<p class="success"> Changes Saved. </p>`
                          : ''
                      }
                      <label for="image">Image:</label>
                      <img id="image" src=${image} />
                      <input id="image-input" type="hidden" value="${image}" name="image"/>
                      <button type="button">
                        Upload different Image
                      </button>
                      <label for="status">Status:</label>
                      <input id="status" type="text" value="${user.status}" name="status"/>
                      <button type="submit">
                        Save Changes
                      </button>
                    </form>
                </main>
            </body>
        </html>`;
  },
};
