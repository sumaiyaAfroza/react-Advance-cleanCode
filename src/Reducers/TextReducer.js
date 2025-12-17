export const TextReducer = (text, action) => {
 switch (action.type) {
   case 'change-text' :
     return action.text
   case "reset" :
     return ''

   default :
     return  text
 }
}

