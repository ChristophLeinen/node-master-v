const head = require('../components/head');
const header = require('../components/header');

module.exports = {
  render: function (user, email, params) {
    let image =
      user.image ||
      'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg';

    return `
        <!DOCTYPE html>
            ${head.render('Activate')}
            <body>
            ${header.render('User Settings', image)}
                <main class="loginMain">
                    <form action="/settings" method="POST" encType="multipart/form-data">
                      ${
                        params.saved
                          ? `<p class="success"> Changes Saved. </p>`
                          : ''
                      }
                      <div class="flex-settings">
                        <div class="flex-column">
                          <label for="image">Profile image:</label>
                          <img id="image" class="bigProfileImage" src=${image} />
                          <label for="file">Upload new profile image:</label>
                          <input id="file" class="fileInput" type="file" name="image"/>
                        </div>
                        <div class="flex-column">
                          <label for="email">E-mail:</label>
                          <input id="email" class="cwlInput" value=${email} type="email" disabled/>
                          <label for="status">Status:</label>
                          <input id="status" class="cwlInput" type="text" value="${user.status}" name="status"/>
                          <button type="submit">
                            Save Changes
                          </button>
                        </div>
                        </div>
                    </form>
                </main>
            </body>
        </html>`;
  },
};
