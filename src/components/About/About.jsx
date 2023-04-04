import style from './about.module.css';

        const About = () => {
            return (
              <div className={style.container}>
                <div className={style.card}>
                  <h2 className={style.title}>ABOUT ME</h2><br/>
                  <span className={style.text}>Hello everyone, my name is Angel David Villa, I am studying the M2 module of the Henry Bootcamp, on this occasion, I am developing the APP of the Rick & Morty integration project, which is based on consuming an API and allows us to add and close the cards with the characters from said series, I have focused on giving it a very striking appearance (to my liking) and well I hope you like it, what I have done, thanks for visiting</span>
          
                  <br/><br/><div className={style.links}>
                  
                    <div className={style.github}>
                    <a href="https://github.com/angeldvilla" target="_blank"><i className={`fab fa-github ${style.icon}`} /> GitHub</a>
                    </div>
                    
                    <div className={style.linkedin}>
                    <a href="https://www.linkedin.com/in/angel-david-villa-luj%C3%A1n-396634255/" target="_blank"><i className={`fab fa-linkedin ${style.icon}`} /> Linkedin</a>
                    </div>
                    <div className={style.insta}>
                    <a href="https://www.instagram.com/_angeldvilla_/" target="_blank"><i className={`fab fa-instagram ${style.icon}`} /> Instagram</a>
                    </div>
                  </div>

                  <span className={style.footer}><b>Design by: angeldvilla</b>
                  <br/><b><i>All Rights Reserved ©2023</i></b></span>
                </div>
              </div>
            );
}
        
export default About;