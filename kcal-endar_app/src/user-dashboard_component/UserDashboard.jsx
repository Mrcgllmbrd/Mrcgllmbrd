
/* import { ContainerSchedeUsers } from "./Components/ContainerSchedeUsers";
 */import { PieChart } from "./Components/PieChart";
import { UserDashboardCalendar } from "./Components/UserDashboardCalendar";


import "./style/userDashboard.css";

export function UserDashboard() {

  return (
    <div className="user-dashboard-container">
      <div className="chart-container">
        <PieChart  />
      </div>
      {/* <ContainerSchedeUsers  /> */}
      <UserDashboardCalendar  />
    </div>
  );
}
