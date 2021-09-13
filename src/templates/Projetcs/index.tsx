import Header from "Components/Header"
import S from './styles.module.scss'

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
      <main className={S.wrapper}>
        <section className={S.container}>
          <nav>
            { projects.map(project => (
              <a
                key={project.projectTitle}
                href={project.projectUrl}
                className={S.item}
                target="_blank"
                rel="noreferrer">
                <div className={S.containerItem}>
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