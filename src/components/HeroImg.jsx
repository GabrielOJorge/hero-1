import { LightBtn } from "./LightBtn";

export function HeroImg() {
  return (
    <main>
      <div className="mb-12">
        <h1 className="hero-title">
          Connecting all
          <br />
          your banking
          <br />
          needs
        </h1>
        <p className="hero-para">
          A smart mobile application you can control your business needs
        </p>
      </div>

      <div className="flex flex-wrap gap-5 bg-transparent">
        <LightBtn src="src/assets/img/apple.svg" alt="Apple icon" />
        <LightBtn src="src/assets/img/google-play.svg" alt="Google Play icon" />
      </div>
    </main>
  );
}
