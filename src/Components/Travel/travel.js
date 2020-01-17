import React from 'react';
import './travel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from 'react-photo-gallery';
import japan from './kyotojapan.jpg';
import china from './tianjinchina.jpg'
import collage from './collage.jpg';
  
export class Travel extends React.Component{

    render(){


        return (
            <div className="Travel">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <br></br>
            <br></br>
            {/* <h2 class="travelling">travelling is a part of me</h2>
            <h3 class ="places">take a look at where I've been</h3>
            <hr></hr>
            <h5 class="quote">"JOBS FILL THE POCKET, BUT ADVENTURE FILLS THE SOUL "</h5> */}

            <div class="pictures">
              {/* <div class="container">
              <div class ="column"> */}
                
                {/* <img src={collage} width='60%' height='50%'></img>
{/*              */}
<div class="container">
<div class="row">

  <div class="col-md-12">

    {/* <div id="mdb-lightbox-ui"></div>

    <div class="mdb-lightbox"> */}
    <div class="row">
      <figure class="col-md-3">
        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg" data-size="1600x1067">
          <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg" class="img-fluid first" />
        </a>
      </figure>

      <figure class="col-md-3">
        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg" data-size="1600x1067">
          <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg" class="img-fluid" />
        </a>
      </figure>

      <figure class="col-md-3">
        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg" data-size="1600x1067">
          <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg" class="img-fluid" />
        </a>
      </figure>

      <figure class="col-md-3">
        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg" data-size="1600x1067">
          <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg" class="img-fluid" />
        </a>
      </figure>

      <figure class="col-md-3">
        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg" data-size="1600x1067">
          <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" class="img-fluid" />
        </a>
      </figure>

      <figure class="col-md-3">
        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg" data-size="1600x1067">
          <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg" class="img-fluid" />
        </a>
      </figure>

    </div>

  </div>
</div>
            </div>
         </div>
         </div>
               

        )
    }
}