const { Link } = ReactRouterDOM
const { useEffect, useState } = React

import { EmailFilter } from "../cmps/email-filter.jsx"
import { EmailList } from "../cmps/email-list.jsx"
import {mailServise} from "../services/mail.service.js"



export function MailIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [mailList, setMailList] = useState([])


    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        setIsLoading(true)
        mailServise.query()
            .then((mails) => {
                setMailList(mails)
                setIsLoading(false)
            })
    }
    


    return <section className="mail-index">
    <h1>mail app</h1>  
    <EmailFilter />
    <EmailList mailList={mailList}/>
    <Link to="/mail/compose">Compose</Link> 
    </section>
   
}




