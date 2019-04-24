import request from '@/plugin/axios'

let module = 'repair'


/**
 * 订单催促
 * @constructor
 */
export function Cnt (id) {
  return request({
    url: `/${module}/cnt/id/` + id,
    method: 'put'
  })
}

/**
 * 订单完成
 * @constructor
 */
export function Handled (id) {
  return request({
    url: `/${module}/handled/id/` + id,
    method: 'put'
  })
}

/**
 * 订单关闭
 * @constructor
 */
export function Close (id) {
  return request({
    url: `/${module}/close/id/${id}`,
    method: 'put'
  })
}

/**
 * 获取分页数据
 * @param page
 * @constructor
 */
export function Index (page) {
  return request({
    url: `/${module}/index`,
    method: 'get',
    params: page
  })
}

/**
 * 获取所有数据
 * @constructor
 */
export function IndexAll () {
  return request({
    url: `/${module}/indexAll`,
    method: 'get'
  })
}

/**
 * 获取软删除分页数据
 * @param page
 * @constructor
 */
export function IndexOfTrashed (page) {
  return request({
    url: `/${module}/indexOfTrashed`,
    method: 'get',
    params: page
  })
}

/**
 * 新增数据
 * @param data
 * @constructor
 */
export function Add (data) {
  return request({
    url: `/${module}/add`,
    method: 'post',
    data
  })
}

/**
 * 从回收站恢复信息
 * @param id
 * @constructor
 */
export function Recover (id) {
  return request({
    url: `/${module}/recover/${id}`,
    method: 'put',
  })
}

/**
 * 删除信息
 * @param id
 * @constructor
 */
export function Delete (id) {
  return request({
    url: `/${module}/delete/${id}`,
    method: 'delete'
  })
}

/**
 * 真实删除信息
 * @param id
 * @constructor
 */
export function DeleteReal (id) {
  return request({
    url: `/${module}/deleteReal/${id}`,
    method: 'delete'
  })
}

/**
 * 更新信息
 * @param id
 * @param data
 * @constructor
 */
export function Update (id,data) {
  return request({
    url: `/${module}/update/${id}`,
    method: 'put',
    data
  })
}

/**
 * 读取指定信息
 * @param id
 * @constructor
 */
export function Read (id) {
  return request({
    url: `/${module}/read/${id}`,
    method: 'get',
  })
}
