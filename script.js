// Define the URLs for each channel
const channels = {
    channel1: "https://tapmadtv.live/play.php?c=starhindi",
    channel2: "https://tata.wapka.co/download/WILLOW%20TV%20DADDY?id2=710079",
    channel3: "https://tapmadtv.live/play.php?c=supercricket",
};

// Get references to the buttons and iframe
const channel1Btn = document.getElementById("channel1");
const channel2Btn = document.getElementById("channel2");
const channel3Btn = document.getElementById("channel3");
const iframe = document.getElementById("iframe");

// Add event listeners to the buttons
channel1Btn.addEventListener("click", () => {
    iframe.src = channels.channel1;
});

channel2Btn.addEventListener("click", () => {
    iframe.src = channels.channel2;
});

channel3Btn.addEventListener("click", () => {
    iframe.src = channels.channel3;
});