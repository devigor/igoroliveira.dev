import S from './styles.module.scss'

const Header = () => (
  <nav className={S.menuContainer}>
    <a href="/"><p>Igor Oliveira</p></a>
    <ul className={S.itemsContainer}>
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
)

export default Header