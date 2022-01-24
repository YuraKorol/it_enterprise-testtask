import axios from 'axios'

export const findAll = async url => {
  try {
    const data = await axios.get(`${process.env.VUE_APP_API}${url}`)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
export const create = async (url, payload) => {
  try {
    const data = await axios.post(`${process.env.VUE_APP_API}${url}`, payload)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
export const update = async (url, payload) => {
  try {
    const data = await axios.post(`${process.env.VUE_APP_API}${url}`, payload)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
export const remove = async url => {
  try {
    const data = await axios.post(`${process.env.VUE_APP_API}${url}`)
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
