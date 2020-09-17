import { useStaticQuery, graphql } from "gatsby"

export const useSenateData = () => {
  const { senateJson } = useStaticQuery(
    graphql`
      query MyQuery {
        senateJson {
          senateData {
            rank
            state
            name
            affil
            reportStatus
            url
          }
        }
      }
    `
  )
  return senateJson.senateData
}