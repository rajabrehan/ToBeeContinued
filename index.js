const onHomeSubmit = async () => {
    document.getElementById("input-submit").textContent = "Loading..."; 
    const val = document.getElementById("keywords-input").value; 
    const ideas = await generateIdeas(val);
    let ideasStr = "";
    for (let i in ideas) {
        ideasStr += `${ideas[i]}|`
    }
    sessionStorage.setItem("optionList", ideasStr);
    location.replace("options.html");
}
