import BottomMenu from "./layouts/BottomMenu";
import Navbar from "./layouts/Navbar";
import Index from "./pages/swap/Index";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-barlow">
      <Navbar />
      {/* <div className="max-h-screen border-4 border-blue-900"> */}
      <Index />
      {/* </div> */}
      <BottomMenu />
    </div>
  );
}

export default App;
