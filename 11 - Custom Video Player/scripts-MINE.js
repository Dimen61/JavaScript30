const video = document.querySelector('.player__video');
const progressBar = document.querySelector('.progress');
const progressBarFilled = progressBar.querySelector('.progress__filled');
const toggleButton = document.querySelector('.toggle');
const sliders = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');

// Toggle button
function togglePlay() { 
    const method = video.paused ? 'play' : 'pause';
    video[method](); // JS dynamic method call

    toggleButton.textContent = video.paused ? '►' : '❚❚';
}

video.addEventListener('click', togglePlay);
toggleButton.addEventListener('click', togglePlay);

// Progress
function updateProgress(event) {
    const percentage = event.offsetX / progressBar.offsetWidth;
    video.currentTime = percentage * video.duration;
}

let progressbarMousedown = false;

progressBar.addEventListener('click', updateProgress);
progressBar.addEventListener('mousedown', () => progressbarMousedown = true);
progressBar.addEventListener('mousemove', (event) => progressbarMousedown && updateProgress(event));
progressBar.addEventListener('mouseup', () => progressbarMousedown = false);

video.addEventListener('timeupdate', () => {
    const percentage = video.currentTime / video.duration;
    progressBarFilled.style.flexBasis = `${percentage * 100}%`;
});

// Sliders
sliders.forEach((slider) => {
    slider.addEventListener('input', () => {
        video[slider.name] = slider.value;
    });
});

// Skip buttons
skipButtons.forEach((button) => {
    button.addEventListener('click', () => {
        video.currentTime += parseFloat(button.dataset.skip);
    })
});
