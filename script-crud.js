const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const paragrafoTarefaEmAndamento = document.querySelector('.app__section-active-task-description');
const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const btnCancelarNovaTarefa = document.querySelector('.app__form-footer__button--cancel');
const btnDeletarNovaTarefa = document.querySelector('.app__form-footer__button--delete');
const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas');
const btnRemoverTodasTarefas = document.querySelector('#btn-remover-todas');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

function atualizarTarefas() {
	localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
function limparParafagradoEmAndamento() {
	paragrafoTarefaEmAndamento.textContent = '';
}
function limparNovaTarefa() {
	textArea.value = '';
}

function limpaEscondeNovaTarefa() {
	limparNovaTarefa();
	formAdicionarTarefa.classList.toggle('hidden');
	btnAdicionarTarefa.parentElement.classList.remove('hidden');
}

btnDeletarNovaTarefa.onclick = () => {
	limparNovaTarefa();
};

btnCancelarNovaTarefa.onclick = () => {
	limpaEscondeNovaTarefa();
};
function criarElementoTarefa(tarefa) {
	// declara todas as constante de html
	const li = document.createElement('li');
	const svg = document.createElement('svg');
	const paragrafo = document.createElement('p');
	const btnEditar = document.createElement('button');
	const imgEditar = document.createElement('img');

	// adiciona todas as classes das constantes
	li.classList.add('app__section-task-list-item');
	paragrafo.classList.add('app__section-task-list-item-description');
	btnEditar.classList.add('app_button-edit');

	// adiciona conteúdo das tags
	svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>
    `;
	paragrafo.textContent = tarefa.descricao;
	imgEditar.setAttribute('src', './imagens/edit.png');

	// Adiciona os itens no HTML
	li.append(svg);
	li.append(paragrafo);
	li.append(btnEditar);
	btnEditar.append(imgEditar);

	if (tarefa.concluida) {
		li.classList.add('app__section-task-list-item-complete');
		btnEditar.setAttribute('disabled', true);
        limparParafagradoEmAndamento();
	} else {
		// adicionar item da lista para andamento
		li.onclick = () => {
			document.querySelectorAll('.app__section-task-list-item-active').forEach((e) => {
				e.classList.remove('app__section-task-list-item-active');
			});
			if (tarefaSelecionada == tarefa) {
                limparParafagradoEmAndamento();
				tarefaSelecionada = null;
				liTarefaSelecionada = null;
				return;
			}
			tarefaSelecionada = tarefa;
			liTarefaSelecionada = li;
			paragrafoTarefaEmAndamento.textContent = tarefa.descricao;

			li.classList.add('app__section-task-list-item-active');
		};
	}

	// criar interação de editar texto
	btnEditar.onclick = () => {
		const novaDescricao = prompt('Qual o novo texto');
		if (novaDescricao == null || novaDescricao == '') {
			return;
		} else {
			paragrafo.textContent = novaDescricao;
			tarefa.descricao = novaDescricao;
			atualizarTarefas();
		}
	};

	return li;
}

btnAdicionarTarefa.addEventListener('click', () => {
	formAdicionarTarefa.classList.toggle('hidden');
	btnAdicionarTarefa.parentElement.classList.add('hidden');
});

formAdicionarTarefa.addEventListener('submit', (evento) => {
	// evita reload do navegador
	evento.preventDefault();

	// Identifica dados do usuário no textarea.
	const tarefa = {
		descricao: textArea.value,
	};

	// adicionar essa tarefa ao nosso array de tarefas e exibe na tela.
	tarefas.push(tarefa);
	const elementoTarefa = criarElementoTarefa(tarefa);
	ulTarefas.append(elementoTarefa);

	// Convertendo o array para uma string em formato JSON para poder armazenar.
	atualizarTarefas(); // localStorage.setItem('tarefas', JSON.stringify(tarefas));

	// limpa texto e esconde
	limpaEscondeNovaTarefa();
});

tarefas.forEach((tarefa) => {
	const elementoTarefa = criarElementoTarefa(tarefa);
	ulTarefas.append(elementoTarefa);
});

document.addEventListener('FocoFinalizado', () => {
	if (tarefaSelecionada && liTarefaSelecionada) {
		liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
		liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
		liTarefaSelecionada.querySelector('button').setAttribute('disabled', true);
		tarefaSelecionada.concluida = true;
		atualizarTarefas();
	}
});

const removerTarefas = (taferasCompletas) => {
	const seletorTarefasCompletas = taferasCompletas ? '.app__section-task-list-item-complete' : '.app__section-task-list-item';
	document.querySelectorAll(seletorTarefasCompletas).forEach((el) => {
		el.remove();
	});
	tarefas = taferasCompletas ? tarefas.filter((tarefas) => !tarefas.concluida) : [];
	atualizarTarefas();
};
btnRemoverConcluidas.onclick = () => removerTarefas(true);

btnRemoverTodasTarefas.onclick = () => removerTarefas(false);
