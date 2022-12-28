const { Link } = ReactRouterDOM
import { EmailDetails } from "../views/email-details.jsx";

export function EmailList({mailList, setIsDetailsOpen}) {

    return <ul className="email-list clean-list flex">
    {mailList.map(mail => {   
       return  <li  className="flex align-center" key={mail.id}>  <Link onClick={()=> setIsDetailsOpen(true)}  to={`/mail/details/${mail.id}`}> {mail.subject} - {mail.body.substring(0,50)}</Link></li>
    })}
    
    </ul>
    
    
    // <ul><li><EmailDetails /></li></ul>


}
