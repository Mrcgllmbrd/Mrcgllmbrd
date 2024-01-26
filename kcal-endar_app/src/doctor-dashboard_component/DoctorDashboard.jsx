import { ContainerSchedeDoc } from "./components/ContainerSchedeDoc";
import "./style/DoctorDashboard.css";
import { DocDashboardCalendar } from "./components/DocDashboardCalendar";
import { UserProvider } from "../-shared/UserIdContext";

export const DoctorDashboard = () => {
  return (
    <UserProvider>
      <div className="doctor-dashboard-container">
        {" "}
        <ContainerSchedeDoc />
        <DocDashboardCalendar />
      </div>
    </UserProvider>
  );
};
