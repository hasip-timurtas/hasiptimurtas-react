import React, { Component } from "react";
//import Modal from 'react-modal';
import { Button, Modal } from "react-bootstrap";

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      alt: "",
      src: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { alt, src } = this.state;
    return (
      <>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 resume-left">
          <div>
            <img
              src="img/resume.jpg"
              className="resume-pic"
              alt="hasip timurtaş resume pic"
              onClick={(e) => this.setState({ show: true, src: "img/resume.jpg" })}
            />
          </div>

          <div className="resume-profile">
            <span className="resume-slash">//</span> <span className="resume-header">Profile</span> <br />
            <div className="line"></div>
            <strong>Name</strong> <br />
            M. Hasip Timurtaş
            <br />
            <br />
            <strong>Experience</strong> <br />
            {new Date().getFullYear() - 2010} Years
            <br />
            <br />
            <strong>Address</strong> <br />
            8, Flat 1, Triq Manoel De Vilhena
            <br />
            Griza, Malta
            <br />
            <br />
            <strong>Phone</strong> <br />
            +356 790 12551
            <br />
            <br />
            <strong>Email</strong> <br />
            hasip.timurtas@gmail.com
            <br />
            <br />
            <strong>Website</strong> <br />
            <a href="http://www.hasiptimurtas.com">www.hasiptimurtas.com</a>
          </div>
          <div className="resume-social">
            <span className="resume-slash">//</span> <span className="resume-header">Social</span> <br />
            <div className="line"></div>
            /hasiptimurtas
            <a href="https://www.linkedin.com/in/hasiptimurtas" className="btn btn-social-icon btn-xs btn-linkedin" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
            <br />
            /hasip-timurtas
            <a href="https://github.com/hasip-timurtas" className="btn btn-social-icon btn-xs btn-github" target="_blank">
              <i className="fa fa-github"></i>
            </a>
            <br />
            +hasipTimurtas
            <a href="https://plus.google.com/+hasipTimurtas" className="btn btn-social-icon btn-xs btn-google" target="_blank">
              <i className="fa fa-google"></i>
            </a>
            <br />
            @hasip_timurtas
            <a href="https://twitter.com/hasip_timurtas" className="btn btn-social-icon btn-xs btn-twitter" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <br />
            /hasip.timurtas
            <a href="https://www.facebook.com/hasip.timurtas" className="btn btn-social-icon btn-xs btn-facebook" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <br />
          </div>
          <div className="resume-certificate">
            <small> click certificate for image</small>
            <span className="resume-slash">//</span> <span className="resume-header">Certificates</span>
            <div className="line"></div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/smartpro.jpg" })}>
              <div className="col-md-4">
                {" "}
                <img src="img/certificates/smartpro.jpg" />
              </div>

              <div className="col-md-8">Software and Database Expertise - SmartPro 2011</div>
            </div>
            <div
              className="certificate row"
              onClick={(e) => this.setState({ show: true, src: "img/certificates/BA-outstanding-chievement-certificate.jpg" })}
            >
              <div className="col-md-4">
                <img src="img/certificates/BA-outstanding-chievement-certificate.jpg" />
              </div>

              <div className="col-md-8">Software and Database Expertise - Bilge Adam 2013</div>
            </div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/BA-atandance.jpg" })}>
              <div className="col-md-4">
                <img src="img/certificates/BA-atandance.jpg" />
              </div>

              <div className="col-md-8">Software and Database Expertise 2 - Bilge Adam 2013</div>
            </div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/MS-html-css.jpg" })}>
              <div className="col-md-4">
                <img src="img/certificates/MS-html-css.jpg" />
              </div>

              <div className="col-md-8">Microsoft Certificate of attendance - Programming in HTML 5 with Javascript and CSS3</div>
            </div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/MS-promgraiming-charp.jpg" })}>
              <div className="col-md-4">
                <img src="img/certificates/MS-promgraiming-charp.jpg" />
              </div>

              <div className="col-md-8">Microsoft Certificate of attendance - Programming in C#</div>
            </div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/MS-azure.jpg" })}>
              <div className="col-md-4">
                <img src="img/certificates/MS-azure.jpg" />
              </div>

              <div className="col-md-8">Microsoft Certificate of attendance - Developing windows Azure and Web Services</div>
            </div>
            <div className="certificate row" onClick={(e) => this.setState({ show: true, src: "img/certificates/MS-mvc.jpg" })}>
              <div className="col-md-4">
                <img src="img/certificates/MS-mvc.jpg" />
              </div>

              <div className="col-md-8">Microsoft Certificate of attendance - Developing ASP.NET 4.5 MVC Web Applications</div>
            </div>
          </div>
        </div>
        <div className="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <img />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={src} alt={alt} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Example;

/*
function ShowBootstrapModel (image) {
    $(image).attr('data-toggle', 'modal');
    $(image).attr('data-target', '#myModal');
    $(".modal-title").html(image.alt);
    $(".modal-body img").attr('src',image.currentSrc);
}


className Pics extends Component {
    componentDidMount(){
        $(".images img").click(function(event) {
            ShowBootstrapModel(event.currentTarget);
        })
    }

    render() {
      return (
        <div>
        <div classNameName="container">
          <div classNameName="my-images">
              <div classNameName="row">
                  <div classNameName="md-col-12 images text-center">
                      <img src="img/avea.jpg" alt="A day in Avea" />
                      <img src="img/award.jpg" alt="An old picture from IT Symposium" />
                      <img src="img/bowling.jpg" alt="having fun"/>
                      <img src="img/capri.jpg" alt="A day in capri island in Italy"/>
                      <img src="img/gulhane.jpg" alt="Istanbul Sultan Ahmet"/>
                      <img src="img/IstanbulTechnicalUniversty.jpg" alt="Istanbul Technical Universty in winter.."/>
                      <img src="img/itu.jpg" alt="Istanbul Technical Universty in spring.."/>
                      <img src="img/montevideo.jpg" alt="great moments from Montevideo, Uruguay "/>
                      <img src="img/office.jpg" alt="Working.."/>
                      <img src="img/pisa.jpg" alt="Traveling.."/>
                      <img src="img/resting.jpg" alt="Resting.."/>
                      <img src="img/seminar.jpg" alt="Was a good seminar.."/>
                      <img src="img/suleymaniye.jpg" alt="A good view from Suleymaniye, Istanbul"/>
                  </div>
              </div>
          </div>

          <div classNameName="modal fade" id="myModal" role="dialog">
              <div classNameName="modal-dialog">
                  <div classNameName="modal-content">
                      <div classNameName="modal-header">
                          <button type="button" classNameName="close" data-dismiss="modal">&times;</button>
                          <h4 classNameName="modal-title">1</h4>
                      </div>
                      <div classNameName="modal-body">
                          <img src="img/avea.jpg"/>
                      </div>
                      <div classNameName="modal-footer">
                          <button type="button" classNameName="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
      )
    }
  }

export default Pics


*/

/*



Template.resumeLeft.events({
	"click .certificate":function(event) {
        ShowBootstrapModel(event.currentTarget);
	},

	"click .resume-pic": function(event) {
	    $(event.currentTarget).attr('data-toggle', 'modal');
		$(event.currentTarget).attr('data-target', '#myModal');
		var imageSrc = '/img/' + $(event.currentTarget).attr('data-src');
		$(".modal-body img").attr('src',imageSrc);

	}
});


function ShowBootstrapModel (image) {
	$(image).attr('data-toggle', 'modal');
	$(image).attr('data-target', '#myModal');
	var imageSrc = '/img/certificates/' + $(image).attr('data-src');
	$(".modal-body img").attr('src',imageSrc);
}

*/
