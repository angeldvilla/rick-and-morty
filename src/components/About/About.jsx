import style from './about.module.css';
import myImage from '../images/IMG-20230105-WA0046.jpg'

        const About = () => {
            return (
              <div className={style.aboutwrapper}>
              <div className={style.aboutleft}>
                <div className={style.aboutleftcontent}>
                  <div>
                    
                      <div className={style.aboutimg}>
                        <img src={myImage} alt = "ADVL" />
                      </div>
                    
        
                    <h2>ANGEL DAVID<br/>VILLA LUJÁN</h2>
                    <h3>Web Developer</h3><br/>
                  </div>
        
                  <br/><h4 className={style.fontH4}>CONTACT ME:</h4>
                  <ul className={style.icons}>
                    <li><i className="fab fa-github"></i></li>
                    <li><i className="fab fa-linkedin"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                  </ul>
                </div>
              </div>
        
              <div className={style.aboutright}>
                <h1>MODULE 2<span>!</span></h1> 
                <h2><strong>PROJECT RICK AND MORTY</strong></h2>
                
                
                  <img src='https://media.tenor.com/5mQ6UldmCQ4AAAAC/rickand-morty-rick.gif' alt='Rick si sabe' className={style.aboutimg} style={{width:'9em', height:'7.5em', borderRadius:'50%'}}/>
                  


                <br/><br/> <span>Hello everyone, these were the technologies that were worked on during the project</span> 
                
                <div className = {style.aboutpara}>
                <br/><span style={{color: '#dd5c2d'}}><i>Tools:</i></span><br/>
                  <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'className={style.aboutimg} style={{width:'6.9em', height:'5.2em', borderRadius:'50%'}}  alt='JAVASCRIPT'/>
                  <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' className={style.aboutimg} style={{width:'6em', height:'5.2em', borderRadius:'50%'}} alt='REACT'/>
                  <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' className={style.aboutimg} style={{width:'6em', height:'5.2em', borderRadius:'50%'}} alt='REDUX'/>  </div>
               
        
                <div className = {style.aboutpara}>
                  
                <br/><br/><span>I am studying the M2 module of the Henry Bootcamp, this time I am developing the APP of the Rick & Morty integration project, which is based on consuming an API and allows us to add and close the cards with the characters of said series, they can be marked as favorites, in turn save them in a global state, to later render them in a certain component of favorites... I have focused on giving it a very striking appearance (to my liking) and well I hope you like what I have done, thanks for visit.</span>
                
                </div>
              
              </div>
            
            </div>

    );
}
        
export default About;