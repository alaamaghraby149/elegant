import "./components/header/header.js"
import "./components/hero/hero.js"
const app = document.getElementById("app")

const header = document.createElement("app-header");
const heroSlider = document.createElement('app-hero');

app.append(header);
app.append(heroSlider);
