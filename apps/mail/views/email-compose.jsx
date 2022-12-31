const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"
import { showSuccessMsg } from "../../../services/event-bus.service.js"



export function EmailCompose() {
    const [mailToSend, setMailToSend] = useState(mailService.getEmptyMail())
    const navigate = useNavigate()
    const { mailId } = useParams()

    // useEffect(() => {
    //     if (!mailId) return
    //     loadCar()
    // }, [])

    // function loadCar() {
    //     carService.get(mailId)
    //         .then((car) => setMailToSend(car))
    //         .catch((err) => {
    //             console.log('Had issues in car details', err)
    //             navigate('/car')
    //         })
    // }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        // value = type === 'number' ? +value : value
        setMailToSend((prevMail) => ({ ...prevMail, [field]: value , inbox: false , sent: true}))
    }

    function onSendMail(ev) {
        ev.preventDefault()
        mailService.save(mailToSend).then((mail) => {
            console.log('mail saved', mail);
            showSuccessMsg('Mail saved!')
            navigate('/mail')
        })
    }
    
    return <section className="email-compose flex justify-center align-center">
   <h1>New Message</h1>
   <form onSubmit={onSendMail}>
   <label htmlFor="to">To: </label>
            <input type="email"
                name="to"
                id="to"
                // placeholder="To"
                // value={carToEdit.vendor}
                onChange={handleChange}
            />
            <hr/>
   <label htmlFor="subject">Subject: </label>
            <input type="text"
                name="subject"
                id="subject"
                // placeholder="To"
                // value={carToEdit.vendor}
                onChange={handleChange}
            />
            <hr/>
   <label htmlFor="body"></label>
            <textarea type="text"
            
                name="body"
                id="body"
                // placeholder="To"
                // value={carToEdit.vendor}
                onChange={handleChange}
            />
            <div>
  <button>Send</button>
  <Link to="/mail">Cancel</Link>
  </div>
   </form>
    </section>

}