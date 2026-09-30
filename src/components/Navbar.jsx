function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <h2>My Portfolio</h2>
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
        <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>عني</a></li>
        <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>مشاريعي</a></li>
        <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>تواصل معي</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;