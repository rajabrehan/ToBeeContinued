const idea = sessionStorage.getItem("idea");
document.getElementById("idea").textContent = idea;

const reGenerateTitle = () => {
    document.getElementById("title").textContent = "Loading Title...";
    generateTitle(idea).then((result) => {
        document.getElementById("title").textContent = result;
    });
}

const reGenerateScript = () => {
    document.getElementById("scriptText").textContent = "Loading Story...";
    generateScript(idea).then((result) => {
        document.getElementById("scriptText").textContent = result;
    });
}

const reGenerateImages = () => {
    for (let i = 0; i < 3; i++) {
        document.getElementById(`img${i}`).src = 'images/loading.png';
    }
    generateImages(idea).then((arr) => {
        for (let i = 0; i < 3; i++) {
            document.getElementById(`img${i}`).src = arr[i];
        }
    });
}

reGenerateTitle();
reGenerateScript();
reGenerateImages();
