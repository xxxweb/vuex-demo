import Vue from 'vue'
function getData (para) {
  return (id = null) => Vue.http.jsonp(
    'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg',
    {
      params: {
        format: 'jsonp',
        tpl: 'v12',
        page: 'other',
        rnd: 0,
        g_tk: new Date().getTime(),
        loginUin: 0,
        hostUin: 0,
        inCharset: 'utf8',
        outCharset: 'GB2312',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      },
      jsonp: 'jsonpCallback'
    }
  )
}

export default {
  actions: {
    search (state, para) {
      return getData(para)()
    }
  }
}
