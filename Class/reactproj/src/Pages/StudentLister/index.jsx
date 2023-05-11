import React, {  useState , useContext} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { FaEdit } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/UseContext';

const StudentLister = (props) => {
  const [student, setStudent] = useState('');
  const navigate = useNavigate();

  const data = useContext(GlobalContext);
  console.log(data);

  const valueOfText = (e) => {
    setStudent(e.target.value);
  }

  const addStudent = (e) => {
    e.preventDefault();
    console.log(student)
    // making data the new students list which is in the parent element or in app.jsx
    const data = props.stud;
    // pushing that data in the student list which came form ValueOfText element
    data.push(student);
    console.log(data)
    // setting the data in the parent element which came app.jsx
    props.setStudents(data);
    setStudent('');

  }
  const goToPages = () => {
    navigate('/products');
  }

  const deleteHandler = (index) => {

    // Filter method is use to filter the clicked student
    const filteredStudents = props.stud.filter((value, i) => {
      // i ! == index means it will make a new array with rest of the students array
      // if i === index then it will make a new array with only the clicked student 
      return i !== index;

    })
    console.log(filteredStudents);
    // setting the new array!!!!!!!!
    props.setStudents(filteredStudents);
  };

  const StudentItem = ({ stud, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isEdited, setIsEdited] = useState(stud);
    const toggleEdit = () => {
      setIsEditing(!isEditing)
    };

    const cancelHandler = () => {
      setIsEditing(false);
    };
    const changeHandler = () => {
      // setIsEdited(event.target.value);
      console.log(event.target.value)
    }

    

    return (
      <>
        <ListGroupItem >
          <div className="student d-flex justify-content-between">
            {isEditing ? (
              <>
                <Form.Control type='text' value={stud} onChange={(event)=> changeHandler(event)} />
                <span>
                  <Button variant='primary'>Save</Button>
                  <Button variant='warning' onClick={cancelHandler}>Cancel</Button>
                </span>
              </>
            )
              : (
                <>
                  <h4>{stud}</h4>
                  <span>
                    <Button variant='warning' className='ms-2'> <FaEdit onClick={toggleEdit} /> </Button>
                    <Button variant='danger' className='ms-2'> <MdDelete onClick={() => deleteHandler(index)} /> </Button>
                  </span>
                </>)}

          </div>
        </ListGroupItem>


      </>
    )
  }

  return (
    <>
      <ListGroup className='w-50 mx-auto my-6'>
        <h3 className='text-center'>Student List</h3>
        <Form className='mx-auto d-flex mb-2'>
          <Form.Control type="text" placeholder="Enter to add....." onChange={valueOfText} value={student} />
          <Button variant='primary' className='ms-2' onClick={addStudent}> <MdAdd /> </Button>
          <Button variant='primary' className='ms-2' onClick={goToPages} > Go to Production </Button>
        </Form>
        {
          data.map((student, index) => {
            return <StudentItem key={student} stud={student} index={index}/>
          })
        }
      </ListGroup>
    </>
  )
}

export default StudentLister;