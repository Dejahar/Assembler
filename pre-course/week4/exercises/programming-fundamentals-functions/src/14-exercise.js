/**
 * Complete the function bellow to:
 *
 * Return:
 * the total of the numbers in the 'ingresos' array
 * minus
 * the the total of the numbers in the 'gastos' array
 */

// Complete the code to the function
function exercise14() {
    let ingresos = [100, 30, 10];
    let gastos = [40, 60, 60, 30];

    let totalIngresos = 0;
    let totalGastos = 0;

    for (const i of ingresos) {
        totalIngresos += i;
    }
    for (const i of gastos) {
        totalGastos += i;
    }

    return totalIngresos - totalGastos;
}

module.exports = exercise14;
