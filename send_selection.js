// Add an event trigger when we right-click to run sendSelection
window.addEventListener("contextmenu", sendSelection);

function sendSelection() {
        const text = window.getSelection().toString();
        browser.runtime.sendMessage({"selection": text});
}

