import { Activity, useState } from "react";
import Sidebar from "../src/components/sideBar";
import "./components/sideBar.css";

export default function App() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true);

  return (
    <div className="app-layout">
      <Activity mode={isShowingSidebar ? "visible" : "hidden"}>
        <Sidebar />
      </Activity>

      <main>
        <button onClick={() => setIsShowingSidebar(!isShowingSidebar)}>
          Toggle sidebar
        </button>
        <h1>Main content</h1>
      </main>
    </div>
  );
}
