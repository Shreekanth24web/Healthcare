import '../../Styles/sidebar.css'
import NavLinks from '../../MockData/NavigationLinks'
import Tools from '../../MockData/tools'

function LogoWithSidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-text">
                <p>General</p>
            </div>
            <div className='navlink'>
                {NavLinks.map((navLink, i) => {
                    return (
                        <div key={i} className='sidebar-navlink'  >
                            <img src={navLink.icon} alt={`${navLink.navLinkName}-NavLinksIcon_Error`} style={{ opacity: i === 0 ? 1 : 0.3 }} />
                            <li style={{ opacity: i === 0 ? 1 : 0.5, color: i === 0 ? "#2A2B77" : '' }} >{navLink.navLinkName}</li>
                        </div>
                    )
                })}
            </div>
            <div className="tool-text">
                <p>Tools</p>
            </div>
            <div className="tools">
                { Tools.map((tool, i)=>{
                    return(
                        <div key={i} className='sidebar-tools' style={{marginTop: i===2? 220:''}}>
                            <img src={tool.icon} alt={`${tool.toolName}-ToolIcon_Error`} />
                            <li>{tool.toolName}</li>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default LogoWithSidebar;