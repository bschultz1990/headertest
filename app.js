const head = document.head;

const fStyle = document.createElement("link");
fStyle.rel = "stylesheet";
fStyle.href = "headerfooter/headerfooter.css";
head.appendChild(fStyle);

const favicon = document.createElement("link");
favicon.rel = "shortcut icon";
favicon.href = "favicon.ico";
favicon.type = "image/x-icon";
head.appendChild(favicon);

const bs = document.createElement("link");
bs.rel = "stylesheet";
bs.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css";
head.appendChild(bs);

const styles = document.createElement("link");
styles.rel = "stylesheet";
styles.href = "styles.css";
head.appendChild(styles);

const body = document.body;
const hfJs = document.createElement("script");
hfJs.src = "headerfooter/headerfooter.js";
body.appendChild(hfJs);
