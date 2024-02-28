
function resolverCuadratica(a, b, c) {
    // Calcular el discriminante
    var discriminante = Math.pow(b,2) - 4 * a * c;

    // Verificar si el discriminante es negativo
    if (discriminante < 0) {
        return "La ecuación no tiene soluciones reales";
    }
    // Si el discriminante es igual a cero, hay una solución
    else if (discriminante === 0) {
        var solucion = -b / (2 * a);
        return "La solución única es: " + solucion;
    }
    // Si el discriminante es positivo, hay dos soluciones
    else {
        var solucion1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        var solucion2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return "Las soluciones son: " + solucion1 + " y " + solucion2;
    }
}

// Ejemplo de uso
var a = 1;
var b = -3;
var c = 2;

console.log(resolverCuadratica(a, b, c)); // Debería imprimir "Las soluciones son: 2 y 1"
