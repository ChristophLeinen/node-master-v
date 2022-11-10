const head = require('./head');

module.exports = {
  render: function (params) {
    return `
        <!DOCTYPE html>
            ${head.render('Register')}
            <body>
                <main class="loginMain">
                    ${
                      params.mail
                        ? `<p>Registration successful, email was send to: ${params.mail}</p>`
                        : `<form class="loginForm" action="/register" method="POST">
                        <img class="companyLogoBig" src="https://cdn-icons-png.flaticon.com/512/149/149181.png" />
                        <p class="companyTitle"> THE NETWORK </p>
                        ${
                              params.error
                                ? `<p class="error"> E-mail is already in use. </p>`
                                : ''
                            }
                            <input
                                type="text"
                                name="name"
                                placeholder="Username"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Repeat Password"
                                required
                            />
                            <button
                                type="submit"
                            >
                                Register
                            </button>
                            <button
                                type="button"
                                onclick="location.href='./login'"
                            >
                                Back
                            </button>
                        </form>`
                    }
                </main>
            </body>
        </html>`;
  },
};
