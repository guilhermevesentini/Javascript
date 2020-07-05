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
        

    var totalKitchen = "";
    document.getElementById("totalKitchenFloor").innerHTML = totalKitchen;

    var totalHoursStaff = "";
    document.getElementById("totalHoursStaff").innerHTML = totalHoursStaff;

    var totalTips = "";
    document.getElementById("totalTips").innerHTML = totalTips;

    var totalPerHour = "";
    document.getElementById("totalPerHour").innerHTML = totalPerHour;

    var totalChange = "";
    document.getElementById("totalChange").innerHTML = totalChange;

    // end
    
    // functions to make calculations

    var a = document.getElementById("displayFloorHours0").value;
    var b = document.getElementById("displayKitchenHours1");
    var c = document.getElementById("displayKitchenHours2");
    var d = document.getElementById("displayKitchenHours3");
    var e = document.getElementById("displayKitchenHours4");
    var f = document.getElementById("displayKitchenHours5");
    var g = document.getElementById("displayKitchenHours6");
    var h = document.getElementById("displayKitchenHours7");
    var i = document.getElementById("displayKitchenHours8");
    var j = document.getElementById("displayKitchenHours8");  
    
    document.getElementById("result").innerHTML = a;

    // Floor Hours
    
    // end

      
    //bug to fix no passing number value, One caracter missing when typing.
    function copyInputFloor(){

    // Copy string from Floor input    
    var lineZero = document.getElementById('receiveNameFloor0');
    var pasteLineZero = document.getElementById('zeroFloorStaff');
    
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
    
    
    
    
    // Copy String Floor
    pasteLineZero.innerHTML = lineZero.innerHTML;
    pasteLineOne.innerHTML = lineOne.innerHTML;
    pasteLineTwo.innerHTML = lineTwo.innerHTML;
    pasteLineThree.innerHTML = lineThree.innerHTML;
    pasteLineFour.innerHTML = lineFour.innerHTML;
    pasteLineFive.innerHTML = lineFive.innerHTML;
    pasteLineSix.innerHTML = lineSix.innerHTML;
    pasteLineSeven.innerHTML = lineSeven.innerHTML;
    pasteLineEight.innerHTML = lineEight.innerHTML;
    pasteLineNine.innerHTML = lineNine.innerHTML;

    
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
    var pasteLineKitchenNine = document.getElementById('nineKitchenStaff');    //
    
    
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
    
    
    }
    function totalHoursFloor(){     
       
    }
    function totalHoursKitchen(){

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