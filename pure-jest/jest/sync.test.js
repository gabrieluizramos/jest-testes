const { somaHorasExtras, calculaDesconto } = require('../funcoes-sincronas');

it('somaHorasExtras', () => {
    const esperado = 10;
    const retornado = somaHorasExtras(5, 5);

    expect(retornado).toEqual(esperado);
});

it('calculaDesconto', () => {
    const esperado = 5;
    const retornado = calculaDesconto(10, 5);

    expect(retornado).toEqual(esperado);
});