const handleMenuClick = () => {
  const navigation = document.getElementById("navigation");
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");

  navigation.classList.toggle("-right-full");
  navigation.classList.toggle("nav-active");
  menuOpen.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
};

export function NavigationBtn() {
  return (
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
  );
}
