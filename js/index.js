console.log("This is my script");

let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "chetna.madaan45",
    "email": "chetna.madaan45@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
};

document.addEventListener("DOMContentLoaded", () => {
    const submitbtn = document.getElementById("submitbtn");
    const resultCont = document.getElementById('resultCont');

    submitbtn.addEventListener("click", async (event) => {
        event.preventDefault();
        console.log("Clicked");
        let key = "ema_live_VYATMyS1einsFrTlyHsW5AIGOd4Feq1ArQZfgfaV";
        let email = document.getElementById("username").value;
        let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                result = data;
                let str = '';
                for (let key of Object.keys(result)) {
                    str += `<div>${key}: ${result[key]}</div>`;
                }
                console.log(str);

                if (resultCont) {
                    resultCont.innerHTML = str;
                } else {
                    console.error('resultCont element not found');
                }
            })
            .catch(error => {
                console.error('Fetch error: ', error);
            });
    });
});
