export function getTypeFromId (type) {
  if (type === 1) {
    return "Third party"
  } else if (type === 2){
    return "Third party with windows"
  }else if (type === 3){
    return "Third party with windows , fire & theft"
  }else if (type === 4){
    return " Full cover with deductible"
  }else {
    return "Full cover "
  } 
}

