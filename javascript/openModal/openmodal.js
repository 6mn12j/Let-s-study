const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
        
const closeButton = document.getElementById("close");
const overlay = document.querySelector(".modal_overlay");
        
const openModal = () => {
                modal.classList.remove("hidden");
        }
const closeModal = () =>{
                 modal.classList.add("hidden");
        }
        
openButton.addEventListener("click",openModal);
closeButton.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);

