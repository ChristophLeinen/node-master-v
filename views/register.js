module.exports = {
  render: function (params) {
    let errorMessage = '';
    if (params.error) {
      errorMessage = '<p> E-mail is already in use. </p>';
    }
    return `
        <!DOCTYPE html>
            <head>
                <title>Register</title>
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
                    ${
                      params.mail
                        ? `<span>Registration successful, email was send to: ${params.mail}</span>`
                        : `<form action="/register" method="POST">
                                ${errorMessage}
                                <input
                                    id="UsernameInput"
                                    type="text"
                                    name="name"
                                    placeholder="Username"
                                    required
                                />
                                <input
                                    id="EmailInput"
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    required
                                />
                                <input
                                    id="PasswordInput"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                                <input
                                    id="PasswordRepeatInput"
                                    type="password"
                                    placeholder="Repeat Password"
                                    required
                                />
                                <button
                                    id="RegisterButton"
                                    type="submit"
                                >
                                    Register
                                </button>
                                <button
                                    id="BackButton"
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
