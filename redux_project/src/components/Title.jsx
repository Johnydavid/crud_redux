import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Title = () => {
  const {taskList} = useSelector((state)=> state.tasks)
  return (
    <div>
<h1 className= {"my-3 text-center text-primary"}>Project Management</h1>
<h2 className = {"my-3 text-center lead"}>{`Currently ${taskList.length} task(s) pending`}</h2>
        </div>
  )
}

export default Title