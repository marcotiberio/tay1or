$(function () { 
    var controller9 = new ScrollMagic.Controller();

    var emailAnimations = new TimelineMax()
        .to("#emailText", 1, {opacity: 0}, "+=1")
        .to("#here", 1, {opacity: 1})
        .to("#here", 1, {scale: 10}, "-=1")
        .to("#email", 1, {backgroundColor: "#000000"}, "-=1")




new ScrollMagic.Scene({
        triggerElement: "#email",
        triggerHook: "onLeave",
        duration: "1000"
    })
    .setPin("#email")
    .setTween(emailAnimations)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller9);
});