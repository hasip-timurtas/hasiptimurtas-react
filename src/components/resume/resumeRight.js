import React from "react";
import AboutMe from "./aboutMe";
import ResumeSkills from "./skills";
import Experiences from "./experiences";

const header = (props) => {
  return (
    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 resume-right">
      <div className="resume-print" onClick={(e) => window.print()}>
        <i className="fa fa-print fa-2x" title="Print the page."></i>
      </div>
      <div className="resume-download">
        <i className="fa fa-download fa-2x" title="Download as a PDF."></i>
      </div>
      <span className="resume-slash">//</span> <span className="resume-header">About Me</span>
      <div className="line"></div>
      <AboutMe />
      <div className="row">
        <div className="col-md-12">
          <span className="resume-slash">//</span> <span className="resume-header">Skills</span>
          <div className="line"></div>
          <ResumeSkills />
        </div>
      </div>
      <br />
      <span className="resume-slash">//</span> <span className="resume-header">Educations</span>
      <div className="line"></div>
      <div className="resume-educations">
        <div className="row">
          <div className="col-md-2 experience-date">15.09.2010</div>

          <div className="col-md-7">
            <strong>Associate degree - Computer Technology and Programming </strong>
          </div>
          <div className="col-md-3 text-right">Karabuk University</div>
        </div>
      </div>
      <br />
      <span className="resume-slash">//</span> <span className="resume-header">Experience</span>
      <div className="line"></div>
      <Experiences />
    </div>
  );
};

export default header;

/*


Template.resumeRight.events({
	"click .resume-download":function(event) {
       	var html = '<h1>My Cool Pdf</h1>';

       	// HTML TO PDF 
    
		 Normalda bu jsPDF ile yapılıyor javascript koduyla, meteordan baktım
		 bulamadım. jsPDF araştır kullan. kolaya benziyor.

       	

		Blaze.saveAsPDF(Template.resumeLeft, {
		    filename: "test.pdf", // optional, default is "document.pdf"
		    x: 0, // optional, left starting position on resulting PDF, default is 4 units
		    y: 0, // optional, top starting position on resulting PDF, default is 4 units
		    unit: "in" // optional, unit for coordinates, one of "pt", "mm" (default), "cm", or "in"
		   //format: "letter" // optional, see Page Formats, default is "a4",
		  //  elementHandlers: specialElementHandlers
	    });

	}
});

*/
