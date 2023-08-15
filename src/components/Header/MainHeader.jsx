import { KreedLogo } from "../KreedLogo";
import { MainNavigation } from "./Navigation/MainNavigation";

export function MainHeader() {
  return (
    <header className="main-header">
      <KreedLogo />
      <MainNavigation />
    </header>
  );
}
