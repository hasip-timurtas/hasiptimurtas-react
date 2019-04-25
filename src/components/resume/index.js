import React from 'react'
import ResumeLeft from './resumeLeft'
import ResumeRight from './resumeRight'

const resume = (props) => {
  
  return (
    <div class="container mht-resume">
		<div class="row">
				<ResumeLeft />
				<ResumeRight />
		</div>
	</div>
  );
};

export default resume;