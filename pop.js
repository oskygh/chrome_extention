let changeColor = document.getElementById("changeColor")

changeColor.addEventListener("click", async()=>{
    let [tabs] = await chrome.tabs.query({ active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tabs.id },
        function: setPageBackgroundColor,
    })
})

function setPageBackgroundColor(){

    chrome.storage.sync.get("color",({color})=> {
        changeColor.style.backgroundColor = color;
    })
}

