import { HeroImg } from "./components/HeroImg";
import { MainHeader } from "./components/Header/MainHeader";

function App() {
  return (
    <div className="flex flex-col items-center font-poppins bg-white">
      <div className="w-11/12 max-w-screen-2xl">
        <MainHeader />
        <HeroImg />
      </div>
    </div>
  );
}

export default App;
