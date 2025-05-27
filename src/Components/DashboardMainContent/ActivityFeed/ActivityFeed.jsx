import '../../../Styles/activityFeed.css'
import activityFeedData from '../../../MockData/activityFeedData'
import calendar from '../../../MockData/calendarData'

function ActivityFeed() {
    return (
        <div>
            <div className='details-text'>
                <p>Details</p>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className='activity-box'>
                <div className='activity-text'>
                    <p className='text-one'>Activity</p>
                    <p className='text-two'>3 appointment on this week</p>
                </div>
                <div className='activityFeed'>
                    {activityFeedData.map((bars, inx) => (
                        <div key={inx} className='activityFeed-bars'>
                            {
                                bars.map((_, idx) =>
                                (
                                    < div key={idx} style={{ height: `${bars[idx]}px`, backgroundColor: idx === 1 ? "cyan" : idx === 2 ? "#2A2B77" : idx ===3 ? "cyan":idx === 4?'#2A2B77':'#2A2B77' }} className='bars'></div>
                                )
                                )
                            }
                        </div>
                    )
                    )}
                </div>
                <div className='activityFeed-days'>
                    {calendar.map((data, i) => {
                        return (
                            <p key={i}>{data.day}</p>

                        )
                    })}
                </div>
            </div>

        </div >
    );
}

export default ActivityFeed;