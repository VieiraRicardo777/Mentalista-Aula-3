var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;
var opcao = document.getElementById("jogar").value;
var elementoRasultado = document.getElementById("resultado");
var chute = document.getElementById("valor");

function Chutar() {
	var elementoResultado = document.getElementById("resultado");
	var chute = parseInt(document.getElementById("valor").value);

	if (tentativas == 3) {
		elementoResultado.innerHTML =
			"Você tentou 3 vezes e não acertou! Mas tente novamente! O número era " +
			numeroSecreto;
	} else {
		if (chute == numeroSecreto) {
			tentativas += 1;
			elementoResultado.innerHTML =
				"Você Acertou Miserávi" + tentativas + " tentativas.";
		} else if (chute > 10 || chute < 0) {
			elementoResultado.innerHTML = "Tentativas inválidas!";
		} else {
			if (numeroSecreto || (chute && tentativas < 3)) {
				elementoResultado.innerHTML = "Você errou. Tente mais uma vez!";
			}
			if (tentativas >= 3) {
				elementoResultado.innerHTML =
					"Você errou 3 vezes. Que pena! O número era " + numeroSecreto;
				}
			}
		}
	}
}
