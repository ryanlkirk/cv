let twitchVisible = false;
let spVisible = false;
let junVisible = false;
let otrackVisible = false;

getClasses = (ele) => {
    return ele.classList;
}

toggleSP = () => {
    document.getElementById("SP-btn").innerText = spVisible ? "View Project" : "Hide Project";
    spVisible = !spVisible;
    const classes = getClasses(document.getElementById("sp-project"));
    spVisible ? classes.remove("display-none") : classes.add("display-none")
}

toggleJun = () => {
    document.getElementById("jun-btn").innerText = junVisible ? "View Project" : "Hide Project";
    junVisible = !junVisible;
    const classes = getClasses(document.getElementById("jun-project"));
    junVisible ? classes.remove("display-none") : classes.add("display-none")
}

toggleOtrack = () => {
    document.getElementById("otrack-btn").innerText = otrackVisible ? "View Project" : "Hide Project";
    otrackVisible = !otrackVisible;
    const classes = getClasses(document.getElementById("otrack-project"));
    otrackVisible ? classes.remove("display-none") : classes.add("display-none")
}

toggleTwitch = () => {
    document.getElementById("twitch-btn").innerText = twitchVisible ? "View Project" : "Hide Project";
    twitchVisible = !twitchVisible;
    const classes = getClasses(document.getElementById("twitch-project"));
    twitchVisible ? classes.remove("display-none") : classes.add("display-none")
}
