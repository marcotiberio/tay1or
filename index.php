<!DOCTYPE html>
<html>
    <head>
        <link href="css/styles.css" rel="stylesheet">        
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.2/ScrollMagic.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.2/plugins/animation.gsap.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.2/plugins/debug.addIndicators.min.js'></script>
    </head>

    <body>
        <div class="section" id="intro">
            <p class="maintext" style="color:#707070;">I am a creative designer and art director
            </p>
        </div>

       <?php require 'php/itv1.php'; ?>

       <?php require 'php/tvshows.php'; ?>


        <div class="section" id="edwardwilliams">
            <p class="maintext" style="color:#37474F;">Shaped identities for brands including a 
                joinery firm and a sunglasses company</p>    
        </div>

        <div class="section" id="dairylea">
            <p class="maintext" style="color:#340111;">Designed an in-house database 
                for an events company</p>    
        </div>

        <?php require 'php/setphotography.php' ?>

        <?php require 'php/fridge.php'; ?>

        <?php require 'php/art.php'; ?>

        <?php require 'php/burglary.php'; ?>

        <div class="section" id="email">
            <p class="maintext" id="emailText">You can email me…</p> 
            <p class="here" id="here">here</p> 
        </div>

        <script src="js/itv1.js"></script>

        <script src="js/tvshows.js"></script>

        <script src="js/setphotography.js"></script>

        <script src="js/fridge.js"></script>

        <script src="js/art.js"></script>
        
        <script src="js/burglary.js"></script>

        <script src="js/email.js"></script>

    </body>
</html>