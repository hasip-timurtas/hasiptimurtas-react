import React, { Component } from 'react'
//import Modal from 'react-modal';
import { Button, Modal,  } from 'react-bootstrap'

class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.showPic = this.showPic.bind(this);
      this.state = {
        show: false,
        alt:'',
        src:''
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    showPic(e){
        const {alt, src} = e.target
        this.setState({ show: true, alt, src});
    }
  
    render() {
        const {alt, src} = this.state
      return (
        <>
        <div className="container">
          <div className="my-images">
              <div className="row">
                  <div className="md-col-12 images text-center">
                      
                      
                      
                      <img src="img/capri.jpg" alt="A day in capri island in Italy" onClick={this.showPic}/>
                      
                     
                      
                      <img src="img/IstanbulTechnicalUniversty.jpg" alt="Istanbul Technical Universty in winter.." onClick={this.showPic}/>
                      
                      <img src="img/montevideo.jpg" alt="great moments from Montevideo, Uruguay " onClick={this.showPic}/>
                      <img src="img/avea.jpg" alt="A day in Avea" onClick={this.showPic}/>
                      <img src="img/kari-istanbul.jpg" alt="A day in Istanbul before going Elma Pup :)" onClick={this.showPic}/>
                      <img src="img/itu.jpg" alt="Istanbul Technical Universty in spring.." onClick={this.showPic}/>
                      <img src="img/kari-uruguay.jpg" alt="A day in Uruguay With my love with a good view! " onClick={this.showPic}/>
                      <img src="img/bowling.jpg" alt="having fun" onClick={this.showPic}/>
                      <img src="img/award.jpg" alt="An old picture from IT Symposium" onClick={this.showPic}/>
                      <img src="img/gulhane.jpg" alt="Istanbul Sultan Ahmet" onClick={this.showPic}/>
                      <img src="img/resting.jpg" alt="Resting.." onClick={this.showPic}/>
                      <img src="img/italy-k.jpg" alt="A day in Italy With my love! " onClick={this.showPic}/>
                      <img src="img/suleymaniye.jpg" alt="A good view from Suleymaniye, Istanbul" onClick={this.showPic}/>
                      <img src="img/seminar.jpg" alt="Was a good seminar.."onClick={this.showPic}/>
                      <img src="img/office.jpg" alt="Working.." onClick={this.showPic}/>
                      <img src="img/pisa.jpg" alt="Traveling.." onClick={this.showPic}/>
                      
                      
                      
                  </div>
              </div>
          </div>
        </div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{alt}</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={src} alt={alt} /></Modal.Body>
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


class Pics extends Component {
    componentDidMount(){
        $(".images img").click(function(event) {
            ShowBootstrapModel(event.currentTarget);
        })
    }

    render() {
      return (
        <div>
        <div className="container">
          <div className="my-images">
              <div className="row">
                  <div className="md-col-12 images text-center">
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

          <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                          <h4 className="modal-title">1</h4>
                      </div>
                      <div className="modal-body">
                          <img src="img/avea.jpg"/>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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