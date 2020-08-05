import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";

const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

describe("Pruebas de <PrimeraApp />", () => {
  //   test('Debe de mostrar el mensaje "Hola soy Richi"', () => {
  //     const saludo = "Hola soy Richi";
  //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //     // console.log(saludo);
  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });

  test("Debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola soy Richi";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    console.log(saludo);
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola soy Richi";
    const subTitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );
    console.log(subTitulo);

    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subTitulo);
  });
});
