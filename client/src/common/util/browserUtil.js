const agent = navigator.userAgent.toLowerCase()

// 是否是微信浏览器
// export const isWx = agent.indexOf('micromessenger') > -1
// 是否是支付宝浏览器
export const isAli = agent.indexOf('alipayclient') > -1
export const isWx = true;