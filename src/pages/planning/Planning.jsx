import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from '@fullcalendar/react'
import './planning.css'
export default function Planning() {
  return (
    <section className="fullCalendarContainer">
      <h2>Planning</h2>
      <p>La planification sera disponible au TD2.</p>
      <FullCalendar
        plugins={[dayGridPlugin]}
        events={[]}
        initialView="dayGridMonth"
        height="auto"
      />
    </section>
  )
}
