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
                    <a href="https://www.linkedin.com/in/angeldavidvilla" target="_blank"><i className={`fab fa-linkedin ${style.icon}`} /> Linkedin</a>
                    </div>
                    <div className={style.insta}>
                    <a href="https://www.instagram.com/_angeldvilla_/" target="_blank"><i className={`fab fa-instagram ${style.icon}`} /> Instagram</a>
                    </div>
                  </div>

                  <span className={style.footer}><b>Design by: angeldvilla</b>
                  <br/><b><i>Todos los derechos Reservados ©2023</i></b></span>
                </div>
              </div>
            );
}
        
export default About;

/*  return (
   <div className={style.container}>
     <h2 className={style.container}>ABOUT ME:</h2>
     <hr />
     <p className={style.text}>
       Hola a todos, mi nombre es Angel David Villa, estoy cursando el modulo M2 del Bootcamp Henry, en esta ocasión, me encuentro desarrollando la APP del proyecto integrador de Rick & Morty, la cual se basa en consumir una API y nos permita agregar y cerrar las cards con los personajes de dicha serie, me he enfocado en darle un aspecto muy llamativo (A mi gusto) y bueno espero les guste, lo que he realizado, Gracias por visitar </p>
       <br />
       <hr />

       <p className={style.text}>
       Si gustan, pueden seguirme en mis redes, asi me ayudarán a seguir creciendo en este mundo de la Tecnología!
       </p>
       <hr />
       <div className={style.links}>
       <div className={style.github}>
       <a href="https://github.com/angeldvilla" target="_blank"><i className={`fab fa-github ${style.icon}`} /> GitHub</a><br />
       </div>
       
       <div className={style.linkedin}>
       <a href="https://www.linkedin.com/in/angeldavidvilla" target="_blank"><i className={`fab fa-linkedin ${style.icon}`} /> Linkedin</a><br />
       </div>
       <div className={style.insta}>
       <a href="https://www.instagram.com/_angeldvilla_/" target="_blank"><i className={`fab fa-instagram ${style.icon}`} /> Instagram</a><br />
       </div>

       </div>
       
       <hr /><br />
       <p className={style.footer}>

       <b>design by: angeldvilla</b><br />
       <b><i>Todos los derechos Reservados ©2023</i></b>
       </p>
       
   </div>
 ); */