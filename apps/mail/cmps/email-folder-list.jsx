const { Link } = ReactRouterDOM

export function EmailFolderList({ onChangeFilterType }) {
    return (
        <section className='email-folder-list flex wrap'>
        
            <Link title='filter as read' onClick={() => onChangeFilterType('read')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>mark_email_read</span>
                </span>
            </Link>
            <Link title='filter as unread' onClick={() => onChangeFilterType('unread')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>mark_email_unread</span>
                </span>
            </Link>
            <Link title='Go to inbox' onClick={() => onChangeFilterType('inbox')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>inbox</span>
                </span>
            </Link>
            <Link title='Go to trash' onClick={() => onChangeFilterType('trash')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>delete</span>
                </span>
            </Link>
            <Link title='Go to starred' onClick={() => onChangeFilterType('starred')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>star</span>
                </span>
            </Link>
            <Link title='Go to sent' onClick={() => onChangeFilterType('sent')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>send</span>
                </span>
            </Link>
            <Link title='Go to draft' onClick={() => onChangeFilterType('draft')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>draft</span>
                </span>
            </Link>
        </section>
    )
}
