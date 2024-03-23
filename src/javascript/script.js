document.getElementById("open_btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("open-sidebar")
})

let openModalExperiencias = document.querySelector(
  ".side-items .side-item .botao-chamado-local"
)

let overLayExperiencias = document.querySelector(".overlay-modal-experiencias")

let closeModalExperiencias = document.querySelector(
  ".overlay-modal-experiencias .modal .modal-title .fechar-modal"
)

openModalExperiencias.addEventListener("click", function () {
  overLayExperiencias.classList.add("active")
})

closeModalExperiencias.addEventListener("click", function () {
  overLayExperiencias.classList.remove("active")
})

// let openModalFormacoes = document.querySelector(
//   ".links .link-formacao .botao-formacoes"
// )

// let overLayFormacoes = document.querySelector(".overlay-modal-formacoes")

// let closeModalFormacoes = document.querySelector(
//   ".overlay-modal-formacoes .modal .modal-title .fechar-modal"
// )

// openModalFormacoes.addEventListener("click", function () {
//   overLayFormacoes.classList.add("active")
// })

// closeModalFormacoes.addEventListener("click", function () {
//   overLayFormacoes.classList.remove("active")
// })
