const { Link } = ReactRouterDOM

import { EmailApp } from "../cmps/email-app.jsx";

export function MailIndex() {
    return <section>
    <h1>mail app</h1>  
   <EmailApp />
    <Link to="/mail/compose">Compose</Link> 
    </section>
   
}

