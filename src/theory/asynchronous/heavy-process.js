
export function heavyProcess() {

  console.time('heavyProcess');

  const result =  new Array(1000000).fill(true).map((_, index) =>({code: Math.random(), id:index}));

  console.timeEnd('heavyProcess');

  return result;
}