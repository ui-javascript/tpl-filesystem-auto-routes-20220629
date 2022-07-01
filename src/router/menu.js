import { cloneDeep, sortBy } from 'lodash'
import { convertMenu } from './menu.utils'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const sortByName = (childList, parentNode) => {
    if (parentNode && parentNode.children) {
        parentNode.children = sortBy(childList, e => e.uid)
    }

    childList.forEach(childItem => {
        if (childItem.children) {
            sortByName(childItem.children, childItem)
        }
    })
}

const removeMenuPathNumPrefix = routes => {
    routes.forEach(item => {

        if (item.path) {
            item.path = item.path.replace(/(^\/\d+-)|\/\d+-/g, '/')
        }

        if (item.children) {
            removeMenuPathNumPrefix(item.children)
        }
    })
}

let routes = []
generatedRoutes.forEach(item => {
    if (item.meta?.enabled !== false && item.meta?.constant !== true) {
        routes.push((item.meta?.layout !== false) ? setupLayouts([item])[0] : item)
    }
})
console.log('路由: ', routes)

const allRoutesPath = []
const getAllRoutesPath = routes => {
    routes.map(route => {
        if (route.children) {
            getAllRoutesPath(route.children)
        }

        if (route.path != '') {
            allRoutesPath.push(route.path)
        }
    })
}
getAllRoutesPath(routes)
console.log('全部路径: ', allRoutesPath)

// 从路由调整菜单
const clonedRoutes = cloneDeep(routes)
clonedRoutes.map(route => {
    if (!route.name && route.children && route.children.length === 1 && route.children[0].path === '') {
        route.name = route.children[0].name
        route.meta = route.children[0].meta

        // 子节点上提
        // if (!allRoutesPath.some(i => i.startsWith(route.path+"/"))) {
        //     route.layout = route.component
        //     route.component = route.children[0].component
        // }

        route.children = []
    }
})

console.log('修正后的路径')
console.log(clonedRoutes)

let genMenu = convertMenu(clonedRoutes
    .filter(item => !['/', '/login', '/reload', '/:all(.*)*'].includes(item.path)))
// .filter(item => !item || !item.meta || item.meta.enabled !== false)

// console.log('菜单: ', genMenu)
sortByName(genMenu, null)
genMenu = sortBy(genMenu, e => e.uid)

removeMenuPathNumPrefix(genMenu)

console.log('菜单')
console.log(genMenu)

export default genMenu
