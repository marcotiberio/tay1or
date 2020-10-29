$(function () { 
    var controller7 = new ScrollMagic.Controller();

    var artAnimations = new TimelineMax()
        .to("#artText", 1, {opacity: 0}, "+=1")
        .from("#artImg1", 1, {left: "-125%"})
        .from("#artImg2", 1, {left: "125%"})
        .from("#artImg3", 1, {top: "-125%"})
        .from("#artImg4", 1, {top: "150%"})
        .from("#artImg5", 1, {left: "-125%"})
        .from("#artImg6", 1, {left: "125%"})
        .from("#artImg7", 1, {top: "-125%"})
        .from("#artImg8", 1, {top: "150%"})
        .from("#artImg9", 1, {left: "-125%"})
        .from("#artImg10", 1, {left: "125%"})
        .from("#artImg11", 1, {top: "-125%"})

        // .from("#artImg2", 1, {left: "150%", top: "150%"})
        // .from("#artImg3", 1, {left: "150%", top: "150%"})
        // .from("#artImg4", 1, {left: "150%", top: "150%"})
        // .from("#artImg5", 1, {left: "150%", top: "150%"})
        // .from("#artImg6", 1, {left: "150%", top: "150%"})
        // .from("#artImg7", 1, {left: "150%", top: "150%"})
        // .from("#artImg8", 1, {left: "150%", top: "150%"})
        // .from("#artImg9", 1, {left: "150%", top: "150%"})
        // .from("#artImg10", 1, {left: "150%", top: "150%"})
        // .from("#artImg11", 1, {left: "150%", top: "150%"})


        // .staggerTo(".artImages", 0, {opacity: 1, delay:1}, 1);

new ScrollMagic.Scene({
        triggerElement: "#art",
        triggerHook: "onLeave",
        duration: "1500"
    })
    .setPin("#art")
    .setTween(artAnimations)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller7);
});  