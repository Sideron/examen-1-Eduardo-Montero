const edadIP = document.getElementById('edad');
const anioIP = document.getElementById('anio');

const setEdad = () => {
    const num = parseInt(anioIP.value);
    edadIP.value = new Date().getFullYear() - num;
}

setEdad()