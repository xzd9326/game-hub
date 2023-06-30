import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7479cd76f01e4517bc9f718a63d88268'
  }
})