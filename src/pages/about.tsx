import { gql } from "graphql-request";
import { client } from "graphql/client";
import { GetStaticProps } from "next";
import Aboutpage, { AboutProps } from "templates/About";

export default function About({ photo, description }: AboutProps) {
  return (
    <>
      <Aboutpage photo={photo} description={description} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query getAboutpage {
      about(where: { id: "ckt5txxwoa3y30b28ingyi5eo" }) {
        id
        profilePhoto {
          url
        }
        aboutText {
          html
        }
      }
    }
  `

  const { about } = await client.request(query)

  return {
    props: {
      photo: about.profilePhoto.url,
      description: about.aboutText.html
    }
  }
}