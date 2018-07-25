'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {  //解析时把便签对应属性里的值给请求了，如图片，音频（本来是src是写着根目录xx，但因为放到服务器上根目录xx没有做到处理所以不能显示图片，可以先请求图片，获取数据）
    video: ['src', 'poster'],
    source: 'src',
	a: 'href', 
    img: 'src',
    image: 'xlink:href'
  }
}
