import request from '@/plugin/axios'

/**
 * 新增数据
 * @param module
 * @param data
 */
export function Add (module,data) {
  return request({
    url: `/${module}/add`,
    method: 'post',
    data
  })
}

/**
 * 获取分页数据
 * @param module
 * @param page
 */
export function Index (module,page) {
  return request({
    url: `/${module}/index`,
    method: 'get',
    params: page
  })
}

/**
 * 获取所有数据
 */
export function IndexAll (module,params) {
  return request({
    url: `/${module}/indexAll`,
    method: 'get',
    params
  })
}

/**
 * 获取软删除分页数据
 * @param module
 * @param page
 */
export function IndexOfTrashed (module,page) {
  return request({
    url: `/${module}/indexOfTrashed`,
    method: 'get',
    params: page
  })
}

/**
 * 从回收站恢复信息
 * @param module
 * @param id
 */
export function Recover (module,id) {
  return request({
    url: `/${module}/recover/id/${id}`,
    method: 'put',
  })
}

/**
 * 删除信息
 * @param module
 * @param id
 */
export function Delete (module,id) {
  return request({
    url: `/${module}/delete/id/${id}`,
    method: 'delete'
  })
}

/**
 * 真实删除信息
 * @param module
 * @param id
 */
export function DeleteReal (module,id) {
  return request({
    url: `/${module}/deleteReal/id/${id}`,
    method: 'delete'
  })
}

/**
 * 更新信息
 * @param module
 * @param id
 * @param data
 */
export function Update (module,id,data) {
  return request({
    url: `/${module}/update/id/${id}`,
    method: 'put',
    data
  })
}

/**
 * 读取指定信息
 * @param module
 * @param id
 */
export function Read (module,id,params) {
  return request({
    url: `/${module}/read/id/${id}`,
    method: 'get',
    params
  })
}
