let viewMode = 0;

let projectVisibility = {
  twitch: false,
  sp: false,
  jun: false,
  otrack: false
};

getClasses = (ele) => {
  return ele.classList;
}

toggleProject = (projectId, btnId) => {
  const project = document.getElementById(projectId);
  const btn = document.getElementById(btnId);
  projectVisibility[projectId] = !projectVisibility[projectId];
  btn.innerText = projectVisibility[projectId] ? "Hide Project" : "View Project";
  const classes = getClasses(project);
  projectVisibility[projectId] ? classes.remove("display-none") : classes.add("display-none");
}

toggleDarkMode = () => {
  viewMode = !viewMode ? 1 : 0;
  const allJobBlocks = document.getElementsByClassName("job-block job-bg");
  const allQuotes = document.getElementsByClassName("quote");
  const allTitles = document.getElementsByClassName("experience-title lrg-text");
  const allSubTitles = document.getElementsByClassName("job-title");
  const allDates = document.getElementsByClassName("date-range");
  const allProjectAbout = document.getElementsByClassName("experience-title lrg-text-sub");

  processClassChange(document.getElementsByClassName("right-experience w70")[0], "dark-bg");

  processClassChange(document.getElementsByClassName("left-about w30")[0], "dark-contrast-bg");

  processClassChange(document.getElementsByClassName("right-experience w70")[0], "light-text");

  processClassChange(document.getElementsByClassName("dark-mode")[0], "light-text");
  processClassChange(document.getElementsByClassName("fa-moon")[0], "moon-knight")

  processClassChange(document.getElementsByClassName("experience-heading")[0], "light-text");

  processClassChange(document.getElementsByClassName("quote")[0], "quote-text");

  Array.from(allJobBlocks).forEach(el => {
    processClassChange(el, "dark-contrast-bg");
  });

  Array.from(allQuotes).forEach(el => {
    processClassChange(el, "quote-text");
  });

  const elementsToIterate = [
    ...allTitles,
    ...allSubTitles,
    ...allDates,
    ...allProjectAbout
  ];

  elementsToIterate.forEach(el => {
    processClassChange(el, "light-text");
  });

}

const processClassChange = (el, newStyle) => {
  viewMode ? el.classList.add(newStyle) : el.classList.remove(newStyle);
}
