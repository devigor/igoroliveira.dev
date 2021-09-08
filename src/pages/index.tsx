import { gql } from 'graphql-request'
import { client } from 'graphql/client'
import { GetStaticProps } from 'next'
import Homepage, { HomeProps } from 'templates/Homepage'

export default function Home({ name, title }: HomeProps) {
  return (
    <>
      <Homepage title={title} name={name} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query getHomepage {
      home(where: { id: "ckt5toc88a33c0b28t6fxffp8" }) {
        name
        title
      }
    }
  `

  const { home } = await client.request(query)

  return {
    props: {
      title: home.title,
      name: home.name
    }
  }
}
