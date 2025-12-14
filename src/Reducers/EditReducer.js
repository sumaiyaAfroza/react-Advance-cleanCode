export const EditReducer =(isEdit, action) => {
  switch (action.type) {
      case 'start-edit' :
        return true
    case 'stop-editing' :
      return false


      default:
        return isEdit

  }

}