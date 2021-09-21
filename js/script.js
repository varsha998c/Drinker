window.addEventListener("load", () => {
    $(".single-item").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });
});
window.addEventListener("load", ()=>{
    let hamburger = document.querySelector("#home header div.hamburger a.open-btn");
    hamburger.addEventListener("click", function(){
        document.querySelector("#home").classList.toggle("active");
        document.querySelector("body div.menubar").classList.toggle("active");
    })
    let close = document.querySelector("body div.menubar a.close-btn");
    close.addEventListener("click", function(){
        document.querySelector("#home").classList.toggle("revers");
    });
});