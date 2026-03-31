"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cursov1;
(function (Cursov1) {
    Cursov1[Cursov1["INFO"] = 0] = "INFO";
    Cursov1[Cursov1["MECA"] = 1] = "MECA";
    Cursov1[Cursov1["SUBREDES"] = 2] = "SUBREDES";
    Cursov1[Cursov1["SUBMECA"] = 3] = "SUBMECA";
    Cursov1[Cursov1["TSI"] = 4] = "TSI";
})(Cursov1 || (Cursov1 = {}));
var Curso;
(function (Curso) {
    Curso["INFO"] = "Integrado em Inform\u00E1tica";
    Curso["MECA"] = "Integrado em Mecatr\u00F4noca";
    Curso["SUBREDES"] = "Subsequente em Redes";
    Curso["SUBMECA"] = "Subsequente em Mecatr\u00F4nica";
    Curso["TSI"] = "Superior de Tecnologias em Sistemas para Internet";
})(Curso || (Curso = {}));
console.log(Curso.INFO);
const ppi = {
    cod: 20261,
    nome: 'Programação para Internet',
    curso: Curso.INFO,
    turno: 'Matutino'
};
//# sourceMappingURL=enum.js.map