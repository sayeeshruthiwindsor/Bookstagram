import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosMain from '../../http/axios/axios_main';
import { toast } from 'react-toastify';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { withRouter } from 'react-router';

import book1 from '../../assets/images/demo/book1.jpg';
import backview from '../../assets/images/demo/backviewbook1.jpg';
import book3d from '../../assets/images/demo/3dviewbook1.jpg';
import { BsFillStarFill } from "react-icons/bs";

const BookDescription = props => {
  const [data, setData] = useState(null);
  const [id, setId] = useState();

  const [errValue, setErrValue] = useState();

  useEffect(() => {
    if (!data) {
      if (props.location.state) {
        console.log("Props", props.location.state.bookId);
        const bookID = props.location.state.bookId;
        setId(bookID);
        console.log('Data', id);


        axiosMain
          .get('/book/' + props.location.state.bookId + '/')
          .then(response => {
            if (response.status === 200) {
              console.log("Response", response.data)
              setData(response.data);
              toast.success(`User Books Fetch Successful`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          })
          .catch(error => {
            setErrValue(error);
            console.error('Error', error);
            setErrValue("This Books Fetch Failed")
          });
      }
    }
  }, []);

  const getRatings = (ratings) => {
    let content = [];

    for (var i = 0; i < ratings; i++) {
      content.push(<button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
        <span ><BsFillStarFill /></span>
      </button>)
    }
    return content;
  };


  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <br />
      <br />
      <br />
      <br />
      <head>
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>

      {data ?
        <main className="container-bookdesc">

          {/* <!-- Left Column / Headphones Image --> */}
          <div className="left-column-bookdesc">
            <img className="active" src={data.dp} alt="" />
          </div>


          {/* <!-- Right Column --> */}
          <div className="right-column-bookdesc">

            {/* <!-- Product Description --> */}
            <div className="product-description">
              <h2>{data.name}</h2>
              <h1>{data.authJSON.first_name}</h1>
              <p>Description for the book: {data.desc}<span id="dots">...</span>

                <span id="more">{data.desc}</span></p>
              <button onclick="myFunction()" id="myBtn">Read more</button>
            </div>

            < div className="product-configuration" >

              {/* <!-- Product Color -->
          <div className="product-color">
            <span>Views</span>

            <div className="color-choose">
              <div>
                <input data-image="frontview" type="radio" id="frontview" name="View" value="frontview" checked />
                <label for="frontview"><span>Front View</span></label>
              </div>
              <div>
                <input data-image="backview" type="radio" id="backview" name="View" value="backview"/>
                <label for="backview"><span>Back View</span></label>
              </div>
              <div>
                <input data-image="3dview" type="radio" id="3dview" name="View" value="3dview"/>
                <label for="3dview"><span>3D View</span></label>
              </div>
            </div>

          </div> */}

              {/* <!-- Cable Configuration --> */}


            </div>

            {/* <!-- Product Pricing --> */}
            < div className="product-price" >
              <span>{data.rate}$</span>
              <a href="#" className="cart-btn">Add to cart</a>

            </div>
            <div></div>
            <a href="../../asset/wof.pdf" className="cart-btn read_online">Read Online</a>
          </div>
        </main> : null}

      <main>
        <div className="row">
          <div className="col-sm-7">
            <div className="review-block">

              {data && data.CommentJSON.length >= 1 && data.CommentJSON.map(({ ratings, comments, AuthJSON, publist }, index) => (
                <div className="row">
                  <div className="col-sm-3">
                    <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" className="img-rounded" />
                    <div className="review-block-name"><a href="#">{AuthJSON.first_name}</a></div>
                    <div className="review-block-date">{publist}</div>
                  </div>
                  <div className="col-sm-9">
                    <div className="review-block-rate">
                      {getRatings(ratings)}
                    </div>
                    <div className="review-block-title">{comments}</div>
                    <div className="review-block-description">{comments}</div>
                  </div>
                </div>
              ))}

              <hr />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment >
  )
};

export default withRouter(BookDescription);
