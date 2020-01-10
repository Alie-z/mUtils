const files = require.context('../views/utilsView', false, /\.vue$/)
const modules: string[] = []

files.keys().forEach((key) => {
  modules.push(key.replace(/(\.\/|\.vue)/g, ''))
})

const routeView: Array<{ path: string; name: string; component: () => Promise<any> }> = []
modules.map((route) => {
  routeView.push({
    path: `/${route}`,
    name: route,
    component: () => import(`../views/utilsView/${route}.vue`),
  })
})
export default routeView
