import { BlueBtn } from "../../BlueBtn";
import { NavigationBtn } from "../Navigation/NavigationBtn";
import { NavigationAnchors } from "../Navigation/NavigationAnchors";

export function MainNavigation() {
  return (
    <nav id="navigation" className="navigation">
      <NavigationBtn />
      <NavigationAnchors />
      <BlueBtn />
    </nav>
  );
}
