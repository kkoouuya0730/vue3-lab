const APIKEY = import.meta.env.VITE_NEWS_API_KEY
const APIURL = import.meta.env.VITE_NEWS_API_URL

interface Param {
  searchWord: string
  from: string
}

const getRequest = async (param: Param) => {
  const url = createUrl(param)
  const req = new Request(url)

  const response = await fetch(req)
  if (!response.ok) {
    throw new Error('Network response was not OK')
  }
  const resData = response.json()
  return resData
}

const createUrl = (param: Param) => {
  if (!validateParam(param)) {
    throw new Error('Invalid Param')
  }
  const searchWord = param.searchWord
  // const from = param.from

  const url = `${APIURL}?` + `q=${searchWord}&` + `apiKey=${APIKEY}`

  return url
}

const validateParam = (param: Param) => {
  if (!param.searchWord || !param.from) return false
  return true
}

export { getRequest }
