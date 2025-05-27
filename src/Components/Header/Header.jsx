import profileImg from '../../Assets/Profile-Male-PNG.png'

import '../../Styles/header.css'
function Header() {
    return (

        <div className='header'>
            <div className="logo">
                <p>Health<span className='care-color'>care.</span></p>
            </div>
            <div className='search-bar'>
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="search-input">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="serach-bell">
                    <i className="fa-solid fa-bell"></i>
                </div>
            </div>
            <div className="profile-img">
                <img src={profileImg} alt="profileImg_Error" />
                <i className="fa-solid fa-plus"></i>
            </div>
        </div>
    );
}

export default Header;