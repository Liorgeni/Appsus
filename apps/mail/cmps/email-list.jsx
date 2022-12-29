const { Link } = ReactRouterDOM
import { EmailDetails } from '../views/email-details.jsx'

export function EmailList({ mailList, onSetRead }) {
    function setRead(mail) {
        console.log(';mail', mail)
        onSetRead(mail)
    }
    function isRead(mail) {
        if (mail.isRead) {
            return 'selected'
        }
    }
    return (
        <ul className='email-list clean-list flex'>
            {mailList.map((mail) => {
                const readMail = { ...mail, isRead: true }
                return (
                    <li className={`flex align-center ${isRead(mail)}`} key={mail.id}>
                        <Link onClick={() => setRead(readMail)} to={`/mail/details/${mail.id}`}>
                            <span className={`subject-list ${isRead(mail)}`}>{mail.subject}</span> - {mail.body.substring(0, 50)}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )

    // <ul><li><EmailDetails /></li></ul>
}
