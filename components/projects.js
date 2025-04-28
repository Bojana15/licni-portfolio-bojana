export default function Projects() {
  return (
    <section className="projects">
      <h2>Projekti</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src="public/images/project1.png" alt="Projekat 1" />
          <h3>Portfolio Website</h3>
          <p>Moderni portfolio sa animacijama i responzivnim dizajnom.</p>
        </div>

        <div className="project-card">
          <img src="public/images/project2.jpg" alt="Projekat 2" />
          <h3>Web Shop</h3>
          <p>Online prodavnica sa jednostavnim procesom kupovine i lepim UI-jem.</p>
        </div>
      </div>
    </section>
  )
}
