module.exports = {
  render: function (params) {
    let errorMessage = '';
    if (params.error) {
      errorMessage = '<p> Username or Password was incorrect. </p>';
    }
    return `
        <!DOCTYPE html>
            <head>
                <title>Login</title>
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
                        width: 16rem;
                        display: flex;
                        flex-direction: column;
                    }

                    p {
                        width: 16rem;
                        margin: 0.5rem 0;
                        border-radius: 0.5rem;
                        border: 0.0125rem solid red;
                        background-color: #FAA;
                        padding: 0.5rem;
                    }
                    
                    input {
                        height: 2rem;
                        margin: 0.5rem 0;
                        text-indent: 0.5rem;
                    
                        border-radius: 0.5rem;
                        border: none;
                        box-shadow: 0.125rem 0.125rem 0.5rem grey;
                    }
                    
                    input:focus {
                        outline: 0.125rem solid mediumaquamarine;
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
                    <form action="/login" method="POST">
                        ${errorMessage}
                        <input
                            id="UsernameInput"
                            type="text"
                            name="name"
                            placeholder="Username"
                            required
                        />
                        <input
                            id="PasswordInput"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                        <button
                            id="LoginButton"
                            type="submit"
                        >
                            Login
                        </button>
                        <button
                            id="RegisterButton"
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
