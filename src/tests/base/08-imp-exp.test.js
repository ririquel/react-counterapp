import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Héroes ", () => {
  test("Debe de retornar un héroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    console.log(heroe);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe de retornar un undefined si Héroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    console.log(heroe);

    expect(heroe).toBe(undefined);
  });
  // Debe de retornar un arreglo con los héroes de DC
  // toEqual al arreglo filtrado
  test("Debe de retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);

    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  //Debe de retornar un arreglo con los Héroes de Marvel
  //length = 2  // toBe

  test("Debe de retornar un arreglo con los Héroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);

    expect(heroes.length).toBe(2);
  });
});
