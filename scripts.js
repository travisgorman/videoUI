// ============ get elements
	
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')
let mousedown = false;
// ============ build functions

// 
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

// 
function updateButton() {
	const icon = this.paused ? '►' : '❚ ❚';
	console.log( icon )
	toggle.textContent = icon;
}

// 
function skip() {
	video.currentTime += parseFloat(this.dataset.skip)
}

// 

// function handleRangeUpdate() {
// 	video[this.name] = this.value;
// }

// // as the `timeupdate` event on `video` fires, the progressBar
// // grows in width because we're updating its `flexBasis` percent
// // listen for `timeupdate` on `video`, and
// function handleProgress() {
// 	const percent = (video.currentTime / video.duration) * 100;
// 	progressBar.style.flexBasis = `${percent}%`;
// }

// // 
// function scrub(e){
// 	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
// 	video.currentTime = scrubTime;
// }


// ============ hook up event listeners

// video
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
// toggle
toggle.addEventListener('click', togglePlay);
// skipButtons
skipButtons.forEach(button => 
	button.addEventListener('click', skip));
// ranges
ranges.forEach(range => 
	range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => 
	range.addEventListener('mousemove', handleRangeUpdate));
// progress
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


