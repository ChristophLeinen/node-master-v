module.exports = {
  render: function (title) {
    return `
      <head>
        <title>${title}</title>
        <style>
          html, body, main {
            height: 100%;
          }

          .companyLogoBig {
            height: 10rem;
            width: 10rem;
            margin: auto;
          }

          .companyTitle {
            text-align: center;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            margin: 1rem auto;
          }

          .companyLogoSmall {
            height: 2rem;
            width: 2rem;
            margin: 0.25rem 1rem 0.25rem 0;
          }

          .flex {
            display: flex;
          }

          .loginMain {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .loginForm {
            width: 16rem;
            display: flex;
            flex-direction: column;
          }

          .error {
            width: 16rem;
            margin: 0.5rem 0;
            border-radius: 0.5rem;
            border: 0.0125rem solid red;
            background-color: #FAA;
            padding: 0.5rem;
          }

          .success {
            width: 16rem;
            margin: 0.5rem 0;
            border-radius: 0.5rem;
            border: 0.0125rem solid mediumaquamarine;
            background-color: #D7F1E9;
            padding: 0.5rem;
            text-align: center;
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

          .main {
            padding: 1rem;
          }

          nav {
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

          #menu {
            position: absolute;
            right: 0.5rem;
            top: 2.5rem;
            background: white;
            box-shadow: 0.125rem 0.125rem 0.5rem grey;
          }

          ul {
            list-style-type: none;
          }

          li {
            padding: 1rem;
            height: 3rem;
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          li:hover {
            background-color: lightgrey;
          }

          .menuIcon {
            height: 1.5rem;
            width: 1.5rem;
            margin-right: 1rem;
          }

          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
        </style>
    </head>`;
  },
};
