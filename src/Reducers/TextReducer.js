export const TextReducer = (text, action) => {
 switch (action.text) {
   case "reset" :
     return ''
   default : return  text
 }
}

