var img = null
var shape = 'none'

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

function mousePressed() {
	drawShape()
}

function drawShape() {
	const metadata_size = document.querySelector('#m-size').value
	const metadata_height = document.querySelector('#m-height').value
	const col1 = document.querySelector('#col1').value
	const col2 = document.querySelector('#col2').value
	if (shape == 'circle') {
		fill(col1)
		stroke(col2)
		circle(mouseX, mouseY, metadata_size)
	} else if (shape == 'square') {
		fill(col1)
		stroke(col2)
		square(mouseX, mouseY, metadata_size)
	} else if (shape == 'rect') {
		fill(col1)
		stroke(col2)
		rect(mouseX, mouseY, metadata_size, metadata_height)
	} else if (shape == 'line') {
		stroke(col2)
		line(mouseX, mouseY, mouseX - metadata_size, mouseY - metadata_height)
	} else if (shape == 'coolerline') {
		stroke(col2)
		line(mouseX, mouseY, metadata_size, metadata_height)
	} else if (shape == 'eraser') {
		fill('white')
		stroke('white')
		circle(mouseX, mouseY, metadata_size)
	}
}

document.querySelectorAll('.shape').forEach(v => {
	v.addEventListener('click', shp => {
		shape = shp.target.dataset.shape
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
