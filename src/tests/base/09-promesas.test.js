import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe(" Pruebas con promesas", () => {
  test("getHeroeByIdAsync debe de retornar un Héroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      console.log(heroe);
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });
  test("Debe de obtener un error si el Héroe por id no existe", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
      //   console.log(error);
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
