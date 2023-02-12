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