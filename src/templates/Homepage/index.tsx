export type HomeProps = {
  name: string
  title: string
}

export default function Homepage({ name, title }: HomeProps) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{title}</h1>
    </>
  )
}
