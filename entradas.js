let entradas = [];
let saidas = [];
function restrarEntrada() {
    const agora = new Date();
    entradas.push(agora);
    document.getElementById("registrada").innerText = entradas = $; { agora.toLocaleTimeString(); };
    atualizarHorasTrabalhadas();
}
function resgistraSaida() {
    const agora = new Date();
    saidas.push(agora);
    document.getElementById("registrada").innerText = saidas = $; { agora.toLocaleTimeString(); };
    atualizarHorasTrabalhadas();
}
function atualizarHorasTrabalhadas() {
    let horasTrabalhadas = 0;
    for (let i = 0; i < entradas.length; i++) {
        horasTrabalhadas += (saidas[i] - entradas[i]) / 1000 / 60 / 60;
    }
    document.getElementById("horas-trabalhadas").innerText = horasTrabalhadas.toFixed(2);
}
