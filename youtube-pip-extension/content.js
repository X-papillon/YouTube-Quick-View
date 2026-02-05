(async () => {
    const video = document.querySelector("video");

    if (!video) {
        alert("No YouTube video found on this page.");
        return;
    }

    try {
        if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
        } else {
            await video.requestPictureInPicture();
        }
    } catch (err) {
        console.error("PiP error:", err);
    }
})();
