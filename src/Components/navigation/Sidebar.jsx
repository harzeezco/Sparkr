const Sidebar = () => {
  return (
    <div className="sidebar md:hidden">
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
