import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Header from './Header';


const RESUME = `# Josh Zhang

723 N 94th St. Unit B, Seattle, WA 98103 

661-427-9387 | josh.zhang91@gmail.com | https://github.com/mingjianjzhang

# Key Strengths
* Thriving in collaborative environments, comfortable taking both leading and supportive roles.
* Skilled written and verbal communicator
* Quick at picking up new skills, and adept at creatively applying them.

# Technical Skills
### Languages
Ruby, PHP, Python, HTML5, CSS, SCSS, Javascript, SQL
### Libraries/Tools
Rails, CodeIgniter, Node, Django, Angular, React, jQuery, Bootstrap, Materialize, Redux, Webpack, AWS(S3, EC2, Cognito)
### Testing
Rspec, Mocha, Chai, Karma, Jasmine
### Databases
MySQL, SQLite, PostgreSQL, MongoDB

# Career Highlights 
### Front-End Developer at ShopChirp LLC.
*Los Angeles, CA ▪ February 2017 - present*

* Hired as a contractor to build (from scratch) the front-end for a Django web app using React and Redux. MVP release due in Fall 2017
* Collaborated in writing the app's JSON API and coordinating with various AWS platforms, especially Amazon Cognito for user management 

      
### Web Designer / Business Development at Iris Fashion Inc.
*Cerritos, CA ▪ February 2017 - present*

Built company website and online catalog using the Shopify platform with a custom-designed template.
Worked closely with the CEO of the company on day-to-day business operations, with duties including translating, customer account management, preparing invoices, marketing and sales.      
                                                                                      
### Engineer in Residence at Coding Dojo 
*Burbank, CA ▪ August 2016 - December 2016*

Gained full-stack proficiency in PHP(CodeIgniter), Ruby(RoR) and MEAN 

**Projects**

* *Currents* (54.218.101.113 / https://github.com/mingjianjzhang/currents)  
    * User-managed news site that provides a timeline interface for learning about current events. 
    * Built with: Ruby on Rails, jQuery, SASS, PostgreSQL, Materialize
* *BootCamp Supply* (https://github.com/mingjianjzhang/lpproject) 
    * E-commerce site with admin suite. Collaborated with two others. Wrote all code for admin dashboard. 
    * Built using: PHP, CodeIgniter, jQuery, Materialize, MySQL.

### Office Manager / Head of Marketing at AllNew Dental 
*Encinitas, CA ▪ March 2015 - August 2016*

* Designed the office website and multiple landing pages using HTML, CSS and jQuery.
* Coordinated installation of all medical equipment such as a 3D CT machine and digital oral scanners as well as a cloud-based practice management software.

### Test Plan Runner at Epic Systems 
*Madison, WI ▪ August 2014 - March 2015*

* Conducted software testing of the OpTime(surgical) and Anesthesia modules by designing and running test plans while working with developers to improve the usability of their software 

# Education                                                                                                                                 
Bachelor of Arts (B.A) in English Literature from Williams College, Massachusetts (2007-2011).`

export default class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fixHeight: false
		}
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll, true);
	}
	componentWillUnmount(){
		console.log("unmounted???");
		window.removeEventListener('scroll', this.handleScroll, true);
	}
	handleScroll(event){
		if (event.target.scrollTop > 38) {
			this.setState({fixHeight: true})
		} 
		if (event.target.scrollTop < 38) {
			this.setState({fixHeight: false})
		}
	}
	render(){
		return (
			<div className='resume-container'>
				<Header />
				<div className={this.state.fixHeight ? 'header-offset' : ''}>
					<ReactMarkdown source={RESUME} />
				</div>
			</div>
		)	
	}
}