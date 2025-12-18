export const TextReducer = (text,action) => {
  switch (action.type) {
      case 'change' :
        return action.text
    case 'reset' :
      return ''

      default:
       return  text

  }

}