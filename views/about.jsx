const { Outlet, Link, NavLink } = ReactRouterDOM;

export function About() {
  return (
    <section className="about">
      <h1>About Page</h1>
      <nav>
        <Link to="/about">Index</Link> |<NavLink to="/about/team">Team</NavLink>{" "}
        {/* |<NavLink to="/about/vision">Vision</NavLink> */}
      </nav>
      <div className="nested-route">
        <Outlet />
      </div>
    </section>
  );
}
