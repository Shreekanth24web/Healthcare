import '../../../Styles/dashboardMainContent.css';
import AnatomySection from "./AnatomySection/AnatomySection";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";

function DashboardOverview() {
    return (
        <div className="dashOverview-Anatomy-HealthStatus">
            <AnatomySection />
            <HealthStatusCards />
        </div>
    );
}

export default DashboardOverview;