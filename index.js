let btn=document.querySelectorAll(".rent")

let titles = document.querySelectorAll(".titels");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    document.querySelectorAll(".adam").forEach((el) => {
      el.style.display = "none";
    });

    let post1 = title.closest(".post1");
    let nextAdam = post1.nextElementSibling;

    if (nextAdam && nextAdam.classList.contains("adam")) {
      nextAdam.style.display = "block";

      let closeBtn = nextAdam.querySelector(".x");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          nextAdam.style.display = "none";
        }, { once: true }); 
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rentButtons = document.querySelectorAll(".rent");
  const divv = document.querySelector(".divv"); 
  const closeBtn = document.querySelector(".xx"); 
  let overlay = document.querySelector(".overlay");


  rentButtons.forEach(button => {
    button.addEventListener("click", function () {
      divv.style.display = "block";
      overlay.style.display = "block";

    });
  });
   
  closeBtn.addEventListener("click", function () {
    divv.style.display = "none";
      overlay.style.display = "none";

  });
});


let dark=document.querySelector(".Dark")
dark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

 if(dark.classList.contains("dark-mode")){
            dark.src = "icon-moon.svg"; 
            dark.classList.remove("dark-mode") 
        }
        else{
            dark.src = "icon-sun.svg"; 
            dark.classList.add("dark-mode") 

        }
});
