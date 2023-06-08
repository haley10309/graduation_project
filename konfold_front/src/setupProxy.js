const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/konfold", { //프록시를 사용할 경로
            target: 'http://192.168.219.103:5000', //프록시로 이용할 서버의 주소
            changeOrigin: true, // 대상 서버의 구성에 따라 호스트 헤더의 변경을 해주는 옵션
        })
    )

    app.use(
        createProxyMiddleware("/api", {
            target: 'http://127.0.0.1:5000',
            changeOrigin: true,
        })
    )
}