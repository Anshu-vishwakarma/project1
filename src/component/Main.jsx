
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
function Main() {
    const [countI, setCountI] = useState(0)
    const [c2, setC2] = useState(0)
    const [c3, setC3] = useState(0)
    const [c4, setC4] = useState(0)
 

 
    const set = () => {
        setCountI(countI + 1);
    }
    const set1 = () => {
        if (countI != 0) {
            setCountI(countI - 1);
        }
    }
    const u1 = () => {
        setC2(c2 + 1);
    }

    const u2 = () => {
        if (c2 != 0) {
            setC2(c2 - 1);
        }
    }
    const v1 = () => {
        setC3(c3 + 1);
    }

    const v2 = () => {
        if (c3 != 0) {
            setC3(c3 - 1);
        }
    }
    const w1 = () => {
        setC4(c4 + 1); 
    }

    const w2 = () => {
        if (c4 != 0) {
            setC4(c4 - 1);
        }

    }
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5" style={{ backgroundColor: "blue", height: "50px" }}>
                    <i className="fas fa-utensils" style={{ marginRight: "15px" }}></i>
                    <label ><b>Food's Resturant</b></label>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        </ul>
                        <form className="d-flex">
                        <Link 
                  
                  to="/checkout" style={{  textDecoration: "none" }} >
                            <button className="btn btn-outline-dark" type="submit">
                          <i className="fas fa-shopping-cart"></i> <span className="badge bg-dark text-white ms-1 rounded-pill">{countI + c2 + c3 + c4}</span></button></Link>


                             
                               
                            
                        </form>
                    </div>
                </div>
            </nav>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-12 justify-content-left">
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://source.unsplash.com/1600x900/?Hamburger" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Hamburger</h5>
                                             <p>  Price: 50</p>
                                     <p>   {
                                               (countI>0)?`Total:${countI}`:null
                                               
                                        } </p>
                                       <p>
                                           {
                                               (countI>0)?`Cost(INR):${countI*50}`:null
                                           }
                                       </p>
                                       
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-primary  mt-auto" onClick={set}  
                                >+</a><a className="btn btn-danger mt-auto" onClick={set1}>-</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://source.unsplash.com/1600x900/?Fries mood" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Fries</h5>

                                        <p>  Price: 500</p>
                                     <p>   {
                                               (c2>0)?`Total:${c2}`:null
                                               
                                        } </p>
                                       <p>
                                           {
                                               (c2>0)?`Cost(INR):${c2*500}`:null
                                           }
                                       </p>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-primary  mt-auto" onClick={u1}>+</a><a className="btn btn-danger mt-auto" onClick={u2}>-</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://source.unsplash.com/1600x900/?coke" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Coke</h5>
                                        <p>  Price:150</p>
                                     <p>   {
                                               (c3>0)?`Total:${c3}`:null
                                               
                                        } </p>
                                       <p>
                                           {
                                               (c3>0)?`Cost(INR):${c3*150}`:null
                                           }
                                       </p>
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-primary  mt-auto" onClick={v1}>+</a><a className="btn btn-danger mt-auto" onClick={v2}>-</a></div>
                                </div>
                            </div>
                        </div>

                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://source.unsplash.com/1600x900/?pepsi" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">pepsi</h5>

                                    
                                        <p>  Price: 300</p>
                                       {
                                               (c4>0)?` <p>Total:${c4}</p>`:null
                                               
                                        } 
                                    
                                           {
                                               (c4>0)?`   <p>Cost(INR):${c4*300} </p> `:null
                                           }
                                      

                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-primary  mt-auto" onClick={w1}>+</a><a className="btn btn-danger mt-auto" onClick={w2}>-</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Ashu Website 2021</p></div>
            </footer>


        </>
    )
}

export default Main
