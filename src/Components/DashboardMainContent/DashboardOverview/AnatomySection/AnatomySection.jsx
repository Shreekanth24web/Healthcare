import '../../../../Styles/anatomysection.css'
import anotomyBody from '../../../../Assets/human-anatomy.png'
import scanIcon from '../../../../Assets/scanning-line.jpg'
function AnatomySection() {
    return (
        <div className='anatomy-section'>
            <div className='dashboard-text'>
                <p>Dashboard</p>
            </div>
            <div className="anatomysection">
                <i className="fa-solid fa-magnifying-glass-plus anotomy-zoom"></i>
                <img src={anotomyBody} alt="anotomyBodyImg_Error" />
            </div>
            <div className='heart'>
                <img src={scanIcon} alt="scanIcon-Error" />
                <p>❤️ Healthly Heart</p>
            </div>
            <div className='leg'>
                <p>🦵 Healthly Leg</p>
                <img src={scanIcon} alt="scanIcon-Error" />
            </div>
        </div>
    );
}

export default AnatomySection;