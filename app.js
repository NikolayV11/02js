const inputElement = document.querySelector("#title");
const createBtn = document.querySelector("#create");
const listElement = document.querySelector("#list");

const notes = [
  { title: "запись блок про массивы", completed: false },
  { title: "расказать теорию объектов", completed: true },
];

// создаёт новые элементы в масив
createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: true,
  };
  notes.push(newNote);
  render();
  // listElement.insertAdjacentHTML(
  //   "beforeend",
  //   getNoteTemplate(newNote, notes.length - 1)
  // );

  inputElement.value = "";
};


// генирирует дом 
function getNoteTemplate(note, index) {
  return `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${
            note.completed ? "text-decoration-line-through" : ""
          }">${note.title}</span>
          <span>
            <span class="btn btn-smanote.completedll btn-${
              note.completed ? "warning" : "success"
            }" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remov">&times;</span>
          </span>
        </li>`;
}

// выводит элементы
function render() {
  listElement.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
  // for (let intex = 0; intex < notes.length; intex++) {
  //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[intex]));
  // }
}

render();

// слушатель событий
listElement.onclick = function (event) {
  // const h = event.target.dataset.index;
  if (event.target.dataset.index) {
    const index = event.target.dataset.index;
    const type = event.target.dataset.type;
    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
      console.log("toggle", index);
    } else if (type === "remov") {
      notes.splice(index, 1);
    }
    render();
  }
};
