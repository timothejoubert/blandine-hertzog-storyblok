import commonContent from './../data/common-content.json'

export function getRoutes() {
    return commonContent.main_menu.children.map(navItem => {
        return {
            name: navItem.label,
            path: navItem.url,
            component: () => import('~/pages/[...slug].vue').then(r => r.default || r)
        }
    })
}
