// xhr 


// 手动封装axios
function myAxios(config) {
    return new Promise((resolved, rejected) => {

        if (config.params) {
            const obj = new URLSearchParams(config.url)
            config.url += `?${obj.toString()}`

        }

        const xhr = new XMLHttpRequest()
        xhr.open(config.method || 'GET', config.url)
        xhr.addEventListener('loadend', () => {

            if (xhr.status >= 200 && xhr.status < 300) {

                resolved(JSON.parse(xhr.response))
            } else {
                rejected(new Error(xhr.response))
            }
        })

        if (config.data) {
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(JSON.stringify(config.data))
        } else {
            xhr.send()
        }

    })
}


myAxios({
    url: 'http',

}).then(res => {

}).catch(err => {

})
