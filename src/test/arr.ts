export function combineArray (arr: string[]) {
  let result = []
  let len = 0

  const start = (index: number) =>  {
    if (index === arr.length - 1) {
      result.push(arr.join(''))
      len ++
      return
    }

    for (let i = index; i < arr.length; i++) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      start(index + 1);
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }

  start(0)
  return result
}


export function lengthOfLongestSubstring (s) {
  const l = s.length
  if (l === 1) {
    return 1;
  }
  const arrS = s.split('');
  let maxLength = 0, selfJ = 0;

  for (let i = 0; i < l; i++) {
    for (let j = selfJ; j < i; j++) {
      maxLength = Math.max(maxLength, (i - j))
      if (arrS[i] === arrS[j]) {
        selfJ = j + 1
        break
      }
    }
  }
  return Math.max(maxLength, l - selfJ)
}
