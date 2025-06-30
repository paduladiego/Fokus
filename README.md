| <h1> Fokus | <h1>Fokus |
| :--- | :--- | 
| Estudo de JS - Projeto Pomodoro | Study of JS - Pomodoro Project|
| <h2>Estudo de Automação de Foco e Pausa com JavaScript |  <h2>Study of Focus and Break Automation with JavaScript |
| Este projeto faz parte do meu estudo sobre JavaScript para automatizar intervalos de foco e pausas. O objetivo é praticar e demonstrar o uso de JavaScript para aprimorar ferramentas de produtividade. | This project is part of my study on JavaScript to automate focus and break intervals. The aim is to practice and demonstrate the use of JavaScript for enhancing productivity tools. |
| <h2> Estrutura do Projeto | <h2> Project Structure | |
| O projeto contém os seguintes arquivos: | The project contains the following files: | |
| <li> `index.html`: A página principal do projeto. | `index.html`: The main page of the project. |
| <li> `styles.css`: Arquivo CSS com estilos para o projeto. | `styles.css`: CSS file with styles for the project. |
| <li> `script.js`: Arquivo JavaScript com a lógica para automação de foco e pausas. | `script.js`: JavaScript file with the logic for focus and break automation. |
| <li> `assets/`: Pasta contendo imagens e outros recursos usados no projeto. | `assets/`: Folder containing image and other resources used in the project. |
| <h2> Principais Funcionalidades | <h2> Main Features |
| <h3> Automação de Foco e Pausa | <h3> Focus and Break Automation |
| **Modo Foco**: Otimiza a produtividade configurando um temporizador para períodos de trabalho focado. | **Focus Mode**: Optimizes productivity by setting a timer for focused work periods. |
| <li> **Modo Pausa Curta**: Fornece pequenas pausas para descansar e recarregar. | **Short Break Mode**: Provides short breaks to rest and recharge. |
| <li> **Modo Pausa Longa**: Permite pausas mais longas para relaxar. | **Long Break Mode**: Allows for longer breaks to relax. |
| <h3> Melhorias com JavaScript | <h3> JavaScript Enhancements |
| <li> **Temporizador Automatizado**: O temporizador faz a contagem regressiva automaticamente para períodos de foco e pausas. | <li> **Automated Timer**: The timer automatically counts down for focus and break periods. |
| <li> **Notificações de Áudio**: Toca sons diferentes para início, pausa e término do temporizador. | <li> **Audio Notifications**: Plays different sounds for start, pause, and end of the timer. |
| <li> **Atualizações Dinâmicas da UI**: Altera o contexto da interface com base no modo selecionado (foco, pausa curta, pausa longa). | <li> **Dynamic UI Updates**: Changes the UI context based on the selected mode (focus, short break, long break). |
| <li> **Alternar Música**: Opção para tocar ou pausar música de fundo durante as sessões de foco. | <li> **Music Toggle**: Option to play or pause background music during focus sessions. |
| <h2> Exemplo de Uso | <h2> Example Usage |
| Aqui está um breve exemplo de como o JavaScript melhora a experiência de foco e pausa:  | Here's a brief example of how JavaScript enhances the focus and break experience: |
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
| <h2> Como Contribuir | <h2> How to Contribute |
| :--- | :--- | 
| Se você deseja contribuir para este projeto, siga as instruções abaixo: | If you wish to contribute to this project, follow the instructions below:|
| <li> Faça um fork do projeto. | <li> Fork the project. |
| <li> Crie uma branch para sua funcionalidade: `git checkout -b feature/nova-funcionalidade`. | <li> Create a branch for your feature `git checkout -b feature/new-feature`. |
| <li> Commit suas alterações: `git commit -am 'Adicionando nova funcionalidade'`. | <li> Commit your changes `git commit -am 'Adding new feature`. |
| <li> Push para a branch: `git push origin feature/nova-funcionalidade`. | <li> Push to the branch `git push origin feature/new-feature`.
| <li> Crie um novo Pull Request. | <li> Create a new Pull Request. |
| <h2> Autor | <h2> Author |
| Este projeto foi criado por PADULA One. Você pode me contatar em [the@padula.one](<mailto:the@padula.one>). | This project was created by PADULA One. You can contact me at [the@padula.one](<mailto:the@padula.one>). |
