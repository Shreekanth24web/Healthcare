import '../../Styles/App.css'
import Sidebar from '../Sidebar/Sidebar';
import DashboardMainContent from '../DashboardMainContent/DashboardMainContent';
import Header from '../Header/Header';
function App() {
    return (
        <div>
            <Header />
            <div className='content-page'>
                <Sidebar />
                <DashboardMainContent />
            </div>

        </div>

    );
}

export default App;