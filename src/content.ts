/**
 * Checks if the confirmation popup is visible
 */
const checkPopupActivity = () => {
    const popup_text = document.querySelector('ytd-popup-container ytd-formatted-string');

    if (popup_text && popup_text.textContent?.includes('Video paused'))
    {
        // (1) Hide the popup first
        const popup = document.querySelector<HTMLDivElement>('ytd-poppopup-container');
        if (popup) popup.style.display = 'none';

        // (2) Continue the current video
        const video_stream = document.querySelector<HTMLVideoElement>('.video-stream');
        if (video_stream) video_stream.play();

        // (3) Click the confirm button
        const confirm_btn= document.querySelector<HTMLButtonElement>('.confirm-button');
        if (confirm_btn) confirm_btn.click();

        console.log('Popup commited (:');
    } else console.log(' - No popup found yet -');
}

setInterval(checkPopupActivity, 1000);


export {};