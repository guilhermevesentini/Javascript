    //Begin Page
    
    // start Example Floor Staff value
    var staffFloorZero = "Brian Moe";
    document.getElementById("receiveNameFloor0").innerHTML = staffFloorZero;        
    document.getElementById("zeroFloorStaff").innerHTML = staffFloorZero; //Total of tips per Floor staff

    var displayHour = "45";
    document.getElementById("displayFloorHours0").innerHTML = displayHour;
    document.getElementById("copyFloorHours0").innerHTML = displayHour; //Total of tips per Floor staff
    // end

    // start  Example Kitchen staff value
    var staffKitchenZero = "Brandon Bond";
    document.getElementById("receiveNameKitchen0").innerHTML = staffKitchenZero;        
    document.getElementById("zeroKitchenStaff").innerHTML = staffKitchenZero; //Total of tips per which Kitchen staff

    var displayHour = "40";
    document.getElementById("displayKitchenHours0").innerHTML = displayHour;        
    document.getElementById("copyKitchenHours0").innerHTML = displayHour; //Total of tips per which Kitchen staff
    // end

    // examplo
    var totalFloor = "300 hours";
    document.getElementById("totalHoursFloor").innerHTML = totalFloor;

    var totalKitchen = "500 hours";
    document.getElementById("totalKitchenFloor").innerHTML = totalKitchen;

    var totalHoursStaff = "800 hours";
    document.getElementById("totalHoursStaff").innerHTML = totalHoursStaff;

    var totalTips = "1050 hours";
    document.getElementById("totalTips").innerHTML = totalTips;

    var totalPerHour = "2,5 euros";
    document.getElementById("totalPerHour").innerHTML = totalPerHour;

    var totalChange = "45,62 euros";
    document.getElementById("totalChange").innerHTML = totalChange;
    // end

    // functions to make calculations
    // end



    
    //bug to fix no passing number value, One caracter missing when typing.
    function copyInputFloor(){

    // Copy string from Floor input
    var lineOne = document.getElementById('receiveNameFloor1');
    var pasteLineOne = document.getElementById('firstFloorStaff');
    
    var lineTwo = document.getElementById('receiveNameFloor2');
    var pasteLineTwo = document.getElementById('secondFloorStaff');
    
    var lineThree = document.getElementById('receiveNameFloor3');
    var pasteLineThree = document.getElementById('thirdFloorStaff');
    
    var lineFour = document.getElementById('receiveNameFloor4');
    var pasteLineFour = document.getElementById('forthFloorStaff');
    
    var lineFive = document.getElementById('receiveNameFloor5');
    var pasteLineFive = document.getElementById('fifthFloorStaff');
    
    var lineSix = document.getElementById('receiveNameFloor6');
    var pasteLineSix = document.getElementById('sixthFloorStaff');
    
    var lineSeven = document.getElementById('receiveNameFloor7');
    var pasteLineSeven = document.getElementById('seventhFloorStaff');
    
    var lineEight = document.getElementById('receiveNameFloor8');
    var pasteLineEight = document.getElementById('eighthFloorStaff');
    
    var lineNine = document.getElementById('receiveNameFloor9');
    var pasteLineNine = document.getElementById('ninethFloorStaff');
    
    var lineTen = document.getElementById('receiveNameFloor10');
    var pasteLineTen = document.getElementById('tenFloorStaff');
    
    // Copy Number from Floor input
    var numberLineZero = document.getElementById('displayFloorHours0');
    var pasteNumberLineZero = document.getElementById('copyFloorHours0');
    
    var numberLineOne = document.getElementById('displayFloorHours1');
    var pasteNumberLineOne = document.getElementById('copyFloorHours1');
    
    var numberLineTwo = document.getElementById('displayFloorHours2');
    var pasteNumberLineTwo = document.getElementById('copyFloorHours2');
    
    var numberLineThree = document.getElementById('displayFloorHours3');
    var pasteNumberLineThree = document.getElementById('copyFloorHours3');
    
    var numberLineFour = document.getElementById('displayFloorHours4');
    var pasteNumberLineFour = document.getElementById('copyFloorHours4');
    
    var numberLineFive = document.getElementById('displayFloorHours5');
    var pasteNumberLineFive = document.getElementById('copyFloorHours5');
    
    var numberLineSix = document.getElementById('displayFloorHours6');
    var pasteNumberLineSix = document.getElementById('copyFloorHours6');
    
    var numberLineSeven = document.getElementById('displayFloorHours7');
    var pasteNumberLineSeven = document.getElementById('copyFloorHours7');
    
    var numberLineEight = document.getElementById('displayFloorHours8');
    var pasteNumberLineEight = document.getElementById('copyFloorHours8');
    
    var numberLineNine = document.getElementById('displayFloorHours9');
    var pasteNumberLineNine = document.getElementById('copyFloorHours9');
    
    // Copy String Floor
    pasteLineOne.innerHTML = lineOne.innerHTML;
    pasteLineTwo.innerHTML = lineTwo.innerHTML;
    pasteLineThree.innerHTML = lineThree.innerHTML;
    pasteLineFour.innerHTML = lineFour.innerHTML;
    pasteLineFive.innerHTML = lineFive.innerHTML;
    pasteLineSix.innerHTML = lineSix.innerHTML;
    pasteLineSeven.innerHTML = lineSeven.innerHTML;
    pasteLineEight.innerHTML = lineEight.innerHTML;
    pasteLineNine.innerHTML = lineNine.innerHTML;
    pasteLineTen.innerHTML = lineTen.innerHTML;
    //
    pasteNumberLineZero.innerHTML = numberLineZero.innerHTML;
    pasteNumberLineOne.innerHTML = numberLineOne.innerHTML;
    pasteNumberLineTwo.innerHTML = numberLineTwo.innerHTML;
    pasteNumberLineThree.innerHTML = numberLineThree.innerHTML;
    pasteNumberLineFour.innerHTML = numberLineFour.innerHTML;
    pasteNumberLineFive.innerHTML = numberLineFive.innerHTML;
    pasteNumberLineSix.innerHTML = numberLineSix.innerHTML;
    pasteNumberLineSeven.innerHTML = numberLineSeven.innerHTML;
    pasteNumberLineEight.innerHTML = numberLineEight.innerHTML;
    pasteNumberLineNine.innerHTML = numberLineNine.innerHTML;
    }    
    //bug to fix no passing number value, One caracter missing when typing.
    function copyInputKitchen(){
    
    // Copy string from Kitchen input
    var lineKitchenZero = document.getElementById('receiveNameKitchen0');
    var pasteLineKitchenZero = document.getElementById('zeroKitchenStaff');
    
    var lineKitchenOne = document.getElementById('receiveNameKitchen1');
    var pasteLineKitchenOne = document.getElementById('firstKitchenStaff');
    
    var lineKitchenTwo = document.getElementById('receiveNameKitchen2');
    var pasteLineKitchenTwo = document.getElementById('SecondKitchenStaff');
    
    var lineKitchenThree = document.getElementById('receiveNameKitchen3');
    var pasteLineKitchenThree = document.getElementById('thirdKitchenStaff');
    
    var lineKitchenFour = document.getElementById('receiveNameKitchen4');
    var pasteLineKitchenFour = document.getElementById('fourthKitchenStaff');
    
    var lineKitchenFive = document.getElementById('receiveNameKitchen5');
    var pasteLineKitchenFive = document.getElementById('fifthKitchenStaff');
    
    var lineKitchenSix = document.getElementById('receiveNameKitchen6');
    var pasteLineKitchenSix = document.getElementById('sixthKitchenStaff');
    
    var lineKitchenSeven = document.getElementById('receiveNameKitchen7');
    var pasteLineKitchenSeven = document.getElementById('seventhKitchenStaff');
    
    var lineKitchenEight = document.getElementById('receiveNameKitchen8');
    var pasteLineKitchenEight = document.getElementById('eightKitchenStaff');
    
    var lineKitchenNine = document.getElementById('receiveNameKitchen9');
    var pasteLineKitchenNine = document.getElementById('nineKitchenStaff');
    //
    // Copy Number from Kitchen input
    var numberLineZero = document.getElementById('displayKitchenHours0');
    var pasteNumberLineZero = document.getElementById('copyKitchenHours0');
    
    var numberLineOne = document.getElementById('displayKitchenHours1');
    var pasteNumberLineOne = document.getElementById('copyKitchenHours1');
    
    var numberLineTwo = document.getElementById('displayKitchenHours2');
    var pasteNumberLineTwo = document.getElementById('copyKitchenHours2');
    
    var numberLineThree = document.getElementById('displayKitchenHours3');
    var pasteNumberLineThree = document.getElementById('copyKitchenHours3');
    
    var numberLineFour = document.getElementById('displayKitchenHours4');
    var pasteNumberLineFour = document.getElementById('copyKitchenHours4');
    
    var numberLineFive = document.getElementById('displayKitchenHours5');
    var pasteNumberLineFive = document.getElementById('copyKitchenHours5');
    
    var numberLineSix = document.getElementById('displayKitchenHours6');
    var pasteNumberLineSix = document.getElementById('copyKitchenHours6');
    
    var numberLineSeven = document.getElementById('displayKitchenHours7');
    var pasteNumberLineSeven = document.getElementById('copyKitchenHours7');
    
    var numberLineEight = document.getElementById('displayKitchenHours8');
    var pasteNumberLineEight = document.getElementById('copyKitchenHours8');
    
    var numberLineNine = document.getElementById('displayKitchenHours9');
    var pasteNumberLineNine = document.getElementById('copyKitchenHours9');
    
    // Kitchen paste
    pasteLineKitchenZero.innerHTML = lineKitchenZero.innerHTML;
    pasteLineKitchenOne.innerHTML = lineKitchenOne.innerHTML;
    pasteLineKitchenTwo.innerHTML = lineKitchenTwo.innerHTML;
    pasteLineKitchenThree.innerHTML = lineKitchenThree.innerHTML;
    pasteLineKitchenFour.innerHTML = lineKitchenFour.innerHTML;
    pasteLineKitchenFive.innerHTML = lineKitchenFive.innerHTML;
    pasteLineKitchenSix.innerHTML = lineKitchenSix.innerHTML;
    pasteLineKitchenSeven.innerHTML = lineKitchenSeven.innerHTML;
    pasteLineKitchenEight.innerHTML = lineKitchenEight.innerHTML;
    pasteLineKitchenNine.innerHTML = lineKitchenNine.innerHTML;
    
    // Kitchen Number
    pasteNumberLineZero.innerHTML = numberLineZero.innerHTML;
    pasteNumberLineOne.innerHTML = numberLineOne.innerHTML;
    pasteNumberLineTwo.innerHTML = numberLineTwo.innerHTML;
    pasteNumberLineThree.innerHTML = numberLineThree.innerHTML;
    pasteNumberLineFour.innerHTML = numberLineFour.innerHTML;
    pasteNumberLineFive.innerHTML = numberLineFive.innerHTML;
    pasteNumberLineSix.innerHTML = numberLineSix.innerHTML;
    pasteNumberLineSeven.innerHTML = numberLineSeven.innerHTML;
    pasteNumberLineEight.innerHTML = numberLineEight.innerHTML;
    pasteNumberLineNine.innerHTML = numberLineNine.innerHTML;
    
    }
    // not in use
    function addFloorStaff(){   

        var add = document.getElementById("addFloorStaff1").value;
        

        document.getElementById("SubmitFloor1").onclick = function(){
            document.getElementById("receiveNameFloor1").innerHTML = add;
        }
    }
    // not in use
    function addHours(){

        var inputHour1 = document.getElementById("addHours1").value;
        var inputHour2 = document.getElementById("addHours2").value;
        var inputHour3 = document.getElementById("addHours3").value;
        var inputHour4 = document.getElementById("addHours4").value;

        document.getElementById("buttonAdd1").onclick = function() {
            document.getElementById("displayHours1").innerHTML = inputHour1;               
        }
        document.getElementById("buttonAdd2").onclick = function() {
            document.getElementById("displayHours2").innerHTML = inputHour2;               
        }
        document.getElementById("buttonAdd3").onclick = function() {
            document.getElementById("displayHours3").innerHTML = inputHour3;               
        }
        document.getElementById("buttonAdd4").onclick = function() {
            document.getElementById("displayHours4").innerHTML = inputHour4;               
        }
    }
    // not in use
    function appendDiv() {
        var x = document.createElement("P");
        var t = document.createTextNode("This is a paragraph.");
        x.appendChild(t);
        var element = document.getElementById("newnewLine");
        element.appendChild(x);
    }