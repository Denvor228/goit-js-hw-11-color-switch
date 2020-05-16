const refs = {
        startBtn: document.querySelector('button[data-action="start"'),
        stopBtn: document.querySelector('button[data-action="stop"'),
    },
    colors = [
        '#FFFFFF',
        '#2196F3',
        '#4CAF50',
        '#FF9800',
        '#009688',
        '#795548',
    ],
    randomIntegerFromInterval = (max) => {
        return Math.floor(Math.random() * (max + 1));
    },
    setRandomColor = () => {
        const _color = colors[randomIntegerFromInterval(colors.length - 1)]
        console.log(_color)
        document.body.style.backgroundColor = _color
    }

const interval = {
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => setRandomColor(), 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }
}

refs.startBtn.addEventListener('click', interval.start.bind(interval))

refs.stopBtn.addEventListener('click', interval.stop.bind(interval))