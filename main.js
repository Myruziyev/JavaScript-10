let body = document.querySelector("body");
body.style.backgroundColor = "blue";
body.style.textAlign = "center";
body.style.paddingTop = "100px";
body.style.fontFamily = "Arial";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.display = "flex";
let p = document.createElement("p");
p.style.color = "yellow";
p.style.fontSize = "50px";
p.textContent = prompt("Ismingizni kiriting");
body.append(p);