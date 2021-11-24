const assert = require('assert');
const sumar = require('../index');
//asserts = afirmacion
describe("Probar sumar", () => {
    //afirmamos que cinco mas siete es 12
    it("Cinco mas siete son 12", () => {
        assert.equal(12, sumar(5+7))
    })
    //afirmamos que cinco mas siete no son 57
    it("5 mas 7 no son 12", () => {
        assert.notEqual('57', sumar(5,7))
    })
});