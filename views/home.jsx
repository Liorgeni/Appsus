const { Link, NavLink } = ReactRouterDOM

export function Home() {
  return (
    <section className="home flex justify-center align-center">    

            <NavLink   className="home-links" to="/note"><img className="home-img" src="../assets/img/note.png"></img></NavLink>
            <NavLink   className="home-links" to="/mail"><img className="home-img" src="../assets/img/mail.png"></img></NavLink>
            <NavLink   className="home-links"  to="/note"><img className="home-img" src="../assets/img/books.png"></img> </NavLink>
        
    </section>
  );
}
        
            
       
   
