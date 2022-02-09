function displayInformation(){
    document.getElementById("salonInformation").innerHTML=`
        <p> Welcome to ${salon.name}<p>
        <p> You find us in ${salon.address.street}, ${salon.address.number} </p>
        <p> Open from ${salon.hours.open} to ${salon.hours.close}</p>
    `;
}
displayInformation();