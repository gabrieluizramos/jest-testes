const { somaHorasExtras, calculaDesconto } = require('../funcoes-sincronas');

const expect = (valor) => {
    const assercoes = {
        toEqual(segundoValor) {
            if (valor !== segundoValor) {
                throw {};
            }
        }
    };

    return assercoes;
}

const it = (titulo, callback) => {
    try {
        callback();
        console.log(`✅ ${titulo} passou`);
    } catch(err) {
        console.log(`🚨 ${titulo} deu ruim`);
    }
}

it('soma horas extras', () => {
    const esperado = 10;
    const retornado = somaHorasExtras(5, 5);
    
    expect(retornado).toEqual(esperado);
});

it('calcula desconto', () => {
    const esperado = 5;
    const retornado = calculaDesconto(10, 5);
    
    expect(retornado).toEqual(esperado);
});