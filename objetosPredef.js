function generateRandom(max) {
  return Math.random() * max;
}

function Learning() {
  document.getElementById("learn").innerHTML = "Estoy aprendiendo JavaScript";
}

function Random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function setCookie() {
  let cvalue = document.getElementById("url").value;
  const cname = "url_usuario";
  const exdays = 2;
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie() {
  let name = "url_usuario" + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      document.getElementById("cookieAqui").innerHTML = c.substring(
        name.length,
        c.length
      );
    }
  }
  return "";
}

function NewWindow() {
  let w = 400;
  let h = 400;
  var left = screen.width / 2 - w / 2;
  var top = screen.height / 2 - h / 2;
  news = window.open(
    "nueva_ventana.html",
    "Nueva",
    "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
      w +
      ", height=" +
      h +
      ", top=" +
      top +
      ", left=" +
      left
  );
  tmot = setTimeout(function () {
    news.close();
  }, 7000);
}

window.onload = function (e) {
  let list = document.getElementById("listaPropiedades");

  function List() {
    let ul = document.createElement("ul");

    let li = document.createElement("li");
    li.innerText =
      "Valor máximo que puede tener un número en JavaScript: " +
      Number.MAX_VALUE;
    list.appendChild(li);

    let li2 = document.createElement("li");
    li2.innerText = "Altura total de la pantalla: " + screen.height + " px";
    list.appendChild(li2);

    let li3 = document.createElement("li");
    li3.innerText = "Anchura total de la pantalla: " + screen.width + " px";
    list.appendChild(li3);

    let li4 = document.createElement("li");
    li4.innerText =
      "Altura interna de la ventana: " + window.innerHeight + " px";
    list.appendChild(li4);

    let li5 = document.createElement("li");
    li5.innerText =
      "Anchura interna de la ventana: " + window.innerWidth + " px";
    list.appendChild(li5);

    let li6 = document.createElement("li");
    li6.innerText = "URL de la página web: " + window.location;
    list.appendChild(li6);

    let li7 = document.createElement("li");
    li7.innerText = "Título de la página: " + document.title;
    list.appendChild(li7);

    let li8 = document.createElement("li");
    li8.innerText = "Número aleatorio entre 0 y 200: " + generateRandom(200);
    list.appendChild(li8);

    let li9 = document.createElement("li");
    li9.innerText = "La fecha y hora actuales son: " + new Date();
    list.appendChild(li9);

    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);
    ul.appendChild(li8);
    ul.appendChild(li9);

    document.body.appendChild(ul);
  }

  List();
};
