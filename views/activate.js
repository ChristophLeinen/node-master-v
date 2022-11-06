const head = require('./head');

module.exports = {
  render: function (message) {
    return `
        <!DOCTYPE html>
            ${head.render('Activate')}
            <body>
                <main class="loginMain">
                    <form class="loginForm" action="/login" method="GET">
                        <p>
                            ${message}
                        <P>
                        <button
                            type="submit"
                        >
                            Go to Login
                        </button>
                    </form>
                </main>
            </body>
        </html>`;
  },
};
