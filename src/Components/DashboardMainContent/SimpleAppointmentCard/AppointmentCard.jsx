import appointments from '../../../MockData/appointmentCardData'
import '../../../Styles/appointmentCard.css';
function AppointmentCard() {
    return (

        <div className="appointment-card">
            {appointments.map((data, i) => {
                return (
                    <div className={`appointment-card-data appointment-card-data-${i}`} key={i}>
                        <div className='appointment-card-teeth-img'>
                            <p className='specialist-text'>{data.specialist}</p>
                            <img src={data.img} alt={`${data.specialist}-img-Error`} />
                        </div>
                        <p className='time-text'>{data.time}</p>
                        <p className='doctorName-text'>{data.doctorName}</p>
                    </div>
                )
            })}

        </div>

    );
}

export default AppointmentCard;