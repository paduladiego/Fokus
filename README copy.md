<table>
<tr>
<td>

># Foku

Estudo de JS - Projeto Pomodoro

## Estudo de Automação de Foco e Pausa com JavaScript

Este projeto faz parte do meu estudo sobre JavaScript para automatizar intervalos de foco e pausas. O objetivo é praticar e demonstrar o uso de JavaScript para aprimorar ferramentas de produtividade.

## Estrutura do Projeto

O projeto contém os seguintes arquivos:

- `index.html`: A página principal do projeto.
- `styles.css`: Arquivo CSS com estilos para o projeto.
- `script.js`: Arquivo JavaScript com a lógica para automação de foco e pausas.
- `assets/`: Pasta contendo imagens e outros recursos usados no projeto.

## Principais Funcionalidades

### Automação de Foco e Pausa

- **Modo Foco**: Otimiza a produtividade configurando um temporizador para períodos de trabalho focado.
- **Modo Pausa Curta**: Fornece pequenas pausas para descansar e recarregar.
- **Modo Pausa Longa**: Permite pausas mais longas para relaxar.

### Melhorias com JavaScript

- **Temporizador Automatizado**: O temporizador faz a contagem regressiva automaticamente para períodos de foco e pausas.
- **Notificações de Áudio**: Toca sons diferentes para início, pausa e término do temporizador.
- **Atualizações Dinâmicas da UI**: Altera o contexto da interface com base no modo selecionado (foco, pausa curta, pausa longa).
- **Alternar Música**: Opção para tocar ou pausar música de fundo durante as sessões de foco.

## Exemplo de Uso

Aqui está um breve exemplo de como o JavaScript melhora a experiência de foco e pausa:

```javascript
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

function iniciarPausarTemporizador() {
    if (intervaloId) {
        zerarIntervalo();
        return;
    }
    trocarBtnComecarPausar('pause', 'Pausar');
    somPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}
```

## Como Contribuir

Se você deseja contribuir para este projeto, siga as instruções abaixo:

- Faça um fork do projeto.
- Crie uma branch para sua funcionalidade: `git checkout -b feature/nova-funcionalidade`.
- Commit suas alterações: `git commit -am 'Adicionando nova funcionalidade'`.
- Push para a branch: `git push origin feature/nova-funcionalidade`.
- Crie um novo Pull Request.

## Autor

Este projeto foi criado por PADULA One. Você pode me contatar em [the@padula.one](<mailto:the@padula.one>).

</td>
<td>

># Fokus

Study of JS - Pomodoro Project

## Study of Focus and Break Automation with JavaScript

This project is part of my study on JavaScript to automate focus and break intervals. The aim is to practice and demonstrate the use of JavaScript for enhancing productivity tools.

## Project Structure

The project contains the following files:

- `index.html`: The main page of the project.
- `styles.css`: CSS file with styles for the project.
- `script.js`: JavaScript file with the logic for focus and break automation.
- `assets/`: Folder containing image and other resources used in the project.


## Main Features

### Focus and Break Automation

- **Focus Mode**: Optimizes productivity by setting a timer for focused work periods.
- **Short Break Mode**: Provides short breaks to rest and recharge.
- **Long Break Mode**: Allows for longer breaks to relax.

### JavaScript Enhancements

- **Automated Timer**: The timer automatically counts down for focus and break periods.
- **Audio Notifications**: Plays different sounds for start, pause, and end of the timer.
- **Dynamic UI Updates**: Changes the UI context based on the selected mode (focus, short break, long break).
- **Music Toggle**: Option to play or pause background music during focus sessions.


## Example Usage

Here's a brief example of how JavaScript enhances the focus and break experience:

```javascript
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

function iniciarPausarTemporizador() {
    if (intervaloId) {
        zerarIntervalo();
        return;
    }
    trocarBtnComecarPausar('pause', 'Pausar');
    somPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}
```

## How to Contribute

If you wish to contribute to this project, follow the instructions below:

- Fork the project.
- Create a branch for your feature git checkout -b feature/new-feature.
- Commit your changes git commit -am 'Adding new feature'.
- Push to the branch git push origin feature/new-feature.
- Create a new Pull Request.

## Author

This project was created by PADULA One. You can contact me at [the@padula.one](<mailto:the@padula.one>).


</td>
</tr>
</table>