import React from 'react'

const contact = (props) => {
  
  return (
    <div className="my-social-media">
		<div className="row">
			<div className="md-col-10 text-center">
				<h2>Hasip Timurtaş</h2>
				<h4>Full stack developer</h4>
				<h2>Contact</h2>
				<a className="btn btn-social-icon btn-lg btn-linkedin" href="https://www.linkedin.com/in/hasiptimurtas" target="_blank">
					<i className="fa fa-linkedin"></i>
				</a>

				<a className="btn btn-social-icon btn-lg btn-github" href="https://github.com/hasip-timurtas" target="_blank">
					<i className="fa fa-github" ></i>
				</a>
				
				<a className="btn btn-social-icon btn-lg btn-facebook" href="https://www.facebook.com/hasip.timurtas" target="_blank">
					<i className="fa fa-facebook"></i>
				</a>		

				<a className="btn btn-social-icon btn-lg btn-instagram" href="https://www.instagram.com/hasip.karina" target="_blank">
					<i className="fa fa-instagram"></i>
				</a>	

				<a className="btn btn-social-icon btn-lg btn-twitter" href="https://twitter.com/hasip_timurtas" target="_blank">
					<i className="fa fa-twitter"></i>
				</a>	
			</div>
		</div>
	</div>
  );
};

export default contact;