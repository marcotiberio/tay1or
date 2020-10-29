// $(function () {
//     var controller3 = new ScrollMagic.Controller();


//     var fridgeAnimation = new TimelineMax ()

//         .to("#fridgeText", 1, {opacity: 0})
//         .fromTo(".itv1Slide" , 1, {opacity: "0"}, {opacity: "1", ease: Linear.easeNone});

//         new ScrollMagic.Scene({
//             triggerElement: '#fridge',
//             triggerHook: "onLeave",
//             duration: "500%"
//         })
//         .setPin('#fridge')
//         .setTween(fridgeAnimation)
//         .addIndicators()
//         .addTo(controller3);
//     });          

//===========================================================

function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}

var $F1 = $("path#F1"); var $F2 = $("path#F2"); var $F3 = $("path#F3"); var $F4 = $("path#F4"); var $F5 = $("path#F5"); var $F6 = $("path#F6"); var $F7 = $("path#F7"); var $F8 = $("path#F8"); var $F9 = $("path#F9"); var $F10 = $("path#F10"); var $F11 = $("path#F11"); var $F12 = $("path#F12"); var $F13 = $("path#F13");

var $A1 = $("path#A1"); var $A2 = $("path#A2"); var $A3 = $("path#A3"); var $A4 = $("path#A4"); var $A5 = $("path#A5"); var $A6 = $("path#A6"); var $A7 = $("path#A7"); var $A8 = $("path#A8"); var $A9 = $("path#A9"); var $A10 = $("path#A10"); var $A11 = $("path#A11"); var $A12 = $("path#A12"); var $A13 = $("path#A13"); var $A14 = $("path#A14"); var $A15 = $("path#A15"); var $A16 = $("path#A16"); var $A17 = $("path#A17"); var $A18 = $("path#A18"); var $A19 = $("path#A19"); var $A20 = $("path#A20"); var $A21 = $("path#A21"); var $A22 = $("path#A22"); var $A23 = $("path#A23"); var $A24 = $("path#A24"); var $A25 = $("path#A25"); var $A26 = $("path#A26"); var $A27 = $("path#A27"); var $A28 = $("path#A28"); var $A29 = $("path#A29"); var $A30 = $("path#A30"); var $A31 = $("path#A31"); var $A32 = $("path#A32"); var $A33 = $("path#A33"); var $A34 = $("path#A34"); var $A35 = $("path#A35"); var $A36 = $("path#A36"); var $A37 = $("path#A37"); var $A38 = $("path#A38"); var $A39 = $("path#A39"); var $A40 = $("path#A40"); var $A41 = $("path#A41"); var $A42 = $("path#A42"); var $A43 = $("path#A43"); var $A44 = $("path#A44"); var $A45 = $("path#A45"); var $A46 = $("path#A46"); var $A47 = $("path#A47"); var $A48 = $("path#A48"); var $A49 = $("path#A49"); var $A50 = $("path#A50"); var $A51 = $("path#A51"); var $A52 = $("path#A52"); var $A53 = $("path#A53");

// prepare SVG
pathPrepare($F1); pathPrepare($F2); pathPrepare($F3); pathPrepare($F4); pathPrepare($F5); pathPrepare($F6); pathPrepare($F7); pathPrepare($F8); pathPrepare($F9); pathPrepare($F10); pathPrepare($F11); pathPrepare($F12); pathPrepare($F13);

pathPrepare($A1); pathPrepare($A2); pathPrepare($A3); pathPrepare($A4); pathPrepare($A5); pathPrepare($A6); pathPrepare($A7); pathPrepare($A8); pathPrepare($A9); pathPrepare($A10); pathPrepare($A11); pathPrepare($A12); pathPrepare($A13); pathPrepare($A14); pathPrepare($A15); pathPrepare($A16); pathPrepare($A17); pathPrepare($A18); pathPrepare($A19); pathPrepare($A20); pathPrepare($A21); pathPrepare($A22); pathPrepare($A23); pathPrepare($A24); pathPrepare($A25); pathPrepare($A26); pathPrepare($A27); pathPrepare($A28); pathPrepare($A29); pathPrepare($A30); pathPrepare($A31); pathPrepare($A32); pathPrepare($A33); pathPrepare($A34); pathPrepare($A35); pathPrepare($A36); pathPrepare($A37); pathPrepare($A38); pathPrepare($A39); pathPrepare($A40); pathPrepare($A41); pathPrepare($A42); pathPrepare($A43); pathPrepare($A44); pathPrepare($A45); pathPrepare($A46); pathPrepare($A47); pathPrepare($A48); pathPrepare($A49); pathPrepare($A50); pathPrepare($A51); pathPrepare($A52); pathPrepare($A53); 
// init controller
var controller6 = new ScrollMagic.Controller();

// build tween
var tween2 = new TimelineMax()
    .to("#fridgeText", 1, {opacity: 0}, "+=1")
    .to("#fridgeSlide1", 1, {opacity: 1})
    // .add(TweenMax.staggerFrom(".fridgeWordmark", 0, {scale: 0, ease:Linear.easeNone}, 5)) // draw word for 0.9
    // .add(TweenMax.staggerTo(".fridgeWordmark", 5, {strokeDashoffset: 0, ease:Linear.easeNone}, 2.5), "-=26") // draw word for 0.9

    // // .add(TweenMax.staggerFrom(".fridgeWordmark", 0, {scale: 0, ease:Linear.easeNone, onComplete:tweencomplete, onCompleteParams:["{self}"]},1))
    // // .add(TweenMax.staggerTo(".fridgeWordmark", 5, {strokeDashoffset: 0, ease:Linear.easeNone}, 2.5), "-=26")
    // // function tweencomplete(tween) {
    // //     TweenMax.to(tween.target, 5, {strokeDashoffset: 0, ease:Linear.easeNone}, 1) // draw word for 0.9
    // // }

    .add(TweenMax.to($F1, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F2, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.to($F2, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F3, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F3, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F4, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F4, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F5, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F5, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F6, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F6, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F7, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F7, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F8, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F8, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F9, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F9, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F10, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F10, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F11, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F11, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F12, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F12, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    .add(TweenMax.from($F13, 0, {scale: 0, ease:Linear.easeNone}), "-=0.5")
    .add(TweenMax.to($F13, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=0.5") // draw word for 0.9
    
    .to("#fridgeSlide1", 1, {opacity: 0})
    .to("#fridgeSlide2", 1, {opacity: 1})
    
    .add(TweenMax.from([$A1, $A2, $A3, $A4, $A5], 0, {scale: 0, ease:Linear.easeNone}))
    .add(TweenMax.to([$A1, $A2, $A3, $A4, $A5], 4, {strokeDashoffset: 0, ease:Linear.easeNone}))

    .add(TweenMax.from([$A6, $A7, $A8, $A9, $A10, $A11, $A12, $A13, $A14, $A15, $A16, $A17, $A18, $A19, $A20, $A21, $A22, $A23, $A24, $A25, $A26, $A27, $A28], 0, {scale: 0, ease:Linear.easeNone}), "-=4")
    .add(TweenMax.to([$A6, $A7, $A8, $A9, $A10, $A11, $A12, $A13, $A14, $A15, $A16, $A17, $A18, $A19, $A20, $A21, $A22, $A23, $A24, $A25, $A26, $A27, $A28], 2, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=4")
    
    .add(TweenMax.from([$A29 ,$A30 ,$A31 ,$A32 ,$A33 ,$A34 ,$A35 ,$A36 ,$A37 ,$A38 ,$A39 ,$A40 ,$A41 ,$A42 ,$A43 ,$A44 ,$A45 ,$A46 ,$A47 ,$A48 ,$A49 ,$A50 ,$A51 ,$A52 ,$A53], 0, {scale: 0, ease:Linear.easeNone}), "-=2")
    .add(TweenMax.to([$A29 ,$A30 ,$A31 ,$A32 ,$A33 ,$A34 ,$A35 ,$A36 ,$A37 ,$A38 ,$A39 ,$A40 ,$A41 ,$A42 ,$A43 ,$A44 ,$A45 ,$A46 ,$A47 ,$A48 ,$A49 ,$A50 ,$A51 ,$A52 ,$A53], 2, {strokeDashoffset: 0, ease:Linear.easeNone}), "-=2");
    



    

// build scene
var scene = new ScrollMagic.Scene({
        triggerElement: "#fridge",
        triggerHook: "onLeave",
        duration: 1300, 
        // tweenChanges: true
        })
                .setPin('#fridge')
                .setTween(tween2)
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller6);
