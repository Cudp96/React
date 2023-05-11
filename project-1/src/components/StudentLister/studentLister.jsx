import React from 'react'
import ListComponent from '../ListComponent';

const studentLister = (props) => {
    console.log(props.stud);
  return (
    <>
    <div>
        <ul>
            {
                props.stud.map((student,index) =>{
                   return <ListComponent key={student} student={student}/>
                })
            }
        </ul>
    </div>
    </>
  )
}

export default studentLister