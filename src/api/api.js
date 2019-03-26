import axios from 'axios'

let host = 'http://127.0.0.1:8000';


//登录
export const login = params => {
  return axios.post(`${host}/login/`, params)
}

//获取热门文章
export const geCardArticle = params => { return axios.get(`${host}/cardarticle/`) }

//获取文章分类
export const getCategory = params => { return axios.get(`${host}/category/`) }

//获取标签
export const getTag = params => { return axios.get(`${host}/tag/`) }

//获取热门文章
export const getHotArticle = params => { return axios.get(`${host}/hotarticle/`) }

//获取时间线
export const getTimeLine = params => { return axios.get(`${host}/timeline/`) }

//获取文章列表
export const getArticles = params => { return axios.get(`${host}/article/`, { params: params }) }


//文章详细
export const getArticlesDetail = articleId => { return axios.get(`${host}/article/${articleId}`+'/') }
