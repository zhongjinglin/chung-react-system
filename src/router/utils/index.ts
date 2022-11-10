import { RouteObject } from '../typings'

/**
 * 合并路由
 * @param routerArray
 * @returns
 */
export function combineAllRoutes(
  routerArray: Array<Array<RouteObject>>
): RouteObject[] {
  return routerArray.reduce((acc, item) => {
    acc = acc.concat(item)
    return acc
  }, [])
}
