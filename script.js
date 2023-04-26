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
