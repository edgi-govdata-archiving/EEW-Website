import { useStaticQuery, graphql } from "gatsby"

export const useCongressData = () => {
  const { circleJson } = useStaticQuery(
    graphql`
      query MyQuery {
        circleJson {
          circleData {
            rank
            state
            name
            affil
          }
        }
      }
    `
  )
  return circleJson.circleData
}