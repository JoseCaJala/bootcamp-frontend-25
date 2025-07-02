import { Text } from "../atoms/text";
import { Button } from "../atoms/button";

export const TimerSection = ({ minutes, seconds, onStart, onStop, onReset}) => {
    const formatTime = (time) => time.toString().padStart(2, '0');

    return (
        <div className="timer-section">
            <Text value={`${formatTime(minutes)} mins ${formatTime(seconds)} secs`} />
            <div className="button-group">
                <Button color="green" onClick={onStart}>Start</Button>
                <Button color="red" onClick={onStop}>Stop</Button>
                <Button color="yellow" onClick={onReset}>Reset</Button>
            </div>
        </div>
    )
}