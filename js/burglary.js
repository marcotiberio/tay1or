$(function () { 
    var controller8 = new ScrollMagic.Controller();

    var burglaryAnimations = new TimelineMax()
        // .staggerTo(".artImages" , 0, {opacity: 1}, 1);
        .to(".flash", 1, {opacity: 1}, "+=1")
        .to("#burglaryText", 0, {opacity: 0}, "+=1")
        .to("#burglary1", 0, {opacity: 1})
        .to(".flash", 1, {opacity: 0})
        .to(".flash", 1, {opacity: 0})
        .to(".flash", 1, {opacity: 1})
        .to(".flash", 0.25, {backgroundColor: "#ffffff", ease: "power4.in"})
        .to(".flash", 0.25, {backgroundColor: "#000000", ease: "power4.out"})
        .to("#burglary2", 0, {opacity: 1})
        .to(".flash", 1, {opacity: 0})
        .to(".flash", 1, {opacity: 1})
        .to(".flash", 0.25, {backgroundColor: "#ffffff", ease: "power4.in"})
        .to(".flash", 0.25, {backgroundColor: "#000000", ease: "power4.out"})
        .to("#burglary3", 0, {opacity: 1})
        .to(".flash", 1, {opacity: 0})
        .to(".flash", 1, {opacity: 1})
        .to(".flash", 0.25, {backgroundColor: "#ffffff", ease: "power4.in"})
        .to(".flash", 0.25, {backgroundColor: "#000000", ease: "power4.out"})
        .to("#burglary4", 0, {opacity: 1})
        .to(".flash", 1, {opacity: 0})
        .to(".flash", 1, {opacity: 0})
        .to(".flash", 1, {opacity: 1})


new ScrollMagic.Scene({
        triggerElement: "#burglary",
        triggerHook: "onLeave",
        duration: "2000"
    })
    .setPin("#burglary")
    .setTween(burglaryAnimations)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller8);
});  