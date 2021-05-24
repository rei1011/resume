import { getWorksData } from "../page/works/Works"

const initializer = () => {
  return Promise.all([
    getJsonData()
  ])
}
export default initializer;

const getJsonData = () => {
  return Promise.all([
    getWorksData()
  ])
}