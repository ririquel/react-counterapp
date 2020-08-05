import "@testing-library/jest-dom";
const { retornaArreglo } = require("../../base/07-deses-arr");

describe("Pruebas de desestruturación", () => {
  test("Debe de retornar un string y un número ", () => {
    const [letras, numeros] = retornaArreglo(); //["ABC", 123]

    // expect(arr).toEqual(["ABC", 123]);
    // console.log(typeof letras);
    // console.log(typeof numeros);

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
