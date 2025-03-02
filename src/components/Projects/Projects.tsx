import { PROJECTS } from "../../data/projects"
import styles from "./Projects.module.scss"

const Projects = () => {
  return (
    <section
      id="projects"
      className={styles.projects}
      data-testid="projects-section"
    >
      <h2 className="heading">Projects</h2>

      <div className={styles.projectsWrapper}>
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className={styles.project}
            data-testid="project-item"
          >
            <h3 className={styles.title}>{project.title}</h3>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.links}>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                  data-testid={`live-link-${project.title}`}
                >
                  Live Demo
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                  data-testid={`github-link-${project.title}`}
                >
                  GitHub code
                </a>
              )}
            </div>

            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
              data-testid={`project-image-${project.title}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
