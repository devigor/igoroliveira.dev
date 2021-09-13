import { gql } from "graphql-request";
import { client } from "graphql/client";
import { GetStaticProps } from "next";
import Projectpage, { ProjectsProps } from "templates/Projetcs";

export default function Projects({projects}: ProjectsProps) {
  return (
    <Projectpage projects={projects} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query getProjectsPage {
      projects {
        projectTitle
        projectDescription
        projectUrl
      }
    }
  `

  const { projects } = await client.request(query)

  return {
    props: {
      projects
    }
  }
}