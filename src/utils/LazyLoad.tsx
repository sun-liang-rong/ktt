import { lazy, Suspense} from 'react'
function LazyLoad(url: string){
  console.log(url)
  const Module = lazy(() => import('../views' + url).catch(() => import('../views/ErrorPage')))
  console.log(Module, 'module loaded')
  return (
    <Suspense fallback={<h2>加载中...</h2>}>
      <Module />
    </Suspense>
  )
}
export default LazyLoad