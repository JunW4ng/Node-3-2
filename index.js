const enviar = require("./mailer");
const getDataIndicadores = require("./componentes/getIndicadores");
const template = require("./componentes/template");
const creaArchivo = require("./componentes/creaArchivo");
const url = require("url");
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    let { correos, asunto, contenido } = url.parse(req.url, true).query;

    if (req.url == "/") {
      res.setHeader("content-type", "text/html");
      fs.readFile("index.html", "utf8", (err, data) => {
        res.end(data);
      });
    }

    if (req.url.includes("/mailing")) {
      getDataIndicadores().then((response) => {
        let dolar = response.dolar.valor;
        let euro = response.euro.valor;
        let uf = response.uf.valor;
        let utm = response.utm.valor;
        let htmlTemplate = template(dolar, euro, uf, utm);

        contenido = contenido + htmlTemplate;

        enviar(correos.split(","), asunto, contenido)
          .then((resolve) => {
            creaArchivo(contenido);
            res.end("Correo enviado con exito");
          })
          .catch((error) => res.end("Error al enviar el correo"));
      });
    }
  })
  .listen(3000, () => console.log("Server ON"));
