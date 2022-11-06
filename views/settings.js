const head = require('./head');
const header = require('./header');

module.exports = {
  render: function (user) {
    const image =
      user.image ||
      'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg';

    return `
        <!DOCTYPE html>
            ${head.render('Activate')}
            <body>
            ${header.render('User Settings', image)}
                <main class="loginMain">
                    <form class="loginForm" action="/image" method="POST">
                      <label for="image">Image:</label>
                      <img id="image" src=${image} />
                      <button type="button">
                        Upload different Image
                      </button>
                      <label for="status">Status:</label>
                      <input id="status" type="text" value="${user.status}"/>
                      <button type="submit">
                        Save Changes
                      </button>
                    </form>
                </main>
            </body>
        </html>`;
  },
};
