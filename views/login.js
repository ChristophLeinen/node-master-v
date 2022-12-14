const head = require('../components/head');

module.exports = {
  render: function (params) {
    return `
        <!DOCTYPE html>
            ${head.render('Login')}
            <body>
                <main class="loginMain">
                    <form class="loginForm" action="/login" method="POST">
                        <img class="companyLogoBig" src="https://cdn-icons-png.flaticon.com/512/149/149181.png" />
                        <p class="companyTitle"> THE NETWORK </p>
                        ${
                          params.error
                            ? `<p class="error"> Username or Password was incorrect. </p>`
                            : ''
                        }
                        <input
                            class="cwlInput"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                        />
                        <input
                            class="cwlInput"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                        <button type="submit">
                            Login
                        </button>
                        <button
                            type="button"
                            onclick="location.href='./register'"
                        >
                            Register
                        </button>
                    </form>
                </main>
            </body>
        </html>`;
  },
};
