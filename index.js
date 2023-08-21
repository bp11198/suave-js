const fillOutPaymentForm = (cardNumber, expirationDate, cardholderName, securityCode) => {
//set card number
    let elsCardNumber = document.getElementsByName('creditCards[0].card_number');
    let i;
    for (i = 0; i < elsCardNumber.length; i++)
        elsCardNumber[i].value = cardNumber;

//set month and year expiration
    let elsExpiration = document.getElementsByName('creditCards[0].expiration_date');
    for (i = 0; i < elsExpiration.length; i++)
        elsExpiration[i].value = expirationDate;

//set month and year expiration
    let elsNameOnCard = document.getElementsByName('creditCards[0].cardholder_name');
    for (i = 0; i < elsNameOnCard.length; i++)
        elsNameOnCard[i].value = cardholderName;

//set CVC
    let elsCVC = document.getElementsByName('creditCards[0].new_card_security_code');
    for (i = 0; i < elsCVC.length; i++)
        elsCVC[i].value = securityCode;
}