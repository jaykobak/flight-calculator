let destinationText = "Here are places your can go to:";
let destinationCity;

function checkDestination() {
    const userAccountBalance = accountBalance.value;

    // Check if user input is valid
    if (userAccountBalance == "") {
        result.innerHTML = "Please enter a valid balance!";
        result.style.color = "red";
    }

    else {
        result.style.color = "black";

        // Lagos
        if (userAccountBalance >= 85000) {
            destinationCity = "Lagos";
            result.innerHTML = destinationText + "</br>* " + destinationCity;

            // Benin City | ₦90,000
            if (userAccountBalance >= 90000) {
                destinationCity = "Benin City";
                result.innerHTML += "</br>* " + destinationCity;

                // Abuja
                if (userAccountBalance >= 95000) {
                    destinationCity = "Abuja";
                    result.innerHTML += "</br>* " + destinationCity;

                    // Owerri
                    if (userAccountBalance >= 100000) {
                        destinationCity = "Owerri";
                        result.innerHTML += "</br>* " + destinationCity;

                        // Enugu
                        if (userAccountBalance >= 105000) {
                            destinationCity = "Enugu";
                            result.innerHTML += "</br>* " + destinationCity;

                            // Port Harcourt
                            if (userAccountBalance >= 110000) {
                                destinationCity = "Port Harcourt";
                                result.innerHTML += "</br>* " + destinationCity;

                                // Uyo
                                if (userAccountBalance >= 115000) {
                                    destinationCity = "Uyo";
                                    result.innerHTML += "</br>* " + destinationCity;

                                    // Calabar | ₦120,000
                                    if (userAccountBalance >= 120000) {
                                        destinationCity = "Calabar";
                                        result.innerHTML += "</br>* " + destinationCity;
                                    }
                                }
                            }
                        }
                    }
                }
            }

        } else {
            result.innerHTML =
                "Sorry, you don't have enough money to travel. <br>Just stay at home";
        }
    }
}
