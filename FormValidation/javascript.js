

function validate() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var msg = document.getElementById("msg");
    var text;

    msg.style.padding= "5px";

    msgSent.style.padding="5px";

    if (name == "" || name.length <4) {        
        document.getElementById("msg").innerHTML = `Name must be filled out.`;
        msgSent.style.display = "none";
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        document.getElementById("msg").innerHTML = `Please, enter a valid Email.`;
        msgSent.style.display = "none";
        return false;
    } 
    if (subject == "") {
        text = "Subject must be filled out.";
        msg.innerHTML = text;
        msgSent.style.display = "none";
        return false;
    }
    if (message.length < 2) {
        text = "Please, enter a valid message.";
        msg.innerHTML = text;
        msgSent.style.display = "none";
        return false;
    } else {    
        msg.style.display = "none";
        document.getElementById("msgSent").innerHTML = `<p>Thank you for your contact.</p>
        <p> Your message has been sent.`;

        
        return false; 
    }   
}