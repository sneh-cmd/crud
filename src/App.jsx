import React,{ useState , useEffect , useRef} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate, useParams } from 'react-router-dom';

function App() {
  const [detail, setDetail] = useState('');
  useEffect(()=>{
    // call api
    axios.get(`http://localhost:5000/details`).then((response)=>{
        setDetail(response.data);
    })
},[detail])
const Name=useRef("");
const Firstname=useRef("");
const Lastname=useRef("");
const Address=useRef("");
const Age=useRef("");
const navigate=useNavigate();
const{id}=useParams();

const adddetails=(e)=>{
  e.preventDefault();
  var data={
      Name:Name.current.value,
      Firstname:Firstname.current.value,
      Lastname:Lastname.current.value,
      Address:Address.current.value,
      Age:Age.current.value
  }
  axios.post(`http://localhost:5000/details`,data).then(()=>{
    // pass a messages
    Swal.fire({
        title: "Good job!",
        text: "Your task successfully added!",
        icon: "success"
      });

    // clear the values
    e.target.reset();
})
}
const DeleteData=(e)=> {
  e.preventDefault();
  //alert('hi')
  axios.delete(`http://localhost:5000/details/${id}`).then(()=>{
              // pass a message
              Swal.fire({
                title: "Good job!",
                text: "Your task successfully Deleted!",
                icon: "success"
              });
              navigate('/');
        })
}
  return (    
      <>  
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossOrigin="anonymous"/>

  <div className="container p-5 mt-5 mx-auto shadow">
    <h2 className="text-white bg-primary p-3">
      Employee Management systems{" "}
      <button type="button" className="btn btn-md btn-outline-light text-white float-end" data-bs-toggle="modal"   data-bs-target="#addemp">Add Employee <span className="bi bi-person-add" /></button></h2>

    <hr className="border border-1 border-primary" />
    <div className="row">
      <div className="col-md-4">
        <img src="https://i.pinimg.com/originals/34/be/76/34be76928b115ced8293e4729a689cc7.jpg" className="img-fluid man" />
      </div>
      <div className="col-md-8">
        <table className="table table-responsive table-bordered table-stripped table-hover">
          <thead>
            <tr className="bg-primary text-white text-center">
              <th>#id</th>
              <th>Name</th>
              <th>FName</th>
              <th>LName</th>
              <th>Address</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {detail && detail.map((item)=>{
                return (
                    <>
            <tr className="text-center">
              <td>{item.id}</td>
              <td>{item.Name}</td>
              <td>{item.Firstname}</td>
              <td>{item.Lastname}</td>
              <td>{item.Address}</td>
              <td>{item.Age}</td>
              <td>
                <a href="#"><span className="bi bi-whatsapp fs-3" /></a>
                <button type='button' onClick={()=>navigate(`/${item.id}`)}>
                  <span className="bi bi-trash fs-3" />
                </button>
                <a href="#"><span className="bi bi-pencil fs-3" /></a>
              </td>
            </tr>
            </>
                )
            })}         
          </tbody>
        </table>
      </div>
    </div>
  </div>
  {/* create a employee add form */}
  <div className="modal fade" id="addemp" role="dialog">
    <div className="modal-dialog" style={{ maxWidth: "70%", marginTop: "6%" }}>
      <div className="modal-content">
        <div className="row">
          <div className="col-md-6 bg-primary p-5">
            <h1 className="text-white">
              Add Employee <span className="bi bi-person-add" />
            </h1>
            <p className="text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/6818/6818210.png" alt="person"             className="img-fluid"/>
            </p>
          </div>
          <div className="col-md-6 p-5 mt-5">
            <h6 className="float-end">
              <button type="button" className="btn btn-sm btn-danger text-white" data-bs-dismiss="modal">&times; 
              </button>
            </h6>
            <form onSubmit={adddetails}>
            <div className="form-group mt-3">
              <input type="text" ref={Name} placeholder="Name" required="" className="form-control"/>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3">
                <input type="text" ref={Firstname} placeholder="Firstname" required="" className="form-control"/>
              </div>
              <div className="col-md-6 mt-3">
                <input type="text" ref={Lastname} placeholder="Lastname" required=""className="form-control"/>
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea placeholder="Address" ref={Address} required="" className="form-control" defaultValue={""}/>
            </div>
            <div className="form-group mt-3">
              <input type="text" ref={Age} placeholder="Age" required="" className="form-control"/>
            </div>
            <div className="form-group mt-3">
              <input type="submit" required="" className="btn btn-md btn-primary text-white" defaultValue="AddEmployee"/>
              <input type="reset" required="" className="btn btn-md btn-danger text-white"defaultValue="Reset"/>
            </div>
            </form>
            <div className="form-group mt-3">
              <b>Already have an account ?<a href="#" data-bs-toggle="modal" data-bs-target="#loginemp">Login here  </a>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
          </>
  )
}
export default App