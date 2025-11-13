const app = document.getElementById("app");
let homeHTML = "";

document.addEventListener("DOMContentLoaded", () => {
    homeHTML = app.innerHTML;
});

function rebindHomeButton() {
    const btn = document.querySelector('.redirect-button');
    if (btn) {
        btn.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent("app:navigate", {
                detail: { page: "shopping" }
            }));
        });
    }
}

function loadCSS(path) {
    if (document.querySelector(`link[href="${path}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = path;
    document.head.appendChild(link);
}

async function navigateTo(page) {
    if (page === "accueil") {
        app.innerHTML = homeHTML;
        rebindHomeButton();
        return;
    }

    let htmlPath = null;
    let cssPath = null;
    let jsPath = null;

    switch (page) {
        case "shopping":
            htmlPath = "shopping/shopping.html";
            cssPath = "assets/css/shopping.css";
            break;
        case "paniers":
            htmlPath = "panier/panier.html";
            cssPath = "assets/css/panier.css";
            jsPath = "panier/panier.js";
            break;
        case "connexion":
            htmlPath = "inscription/inscription.html";
            cssPath = "assets/css/inscription.css";
            jsPath = "inscription/inscription.js";
            break;
        case "meat":
            htmlPath = "shopping/meat/meat.html";
            cssPath = "assets/css/meat.css";
            jsPath = "shopping/meat/meat.js";
            break;
        case "petitdejeuner":
            htmlPath = "shopping/petitdejeuner/petitdejeuner.html";
            cssPath = "assets/css/petitdejeuner.css";
            jsPath = "shopping/petitdejeuner/petitdejeuner.js";
            break;
        case "hygiene":
            htmlPath = "shopping/hygiene/hygiene.html";
            cssPath = "assets/css/hygiene.css";
            jsPath = "shopping/hygiene/hygiene.js";
            break;
        case "fruit-vegetable":
            htmlPath = "shopping/fruit-vegetable/fruit-vegetable.html";
            cssPath = "assets/css/fruit-vegetable.css";
            jsPath = "shopping/fruit-vegetable/fruit-vegetable.js";
            break;
        case "boisson":
            htmlPath = "shopping/boisson/boisson.html";
            cssPath = "assets/css/boisson.css";
            jsPath = "shopping/boisson/boisson.js";
            break;
        case "dairy":
            htmlPath = "shopping/dairy/dairy.html";
            cssPath = "assets/css/dairy.css";
            jsPath = "shopping/dairy/dairy.js";
            break;
        default:
            app.innerHTML = `<h2>Page inconnue : ${page}</h2>`;
            return;
    }

    if (cssPath) loadCSS(cssPath);

    if (htmlPath) {
        const res = await fetch(htmlPath);
        if (!res.ok) {
            app.innerHTML = `<h2>Impossible de charger ${htmlPath}</h2>`;
            return;
        }
        app.innerHTML = await res.text();
    }

    if (jsPath) {
        try {
            const module = await import(`./${jsPath}`);
            if (typeof module.initPage === "function") {
                module.initPage(app);
            }
        } catch {}
    }
}

window.addEventListener("app:navigate", (e) => {
    navigateTo(e.detail.page);
});

document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-page]");
    if (!el) return;
    e.preventDefault();
    navigateTo(el.dataset.page);
});
