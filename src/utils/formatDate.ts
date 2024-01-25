import { replaceAll } from "./replaceAll"

export const formatDate = (date : string) => {
  const newDate = date?.slice(0,10)
  return replaceAll(newDate, "-","/")
}