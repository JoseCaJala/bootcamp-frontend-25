import { Component } from 'react';
import Seat from '../atoms/seat.jsx';
import { initialSeats } from '../data/seats.js';
import '../Cinema.css';

export default class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: initialSeats,
      selectedSeats: []
    };
  }

  handleSeatSelect = (seatId) => {
    const { selectedSeats } = this.state;
    const isAlreadySelected = selectedSeats.includes(seatId);
    
    if (isAlreadySelected) {
      this.setState({
        selectedSeats: selectedSeats.filter(id => id !== seatId)
      });
    } else {
      this.setState({
        selectedSeats: [...selectedSeats, seatId]
      });
    }
  };

  reserveSelectedSeats = () => {
    const { seats, selectedSeats } = this.state;
    
    const updatedSeats = seats.map(seat => {
      if (selectedSeats.includes(seat.id)) {
        return { ...seat, isOccupied: true };
      }
      return seat;
    });

    this.setState({
      seats: updatedSeats,
      selectedSeats: []
    });
  };

  render() {
    const { seats, selectedSeats } = this.state;
    
    return (
      <div className="cinema-container">
        <h1 className="title">React Challenge</h1>
        <p className="subtitle">Making the cinema problem applying React</p>
        
        <div className="cinema-grid">
          {seats.map(seat => (
            <Seat
              key={seat.id}
              id={seat.id}
              isOccupied={seat.isOccupied}
              isSelected={selectedSeats.includes(seat.id)}
              onSelect={this.handleSeatSelect}
            />
          ))}
        </div>
        {selectedSeats.length > 0 && (
          <div className="controls">
            <button 
              className="reserve-btn"
              onClick={this.reserveSelectedSeats}
            >
              Reservar {selectedSeats.length} asiento(s)
            </button>
          </div>
        )}

      </div>
    );
  }
}