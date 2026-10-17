// Banco Oficial de Provas Acadêmicas SEBITAN — Grade Curricular Coordenada
// Estrutura Oficial: 30 Disciplinas organizadas em 5 Módulos Pedagógicos
// Cada Disciplina contém 2 Provas Oficiais (Prova 1 e Prova 2) com 20 Questões cada (Total: 1.200 questões).
// Nota de aprovação mínima: 7,0. Limite: 2 tentativas por dia para cada prova.

import { provasModulo1 } from "./provas/modulo1.js";
import { provasModulo2 } from "./provas/modulo2.js";
import { provasModulo3 } from "./provas/modulo3.js";
import { provasModulo4 } from "./provas/modulo4.js";
import { provasModulo5 } from "./provas/modulo5.js";

export const provasDisciplinas = [
  ...provasModulo1,
  ...provasModulo2,
  ...provasModulo3,
  ...provasModulo4,
  ...provasModulo5,
];

export default provasDisciplinas;
