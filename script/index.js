(function navBehavior(){
    const navElem = document.querySelector("#nav-bar nav");
    const hamButton = document.querySelector("#nav-bar .hamburger-icon");

    hamButton.addEventListener("click", function(e){
        e.stopPropagation();

        if(hamButton.classList.contains("active")){
            hideNav();
        } else {
            displayNav();
        }
    });

    function hideNav(){
        hamButton.classList.remove("active");
        navElem.classList.add("hidden");
        window.removeEventListener("click", handler);
    }
    function displayNav(){
        hamButton.classList.add("active");
        navElem.classList.remove("hidden");
        window.addEventListener("click", handler);
    }
    function handler(e){
        if(!e.path.some(e=>e===navElem)){
            hideNav();
        }
    }
})();
