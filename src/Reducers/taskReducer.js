
export const TaskReducer = (tasks, action) => {
  switch (action.type) {
    case 'added' :
        return [
          ...tasks,
          {
            id : action.id,
            text: action.text,
            done: false
          }
        ]
    case 'change-Task' :
      return tasks.map(task => task.id === action.task.id  ? action.task : task)
    case 'delete' :
      return tasks.filter(task => task.id !== action.id)

      default:
        return tasks

  }

}
