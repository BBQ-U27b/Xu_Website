// Array of GIF images
const gifImages = [
    "images/huahua-01.gif",
    "images/huahua-02.gif",
    "images/huahua-03.gif"
];

// Array of possible emoji overlays
const emojiList = ["🐼", "❤️", "🎉", "😂", "🌿"];

let clickCount = 0;
const originalImage = "images/panda.jpg"; // Path to the original panda image
const imgElement = document.getElementById("pandaImg");
const emojiOverlay = document.getElementById("emojiOverlay");
const videoContainer = document.getElementById("videoContainer");

function handleClick() {
    clickCount++;
    console.log("Click Count:", clickCount); // Debugging log: Track click count

    if (clickCount === 1) {
        // Show a random emoji
        let randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
        emojiOverlay.innerHTML = randomEmoji;
        emojiOverlay.classList.remove("hidden"); // Show emoji overlay
        imgElement.src = originalImage; // Keep original image
        videoContainer.classList.add("hidden"); // Hide video
        console.log("Showing Emoji:", randomEmoji); // Debugging log: Track emoji
    } else if (clickCount === 2) {
        // Show a random GIF
        let randomGif = gifImages[Math.floor(Math.random() * gifImages.length)];
        imgElement.src = randomGif;
        emojiOverlay.classList.add("hidden"); // Hide emoji overlay
        videoContainer.classList.add("hidden"); // Hide video
        console.log("Showing GIF:", randomGif); // Debugging log: Track GIF
    } else if (clickCount === 3) {
        // Show the YouTube video
        videoContainer.classList.remove("hidden");
        imgElement.src = originalImage; // Reset to original image
        emojiOverlay.classList.add("hidden"); // Hide emoji overlay
        console.log("Showing YouTube Video"); // Debugging log: Track video
    } else if (clickCount === 4) {
        // Reset everything after the video
        clickCount = 0; // Reset click counter
        imgElement.src = originalImage; // Reset to original image
        emojiOverlay.classList.add("hidden"); // Hide emoji overlay
        videoContainer.classList.add("hidden"); // Hide video
        console.log("Resetting to Panda Image"); // Debugging log: Track reset
    }

    // Ensure image dimensions stay consistent
    imgElement.style.width = "400px";
    imgElement.style.height = "auto";
    console.log("Image Source:", imgElement.src); // Debugging log: Track image source
}