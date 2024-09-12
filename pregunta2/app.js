const pesoIP = document.getElementById('peso');
const alturaIP = document.getElementById('altura');
const output = document.getElementById('output');

const calcularIMC = () => {
    const num = parseFloat(pesoIP.value)/(parseFloat(alturaIP.value)*parseFloat(alturaIP.value));
    output.innerHTML = `El IMC es: ${num}`
}
calcularIMC();