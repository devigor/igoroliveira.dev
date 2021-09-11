import Header from 'Components/Header'
import S from './styles.module.scss'

export type AboutProps = {
  photo: string
  description: string
}

export default function Aboutpage({ photo, description }: AboutProps) {
  return (
    <>
      <Header />
      <main className={S.aboutContainer}>
        <div className={S.infoContainer}>
          <img src={photo} alt="Homem de óculos em fundo amarelo com sorriso de canto de rosto" />
          <div className={S.aboutText} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </main>
    </>
  )
}