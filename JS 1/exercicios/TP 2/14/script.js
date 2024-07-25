function escolhaAleatoria() {
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    const indice = Math.floor(Math.random() * opcoes.length);
    return opcoes[indice];
}

function determinarVencedor(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
        return "Empate";
    } else if (
        (escolhaUsuario === "Pedra" && escolhaComputador === "Tesoura") ||
        (escolhaUsuario === "Papel" && escolhaComputador === "Pedra") ||
        (escolhaUsuario === "Tesoura" && escolhaComputador === "Papel")
    ) {
        return "Você ganhou!";
    } else {
        return "Você perdeu!";
    }
}

function jogoPedraPapelTesoura(escolhaUsuario) {
    const escolhaComputador = escolhaAleatoria();
    alert("O computador escolheu: " + escolhaComputador);
    alert(determinarVencedor(escolhaUsuario, escolhaComputador));
}

const escolhaUsuario = prompt("Escolha Pedra, Papel ou Tesoura:");
if (escolhaUsuario === "Pedra" || escolhaUsuario === "Papel" || escolhaUsuario === "Tesoura") {
    jogoPedraPapelTesoura(escolhaUsuario);
} else {
    alert("Escolha inválida. Por favor, escolha Pedra, Papel ou Tesoura.");
}