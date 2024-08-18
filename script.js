document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const countElement = document.getElementById('count');
    const totalElement = document.getElementById('total');
    const proceedButton = document.querySelector('.proceed-button');
    const seatPrice = 200; // Set the price for each seat

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (seat.classList.contains('sold')) {
                return; // Can't select sold seats
            }
            seat.classList.toggle('selected');

            updateCountAndTotal();
        });
    });

    function updateCountAndTotal() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const selectedCount = selectedSeats.length;
        const totalPrice = selectedCount * seatPrice;

        countElement.textContent = selectedCount;
        totalElement.textContent = totalPrice;
    }

    // Add event listener for the Proceed to Payment button
    proceedButton.addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const selectedCount = selectedSeats.length;
        const totalPrice = selectedCount * seatPrice;

        if (selectedCount > 0) {
            // Here you can handle the payment process
            // For now, we will just log the details to the console
            alert(`Proceeding to payment. Total amount: Rs.${totalPrice}`);
            // Example: Redirect to a payment page or open a payment form
            // window.location.href = `payment.html?amount=${totalPrice}`;
        } else {
            alert('Please select at least one seat to proceed.');
        }
    });
});
