const handleMenuClick = () => {
  const navigation = document.getElementById('navigation');
  const menuOpen = document.getElementById('menu-open');
  const menuClose = document.getElementById('menu-close');

  navigation.classList.toggle('-right-full');
  navigation.classList.toggle('nav-active');
  menuOpen.classList.toggle('hidden');
  menuClose.classList.toggle('hidden');
};

function App() {
  return (
    <div className="flex flex-col items-center font-poppins bg-white">
      <div className="w-11/12 max-w-screen-2xl">
        <header className="main-header">
          <button className="menu-btn" onClick={handleMenuClick}>
            <span
              id="menu-open"
              className="material-icons text-3xl text-blue-primary"
            >
              menu
            </span>
            <span
              id="menu-close"
              className="material-icons text-3xl text-blue-primary hidden"
            >
              close
            </span>
          </button>

          <a href="#" className="logo">
            <img src="src/assets/kreed-logo.svg" alt="Kreed Logo" />
            <h1>Kreed</h1>
          </a>

          <nav id="navigation" className="navigation">
            <ul className="flex md:flex-row flex-col items-end gap-6 font-medium text-sm text-blue-primary">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">About us</a>
              </li>

              <li>
                <a href="#">How it works</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>

            <button className="main-button" type="button">
              Get Started
            </button>
          </nav>
        </header>

        <main></main>
      </div>
    </div>
  );
}

export default App;
