const ideas = sessionStorage.getItem("optionList").split("|");
for (let i = 0; i < 5; i++) {
    document.getElementById(`option${i}`).textContent = ideas[i];
}

const onOptionsSubmit = async () => {
    const radios = document.getElementsByName('option');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            sessionStorage.setItem("idea",ideas[i]);
        }
    }
    location.replace("results.html");
}

const reGenerateIdeas = async () => {
    for (let i = 0; i < 5; i++) {
        document.getElementById(`option${i}`).textContent = "Loading...";
    }
    generateIdeas(sessionStorage.getItem("keyWords")).then((newIdeas) => {
        ideasStr = "";
        for (let i = 0; i < 5; i++) {
            ideas[i] = newIdeas[i];
            ideasStr += `${ideas[i]}|`
            document.getElementById(`option${i}`).textContent = ideas[i];
        }
        sessionStorage.setItem("optionList", ideasStr);
    });
}