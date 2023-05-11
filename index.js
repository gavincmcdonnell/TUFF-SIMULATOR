const libOne = document.getElementById('lib-1');
const beatName = document.getElementById('beat-name');
const padContainer = document.getElementById('pad-container');

// Press keys
let currentLibrary;
const pressKeyHandler = (e) => {
	switch (e.keyCode) {
		case 81:
			classClick('Q');
			const filterQ = currentLibrary.filter((pad) => pad.key === 'Q');
			const audioQ = new Audio(filterQ[0].sound);
			audioQ.currentTime = 0;
			audioQ.play();
			playSound(filterQ[0].sound, filterQ[0].name);
			break;
		case 87:
			classClick('W');
			const filterW = currentLibrary.filter((pad) => pad.key === 'W');
			playSound(filterW[0].sound, filterW[0].name);
			break;
		case 69:
			classClick('E');
			const filterE = currentLibrary.filter((pad) => pad.key === 'E');
			playSound(filterE[0].sound, filterE[0].name);
			break;
		case 82:
			classClick('R');
			const filterR = currentLibrary.filter((pad) => pad.key === 'R');
			playSound(filterR[0].sound, filterR[0].name);
			break;
		case 84:
			classClick('T');
			const filterT = currentLibrary.filter((pad) => pad.key === 'T');
			playSound(filterT[0].sound, filterT[0].name);
			break;
		case 89:
			classClick('Y');
			const filterY = currentLibrary.filter((pad) => pad.key === 'Y');
			playSound(filterY[0].sound, filterY[0].name);
			break;
		case 85:
			classClick('U');
			const filterU = currentLibrary.filter((pad) => pad.key === 'U');
			playSound(filterU[0].sound, filterU[0].name);
			break;
		case 73:
			classClick('I');
			const filterI = currentLibrary.filter((pad) => pad.key === 'I');
			playSound(filterI[0].sound, filterI[0].name);
			break;
		case 79:
			classClick('O');
			const filterO = currentLibrary.filter((pad) => pad.key === 'O');
			playSound(filterO[0].sound, filterO[0].name);
			break;
		case 49:
			currentLibrary = libraryOne;
			createPads(libraryOne);
			break;
		case 50:
			currentLibrary = libraryTwo;
			createPads(libraryTwo);
			break;
		case 51:
			currentLibrary = libraryThree;
			createPads(libraryThree);
			break;
		default:
			console.log(`${e.keyCode} does not have a function in this App\nDesigned and Developed by Ibán López`);
			break;
	}
};

// Keys events
document.addEventListener('keydown', pressKeyHandler);

// Audio elements
function sound(src) {
	this.sound = document.createElement('audio');
	this.sound.src = src;
	this.sound.setAttribute('preload', 'auto');
	this.sound.setAttribute('controls', 'none');
	this.sound.classList.add('clip'); //FCC project #6
	this.sound.style.display = 'none';
	document.body.appendChild(this.sound);
	this.play = function() {
		this.sound.play();
	};
	this.stop = function() {
		this.sound.pause();
	};
}

// Sound libraries (may add more)
//      First Library
oneQ = new sound('./sounds/library1/808.wav');
oneW = new sound('./sounds/library1/clap.wav');
oneE = new sound('./sounds/library1/crash.wav');
oneR = new sound('./sounds/library1/hi hat.wav');
oneT = new sound('./sounds/library1/kick.wav');
oneY = new sound('./sounds/library1/open hat.wav');
oneU = new sound('./sounds/library1/open hat 2.wav');
oneI = new sound('./sounds/library1/perc.wav');
oneO = new sound('./sounds/library1/snare.wav');

libraryOne = [
	{
		sound: oneQ,
		name: 'BOOM!',
		key: 'Q'
	},

	{
		sound: oneW,
		name: 'CLAP!',
		key: 'W'
	},

	{
		sound: oneE,
		name: 'TSSSSS!',
		key: 'E'
	},

	{
		sound: oneR,
		name: 'TICK!',
		key: 'R'
	},

	{
		sound: oneT,
		name: 'THMP!',
		key: 'T'
	},

	{
		sound: oneY,
		name: 'PSSS!',
		key: 'Y'
	},

	{
		sound: oneU,
		name: 'TSS!',
		key: 'U'
	},

	{
		sound: oneI,
		name: 'CLICK!',
		key: 'I'
	},

	{
		sound: oneO,
		name: 'BAP!',
		key: 'O'
	}
];

// Pad elements
function newPad(pad) {
	const { sound, name, key } = pad;
	this.newPad = document.createElement('div');
	this.newPad.classList.add('drum-pad');
	this.newPad.setAttribute('id', key);
	this.newPad.setAttribute('type', 'button');
	this.newPad.innerText = key;
	this.newPad.onclick = () => {
		playSound(sound, name);
		classClick(key);
	};
	this.newPad.onmouseover = () => classHover(key);
	this.newPad.onmouseleave = () => {
		this.newPad.classList.remove('drum-pad-hover');
	};
	padContainer.appendChild(this.newPad);
}

// Create pad 
const createPads = (library) => {
	while (padContainer.firstChild) {
		padContainer.removeChild(padContainer.lastChild);
	}
	library.map((pad) => {
		new newPad(pad);
	});
};

// Play sound
const playSound = (soundObj, name) => {
	const newSound = new Audio(soundObj.sound.src);
	newSound.currentTime = 0
	newSound.play();
	beatName.innerHTML = name;
};

// Edit when hovering
const classHover = (key) => {
	const pad = document.getElementById(key);
	pad.classList.add('drum-pad-hover');
};

// Edit when clicking
const classClick = (key) => {
	const pad = document.getElementById(key);
	pad.classList.add('drum-pad-clicked');
	setTimeout(() => {
		pad.classList.remove('drum-pad-clicked');
	}, 500);
};

// Render library on first load
window.onload = () => {
	currentLibrary = libraryOne;
	createPads(libraryOne);
};

// Render libraries on click
libOne.onclick = () => {
	currentLibrary = libraryOne;
	createPads(libraryOne);
};