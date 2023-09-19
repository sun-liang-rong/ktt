import { lazy, Suspense} from 'react'
function LazyLoad(url: string){
  const Module = lazy(() => import('../views' + url))
  return (
    <Suspense fallback={<h2>加载中...</h2>}>
      <Module />
    </Suspense>
  )
}
export default LazyLoad