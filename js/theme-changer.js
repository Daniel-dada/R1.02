const theme = document.getElementById("theme");
const bouton = document.getElementById("themeChanger");

bouton.addEventListener("click", function () {
    if (theme.getAttribute("href") === "css/light.css") {
        theme.setAttribute("href", "css/dark.css");
    } else {
        theme.setAttribute("href", "css/light.css");
    }
});