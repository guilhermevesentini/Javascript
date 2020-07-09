

    //------------- local storage -----------------//

    const editables = document.querySelectorAll("[contenteditable]");

        // save edits
            editables.forEach(el => {
                el.addEventListener("blur", () => {
                localStorage.setItem("dataStorage-" + el.id, el.innerHTML);
            })
        });

            // once on load
            for (var key in localStorage) {
                if (key.includes("dataStorage-")) {
                    const id = key.replace("dataStorage-","");
                    document.querySelector("#" + id).innerHTML = localStorage.getItem(key);
                }
            }

    const storage = document.querySelectorAll('.totalResult');

        // save edits
            storage.forEach(el => {
                el.addEventListener("blur", () => {
                localStorage.setItem("resultStorage-" + el.id, el.innerHTML);
            })
        });

        // once on load
        for (var key in localStorage) {
            if (key.includes("resultStorage-")) {
                const id = key.replace("resultStorage-","");
                document.querySelector("#" + id).innerHTML = localStorage.getItem(key);
            }
            document.onchange = storage;
        }
    
    //console.log(storage[1].outerText);
    //------------- Calculations -----------------//


    const myArray = ['.numberFunctionFloor'];
    //const a = document.querySelectorAll('.numberFunction');
    const a = document.getElementById('displayFloorHours0').outerText;
    const b = document.getElementById('displayFloorHours1').outerText;
    const c = document.getElementById('displayFloorHours2').outerText;
    const d = document.getElementById('displayFloorHours3').outerText;
    const e = document.getElementById('displayFloorHours4').outerText;
    const f = document.getElementById('displayFloorHours5').outerText;
    const g = document.getElementById('displayFloorHours6').outerText;
    const h = document.getElementById('displayFloorHours7').outerText;
    const i = document.getElementById('displayFloorHours8').outerText;
    const j = document.getElementById('displayFloorHours9').outerText;

    const total = 
    parseInt(a) +
    parseInt(b) + 
    parseInt(c) + 
    parseInt(d) + 
    parseInt(e) + 
    parseInt(f) + 
    parseInt(g) + 
    parseInt(h) +
    parseInt(i) +
    parseInt(j); 

    //total hours loor
    document.getElementById('totalHoursFloor').innerHTML = total;

    const myArrayKitchen = ['.numberFunctionK'];
    // 
    const kitchen0 = document.getElementById('displayKitchenHours0').outerText;
    const k1 = document.getElementById('displayKitchenHours1').outerText;
    const k2 = document.getElementById('displayKitchenHours2').outerText;
    const k3 = document.getElementById('displayKitchenHours3').outerText;
    const k4 = document.getElementById('displayKitchenHours4').outerText;
    const k5 = document.getElementById('displayKitchenHours5').outerText;
    const k6 = document.getElementById('displayKitchenHours6').outerText;
    const k7 = document.getElementById('displayKitchenHours7').outerText;
    const k8 = document.getElementById('displayKitchenHours8').outerText;
    const k9 = document.getElementById('displayKitchenHours9').outerText;

    const totalHoursKitchen =
    parseInt(kitchen0) + 
    parseInt(k1) + 
    parseInt(k2) + 
    parseInt(k3) + 
    parseInt(k4) + 
    parseInt(k5) + 
    parseInt(k6) + 
    parseInt(k7) +
    parseInt(k8) +
    parseInt(k9); 

    //total hours kitchen
    document.getElementById('totalKitchen').innerHTML = totalHoursKitchen;

    const totalHours = parseInt(total) + parseInt(totalHoursKitchen);

    document.getElementById('totalHoursStaff').innerHTML = totalHours;

    totalTipsValue = 850;

    document.getElementById('totalTips').innerHTML = totalTipsValue;
    
    var totalPerHour = totalTipsValue / totalHours;    

    document.getElementById('totalPerHour').innerHTML = totalPerHour.toFixed(2);    
    
    // Total per tips Floor
    
    const F0 = document.getElementById('displayFloorHours0').outerText;
    const F1 = document.getElementById('displayFloorHours1').outerText;
    const F2 = document.getElementById('displayFloorHours2').outerText;
    const F3 = document.getElementById('displayFloorHours3').outerText;
    const F4 = document.getElementById('displayFloorHours4').outerText;
    const F5 = document.getElementById('displayFloorHours5').outerText;
    const F6 = document.getElementById('displayFloorHours6').outerText;
    const F7 = document.getElementById('displayFloorHours7').outerText;
    const F8 = document.getElementById('displayFloorHours8').outerText;
    const F9 = document.getElementById('displayFloorHours9').outerText;

    const totalTips0 = parseInt(F0) * totalPerHour.toFixed(2);
    const totalTipsa = parseInt(F1) * totalPerHour.toFixed(2);
    const totalTipsb = parseInt(F2) * totalPerHour.toFixed(2);
    const totalTipsc = parseInt(F3) * totalPerHour.toFixed(2);
    const totalTipsd = parseInt(F4) * totalPerHour.toFixed(2);
    const totalTipse = parseInt(F5) * totalPerHour.toFixed(2);
    const totalTipsf = parseInt(F6) * totalPerHour.toFixed(2);
    const totalTipsg = parseInt(F7) * totalPerHour.toFixed(2);
    const totalTipsh = parseInt(F8) * totalPerHour.toFixed(2);
    const totalTipsi = parseInt(F9) * totalPerHour.toFixed(2);
    
    // total per tips floor
    document.getElementById('copyFloorHours0').innerHTML = totalTips0.toFixed(2);
    document.getElementById('copyFloorHours1').innerHTML = totalTipsa.toFixed(2);
    document.getElementById('copyFloorHours2').innerHTML = totalTipsb.toFixed(2);
    document.getElementById('copyFloorHours3').innerHTML = totalTipsc.toFixed(2);
    document.getElementById('copyFloorHours4').innerHTML = totalTipsd.toFixed(2);
    document.getElementById('copyFloorHours5').innerHTML = totalTipse.toFixed(2);
    document.getElementById('copyFloorHours6').innerHTML = totalTipsf.toFixed(2);
    document.getElementById('copyFloorHours7').innerHTML = totalTipsg.toFixed(2);
    document.getElementById('copyFloorHours8').innerHTML = totalTipsh.toFixed(2);
    document.getElementById('copyFloorHours9').innerHTML = totalTipsi.toFixed(2);
    

    // Total per tips Kitchen    
    
    const totalTipsKitchen0 = parseInt(kitchen0) * totalPerHour.toFixed(2);
    const totalTipsKitchena = parseInt(k1) * totalPerHour.toFixed(2);
    const totalTipsKitchenb = parseInt(k2) * totalPerHour.toFixed(2);
    const totalTipsKitchenc = parseInt(k3) * totalPerHour.toFixed(2);
    const totalTipsKitchend = parseInt(k4) * totalPerHour.toFixed(2);
    const totalTipsKitchene = parseInt(k5) * totalPerHour.toFixed(2);
    const totalTipsKitchenf = parseInt(k6) * totalPerHour.toFixed(2);
    const totalTipsKitcheng = parseInt(k7) * totalPerHour.toFixed(2);
    const totalTipsKitchenh = parseInt(k8) * totalPerHour.toFixed(2);
    const totalTipsKitcheni = parseInt(k9) * totalPerHour.toFixed(2);
    
    // total per tips Kitchen
    document.getElementById('copyKitchenHours0').innerHTML = totalTipsKitchen0.toFixed(2);
    document.getElementById('copyKitchenHours1').innerHTML = totalTipsKitchena.toFixed(2);
    document.getElementById('copyKitchenHours2').innerHTML = totalTipsKitchenb.toFixed(2);
    document.getElementById('copyKitchenHours3').innerHTML = totalTipsKitchenc.toFixed(2);
    document.getElementById('copyKitchenHours4').innerHTML = totalTipsKitchend.toFixed(2);
    document.getElementById('copyKitchenHours5').innerHTML = totalTipsKitchene.toFixed(2);
    document.getElementById('copyKitchenHours6').innerHTML = totalTipsKitchenf.toFixed(2);
    document.getElementById('copyKitchenHours7').innerHTML = totalTipsKitcheng.toFixed(2);
    document.getElementById('copyKitchenHours8').innerHTML = totalTipsKitchenh.toFixed(2);
    document.getElementById('copyKitchenHours9').innerHTML = totalTipsKitcheni.toFixed(2);

    //console.log(a[1].outerText);


    //------------- END Calculations -----------------//


      
    //bug to fix no passing number value, One caracter missing when typing.
    function copyInputFloor() {

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

        

        const button = document.querySelector('#floorBtn'); 
    
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