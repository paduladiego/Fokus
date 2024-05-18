# Fokus
Estudo de JS - Projeto Pomodoro

# Fokus

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

This project was created by PADULA One. You can contact me at [the@padula.one]<mailto:the@padula.one>.