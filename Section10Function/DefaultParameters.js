const bookings=[]
const ticketBooking=function(flightNum=1,numPassenger=1,price=199){
    const booking={
        flightNum,
        numPassenger,
        price,
    }
    console.log(booking)
    bookings.push(booking)
}

ticketBooking()
ticketBooking(7856,56,2000)
ticketBooking("Lh123",78,2500)