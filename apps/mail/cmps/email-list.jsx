const { Link } = ReactRouterDOM
import { EmailDetails } from "../views/email-details.jsx";

export function EmailList({mailList}) {

    return <ul className="mail-list">
    {mailList.map(mail => {   
       return  <li key={mail.id}>  <Link to={`/mail/details/${mail.id}`}> {mail.subject} - {mail.body.substring(0,50)}</Link></li>
    })}
    
    </ul>
    
    
    // <ul><li><EmailDetails /></li></ul>


}
