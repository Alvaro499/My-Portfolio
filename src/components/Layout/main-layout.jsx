import Navbar from "@/components/Navbar/navbar";
import ModalForProjects from "../ModalForProjects/modal-for-projects";


export default function MainLayout({ children }) {
  return (
    <div className="appLayout">
      <Navbar />
      <main className="appContent">
        {children}
      </main>
      <ModalForProjects />

    </div>
  );
}
