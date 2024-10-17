function navanimation() {

    var menu = document.querySelector("nav i");
    var cross = document.querySelector(".full i");

    var tl = gsap.timeline();

    tl.to(".full", {
        right: 0,
        duration: 0.6,
    })
    tl.from(".full h4", {
        x: 150,
        opacity: 0,
        duration: 0.6,
        stagger: 0.28,
    })
    tl.from(".full i", {
        opacity: 0,
    })
    tl.pause()

    menu.addEventListener("click", function () {
        tl.play()
    })

    cross.addEventListener("click", function () {
        tl.reverse()
    })

}
navanimation();

// function page1animation() {
//     var tl = gsap.timeline();

//     tl.from("header nav", {
//         y: -40,
//         opacity: 0,
//         duartion: 1,
//         stagger: 0.2,
//     })

//     tl.from(".center h1,.center p ,.center button", {
//         x: -200,
//         opacity: 0,
//         duaration: 0.4,
//         stagger: 0.2
//     })

//     tl.from(".center img", {
//         x: 200,
//         opacity: 0,
//         duaration: 0.4,
//     }, "-=1")

//     tl.from(".section1 .bottom img", {
//         opacity: 0,
//         y: 30,
//         stagger: 0.3,
//         duartion: 1
//     })
// }
// page1animation();