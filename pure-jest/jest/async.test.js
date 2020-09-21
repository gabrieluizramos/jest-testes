const fnAsyncs = require('../funcoes-assincronas');
const fetcher = require('../fetch');

const mock = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};

jest.mock('../fetch')

fetcher.fetch.mockImplementationOnce(resolve => resolve('qlqr coisa'));

describe('consultaDados', () => {
    afterEach(() => {
        // limpar as execucoes
        // spy.mockClear();

        // 
        fetcher.fetch.mockReset();
    });

    it('consultaDados 1', async () => {
        expect.assertions(2);
        // spy.mockImplementationOnce(resolve => resolve(mock));
        
        await expect(fnAsyncs.consultaDados()).resolves.toEqual(mock);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('consultaDados 2', async () => {
        expect.assertions(2);
        
        await expect(fnAsyncs.consultaDados()).resolves.toEqual(mock);
        expect(spy).toHaveBeenCalledTimes(1);
    });
})

// it('consultaDados', async() => {
//     fetcher.fetch.mockImplementation((resolve) => {
//         resolve('guilerne')
//     });
//     await expect(fnAsyncs.consultaDados()).resolves.toEqual(mock);
// });