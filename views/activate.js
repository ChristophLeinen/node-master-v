module.exports = {
  render: function (message) {
    return `
        <!DOCTYPE html>
            <head>
                <title>Activate</title>
                <style>
                    html, body, main {
                        height: 100%;
                    }

                    main {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    form {
                        display: flex;
                        flex-direction: column;
                    }
                    
                    button {
                        height: 2rem;
                        background-color: mediumaquamarine;
                        color: white;
                        font-weight: bold;
                        margin: 0.5rem 0;
                    
                        border-radius: 0.5rem;
                        border: none;
                        box-shadow: 0.125rem 0.125rem 0.5rem grey;
                        width: 10rem;
                    }

                    * {
                        box-sizing: border-box;
                        padding: 0;
                        margin: 0;
                    }
                </style>
            </head>
            <body>
                <main>
                    <form action="/login" method="GET">
                        <p>
                            ${message}
                        <P>
                        <button
                            id="LoginButton"
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
