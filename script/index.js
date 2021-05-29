(function toggleNav(){
    const navElem = document.querySelector("#nav-bar nav");
    const hamButton = document.querySelector("#nav-bar .hamburger-icon");

    hamButton.addEventListener("click", function(){
        if(hamButton.classList.contains("active")){
            hamButton.classList.remove("active");
            navElem.classList.add("hidden");
            document.body.style.overflow = null;
        } else {
            hamButton.classList.add("active");
            navElem.classList.remove("hidden");
            document.body.style.overflow = "hidden";
        }
    })
})();