import Header from "Components/Header"

type ProjectProps = {
  projectTitle: string
  projectDescription: string
  projectUrl: string
}

export type ProjectsProps = {
  projects: ProjectProps[]
}

export default function Projectpage({ projects }: ProjectsProps) {
  return (
    <>
      <Header />
      <main>
        <section>
          <nav>
            { projects.map(project => (
              <a key={project.projectTitle} href={project.projectUrl} target="_blank" rel="noreferrer">
                <div>
                  <h2>{project.projectTitle}</h2>
                  <p>{project.projectDescription}</p>
                </div>
              </a>
            )) }
          </nav>
        </section>
      </main>
    </>
  )
}