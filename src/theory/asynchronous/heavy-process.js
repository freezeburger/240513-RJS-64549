
export function heavyProcess() {
  return new Array(1000000).fill(true).map((_, index) =>({code: Math.random(), id:index}))
}