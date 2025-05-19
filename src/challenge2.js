class Seat {
  constructor(row, number) {
    this.row = row;
    this.number = number;
    this.isAvailable = true;
  }

  reserve() {
    if (!this.isAvailable) {
      return false;
    }
    this.isAvailable = false;
    return true;
  }

  getStatusSymbol() {
    return this.isAvailable ? 'libre' : 'ocupado';
  }
}

class Cinema {
  constructor(rows, seatsPerRow) {
    this.rows = rows;
    this.seatsPerRow = seatsPerRow;
    this.seats = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < seatsPerRow; j++) {
        row.push(new Seat(i, j));
      }
      this.seats.push(row);
    }
  }

  showSeatStatus() {
    console.log("Estado de la sala:");
    for (let i = 0; i < this.rows; i++) {
      const rowStatus = this.seats[i].map(seat => seat.getStatusSymbol()).join(" ");
      console.log(`${i}: ${rowStatus}`);
    }
    console.log("\n");
  }

  reserveSeat(row, seatNumber) {
    if (
      row < 0 || row >= this.rows ||
      seatNumber < 0 || seatNumber >= this.seatsPerRow
    ) {
      console.log("Ese asiento no existe.");
      return;
    }

    const seat = this.seats[row][seatNumber];
    if (seat.reserve()) {
      console.log(`Asiento en fila ${row}, número ${seatNumber} reservado con éxito.`);
    } else {
      console.log(`Asiento en fila ${row}, número ${seatNumber} ya está ocupado.`);
    }
  }
}

function testCinemaSystem() {
  const cinema = new Cinema(5, 10);

  cinema.showSeatStatus();

  cinema.reserveSeat(3, 5);

  cinema.showSeatStatus();

  cinema.reserveSeat(3, 5);
}

testCinemaSystem();
