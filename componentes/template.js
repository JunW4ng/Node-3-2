const template = (dolar, euro, uf, utm) => {
    return `
      <p>El valor del dolar el dia de hoy es ${dolar}</p>
      <p>El valor del euro el dia de hoy es ${euro}</p>
      <p>El valor del uf el dia de hoy es ${uf}</p>
      <p>El valor del utm el dia de hoy es ${utm}</p>
      `;
  };

module.exports = template;