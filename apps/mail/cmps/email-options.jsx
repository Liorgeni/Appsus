const { useParams, useNavigate, Link } = ReactRouterDOM
import { mailService } from "../services/mail.service.js"


export function EmailOptions({onSetUnread}) {
    // const [mail, setMail] = useState(null)
    const navigate = useNavigate()
    const { mailId } = useParams()

    // function loadMail() {
        // mailService.get(mailId)
        //     .then((mail) => setMail(mail))
        //     .catch((err) => {
        //         console.log('Had issues in mail details', err)
        //         showErrorMsg('Cannot load mail')
        //         navigate('/mail')
        //     })
        // }
    // const readMail = { ...mail, isRead: true }
    function setUnread(mailId){      
            onSetUnread(mailId)         
        }
        
    
    return <section>
    <span onClick={()=> setUnread(mailId)} title="Mark as unread" class="material-symbols-outlined">
mark_email_unread
</span>
<span title="Move to trash" class='material-symbols-outlined'>delete</span>


    </section>

}