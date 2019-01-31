

let url = '../floridawomen.json';
  fetch(url)
  .then(response => response.json())
  .then(data => {
    let listNames;
    let hoverDiv1;
    let hoverDiv2;
    let listDiv = document.getElementById("list");
    for (i=16; i<data.length; i++){
    listNames = document.createElement("a");
    listNames.setAttribute("class","block__title");
    listNames.setAttribute("data-img","images/women/2.jpg");
    listNames.innerHTML = data[i].name;

    hoverDiv1 = document.createElement("div");
    hoverDiv1.setAttribute("class","hover-reveal");
    hoverDiv1.setAttribute("style","top: 398px; left: 388px; opacity: 0;");


    listDiv.appendChild(listNames);


    console.log(data[i].name);
  }
  });
