import * as Api from '@/api/crud.base'

const attrClone = (src, dst) => {
    if (src){
        Object.keys(src).forEach(key => {
            dst[key] = src[key]
        })
    }
}

export default {
    data() {
        return {
            crudLoading: false,
            crudAddLoading: false,
            crudDeleteLoading: false,
            crudDeleteRealLoading: false,
            crudRecoverLoading: false,
            crudUpdateLoading: false,
            crudAddSuccessMsg: '新增成功',
            crudDeleteSuccessMsg: '删除成功',
            crudDeleteRealSuccessMsg: '永久删除成功',
            crudReadSuccessMsg: null,
            crudUpdateSuccessMsg: '编辑成功',
            crudRecoverSuccessMsg: '恢复成功',
            crudLoadPageSuccessMsg: null,
            crudLoadAllSuccessMsg: null,
            crudLoadSuccessMsg: null,
            crudLoadTrashedSuccessMsg: null,
        }
    },
    methods: {
        /**
         * 新增
         * @param module
         * @param form 新增信息表单
         * @param items 数组类型,如果不为空，新增的表单会插入该items
         */
        onAdd(module,form, items = null) {
            return new Promise((resolve, reject) => {
                this.crudAddLoading = true
                Api.Add(module, form).then(
                    res => {
                        if (this.crudAddSuccessMsg)
                            this.successNotify(this.crudAddSuccessMsg)
                        if (items instanceof Array) {
                            items.push(res)
                        }
                        this.crudAddLoading = false
                        resolve(res);
                    }
                ).catch(
                    res => {
                        this.crudAddLoading = false
                        reject(res);
                    }
                )
            })
        },

        /**
         * 删除
         * @param module
         * @param id 删除项id
         * @param index 删除信息在items是第index项，方便从items移除
         * @param items form所在的数组
         */
        onDelete(module,id, index = -1, items = null) {
            this.crudDeleteLoading = true
            Api.Delete(module,id).then(
                () => {
                    if (this.crudDeleteSuccessMsg)
                        this.successNotify(this.crudDeleteSuccessMsg)
                    if (index > -1 && items instanceof Array) {
                        items.splice(index, 1)
                    }
                    this.crudDeleteLoading = false
                }
            ).catch(
                () => {
                    this.crudDeleteLoading = false
                }
            )
        },

        /**
         * 真实删除信息
         * @param module
         * @param id 删除项id
         * @param index 删除信息在items是第index项，方便从items移除
         * @param items form所在的数组
         */
        onDeleteReal(module,id, index = -1, items = null) {
            this.crudDeleteRealLoading = true
            Api.DeleteReal(module,id).then(
                () => {
                    if (this.crudDeleteRealSuccessMsg)
                        this.successNotify(this.crudDeleteRealSuccessMsg)
                    if (index > -1 && items instanceof Array) {
                        items.splice(index, 1)
                    }
                    this.crudDeleteRealLoading = false
                }
            ).catch(
                () => {
                    this.crudDeleteRealLoading = false
                }
            )
        },

        /**
         * 读取信息
         * @param module
         * @param id
         * @param form 将读取的信息放入到form里面
         */
        onRead(module,id, form,params) {
            this.crudLoading = true
            Api.Read(module,id,params).then(
                res => {
                    if (this.crudReadSuccessMsg)
                        this.successNotify(this.crudReadSuccessMsg)
                    attrClone(res, form)
                    this.crudLoading = false
                }
            ).catch(
                () => {
                    this.crudLoading = false
                }
            )
        },

        /**
         * 编辑信息
         * @param module
         * @param id
         * @param form 将要编辑的信息，请求成功后将编辑成功的信息存入form
         */
        onUpdate(module,id, form) {
            return new Promise((resolve, reject) => {
                    this.crudUpdateLoading = true
                    Api.Update(module,id, form).then(
                        res => {
                            if (this.crudUpdateSuccessMsg)
                                this.successNotify(this.crudUpdateSuccessMsg)
                            attrClone(res, form)
                            this.crudUpdateLoading = false
                            resolve(res);
                        }
                    ).catch(
                        err => {
                            this.crudUpdateLoading = false
                            reject(err)
                        }
                    )
                }
            )
        },

        /**
         * 加载分页数据
         * @param module
         * @param page 分页对象{index,size}，size由后端自定是否启用
         * @param items 将加载到的数据直接放入items
         */
        onLoadPage(module,page, items) {
            this.crudLoading = true
            Api.Index(module,page).then(
                res => {
                    if (this.crudLoadPageSuccessMsg)
                        this.successNotify(this.crudLoadPageSuccessMsg)
                    items.splice(0, items.length)
                    attrClone(res.page, page)
                    res.list.forEach(item => items.push(item))
                    this.crudLoading = false
                }
            ).catch(
                () => {
                    this.crudLoading = false
                }
            )
        }
        ,

        /**
         * 加载数据
         * @param module
         * @param items 将加载到的数据直接放入items
         */
        onLoad(module,items,params) {
            return new Promise((resolve, reject) => {
                this.crudLoading = true
                Api.Index(module,params).then(
                    res => {
                        if (this.crudLoadSuccessMsg)
                            this.successNotify(this.crudLoadSuccessMsg)
                        if(items){
                            items.splice(0, items.length)
                            res.forEach(item => items.push(item))
                        }
                        this.crudLoading = false
                        return resolve(res)
                    }
                ).catch(
                    res => {
                        this.crudLoading = false
                        return reject(res)
                    }
                )
            })
        }
        ,

        /**
         * 加载所有数据
         * @param module
         * @param items 将加载到的数据直接放入items
         */
        onLoadAll(module,items,params) {
            return new Promise((resolve, reject) => {
                this.crudLoading = true
                Api.IndexAll(module,params).then(
                    res => {
                        if (this.crudLoadAllSuccessMsg)
                            this.successNotify(this.crudLoadAllSuccessMsg)
                        if(items){
                            items.splice(0, items.length)
                            res.forEach(item => items.push(item))
                        }
                        this.crudLoading = false
                        return resolve(res)
                    }
                ).catch(
                    res => {
                        this.crudLoading = false
                        return reject(res)
                    }
                )
            })
        }
        ,

        /**
         * 加载软删除的分页数据
         * @param module
         * @param page 分页对象{index,size}，size由后端自定是否启用
         * @param items 将加载到的数据直接放入items
         */
        onLoadTrashed(module,page, items) {
            this.crudLoading = true
            Api.IndexOfTrashed(module,page).then(
                res => {
                    if (this.crudLoadTrashedSuccessMsg)
                        this.successNotify(this.crudLoadTrashedSuccessMsg)
                    attrClone(res.page, page)
                    items.splice(0, items.length)
                    res.list.forEach(item => items.push(item))
                    this.crudLoading = false
                }
            ).catch(
                () => {
                    this.crudLoading = false
                }
            )
        }
        ,

        /**
         * 恢复指定数据
         * @param module
         * @param id
         * @param index 数据在items的位置
         * @param items 当它为数组的时候，将在请求成功时移除index项
         */
        onRecover(module,id, index = -1, items = null) {
            this.crudRecoverLoading = true
            Api.Recover(module,id).then(
                () => {
                    if (this.crudRecoverSuccessMsg)
                        this.successNotify(this.crudRecoverSuccessMsg)

                    if (index > -1 && items instanceof Array) {
                        items.splice(index, 1)
                    }
                    this.crudRecoverLoading = false
                }
            ).catch(
                () => {
                    this.crudRecoverLoading = false
                }
            )
        }
    }
}
