function showOverlay(message, backgroundImage) {
    // Create an overlay container
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Style the overlay for a more polished look
    overlay.style.position = "fixed";
    overlay.style.top = "50%";
    overlay.style.left = "50%";
    overlay.style.transform = "translate(-50%, -50%)";
    overlay.style.color = "#fff"; // White font color
    overlay.style.padding = "30px";
    overlay.style.borderRadius = "10px";
    overlay.style.textAlign = "center";
    overlay.style.fontSize = "36px"; // Increased text size
    overlay.style.fontFamily = "Arial, sans-serif"; // Font family
    overlay.style.fontWeight = "bold"; // Bold font weight
    overlay.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    overlay.style.transition = "opacity 0.3s ease-in-out";
    overlay.style.backgroundSize = "cover";

    // Set the background image
    if (backgroundImage) {
        overlay.style.backgroundImage = `url('${backgroundImage}')`;
        overlay.style.backgroundOpacity = "0.8"; // Decreased image transparency
    } else {
        overlay.style.background = "linear-gradient(45deg, #4CAF50, #2196F3)";
    }

    // Set the message content
    overlay.innerHTML = `<p style="background-color: #333; padding: 10px; border-radius: 5px;">${message}</p>`;

    // Append the overlay to the body
    document.body.appendChild(overlay);

    // Trigger a reflow to enable smooth transition
    overlay.offsetHeight;

    // Set opacity to fully visible
    overlay.style.opacity = 1;

    // Add an event listener to close the overlay on click or key press
    overlay.addEventListener("click", closeOverlay);
    document.addEventListener("keydown", closeOverlayOnKeyPress);
}

// Function to close the overlay
function closeOverlay() {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
        // Set opacity to 0 for a smooth fade-out effect
        overlay.style.opacity = 0;
        // Remove the overlay after the transition completes
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

// Function to close the overlay on key press (Enter)
function closeOverlayOnKeyPress(event) {
    if (event.key === "Enter") {
        closeOverlay();
    }
}



let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')


let p1sum = 0
let p2sum = 0




function play(player, psum, correction, num) {
    // Check if the game is still active
    if (!gameActive) {
        return; // If the game is not active, exit the function
    }
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }
        if (p1sum == 3){
            showOverlay("Great move! By using biochar as your soil amendment, you've scored a vital step in the game. Biochar significantly reduces soil loss by up to 64%. Your soil is now fortified with improved properties like pH, water holding capacity, and microbial biomass carbon. Keep climbing the ladder to success with your smart farming moves!", "Biochar_Application.jpg");
            p1sum = 22
        }
        if (p1sum == 7) {
            showOverlay("Fantastic choice! Mulch shields against erosion, fosters optimal plant growth, and minimizes water and soil loss. Ascend the ladder to success with your eco-friendly farming approach!", "mulching.jpg");
            p1sum = 17
        }
        if (p1sum == 9){
            showOverlay("Did you know that incorporating farmyard and poultry manure into your soil is a game-changer? These organic matter sources, rich in carbon, enhance soil aggregation, reducing runoff and soil loss. Jump to tile 13", "manure.jpg");

            p1sum = 13
        }
        if (p1sum == 28) {
            showOverlay( "Great move! Crop rotation helps prevent soil erosion and reduces the risk of soil degradation. Studies show that in areas with hilly terrain and erodible soil, like Lithuania, implementing crop rotation can significantly lower erosion rates, preserving soil health and fertility.Take a huge jump on the ladder to tile 85", "crop_rotation.jpg");
            p1sum = 85 
        }
        if (p1sum == 38) {
            showOverlay("Great job! Your choice of tillage operations, like cross ridge and no-tillage practices, is a game-changer in soil erosion control. With reductions of up to 64.2% in runoff and enhanced infiltration, advance to block 30 for your remarkable farming strategy!", "tillage.jpg");
            p1sum = 57
        }
        if (p1sum == 41) {
            showOverlay("Impressive move! Contour planting slashes soil erosion, cutting rills and gullies. Did you know according to a study in Kenya using natural hedges reduces fertilizer loss by 50%? Leap to tile 85 for your strategic work!", "contour planting.jpg");
            p1sum = 62
        }
        if (p1sum == 51) {
            showOverlay("Smart choice! Soil netting, especially jute netting, significantly reduces soil erosion. In a study, jute mat demonstrated a remarkable 99.4% reduction in soil loss. Climb up to tile 71 for your effort to prevent soil erosion", "jute-mat,jpg");
            p1sum =71
        }
        if (p1sum == 67) {
            showOverlay("Great call! Opting for cover crops like daylily and white clover shields your soil from erosion, acting like a strategic move in Snakes and Ladders. You've reduced runoff by up to 37%, providing an umbrella-like protection.Jump to block 93 for your outstanding efforts!", "cover crop.jpg");
            p1sum = 93
        }
        if (p1sum == 29) {
            showOverlay("You went overboard with excessive tilling of your farm soil. This loosened the soil and broke down its structure, making the soil more vulnerable to surface run-off. As punishment, you are being banished to square 11.", "tilling tractor 2.jpg");
            p1sum = 11
        }
        if (p1sum == 21) {
            showOverlay("You left your agricultural land uncultivated after harvesting the last crop. This led to erosion due to strong splashing of rain drops which compacted the soil, and overland flow that led to washing away of the top fertile soil. As you harmed the soil quality and lowered water infiltration rates, drop down to square 18 and reflect upon yourself!", "uncultivated farm.jpg");
            p1sum = 18
        }
        if (p1sum == 46) {
            showOverlay("As one of the developing countries, your nation still continues to be unsuccessful in controlling erosion due to complex factors. Some of which are: technological changes, short-sighted irresponsible government policies and unsatisfactory contribution of institutions. Go back to square 25 and closely reflect on these dynamics.", "developing country farm.jpg" );
            p1sum = 25
        }
        if (p1sum == 53) {
            showOverlay("You allowed a company to conduct hydraulic gold mining along the river using high pressure water jets causing high erosion rates. Moreover, no settling ponds were made to prevent the loose sediments from entering the stream. This causes harm to the aquatic ecosystem. Better luck next time avoiding practices that contribute to erosion. For now, drag your feet back to square 32.", "mining 5.jpg");
            p1sum = 32
        }
        if (p1sum == 78) {
            showOverlay("You allowed deforestation on a stretch of steep rainfall-intensive mountainous region in order to widen roads for easier transportation. Particularly, clearcutting was commonly practiced for years in the area by the logging industry. Forest covers are crucial as they act as buffer zones by holding the soil together against surface runoff. So, push yourself back to square 42 and try to overcome your shortcomings.", "deforestation 6.jpg");
            p1sum = 42
        }
        if (p1sum == 94) {
            showOverlay(
                "Unfortunately, you allowed your cattle to overgraze. Overgrazing causes the formation of rills, which are shallow drainage marks (often shorter than 30 cm) due to the loss of grass and small shrubs covering the land. These rills lead to soil erosion when exposed to fast-flowing water. You will move back to square 65 to repent for your mistake!",
                "cattle_overgrazing.jpeg");
            p1sum = 65;
        }
        if (p1sum == 92) {
            showOverlay("You live in a hilly region and cultivated land on steep hill sides in a similar way to flat agricultural land. The steeper the land, the higher the velocity of flow on the soil surface and greater is the erosion rate. As you did not prepare appropriate mitigation measures to tackle these conditions, slide back to square 68", "mountain farming 7.jpg");
            p1sum = 68
        }
        if (p1sum == 99) {
            showOverlay("You live in a semi-arid or arid region where the land is regularly subjected to high wind speeds and the soil lacks enough moisture. Anthropogenic activities like unsuitable farming practices have added on to the impacts of long-existing natural wind erosion. However, you are unprepared with counter measures so, go back to square 77.", "arid region 8.jpg");
            p1sum = 77
        }

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        if (p2sum == 3){
            showOverlay("Great move! By using biochar as your soil amendment, you've scored a vital step in the game. Biochar significantly reduces soil loss by up to 64%. Your soil is now fortified with improved properties like pH, water holding capacity, and microbial biomass carbon. Keep climbing the ladder to success with your smart farming moves!", "Biochar_Application.jpg");
            p2sum = 22
        }
        if (p2sum == 7) {
            showOverlay("Fantastic choice!Mulch shields against erosion, fosters optimal plant growth, and minimizes water and soil loss. Ascend the ladder to success with your eco-friendly farming approach!", "mulching.jpg");
            p2sum = 17
        }
        if (p2sum == 9){
            showOverlay("Did you know that incorporating farmyard and poultry manure into your soil is a game-changer? These organic matter sources, rich in carbon, enhance soil aggregation, reducing runoff and soil loss. Jump to tile 13", "manure.jpg");
            p2sum = 13
        }
        if (p2sum == 28) {
            showOverlay( "Great move! Crop rotation helps prevent soil erosion and reduces the risk of soil degradation. Studies show that in areas with hilly terrain and erodible soil, like Lithuania, implementing crop rotation can significantly lower erosion rates, preserving soil health and fertility.Take a huge jump on the ladder to tile 85", "crop_rotation.jpg");
            p2sum = 85 
        }
        if (p2sum == 38) {
            showOverlay("Great job! Your choice of tillage operations, like cross ridge and no-tillage practices, is a game-changer in soil erosion control. With reductions of up to 64.2% in runoff and enhanced infiltration, advance to block 30 for your remarkable farming strategy!", "tillage.jpg");
            p2sum = 57
        }
        if (p2sum == 41) {
            showOverlay("Impressive move! Contour planting slashes soil erosion, cutting rills and gullies. Did you know according to a study in Kenya using natural hedges reduces fertilizer loss by 50%? Leap to tile 85 for your strategic work!", "contour planting.jpg");
            p2sum = 62
        }
        if (p2sum == 51) {
            showOverlay("Smart choice! Soil netting, especially jute netting, significantly reduces soil erosion. In a study, jute mat demonstrated a remarkable 99.4% reduction in soil loss. Climb up to tile 71 for your effort to prevent soil erosion", "jute-mat,jpg");
            p2sum =71
        }
        if (p2sum == 67) {
            showOverlay("Great call! Opting for cover crops like daylily and white clover shields your soil from erosion, acting like a strategic move in Snakes and Ladders. You've reduced runoff by up to 37%, providing an umbrella-like protection.Jump to block 93 for your outstanding efforts!", "cover crop.jpg");
            p2sum = 93
        }
        if (p2sum == 29) {
            showOverlay("You went overboard with excessive tilling of your farm soil. This loosened the soil and broke down its structure, making the soil more vulnerable to surface run-off. As punishment, you are being banished to square 11.", "tilling tractor 2.jpg");
            p2sum = 11
        }
        if (p2sum == 21) {
            showOverlay("You left your agricultural land uncultivated after harvesting the last crop. This led to erosion due to strong splashing of rain drops which compacted the soil, and overland flow that led to washing away of the top fertile soil. As you harmed the soil quality and lowered water infiltration rates, drop down to square 18 and reflect upon yourself!", "uncultivated farm.jpg");
            p2sum = 18
        }
        if (p2sum == 46) {
            showOverlay("As one of the developing countries, your nation still continues to be unsuccessful in controlling erosion due to complex factors. Some of which are: technological changes, short-sighted irresponsible government policies and unsatisfactory contribution of institutions. Go back to square 25 and closely reflect on these dynamics.", "developing country farm.jpg" );
            p2sum = 25
        }
        if (p2sum == 53) {
            showOverlay("You allowed a company to conduct hydraulic gold mining along the river using high pressure water jets causing high erosion rates. Moreover, no settling ponds were made to prevent the loose sediments from entering the stream. This causes harm to the aquatic ecosystem. Better luck next time avoiding practices that contribute to erosion. For now, drag your feet back to square 32.", "mining 5.jpg");
            p2sum = 32
        }
        if (p2sum == 78) {
            showOverlay("You allowed deforestation on a stretch of steep rainfall-intensive mountainous region in order to widen roads for easier transportation. Particularly, clearcutting was commonly practiced for years in the area by the logging industry. Forest covers are crucial as they act as buffer zones by holding the soil together against surface runoff. So, push yourself back to square 42 and try to overcome your shortcomings.", "deforestation 6.jpg");
            p2sum = 42
        }
        if (p2sum == 94) {
            showOverlay(
                "Unfortunately, you allowed your cattle to overgraze. Overgrazing causes the formation of rills, which are shallow drainage marks (often shorter than 30 cm) due to the loss of grass and small shrubs covering the land. These rills lead to soil erosion when exposed to fast-flowing water. You will move back to square 65 to repent for your mistake!",
                "cattle_overgrazing.jpg");
            p2sum = 65;
        }
        if (p2sum == 92) {
            showOverlay("You live in a hilly region and cultivated land on steep hill sides in a similar way to flat agricultural land. The steeper the land, the higher the velocity of flow on the soil surface and greater is the erosion rate. As you did not prepare appropriate mitigation measures to tackle these conditions, slide back to square 68", "mountain farming 7.jpg");
            p2sum = 68
        }
        if (p2sum == 99) {
            showOverlay("You live in a semi-arid or arid region where the land is regularly subjected to high wind speeds and the soil lacks enough moisture. Anthropogenic activities like unsuitable farming practices have added on to the impacts of long-existing natural wind erosion. However, you are unprepared with counter measures so, go back to square 77.", "arid region 8.jpg");
            p2sum = 77
        }
        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            showOverlay("Congratulations Red! You finally achieved the goal of reversing soil erosion.", "Congratulations.jpg")
        
        }
        else if (player == 'p2') {
            showOverlay("Congratulations Yellow! You finally achieved the goal of reversing soil erosion.", "Congratulations.jpg")

    
        }
         // Set gameActive to false to disable further moves
         gameActive = false;
         
         setTimeout(() => {
            // Reload the page after the delay
            location.href = location.href;
        }, 3000);

    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num
    
    //dice image changer 
    var dice=['<img src="1.jpeg" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>',
    '<img src="2.jpeg" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>',
    '<img src="3.jpeg" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>',
    '<img src="4.jpeg" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>',
    '<img src="5.jpeg" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>',
    '<img src="6.jpeg" style="object-fit:scale-down;width:100px;height:100px;border: transparent 1px #CCC"/>'];
    document.getElementById('diceee').innerHTML = dice[num-1];


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Red's Turn"
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Yellow's Turn"

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




})
document.addEventListener("DOMContentLoaded", function () {
    gameActive = true;
});