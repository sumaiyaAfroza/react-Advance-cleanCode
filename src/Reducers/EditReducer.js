export const EditReducer = (edit, action) => {
  switch (action.type) {
      case  'start-edit':
        return true
    case 'stop-edit' :
      return false

      default:
        return edit

  }

}