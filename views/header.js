module.exports = {
  render: function (title, icon) {
    return `
      <header>
        <nav>
          <div class="flex">
            <img class="companyLogoSmall" src="https://cdn-icons-png.flaticon.com/512/149/149181.png" />
            <h1 tabindex="1">${title}</h1>
          </div>
          <img id="profil" class="userImage" onenter="cwl.toggle()" onclick="cwl.toggle()" src=${icon} tabindex="2" />
        </nav>
      </header>
      <script>
        document.getElementById("profil").addEventListener("keyup", function (event) {
          if (event.key === "Enter") {
            this.onclick();
          }
        });

        window.cwl = {
          toggle: function () {
            "use strict";

            let menu = document.getElementById("menu");
            if (menu) {
              document.body.removeChild(menu);
            } else {
              menu = document.createElement("div");
              menu.setAttribute("id", "menu");
              document.body.appendChild(menu);

              const list = document.createElement("ul");
              menu.appendChild(list);

              let item, icon, text;
              [
                {
                  icon: "https://icons.iconarchive.com/icons/iconsmind/outline/512/Dashboard-icon.png",
                  title: "Dashboard",
                  press: "window.location.href = './dashboard'"
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/126/126472.png",
                  title: "Settings",
                  press: "window.location.href = './settings'"
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/2767/2767155.png",
                  title: "Logout",
                  press: "window.location.href = './logout'"
                }
              ].forEach(function (prop, index) {
                item = document.createElement("li");
                item.setAttribute("onclick", prop.press);
                item.setAttribute("tabindex", "" + index + 3);
                item.addEventListener("keyup", function (event) {
                  if (event.key === "Enter") {
                    this.onclick();
                  }
                });
                list.appendChild(item);

                icon = document.createElement("img");
                icon.classList.add("menuIcon");
                icon.setAttribute("src", prop.icon);
                item.appendChild(icon);

                text = document.createElement("span");
                text.innerText = prop.title;
                item.appendChild(text);
              });
            }
          }
        }
      </script>`;
  },
};
