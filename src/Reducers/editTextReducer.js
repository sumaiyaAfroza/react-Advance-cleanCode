export const EditTextReducer = (editText, action) => {
  switch (action.type) {
      case 'edit-text' :
          return action.text
      default:
        return editText

  }

}
