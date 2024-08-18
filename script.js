document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const countElement = document.getElementById('count');
    const totalElement = document.getElementById('total');
    const seatPrice = 150; // Set the price for each seat

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
});
