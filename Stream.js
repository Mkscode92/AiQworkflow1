//Millicast.js is the brain of the stream viewer, handling all functionality.
// Learn More @ https://docs.millicast.com/docs/web-draft

async function connectStream() {
	// Connects the stream and does a majority of the functionality for the app.
	const activeSources = new Set();
	let viewers = document.getElementById("viewers");
	let stopBtn = document.getElementById("stopBtn");
	let accID = "6d8srH";//document.getElementById("accID").value;
	let video = document.getElementById("videoPlayer");
	let streamBtn = document.getElementById("startBtn");
	let streamName = "myStreamName"; //document.getElementById("streamName").value;
	let inputFormVisCont = document.getElementById("inputFormVisCont");

	video.hidden = false;
	streamBtn.disabled = true;
	stopBtn.disabled = false;
	inputFormVisCont.hidden = true;

	// Step 1: Authentication with the Millicast SDK
	const options = {
		disableVideo: false,
		disableAudio: false,
		bandwidth: 0,
	};

	const tokenGenerator = () =>
		window.millicast.Director.getSubscriber({
			streamName: streamName,
			streamAccountId: accID,
		});

	window.alert("hi");

	const millicastView = new window.millicast.View(streamName, tokenGenerator);

	// Step 2: Adding the Stream to your <video> tag
	millicastView.on("track", (event) => {
		addStreamToYourVideoTag(event.streams[0]);
	});
}

function stopStream() {
	//Closes Stream and resets browser.
	location.reload();
}

function addStreamToYourVideoTag(elem) {
	//Adds Stream to the <video> tag.
	let video = document.getElementById("videoPlayer");
	video.srcObject = elem;
	video.autoplay = true;
}

function enableButton() {
	// Enabled the startStream button in the HTML.
	let streamBtn = document.getElementById("startBtn");
	streamBtn.disabled = false;
}

// Listens for changes in the streamName user input box.
document.getElementById("streamName").addEventListener("change", enableButton, false);
