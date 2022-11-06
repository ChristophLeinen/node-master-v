const head = require('./head');

module.exports = {
  render: function (params) {
    return `
        <!DOCTYPE html>
            ${head.render('Login')}
            <body>
                <main class="loginMain">
                    <form class="loginForm" action="/login" method="POST">
                        ${
                          params.error
                            ? `<p class="error"> Username or Password was incorrect. </p>`
                            : ''
                        }
                        <input
                            type="text"
                            name="name"
                            placeholder="Username"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                        <button
                            type="submit"
                        >
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
