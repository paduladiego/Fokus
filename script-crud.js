/**
 * O código JavaScript cria um aplicativo de gerenciamento de tarefas que permite aos usuários adicionar, 
 * editar e remover tarefas, com funcionalidade de conclusão de tarefas.
 * The JavaScript code creates a task management application that allows users to add, edit, and remove
 * tasks, with task completion functionality.
 */
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

/**
 * A função atualizarTarefas() salva o array 'tarefas' no localStorage como uma string JSON.
 * The function atualizarTarefas() saves the 'tarefas' array to the localStorage as a JSON string.
 */
function atualizarTarefas() {
	localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
/**
 * A função `limparParafagradoEmAndamento` limpa o conteúdo do elemento parágrafo `paragrafoTarefaEmAndamento`.
 * The function `limparParafagradoEmAndamento` clears the content of the paragraph element
 * `paragrafoTarefaEmAndamento`.
 */
function limparParafagradoEmAndamento() {
	paragrafoTarefaEmAndamento.textContent = '';
}
/**
 * A função `limparNovaTarefa` limpa o conteúdo de um elemento textarea
 * The function `limparNovaTarefa` clears the content of a text area element.
 */
function limparNovaTarefa() {
	textArea.value = '';
}

/**
 * A função "limpaEscondeNovaTarefa" limpa e oculta um formulário de nova tarefa enquanto exibe o botão de adicionar tarefa.
 * The function "limpaEscondeNovaTarefa" clears and hides a new task form while showing the add task
 * button.
 */
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
/**
 *  * A função "criarElementoTarefa" cria um elemento de tarefa com opções para editar e marcar como concluído.
 * @param tarefa - A função `criarElementoTarefa(tarefa)` é usada para criar um elemento de tarefa no
 * HTML com base no objeto de tarefa fornecido `tarefa`. A função cria vários elementos HTML como
 * `li`, `svg`, `p` e `button` para representar a tarefa.
 * @returns A função `criarElementoTarefa` está retornando um item de lista (`<li>`)
 * que representa uma tarefa. O elemento da tarefa inclui um ícone, um parágrafo de descrição e um
 * botão de edição. O elemento da tarefa é personalizado com base no objeto de tarefa passado para a função, como
 * definir o texto da descrição, habilitar/desabilitar o botão de edição e adicionar event listeners para
 * conclusão da tarefa.
 * The function "criarElementoTarefa" creates a task element with options to edit and mark as complete.
 * @param tarefa - The function `criarElementoTarefa(tarefa)` is used to create a task element in the
 * HTML based on the provided task object `tarefa`. The function creates various HTML elements like
 * `li`, `svg`, `p`, and `button` to represent the task.
 * @returns The function `criarElementoTarefa` is returning a dynamically created list item (`<li>`)
 * element that represents a task. The task element includes an icon, a description paragraph, and an
 * edit button. The task element is customized based on the task object passed to the function, such as
 * setting the description text, enabling/disabling the edit button, and adding event listeners for
 * task completion
 */
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

/**
 * A função removerTarefas remove tarefas da lista de tarefas com base em se estão concluídas ou não e atualiza a lista de tarefas de acordo.
 * @param taferasCompletas - taferasCompletas é um parâmetro booleano que determina se
 * remover tarefas concluídas ou todas as tarefas. Se taferasCompletas for verdadeiro, a função removerá apenas
 * tarefas concluídas; caso contrário, removerá todas as tarefas.
 * The function `removerTarefas` removes tasks from the task list based on whether they are complete or
 * not and updates the task list accordingly.
 * @param taferasCompletas - `taferasCompletas` is a boolean parameter that determines whether to
 * remove completed tasks or all tasks. If `taferasCompletas` is true, the function will remove only
 * completed tasks; otherwise, it will remove all tasks.
 */
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
