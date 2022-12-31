const { Link } = ReactRouterDOM

export function EmailFolderList({ onChangeFilterType }) {
    return (
        <section className='email-folder-list flex wrap'>
            <Link onClick={() => onChangeFilterType('inbox')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>inbox</span>
                </span>
            </Link>
            <Link onClick={() => onChangeFilterType('trash')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>delete</span>
                </span>
            </Link>
            <Link onClick={() => onChangeFilterType('starred')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>star</span>
                </span>
            </Link>
            <Link onClick={() => onChangeFilterType('sent')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>send</span>
                </span>
            </Link>
            <Link onClick={() => onChangeFilterType('draft')} to='/mail' className='search-btn'>
                <span className='flex align-center'>
                    <span class='material-symbols-outlined'>draft</span>
                </span>
            </Link>
        </section>
    )
}
