const { useParams, useNavigate, Link } = ReactRouterDOM
import { mailService } from "../services/mail.service.js"


export function EmailOptions({onSetUnread}) {
    // const [mail, setMail] = useState(null)
    // const { mailId } = useParams()
    // function loadMail() {
    //     mailService.get(mailId)
    //         .then((mail) => setMail(mail))
    //         .catch((err) => {
    //             console.log('Had issues in mail details', err)
    //             showErrorMsg('Cannot load mail')
    //             navigate('/mail')
    //         })
    //     }
    // const readMail = { ...mail, isRead: true }
    return <section>
    <span onClick={()=> onSetUnread()} title="Mark as unread" class="material-symbols-outlined">
mark_email_unread
</span>
<span title="Move to trash" class='material-symbols-outlined'>delete</span>


    </section>

}