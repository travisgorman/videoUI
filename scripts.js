// ============ get elements
	
	// player
	const player = document.querySelector('.player');
	// video
	const video = player.querySelector('.viewer');
	// progress
	const progress = player.querySelector('.progress');
	// progressBar
	const progressBar = player.querySelector('.progress__filled');
	// toggle
	const toggle = player.querySelector('.toggle');
	// skipButtons
	const skipButtons = player.querySelectorAll('[data-skip]');
	// ranges
  const ranges = player.querySelectorAll('.player__slider')

// ============ build functions

	// togglePlay
	// updateButton
	// skip
	// handleRangeUpdate
	// handleProgress
	// scrub(e)

// ============ hook up event listeners

	// video
		// click, togglePlay
		// play, updateButton
		// pause, updateButton
		// timeupdate, handleProgress

	// toggle
		// click, togglePlay

	// skipButtons
		// button
			// click, skip

	// ranges
		// range
			// change, handleRangeUpdate
	// ranges
		// range
			// mousemove, handleRangeUpdate

	// let mousedown = false;
	
	// progress
		// click, scrub
		// mousemove,  () => mousedown && scrub(e)
		// mousedown,  () => mousedown = true
		// mouseup,  () => mousedown = false



