const head = require('./head');
const header = require('./header');

module.exports = {
  render: function (users, userid) {
    const currentUser = users.find((user) => user.id === userid);
    return `
        <!DOCTYPE html>
            ${head.render('Dashboard')}
            <body>
                ${header.render(
                  `Welcome ${currentUser.name}!`,
                  currentUser.image
                )}
                <main class="main">
                    <h2>Users:</h2>
                    <div class="grid">  
                        ${users
                          .map((user) => {
                            return `
                                <div class="userBox" tabindex="0">
                                    <img class="userBoxImage" src=${user.image} />
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
