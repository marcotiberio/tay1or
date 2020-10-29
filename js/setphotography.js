$(function () { 
    var controller5 = new ScrollMagic.Controller();

    var setPhotographyAnimations = new TimelineMax()
        .to("#setPhotography1", 1, {opacity: 0}, "+=1")
        .to("#setPhotography2", 1, {opacity: 1})
        .to("#setPhotography2", 1, {opacity: 0})
        .to("#setPhotography3", 1, {opacity: 1})
        .to(".vogue", 0, {opacity: 1})
        .fromTo("#vogue1" , 1, {left: "-10%", top: "-10%", rotation:60}, {left: "20%",top: "10%", rotation:-15, ease: "power4.out"})
        .fromTo("#vogue2" , 1, {left: "-10%", bottom: "-10%", rotation:-60}, {left: "20%", top: "50%", rotation:10, ease: "power4.out"}, "-=1")
        .fromTo("#vogue3" , 1, {right: "-10%", top: "-10%", rotation:-60}, {left: "50%",top: "10%", rotation:30, ease: "power4.out"}, "-=1")
        .fromTo("#vogue4" , 1, {right: "-10%", bottom: "-10%", rotation:-60}, {left: "60%", top: "50%", rotation:-20, ease: "power4.out"}, "-=1")
        .to(".vogue", 1, {opacity: 0}, "+=0.5")
        .to("#setPhotography3", 1, {opacity: 0}, "-=1")
        .to("#setPhotography4", 1, {opacity: 1})
        .to(".setImg", 1, {opacity: 1}, "-=1")
        .fromTo("#sets1" , 1, {left: "-10%", top: "-40%", rotation:-60}, {left: "15%",top: "8%", rotation:-10, ease: "power4.out"})
        .fromTo("#sets2" , 1, {left: "10%", top: "-40%", rotation:80}, {left: "30%",top: "7%", rotation:-15, ease: "power4.out"}, "-=1")
        .fromTo("#sets3" , 1, {left: "0%", top: "-40%", rotation:60}, {left: "45%",top: "10%", rotation:15, ease: "power4.out"}, "-=1")
        .fromTo("#sets4" , 1, {left: "70%", top: "-40%", rotation:-60}, {left: "60%",top: "14%", rotation:-15, ease: "power4.out"}, "-=1")
        .fromTo("#sets5" , 1, {left: "100%", top: "-40%", rotation:60}, {left: "75%",top: "8%", rotation:10, ease: "power4.out"}, "-=1")
        .fromTo("#sets6" , 1, {right: "-20%", top: "60%", rotation:80}, {left: "80%",top: "50%", rotation:7, ease: "power4.out"}, "-=1")
        .fromTo("#sets7" , 1, {right: "-30%", bottom: "-40%", rotation:-60}, {left: "70%",top: "60%", rotation:-15, ease: "power4.out"}, "-=1")
        .fromTo("#sets8" , 1, {left: "-30%", top: "50%", rotation:80}, {left: "20%",top: "30%", rotation:20, ease: "power4.out"}, "-=1")
        .fromTo("#sets9" , 1, {left: "-30%", bottom: "-35%", rotation:60}, {left: "10%",top: "60%", rotation:-15, ease: "power4.out"}, "-=1")
        .fromTo("#sets10" , 1, {left: "0%", bottom: "-40%", rotation:-60}, {left: "25%",top: "55%", rotation:8, ease: "power4.out"}, "-=1")
        .fromTo("#sets11" , 1, {left: "0%", bottom: "-40%", rotation:60}, {left: "38%",top: "45%", rotation:-2, ease: "power4.out"}, "-=1")
        .fromTo("#sets12" , 1, {left: "60%", bottom: "-35%", rotation:-80}, {left: "46%",top: "55%", rotation:-15, ease: "power4.out"}, "-=1")
        .fromTo("#sets13" , 1, {left: "80%", bottom: "-35%", rotation:60}, {left: "57%",top: "50%", rotation:10, ease: "power4.out"}, "-=1")
        .to("#setPhotography4", 1, {opacity: 0},"-=0.5")
        .to(".setImg", 1, {opacity: 0}, "+=1")


new ScrollMagic.Scene({
        triggerElement: "#setphotography",
        triggerHook: "onLeave",
        duration: "1000"
    })
    .setPin("#setphotography")
    .setTween(setPhotographyAnimations)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller5);
});