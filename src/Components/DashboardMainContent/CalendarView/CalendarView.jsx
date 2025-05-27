import '../../../Styles/calendarView.css';
import calendar from '../../../MockData/calendarData'
function CalendarView() {
    return (
        <div className='calendarView'>

            <div className="calendarView-text">
                <p>Octobar 2025</p>
                <div className="calendarView-arrow">
                    <i className="fa-solid fa-arrow-left"></i>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            
            <div className="calendarView-card">
                {calendar.map((data, idnx) => {
                    return (
                        <div key={idnx} className={`calendar-date-time calendar-date-time-${idnx}`}>
                            <div className="calendar-days">
                                <p>{data.day}</p>
                            </div>
                            <div className="calendar-date">
                                <p style={{ opacity: idnx === 6 ? 0.3 : '' }}>{data.date}</p>
                            </div>
                            <div className="calendar-time" style={{ opacity: idnx === 6 ? 0.3 : '' }}>
                                <p className={`calendarTime1-${idnx}`} style={{ color: idnx === 5 ? "white" : idnx === 6 ? "white" : '', opacity: idnx === 5 ? 0.3 : '' }}>{data.time1}</p>
                                <p className={`calendarTime2-${idnx}`} style={{ color: idnx === 1 ? "white" : idnx === 3 ? "white" : '', opacity: idnx === 1 ? 1 : idnx === 3 ? 0.3 : '' }}>{data.time2}</p>
                                <p>{data.time3}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CalendarView;