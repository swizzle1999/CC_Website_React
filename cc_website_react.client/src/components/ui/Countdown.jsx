import './Countdown.scss';
import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { Row, Col, Image, Stack } from 'react-bootstrap';
import '@fontsource/dseg7-classic';

function Countdown({ targetTime, imgPath }) {
    const [daysLeft, setDaysLeft] = useState(0);
    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);

    function zeroPadding(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    }

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const diffTime = targetTime - now;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
            const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

            setDaysLeft(diffDays);
            setHoursLeft(diffHours);
            setMinutesLeft(diffMinutes);
            setSecondsLeft(diffSeconds);
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(interval);
    }, [targetTime]);

    return (
        <div className="countdown">
            <Row className="align-items-center">
                <Col>
                    <Image src={`${import.meta.env.BASE_URL}${imgPath}`} className="countdownImage" />
                </Col>
                <Col className="gx-0">
                    <div className="clock flex-grow-1 py-0" id="days">
                        <span className="digit">{zeroPadding(daysLeft)}</span>
                    </div>
                    <div className="label">
                        Days
                    </div>
                </Col>
                <Col className="gx-0">
                    <div className="clock" id="hours">
                        <span className="digit">{zeroPadding(hoursLeft)}</span>
                        <span className={"separator " + (secondsLeft % 2 == 0 ? "ghosted" : "")}>:</span>
                    </div>
                    <div className="label">
                        Hours
                    </div>
                </Col>
                <Col className="gx-0">
                    <div className="clock" id="minutes">
                        <span className="digit">{zeroPadding(minutesLeft)}</span>
                        <span className={"separator " + (secondsLeft % 2 == 0 ? "ghosted" : "")}>:</span>
                    </div>

                    <div className="label">
                        Minutes
                    </div>
                </Col>
                <Col className="gx-0">
                    <div className="clock" id="seconds">
                        <span className="digit">{zeroPadding(secondsLeft)}</span>
                    </div>
                    <div className="label">
                        Seconds
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Countdown;
