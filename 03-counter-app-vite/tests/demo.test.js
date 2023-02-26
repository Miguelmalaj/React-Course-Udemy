
describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe de fallar', () => {
    
        //1. inicializacion
        const message1 = 'Hola Mundo';
    
        //2. estímulo
        const message2 = message1.trim();
    
        //3. observar el comportamiento
        expect( message1 ).toBe( message2 );
    
    });
    
});

