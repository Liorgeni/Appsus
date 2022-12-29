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

    const navigate = useNavigate()

    useEffect(() => {
        loadMails()
    }, [filterBy,isDetailsOpen])

    function loadMails() {
        setIsLoading(true)
        mailService.query(filterBy).then((mailList) => {
            setMailList(mailList)
            setIsLoading(false)
        // mailService.query().then((mails) => {
        //     setMailList(mails)
        //     setIsLoading(false)
        })
    }

    function onSetRead(mail){
        setIsDetailsOpen(true)
        mailService.save(mail)  
    }
    function onSetUnread(mail){
        setIsDetailsOpen(false)
        mailService.save(mail)  
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onGoBack() {
        setIsDetailsOpen(false)
        navigate('/mail')
    }

    function onChangeFilterType(filterType){
        onSetFilter((prevFilter) => ({ ...prevFilter, status: filterType }))
     }

    return (
        <section className='mail-index flex'>
            <section className='mail-index-header'></section>
            <h1>mail app</h1>
            <EmailFilter onSetFilter={onSetFilter}/>
            <section className='mail-index-main flex'>
                <section className='mail-index-side-nav flex'>
                <EmailSideNav onChangeFilterType={onChangeFilterType}/>                
                </section>
                <section className='mail-index-list'>
                    {!isLoading && !isDetailsOpen && <EmailList mailList={mailList} onSetRead={onSetRead} />}
                    {!isLoading && isDetailsOpen && <EmailOptions onSetUnread={onSetUnread}/>}
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
