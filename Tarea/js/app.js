import { curso, estudiantes } from "./datos.js";
import { reporte } from "./calculos.js";

const nuevo = {
  ...estudiantes[0],
  nombre: "Ana María"
};

const todos = [...estudiantes, nuevo];

document.getElementById("curso").textContent = `Curso: ${curso}`;

const lista = document.getElementById("reportes");

for (const estudiante of todos) {
  const elemento = document.createElement("li");
  elemento.textContent = reporte(estudiante);
  lista.appendChild(elemento);
}