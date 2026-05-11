import './EventCalendar.scss';
import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';

function EventCalendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}events.json`).then(r => r.json()).then(setEvents);
    }, []);

    return (
        <div className="card-box event-calendar mt-2">
            <FullCalendar
                plugins={[dayGridPlugin, listPlugin]}
                initialView="listMonth"
                events={events}
                eventClick={(info) => {
                    info.jsEvent.preventDefault();
                    if (info.event.url) window.open(info.event.url, '_blank', 'noopener,noreferrer');
                }}
                headerToolbar={{ left: 'prev', center: 'title', right: 'next' }}
                height="auto"
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }}
                eventBorderColor="#000"
                
            />
        </div>
    );
}

export default EventCalendar;
