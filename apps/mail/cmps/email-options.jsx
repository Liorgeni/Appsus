const { useParams, useNavigate, Link } = ReactRouterDOM
import { mailService } from "../services/mail.service.js"


export function EmailOptions({onChangeFolder}) {
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
        const changeOption = {isRead: false}
        onChangeFolder(mailId, changeOption)         
        }

    function setTrash(mailId){     
        const changeOption = {inbox: false, trash: true }
        onChangeFolder(mailId, changeOption)         
        }

    function setInbox(mailId){      
        const changeOption = {inbox: true, trash: false}
        onChangeFolder(mailId, changeOption)         
        }

    function setStarred(mailId){      
        const changeOption = {starred: true}
        onChangeFolder(mailId, changeOption)         
        }
        
    
    return <section>
    <span onClick={()=> setUnread(mailId)} title="Mark as unread" class="material-symbols-outlined">
mark_email_unread
</span>
<span onClick={()=> setTrash(mailId)} title="Move to trash" class='material-symbols-outlined'>delete</span>
<span onClick={()=> setInbox(mailId)} title="Move to inbox" class='material-symbols-outlined'>inbox</span>
<span onClick={()=> setStarred(mailId)} title="Mark/Unmark as starred" class='material-symbols-outlined'>star</span>
    </section>

}
