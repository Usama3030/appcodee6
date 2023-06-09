import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Updateprofessor = () => {

    
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: '',
    email: '',
    contact: '',
    course: '',
    department: '',
    address: '',
    city: '',
    gender:'',
    age:'',
    code:'',
    status:'',
  });
  


  useEffect(() => {
    axios.get('http://localhost:8080/proupdate/'+id)
    .then(res => {
      setValues({...values, name: res.data.name, email: res.data.email, contact: res.data.contact, course: res.data.course, department: res.data.department, address: res.data.address, city: res.data.city, gender: res.data.gender, age: res.data.age, code: res.data.code, status: res.data.status})
    })
    .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/proupdate/'+id, values)
    .then(res => {
      navigate('/Professors');
    })
    .catch(err => console.log(err))
  }


  return (
    
     <div className="updateprofessor">
      <div className="container">
        <div className="header">
          <h5 className="title" style={{ color: 'black' }}>
            update Record
          </h5>
        </div>
        <div className="body">
          <form className="row g-3" onSubmit={handlesubmit}>
            {/* Your form inputs */}
            <div className="col-md-6">
              <label htmlFor="name" className="form-label" style={{ color: 'black' }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={values.name}
                onChange={e => setValues({...values, name: e.target.value})}
               
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label" style={{ color: 'black' }}>
               Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={values.email}
                onChange={e => setValues({...values, email: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="contact" className="form-label" style={{ color: 'black' }}>
                Contact
              </label>
              <input
                type="number"
                className="form-control"
                id="contact"
                name="contact"
                value={values.contact}
                onChange={e => setValues({...values, contact: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="course" className="form-label" style={{ color: 'black' }}>
                Course
              </label>
              <input
                type="text"
                className="form-control"
                id="course"
                name="course"
                value={values.course}
                onChange={e => setValues({...values, course: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="department" className="form-label" style={{ color: 'black' }}>
                Department
              </label>
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                value={values.department}
                onChange={e => setValues({...values, department: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label" style={{ color: 'black' }}>
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={values.address}
                onChange={e => setValues({...values, address: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label" style={{ color: 'black' }}>
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={values.city}
                onChange={e => setValues({...values, city: e.target.value})}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="gender" className="form-label" style={{ color: 'black' }}>
               Gender
              </label>
              <input
                type="text"
                className="form-control"
                id="gender"
                name="gender"
                value={values.gender}
                onChange={e => setValues({...values, gender: e.target.value})}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="age" className="form-label" style={{ color: 'black' }}>
               Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={values.age}
                onChange={e => setValues({...values, age: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="pin" className="form-label" style={{ color: 'black' }}>
              Code
              </label>
              <input
                type="password"
                className="form-control"
                id="pin"
                name="pin"
                value={values.code}
                onChange={e => setValues({...values, code: e.target.value})}
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="status" className="form-label" style={{ color: 'black' }}>
               Status
              </label>
                <select
              id="status"
              class="form-select"
              value={values.status}
              onChange={e => setValues({...values, status: e.target.value})}
              
            >
            <option selected>Choose...</option>
              <option value={'Active'}>Active</option>
              <option value={'Inactive'}>InActive</option>
              
            </select>
            </div>
            
            <div className="footer">
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
  </div>   
  )
}

export default Updateprofessor
