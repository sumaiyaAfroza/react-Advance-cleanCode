export const taskReducer = (tasks, action) => {
  switch (action.type) {
    case 'added' :
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    case 'changed' :
      return tasks.map(taskk => taskk.id === action.task.id ? action.task : taskk)
    case 'delete' :
      return tasks.filter(deleted => deleted.id !== action.taskId)

    default :
      return  tasks
  }
}