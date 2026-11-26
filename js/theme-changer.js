// Marche aussi depuis le dossier "pages" (lien "../css/light.css")
const theme = document.getElementById("theme");
const bouton = document.getElementById("themeChanger");

bouton.addEventListener("click", function () {
    const lien = theme.getAttribute("href");
    if (lien.includes("light")) {
        theme.setAttribute("href", lien.replace("light", "dark"));
    } else {
        theme.setAttribute("href", lien.replace("dark", "light"));
    }
});