import DashboardOverview from './DashboardOverview/DashboardOverview';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import AppointmentCard from './SimpleAppointmentCard/AppointmentCard';
import '../../Styles/dashboardMainContent.css';
function DashboardMainContent() {
    return (

        <div className='dashboardMainContent'>
            <div className='dashOverview-anotomy'>
                <DashboardOverview />
                <ActivityFeed />
            </div>
            <div className='dashMainContent-calendarView'>
                <CalendarView />
                <AppointmentCard />
                <UpcomingSchedule />
            </div>
        </div>


    );
}

export default DashboardMainContent;