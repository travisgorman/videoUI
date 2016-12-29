#[Custom Video Player UI](http://travis.bingo/videoUI/)

A custom video player UI with additional control functionality

## Features
* Clicking anywhere on the video player toggles play/pause.
* When paused, the play button becomes a pause button, and vice versa.
* Clicking the 'play' button plays, and 'pause' pauses.
* The 'skip' buttons in the lower-right control time accordingly.
	- '«10' skips back 10 seconds.
	- '25»' skips ahead 25 seconds.
* Two range sliders control volume and playback speed in real time.
	- slider on the left controls volume.
	- slider on the right controls playback speed.
		+ defaults to 50%. Drag right to speed up, and left to slow down.
* Progress bar tracks video duration - grows in width as video plays.
* Clicking anywhere on the progress bar sets video to corresponding time.
* Dragging the progress bar scrubs the playing time forward and backward

![video player UI screenshot](http://i.imgur.com/YUG65Df.png)

## HTML5 Video API
* `play()` & `pause()`
* `paused` property (`play` or `pause` values)
* `currentTime`
* `duration`


## New / Interesting Things
* `style.flexBasis`
* `e.offsetX`
* `Element.offsetWidth`
* Handling `input[type="range"]` with `name` and `value` attributes
* Other `input[type="range"]` attributes: `min`, `max`, & `step`
* `parseFloat()` (standard built-in global object)

## How I Can Expand On This
* `fullScreenButton` expands video player to full screen in browser

