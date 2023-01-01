const { Link, Outlet, useNavigate } = ReactRouterDOM
const { useEffect, useState } = React

import { EmailFilter } from '../cmps/email-filter.jsx'
import { EmailList } from '../cmps/email-list.jsx'
import { EmailOptions } from '../cmps/email-options.jsx'
import { EmailSideNav } from '../cmps/email-side-nav.jsx'
import { mailService } from '../services/mail.service.js'

export function MailIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [mailList, setMailList] = useState([])
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [folderSelect, setFolderSelect] = useState('inbox')
    const [unreadCounter, setUnreadCounter] = useState(onUnreadCount())

    const navigate = useNavigate()

    useEffect(() => {
        loadMails()
    }, [filterBy, isDetailsOpen, unreadCounter])

    function loadMails() {
        setIsLoading(true)
        mailService.query(filterBy).then((mailList) => {
            setMailList(mailList)
            setIsLoading(false)
        })
    }

    function onSetRead(mail) { 
        mailService.save(mail).then(() => {
            setIsDetailsOpen(true)
            onUnreadCount()
        })
    }
    function onChangeFolder(mailId, changeOption) {
        
        mailService.get(mailId).then((mail) => {
            let readMail
            if (!mail.starred) {
                readMail = { ...mail, ...changeOption }
            } else {
                readMail = { ...mail, starred: false }
            }
            mailService.save(readMail).then(() => {
                setIsDetailsOpen(false)
                onUnreadCount()
            })
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onGoBack() {
        setIsDetailsOpen(false)
        navigate('/mail')
    }

    function onChangeFilterType(filterType) {
        onSetFilter((prevFilter) => ({ ...prevFilter, status: filterType }))
    }
function onUnreadCount(){
mailService.getUnreadCount().then(count=> {
    setUnreadCounter(prev=> prev = count)
})
}
    return (
        <section className='mail-index flex'>
            <section className='mail-index-header'></section>
            <div className='logo'>
                <h1>Mail app</h1>
            </div>
            <EmailFilter onSetFilter={onSetFilter} />
            <section className='mail-index-main flex'>
                <section className='mail-index-side-nav flex'>
                    <EmailSideNav onChangeFilterType={onChangeFilterType} unreadCounter={unreadCounter} onUnreadCount={onUnreadCount}/>
                </section>
                <section className='mail-index-list'>
                    {!isLoading && !isDetailsOpen && <EmailList mailList={mailList} onSetRead={onSetRead} />}
                    {!isLoading && isDetailsOpen && <EmailOptions onChangeFolder={onChangeFolder} />}
                    {!isLoading && isDetailsOpen && <Outlet />}
                    {isDetailsOpen && <button onClick={onGoBack}>Go Back</button>}
                    {isLoading && <div>Loading..</div>}
                    {!mailList.length && <div>No mails to show..</div>}
                </section>
            </section>
        </section>
    )
}


