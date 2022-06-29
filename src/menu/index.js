import MultilevelMenuExample from './modules/multilevel.menu.example'

import {cloneDeep} from "lodash"
import { convertMenu } from "./menu.utils"


let routes = []
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
generatedRoutes.forEach(v => {
    routes.push(v?.meta?.layout != false ? setupLayouts([v])[0] : v)
})

console.log('路由: ', routes)

const allRoutesPath = []
const getAllRoutesPath = (routes) => {
    routes.map(route => {
    
        if (route.children) {
            getAllRoutesPath(route.children)
        }

        if (route.path != "") {
            allRoutesPath.push(route.path)
        }
    })
} 
getAllRoutesPath(routes)
console.log("全部路径: ", allRoutesPath)


// 从路由调整菜单
const clonedRoutes = cloneDeep(routes)
clonedRoutes.map(route => {
    if (!route.name && route.children && route.children.length === 1 && route.children[0].path === "") {
        route.name = route.children[0].name
        route.meta = route.children[0].meta

        // 子节点上提
        if (!allRoutesPath.some(i => i.startsWith(route.path+"/"))) {
            route.layout = route.component
            route.component = route.children[0].component
        }

        route.children = []
    }
})
console.log("修正后的路径")
console.log(clonedRoutes)
// console.log('菜单: ', convertMenu(clonedRoutes))

console.log(convertMenu(clonedRoutes)[4])

const menu = [
    {
        meta: {
            title: '演示',
            icon: 'sidebar-default'
        },
        children: [
            {
                meta: {
                    title: '多级导航',
                    icon: 'sidebar-menu'
                },
                children: [
                    {
                        path: '/multilevel_menu_example/page',
                        meta: {
                            title: '导航1'
                        }
                    },
                    {
                        meta: {
                            title: '导航2'
                        },
                        children: [
                            {
                                path: '/multilevel_menu_example/level2/page',
                                meta: {
                                    title: '导航2-1'
                                }
                            },
                            {
                                meta: {
                                    title: '导航2-2'
                                },
                                children: [
                                    {
                                        path: '/multilevel_menu_example/level2/level3/page1',
                                        meta: {
                                            title: '导航2-2-1'
                                        }
                                    },
                                    {
                                        path: '/multilevel_menu_example/level2/level3/page2',
                                        meta: {
                                            title: '导航2-2-2'
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    convertMenu(clonedRoutes)[4]
]

export default menu
