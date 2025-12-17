export const EditTextReducer = (editText, action) => {
  switch (action.type) {
      case 'change-Edit-Text' :
        return action.text


      default:
        return editText

  }

}