import { useStaticQuery, graphql } from "gatsby"

export const useCongressData = () => {
  const { circleJson } = useStaticQuery(
    graphql`
      query MyQuery {
        circleJson {
          circleData {
            x
            state
            rep
            affil
            cmt
          }
        }
      }
    `
  )
  return circleJson.circleData
}