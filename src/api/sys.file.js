import request from '@/plugin/axios'


/**
 * 返回上传地址
 * @return {string}
 */
export function FileSysUploadUrl () {
    return '/api/filesys/upload'
}

export function FileClipUpload(file) {
    return  new Promise(async (resolve, reject) => {
        var bytesPerPiece = 1024 * 1024 // 每个文件切片大小定为1MB .
        var totalPieces

        var blob = file
        var start = 0
        var end
        var index = 1
        var filesize = blob.size
        var filename = blob.name + Math.random()
        var stop = false
        //计算文件切片总数
        totalPieces = Math.ceil(filesize / bytesPerPiece)
        while (!stop && start < filesize) {
            end = start + bytesPerPiece
            if (end > filesize) {
                end = filesize
            }

            var chunk = blob.slice(start, end)//切割文件
            var formData = new FormData()
            formData.append("file", chunk)
            formData.append("filename", filename)
            formData.append("index", index)
            formData.append("totalPieces", totalPieces)
            await request({
                headers: {'Content-Type': 'multipart/form-data'},
                url: '/filesys/clipUpload',
                method: 'post',
                data:formData
            }).catch(
                res => {
                    stop = true
                    return reject(res)
                }
            )
            start = end
            index++
        }

        return resolve()
    })
}

export function FileSysUpload (file) {
    var data = new FormData()//重点在这里 如果使用 var data = {} data.inputfile=... 这样的方式不能正常上传
    data.append("file",file)
    return request({
        headers: { 'Content-Type': 'multipart/form-data' },
        url: '/filesys/upload',
        method: 'post',
        data
    })
}

export function FileSysIndex (page) {
    return request({
        url: '/filesys/index',
        method: 'get',
        params: page
    })
}

export function FileSysDelete (id) {
    return request({
        url: '/filesys/delete/' + id,
        method: 'delete'
    })
}

// 暂时还用不到，因为是建立a标签来下载文件
export function FileSysDownload (filename) {
    return request({
        url: '/filesys/read?unOpeninBrowser&filename=' + filename,
        method: 'get'
    })
}
