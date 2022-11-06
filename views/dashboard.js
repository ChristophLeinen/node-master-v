module.exports = {
  render: function (users) {
    return `
        <!DOCTYPE html>
            <head>
                <title>Dashboard</title>
                <style>
                    .nav {
                        height: 2.5rem;
                        background-color: mediumaquamarine;
                        line-height: 2.5rem;
                        color: white;
                        padding: 0 1rem;
                        display: flex;
                        justify-content: space-between;
                    }
                    
                    .userImage {
                        border-radius: 2rem;
                        width: 2rem;
                        height: 2rem;
                        margin: 0.25rem;
                        border: 0.125rem solid white;
                        cursor: pointer;
                    }
        
                    .main {
                        padding: 1rem;
                    }
        
                    .grid {
                        display: flex;
                        width: 100%;
                        flex-wrap: wrap;
                    }
        
                    .userBox {
                        margin: 1rem;
                        height: 18rem;
                        padding: 1rem;
                        width: 12rem;
                        border-radius: 1rem;
                        box-shadow: 0.125rem 0.125rem 0.5rem grey;
                        text-align: center;
                    }

                    userBox:hover {
                        box-shadow: 0.125rem 0.125rem 2rem grey;
                    }
        
                    .userBoxImage {
                        width: 10rem;
                        height: 10rem;
                        border-radius: 9rem;
                        margin-bottom: 0.75rem;
                    }
        
                    .userBoxName {
                        margin-bottom: 0.75rem;
                    }

                    * {
                        box-sizing: border-box;
                        padding: 0;
                        margin: 0;
                    }
                </style>
            </head>
            <body>
                <header>
                    <nav class="nav">
                        <h1 tabindex="0">Welcome ${users[0].name}!</h1>
                        <img class="userImage" src=${
                          users[0].image
                        } tabindex="0" />
                    </nav>
                </header>
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
