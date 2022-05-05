const Reader = require( "../../../lib/utils/Reader.js" );
const datos = require("../../../visualpartners.json");

describe("Puebas a Reader", () => {

    test("Leer el archivo Json", () => { 
        const visualpartners = Reader.readJsonFile();
        expect(visualpartners.length).toBe(datos.length);
    });
}); 