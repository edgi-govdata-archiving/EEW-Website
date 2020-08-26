import { useStaticQuery, graphql } from "gatsby"

export const useCongressData = () => {
  const { congressJson } = useStaticQuery(
    graphql`
      query MyQuery {
        congressJson {
          congressData {
            rank
            state
            name
            affil
          }
        }
      }
    `
  )
  return congressJson.congressData
}