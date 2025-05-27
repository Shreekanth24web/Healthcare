import '../../../../Styles/healthStatusCards.css'
import healthStatus from '../../../../MockData/healthStatusCardsData'
function HealthStatusCards() {
    return (
        <div>
            <div className="healthStatusCards">
                <div className="week-text">
                    <p>This Week</p>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
                <div >
                    {healthStatus.map((ele, i) => {
                        return (
                            <div key={i} className='healthStatus'>
                                <div className="healthStatus-img-name">
                                    <img src={ele.img} alt="LungImg_Error" />
                                    <p>{ele.organ}</p>
                                </div>
                                <div className="healthStatus-date">
                                    <p>{`Date: ${ele.Date}`}</p>
                                    <input type="range" value={ele.progress} style={{ width: "220px", background: `linear-gradient(to right, ${ele.color} ${ele.progress}%,rgb(211, 211, 211) ${ele.progress}% )` }} />

                                </div>
                                <br />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default HealthStatusCards;