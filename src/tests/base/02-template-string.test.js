import "@testing-library/jest-dom";

const { getSaludo } = require("../../base/02-template-string");

describe("Pruebas en 02-template-string.test.js", () => {
  test("getSaludo debe retornar Hola Richi", () => {
    const nombre = "Richi";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre + "!");
  });

  // getSaludo debe de retornar Hola Carlos! si no hay argumento nombre

  test("getSaludo debe de retornar Hola Carlos! si no hay argumento nombre", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos!");
  });
});
