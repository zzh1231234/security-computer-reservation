const reservations = [];
const reservationList = document.getElementById('reservations');

function reserve() {
    const computer = document.getElementById('computer').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const project = document.getElementById('project').value;
    const user = document.getElementById('user').value;
    const supervisor = document.getElementById('supervisor').value;

    if (!isAvailable(computer, date, time)) {
        alert("该时间段已被预约，请选择其他时间！");
        return;
    }

    const newReservation = { computer, date, time, project, user, supervisor };
    reservations.push(newReservation);
    updateReservationList();
}

function isAvailable(computer, date, time) {
    return !reservations.some(reservation =>
        reservation.computer === computer &&
        reservation.date === date &&
        (time === 'full-day' || reservation.time === 'full-day' || reservation.time === time)
    );
}

function updateReservationList() {
    reservationList.innerHTML = '';
    reservations.forEach(reservation => {
        const row = document.createElement('tr');
        Object.values(reservation).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        reservationList.appendChild(row);
    });
}