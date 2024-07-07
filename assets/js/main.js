const userInput = document.getElementById("user-input");
const addBtn = document.getElementById("add-btn");
const total = document.getElementById("span-total");
const completado = document.getElementById("span-completado");
const tbody = document.querySelector("tbody");
let contador = 0;

let tareas = [
  { id: 1, title: "Hacer Mercado", estatus: false },
  { id: 2, title: "Estudiar para la prueba", estatus: false },
  { id: 3, title: "Sacar a pasear a Tobby", estatus: false },
];

const arrlength = () => {
  let count = 1;
  for (let i = 0; i < tareas.length; i++) {
    count += 1;
  }
  return count;
};

const renderTareas = (tareas) => {
  let html = "";
  for (let tarea of tareas) {
    html += `
              <tr>
                <td>${tarea.id}</td>
                <td>${tarea.title}</td>
                <td><button class="btn btn-primary" onclick='completed(${tarea.id})'>Completada ?</button></td>
                <td><button class="btn btn-danger" onclick='borrar(${tarea.id})'>Eliminar</button></td>
              </tr>
          `;
  }
  tbody.innerHTML = html;
  total.textContent = tareas.length;
  completado.textContent = contador
};

renderTareas(tareas);

const borrar = (id) => {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderTareas(tareas);
};

const completed = (id) => {
  let n = 0;
  const tareaCompletada = tareas.find((elem) => elem.id == id);
  if (tareaCompletada.estatus == false) {
    tareaCompletada.estatus = true;
    n += 1;
  } else if (tareaCompletada.estatus == true) {
    tareaCompletada.estatus = false;
    n -= 1;
  } else {
    n = 0;
  }
  contador += n;

  renderTareas(tareas);
};

addBtn.addEventListener("click", () => {
  let nuevaTarea = userInput.value;
  tareas.push({ id: arrlength(), title: nuevaTarea, estatus: false });
  userInput.value = "";
  renderTareas(tareas);
});
