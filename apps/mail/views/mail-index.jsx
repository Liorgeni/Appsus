const { Link, Outlet, useNavigate } = ReactRouterDOM
const { useEffect, useState } = React

import { EmailFilter } from '../cmps/email-filter.jsx'
import { EmailList } from '../cmps/email-list.jsx'
import { mailService } from '../services/mail.service.js'

export function MailIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [mailList, setMailList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        setIsLoading(true)
        mailService.query().then((mails) => {
            setMailList(mails)
            setIsLoading(false)
        })
    }

    function onGoBack() {
        setIsDetailsOpen(false)
        navigate('/mail')
    }

    return (
        <section className='mail-index flex'>
            <section className='mail-index-header'></section>
            <h1>mail app</h1>
            <EmailFilter />
            <section className='mail-index-main flex'>
                <section className='mail-index-side-nav flex'>
                    <Link to='/mail/compose'>
                       
                        <button className='mail-compose-btn flex align-center'> <span class='material-symbols-outlined'>edit</span> Compose</button>
                    </Link>

                    <span className='flex align-center'>
                        <span class='material-symbols-outlined'>inbox</span>Inbox
                    </span>
                    <span className='flex align-center'>
                        <span class='material-symbols-outlined'>delete</span>Trash
                    </span>
                    <span className='flex align-center'>
                        <span class='material-symbols-outlined'>star</span>Starred
                    </span>
                    <span className='flex align-center'>
                        <span class='material-symbols-outlined'>send</span>Sent
                    </span>
                </section>
                <section className='mail-index-list'>
                    {!isLoading && !isDetailsOpen && <EmailList mailList={mailList} setIsDetailsOpen={setIsDetailsOpen} />}
                    {!isLoading && isDetailsOpen && <Outlet />}
                    {isDetailsOpen && <button onClick={onGoBack}>Go Back</button>}
                    {isLoading && <div>Loading..</div>}
                    {!mailList.length && <div>No mails to show..</div>}
                </section>
            </section>
            {/* <div className="nested-route">
            <Outlet />
        </div> */}
        </section>
    )
}

// onClick={setIsDetailsOpen(false)}
