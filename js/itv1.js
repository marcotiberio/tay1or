$(function () { 
    var controller1 = new ScrollMagic.Controller();

    var itv1animations = new TimelineMax()
        .fromTo(".itv1Slide" , 80, {x: "0%"}, {x: "-100%", ease: Linear.easeNone}, "+=1");

new ScrollMagic.Scene({
        triggerElement: "#itv1",
        triggerHook: "onLeave",
        duration: "1500"
    })
    .setPin("#itv1")
    .setTween(itv1animations)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller1);
});  