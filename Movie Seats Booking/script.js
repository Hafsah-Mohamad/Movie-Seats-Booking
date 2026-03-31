const container = document.querySelector('.container');
const Seats = document.querySelectorAll('.row .Seat:not(.Occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


let ticketPrice = +movieSelect.value;


// update total and count 
function updateSelectedCount() {
    const SelectedSeats = document.querySelectorAll('.row .Seat.Selected');

    const SelectedseatsCount = SelectedSeats.length;


    count.innerText = SelectedseatsCount;
    total.innerText = SelectedseatsCount * ticketPrice;

}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

//seats click event
container.addEventListener('click', e => {
    if (
        e.target.ClassList.contains('Seat') &&
        !e.target.ClassList.contains('Occupied')
    ) {
        e.target.ClassList.toggle('selected');

        updateSelectedCount();

    }
});