import Link from 'next/link'

export type HomeProps = {
  name: string
  title: string
}

export default function Homepage({ name, title }: HomeProps) {
  return (
    <main>
      <section>
        <h1>{name}</h1>
        <h1>{title}</h1>
      </section>
      <section>
        <nav>
          <ul>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/projects">projects</Link>
            </li>
            <li>
              <Link href="https://dev.to/devigor">blog</Link>
            </li>
          </ul>

          <div>
            <ul>
              <li>
                <Link href="">Github</Link>
              </li>
              <li>
                <Link href="">Linkedin</Link>
              </li>
              <li>
                <Link href="">Twitter</Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </main>
  )
}
