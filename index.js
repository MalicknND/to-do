// Ajouter sur me dom ce qui est tapé dans le champ input à la validation du formulaire
// monInput.value

const form = document.querySelector("form");

// stocker les données dans le local storage
const storeList = () => {
  window.localStorage.todolist = list.innerHTML; // permet de stocker les données dans le local storage qui s'appelle todolist 
};

// récupérer les données du local storage
const getValues = () => {
    if (window.localStorage.todolist) {
        list.innerHTML = window.localStorage.todolist;
    }else{
        list.innerHTML = "";
    }
}
window.addEventListener("load", getValues)
// getValues();

//add element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = ""; // pour vider le champ input et vider l'input
    storeList();
});

//remove element
list.addEventListener("click", (e) => {
  // console.log(e.target); // pour voir ce qui est cliqué
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
    storeList();
});
