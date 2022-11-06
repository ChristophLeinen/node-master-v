const head = require('./head');
const header = require('./header');

module.exports = {
  render: function (users) {
    const length = users.length;
    return `
        <!DOCTYPE html>
            ${head.render('Dashboard')}
            <body>
                ${header.render(
                  `Welcome ${users[length - 1].name}!`,
                  users[length - 1].image ||
                    'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg'
                )}
                <main class="main">
                    <h2>Users:</h2>
                    <div class="grid">  
                        ${users
                          .map((user) => {
                            return `
                                <div class="userBox" tabindex="0">
                                    <img class="userBoxImage" src=${
                                      user.image ||
                                      'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg'
                                    } />
                                    <h3 class="userBoxName">${user.name}</h3>
                                    <p> ${user.status} </p>
                                </div>
                            `;
                          })
                          .join('')}
                    </div>
                </main>
            </body>
        </html>`;
  },
};
