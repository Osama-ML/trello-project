const createNewColumnView = (id, title) => {
      let columnHTML = document.createElement("div");
      columnHTML.className = "card";
      columnHTML.setAttribute("id", id);
      columnHTML.textContent = title;
      columnsContainer.appendChild(columnHTML);
  }