$(function () {
    var controller2 = new ScrollMagic.Controller();


    var tvshowAnimation = new TimelineMax ()

        .to("#tvSlide1", 1, {opacity: 1}, "+=0.4")
        .to("#tvSlide2", 1, {opacity: 1})
        .to("#tvSlide3", 1, {opacity: 1})
        .to("#tvSlide4", 1, {opacity: 1})
        .to("#tvSlide5", 1, {opacity: 1})
        .to("#tvSlide6", 1, {opacity: 1})
        .to("#tvSlide7", 1, {opacity: 1})
        .to("#tvSlide8", 1, {opacity: 1});

        new ScrollMagic.Scene({
            triggerElement: '#tvshows',
            triggerHook: "onLeave",
            duration: "500%"
        })
        .setPin('#tvshows')
        .setTween(tvshowAnimation)
        .addIndicators()
        .addTo(controller2);
    });          