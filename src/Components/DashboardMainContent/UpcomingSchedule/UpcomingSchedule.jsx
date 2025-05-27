import '../../../Styles/upcomingSchedule.css'
import schedules from '../../../MockData/upcomingSchedule'
function UpcomingSchedule() {
    return (

        <div className='upcomingSchedule'>
            <h3>The Upcoming Schedule</h3>

            <div className="schedules">
                {schedules.map((data, i) => {
                    return (
                        <div className='schedule' key={i}>
                            <div className='schedule-day'>
                                <h4>{`On ${data.day}`}</h4>
                            </div>
                            <div className='schedule-card'>
                                {data.schedule.map((eventData, idx) => {
                                    return (
                                        <div className='schedule-event' key={idx}>
                                            <div className='event-img'>
                                                <h4>{eventData.event}</h4>
                                                <img src={eventData.img} alt="Schedule_ImgError" className={`event-img-${idx}`} />
                                            </div>
                                            <p>{eventData.time}</p>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                <div></div>

            </div>
        </div>

    );
}

export default UpcomingSchedule;