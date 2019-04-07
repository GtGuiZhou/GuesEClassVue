import request from '@/plugin/axios'

let module = 'lovewall'

/**
 * 获取渲染模板列表
 */
export function IndexOfTemplate (data) {
    return request({
        url: `/${module}/IndexOfTemplate`,
        method: 'post',
        data
    })
}
