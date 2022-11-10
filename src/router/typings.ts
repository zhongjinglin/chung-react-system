export interface RouteObject {
  path?: string
  element?: React.ReactNode
  children?: RouteObject[]
  meta?: {
    title: string
    key?: string
  }
}
