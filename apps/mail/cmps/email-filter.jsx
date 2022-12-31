const { useState, useEffect, useRef } = React
const { Link } = ReactRouterDOM
import { EmailFolderList } from './email-folder-list.jsx'
import { mailService } from '../services/mail.service.js'

export function EmailFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(mailService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    function onChangeFilterType(filterType) {
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, status: filterType }))
        onSetFilter(filterByToEdit)
    }

    return (
        <section className='filter-mails flex justify-center align-center'>
            <EmailFolderList onChangeFilterType={onChangeFilterType} />

            <button className='search-btn'>
                <span class='material-symbols-outlined'>search</span>
            </button>
            <Link className='filter-compose' to='/mail/compose'>
                <button className='mail-compose-btn flex align-center'>
                    {' '}
                    <span class='material-symbols-outlined'>edit</span> Compose
                </button>
            </Link>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor='search'></label>
                <input type='text' id='search' name='txt' placeholder='Search mail' value={filterByToEdit.txt} onChange={handleChange} className='search-box' />
            </form>
        </section>
    )
}
