import { GithubIcon, LinkedinIcon, TwitterIcon } from 'Components/Icons'
import S from './styles.module.scss'

export type HomeProps = {
  name: string
  title: string
}

export default function Homepage({ name, title }: HomeProps) {
  return (
    <main className={S.homeContainer}>
      <section className={S.rightSide}>
        <h1 className={S.homeTitle}>{name}</h1>
        <h1 className={S.homeSubtitle}>{title}</h1>
        <nav className={S.mobileMenu}>
          <ul>
            <li className={S.menuItem}>
              <a href="/about">about</a>
            </li>
            <li className={S.menuItem}>
              <a href="/projects">projects</a>
            </li>
            <li className={S.menuItem}>
              <a href="https://dev.to/devigor">blog</a>
            </li>
          </ul>
        </nav>
      </section>

      <section className={S.leftSide}>
        <nav className={S.homeMenu}>
          <ul>
            <li className={S.menuItem}>
              <a href="/about">about</a>
            </li>
            <li className={S.menuItem}>
              <a href="/projects">projects</a>
            </li>
            <li className={S.menuItem}>
              <a href="https://dev.to/devigor">blog</a>
            </li>
          </ul>

          <div className={S.iconGroup}>
            <a href="">
              <GithubIcon />
            </a>
            <a href="">
              <LinkedinIcon />
            </a>
            <a href="">
              <TwitterIcon />
            </a>
          </div>
        </nav>
      </section>
    </main>
  )
}
