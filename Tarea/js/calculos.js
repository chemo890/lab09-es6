export function promedio(...notas) {
  const suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length;
}

export function estado(nota, minima = 13) {
  return nota >= minima ? "Aprobado" : "Desaprobado";
}

export function reporte({ nombre, notas }) {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
}