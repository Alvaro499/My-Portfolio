import Navbar from "@/components/Navbar/navbar";



export default function MainLayout({ children }) {
  return (
    <div className="appLayout">
      <Navbar />
      <main className="appContent">
        {children}
      </main>
    </div>
  );
}
