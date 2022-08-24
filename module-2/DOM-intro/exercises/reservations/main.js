const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }

  const checkReservation = function(){
    const guestName = document.getElementById("guest-name").value.toLowerCase();
    if(reservations[guestName]){
        if(reservations[guestName].claimed){
            alert("Hmm, someone already claimed this reservation");
        }else{
            alert(`Welcome ${guestName} :)`);
        }
    }else{
        alert("You have no reservation")
        reservations[guestName.toLowerCase()] = {claimed: true};
    }
    document.getElementById("guest-name").value = "";
  }