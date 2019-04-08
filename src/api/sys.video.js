import request from '@/plugin/axios'

let module = 'video'

/**
 * 获取视频标签
 */
export function TagList () {
    return request({
        url: `/${module}/tagList`,
        method: 'get',
    })
}
