//httpモジュール読み込み
const http = require('http')
const ctype = {'Content-Type': 'text/html;charset=utf-8'}

//webサーバーを実行
const svr = http.createServer(handler)
svr.listen(8081)

//サーバーにアクセスがあった時の処理
function handler(req, res) {
    //urlの判断
    const url = req.url
    
    if (url === '/' || url === '/index.html') {
        showIndexPage(req, res)
        return
    }

    if (url.substr(0, 6) === '/dice/') {
        showDicePage(req, res)
        return
    }

    //その他
    res.writeHead(404, ctype)
    res.end('404 not found')
}

function showIndexPage (req, res) {
    //HTTPヘッダーを出力
    res.writeHead(200, ctype)
    //レスポンスの本体を出力
    const html = 
    '<h1>サイコロページの案内</h1>\n' +
    '<p><a href="/dice/6">6面体サイコロ</a></p>' +
    '<p><a href="/dice/12">12面体サイコロ</a></p>'
    res.end(html)
}

function showDicePage (req, res) {
    //HTTPヘッダーを出力
    res.writeHead(200, ctype)
    
    const a = req.url.split('/')
    const num = parseInt(a[2])
    const rnd = Math.floor(Math.random() * num) + 1
    res.end('<p style="font-size:72px;">' + rnd + '</p>')
}