// ============ get elements
	
	// player
	// video
	// progress
	// progressBar
	// toggle
	// skipButtons
	// ranges


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



