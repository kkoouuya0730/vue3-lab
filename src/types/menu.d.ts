export interface MenuItem {
  label: string,
  icon: string,
  route?: string | undefined,
  command?: () => void
}