const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import {mailService} from "../services/mail.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"


export function EmailDetails({setIsDetailsOpen}) {
    const [mail, setMail] = useState(null)
    const [nextMailId, setNextMailId] = useState(null)
    const { mailId } = useParams()
    const navigate = useNavigate()
console.log('mailIdmailId', mailId);
    useEffect(() => {
        loadMail()
    }, [mailId])

    function loadMail() {
        mailService.get(mailId)
            .then((mail) => setMail(mail))
            .catch((err) => {
                console.log('Had issues in mail details', err)
                showErrorMsg('Cannot load mail')
                navigate('/mail')
            })

        mailService.getNextMailId(mailId)
            .then(setNextMailId)
    }

    function onGoBack() {
        setIsDetailsOpen(false)
        navigate('/mail')
    }

if (!mail) return <div>Loading...</div>
    return <section className="mail-details">
        <h1>{mail.subject}</h1>
        <p>{mail.body}</p>
        {/* <button onClick={onGoBack}>Go Back</button> */}
        <hr />
        <Link to={`/mail/details/${nextMailId}`}>Next Email</Link>

    </section>
}

