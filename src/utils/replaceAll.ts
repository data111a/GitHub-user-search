export const replaceAll = (str : string, replace : string, replaceWith : string) => {
  let newStr = ""
  for(let i in str){
    if(str[i] === replace){
      newStr+= replaceWith
    }else{
      newStr += str[i]
    }
  }
  return newStr
}