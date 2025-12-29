

 btns = document.createElement("div");
 container.className = "container";

 for (let i = 0; i < box; i++) {
   const row = document.createElement("div");
   row.className = "row";
   for (let j = 0; j < box; j++) {
     const cell = document.createElement("div");
     cell.className = "cell";
     addDrawing(cell);
     row.appendChild(cell);
   }
   container.appendChild(row);
 }
 document.body.appendChild(container);