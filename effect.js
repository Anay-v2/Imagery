var img = null

function setup() {
	createCanvas(400, 400)
}

function draw() {}

function imageLoaded() {
	document.querySelector('main').classList.remove('hidden')
	document.querySelector('#load').classList.add('hidden')
	img = loadImage(document.querySelector('#file').value, img => {
		image(img, 0, 0, 400, 400)
		document.querySelector('#content').classList.remove('hidden')
	})
}

function applyEffect(effect) {
	const metadata_value = document.querySelector('#m-val').value
	if (effect == 'threshold') {
		filter(THRESHOLD, metadata_value || 0.5)
	} else if (effect == 'gray') {
		filter(GRAY)
	} else if (effect == 'invert') {
		filter(INVERT)
	} else if (effect == 'posterize') {
		filter(POSTERIZE, metadata_value)
	} else if (effect == 'blur') {
		filter(BLUR, metadata_value || 1)
	} else if (effect == 'erode') {
		filter(ERODE)
	} else if (effect == 'dilate') {
		filter(DILATE)
	}
}

document.querySelectorAll('.shape').forEach(v => {
	v.addEventListener('click', shp => {
		applyEffect(shp.target.dataset.shape)
	})
})

function saveImage() {
	save()
}
function reset() {
	if (
		window.confirm(
			'Are you sure you want to reset? All your edits will be lost.'
		)
	) {
		clear()
		imageLoaded()
	}
}
