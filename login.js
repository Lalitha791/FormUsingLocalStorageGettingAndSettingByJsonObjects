
document.getElementById("formLogin").addEventListener('submit', function (e) {
    debugger;
    email = document.getElementById("txtEmail").value;
    password = document.getElementById("txtPassword").value;
    logger = [];
    logger=JSON.parse(localStorage.getItem("lsUserLogger"));
    
    log = {};
    if (email === "jack@gmail") {

        if (password === "Welcome@3164") {
            log.email = email;
            log.valid = true;
            log.createdDt = new Date();
            logger.push(log);
            localStorage.setItem("lsUserLogger", JSON.stringify(logger))
            alert("Valid User");
        }
        else {
            log.email = email;
            log.valid = false;
            log.createdDt = new Date();
            
            logger.push(log);
            localStorage.setItem("lsUserLogger", JSON.stringify(logger))
            alert("InCorrect Password");
        }

    }
    else {

        alert("In Valid User");
    }


})