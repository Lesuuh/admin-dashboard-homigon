const backdrop = document.querySelector(".modal-backdrop");
const inactiveModalOpenBtn = document.getElementById("see-all");
const inactiveModal = document.querySelector(".inactive");


function openModal() {
  inactiveModal.style.display = "flex";
  backdrop.style.display = "block";
}

function closeModal() {
  inactiveModal.style.display = "none";
  backdrop.style.display = "none";
}

inactiveModalOpenBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  openModal();
});

inactiveModal.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!inactiveModal.contains(event.target)) {
    closeModal();
  }
});

// ------ Table-------

