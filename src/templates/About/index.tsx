export type AboutProps = {
  photo: string
  description: string
}

export default function Aboutpage({ photo, description }: AboutProps) {
  console.log(photo, '\n', description)
  return (
    <main className="">
      <div className="">
        <img src={photo} alt="Homem de óculos em fundo amarelo com sorriso de canto de rosto" />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </main>
  )
}