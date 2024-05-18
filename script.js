const html = document.querySelector('html');
const focusBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const startPauseBtn = document.querySelector('#start-pause');
const image = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const somPause = new Audio('./sons/pause.mp3');
const somPlay = new Audio('./sons/play.wav');
const somBeep = new Audio('./sons/beep.mp3');
const tempoTela = document.querySelector('#timer');

let temporizadorEmSegundos = 1500;
// let temporizadorEmSegundos = 5; //testes
let intervaloId = null;

musicaInput.addEventListener('change', () => {
	if (musica.paused) {
		musica.play();
		musica.loop = true;
	} else {
		musica.pause();
	}
});

focusBtn.addEventListener('click', () => {
	alteracaoContexto('foco');
});

curtoBtn.addEventListener('click', () => {
	alteracaoContexto('descanso-curto');
});

longoBtn.addEventListener('click', () => {
	alteracaoContexto('descanso-longo');
});

/**
 * A função `alteracaoContexto` altera o contexto do site mediante ao click do mouse
 * contexto de entrada, atualiza o título exibido, imagem, botão ativo e duração do temporizador
 * conforme necessário.
 * @param contexto - O parâmetro `contexto` na função `alteracaoContexto` representa o
 * contexto ou modo de operação do aplicativo de produtividade. Ele pode ter três valores
 * possíveis: 'foco' (focus), 'descanso-curto' (short break) ou 'descanso-longo' (long break).
 */

function alteracaoContexto(contexto) {
	botoes.forEach(function (contexto) {
		contexto.classList.remove('active');
	});
	html.setAttribute('data-contexto', contexto);
	image.setAttribute('src', `./imagens/${contexto}.png`);
	switch (contexto) {
		case 'foco':
			titulo.innerHTML = 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';
			focusBtn.classList.add('active');
			temporizadorEmSegundos = 1500;
			// temporizadorEmSegundos = 2; //testes
			break;
		case 'descanso-curto':
			titulo.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
			curtoBtn.classList.add('active');
			temporizadorEmSegundos = 300;
			// temporizadorEmSegundos = 3; //testes
			break;
		case 'descanso-longo':
			titulo.innerHTML = 'Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>';
			longoBtn.classList.add('active');
			temporizadorEmSegundos = 900;
			// temporizadorEmSegundos = 4; // testes
			break;
	}
	inserirTempo();
}

/**
 * A função `contagemRegressiva` decrementa um temporizador e dispara um alerta quando o temporizador
 * atinge zero.
 * @returns A função `contagemRegressiva` não retorna nenhum valor explícito, resultando em `undefined`.
 */

const contagemRegressiva = () => {
	if (temporizadorEmSegundos <= 0) {
		zerarIntervalo();
		somBeep.play();
		alert('Tempo finalizado');
		limparDados();
		return;
	} else {
		temporizadorEmSegundos -= 1;
		inserirTempo();
	}
};
startPauseBtn.addEventListener('click', iniciarPausarTemporizador);

/**
 * A função `iniciarPausarTemporizador` inicia ou pausa um intervalo de temporizador e alterna o texto
 * de um botão entre "Começar" e "Pausar".
 * @returns A função `iniciarPausarTemporizador` não retorna nenhum valor (undefined).
 */
function iniciarPausarTemporizador() {
	if (intervaloId) {
		zerarIntervalo();
		return;
	}
	trocarBtnComecarPausar('pause', 'Pausar');
	somPlay.play();
	intervaloId = setInterval(contagemRegressiva, 1000);
}

/**
 * A função `zerarIntervalo` limpa um temporizador setInterval, redefine o ID do intervalo para null,
 * altera o texto de um botão e toca um som de pausa.
 */
function zerarIntervalo() {
	clearInterval(intervaloId);
	intervaloId = null;
	trocarBtnComecarPausar('play', 'Começar');
	somPause.play();
}

/**
 * A função `trocarBtnComecarPausar` altera o conteúdo de um elemento HTML com o id `#start-pause`
 * para exibir uma imagem e texto com base nos parâmetros fornecidos.
 * @param img - O parâmetro `img` é uma string que representa o nome de um arquivo de imagem (sem a
 * extensão do arquivo) que será usado como ícone do botão.
 * @param texto - O parâmetro `texto` é uma string que representa o conteúdo de texto que será exibido
 * junto com a imagem no botão Recomenda-se usar `Pausar`e `Começar`.
 */
function trocarBtnComecarPausar(img, texto) {
	startPauseBtn.innerHTML = `<img class="app__card-primary-butto-icon" src="/imagens/${img}.png" alt=""><span>${texto}</span>`;
}

/**
 * As funções `inserirTempo()` e `limparDados()` são usadas para exibir um tempo formatado e alternar
 * entre diferentes contextos, respectivamente.
 */

function inserirTempo() {
	const tempo = new Date(temporizadorEmSegundos * 1000);
	const tempoMinutos = tempo.toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' });
	tempoTela.innerHTML = `${tempoMinutos}`;
}

function limparDados() {
	setTimeout(() => {
		somBeep.pause();
	}, 0);
	switch (document.querySelector('.active').dataset.contexto) {
		case 'short':
			alteracaoContexto('foco');
			break;
		case 'long':
			alteracaoContexto('foco');
			break;
		case 'foco':
			alteracaoContexto('descanso-curto');
			break;
	}
}

inserirTempo();
