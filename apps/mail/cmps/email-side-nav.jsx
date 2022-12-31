const { Link } = ReactRouterDOM
const { useEffect, useState } = React

export function EmailSideNav({ onChangeFilterType, unreadCounter }) {
    const [select, setSelect] = useState({ inbox: true, draft: false, trash: false, starred: false, sent: false })


    function setSelectedFolder(folder) {
        setSelect((prev) => {
            if (folder === 'inbox') {
                return (prev = { inbox: true, draft: false, trash: false, starred: false, sent: false })
            } else if (folder === 'trash') {
                return (prev = { inbox: false, draft: false, trash: true, starred: false, sent: false })
            } else if (folder === 'starred') {
                return (prev = { inbox: false, draft: false, trash: false, starred: true, sent: false })
            } else if (folder === 'draft') {
                return (prev = { inbox: false, draft: true, trash: false, starred: false, sent: false })
            } else if (folder === 'sent') {
                return (prev = { inbox: false, draft: false, trash: false, starred: false, sent: true })
            }
        })
        changeFilterType(folder)
    }
    function changeFilterType(folder) {
        onChangeFilterType(folder)
    }
    return (
        <section>
            <Link to='/mail/compose'>
                <button className='mail-compose-btn flex align-center'>
                    {' '}
                    <span class='material-symbols-outlined'>edit</span> Compose
                </button>
            </Link>
            {console.log('select', select)}
            <Link onClick={() => setSelectedFolder('inbox')} to='/mail' className='side-nav-btn'>
                <span className={`flex space-between align-center ${select.inbox ? 'selected' : ''}`}>
                    <span class='material-symbols-outlined'>inbox</span><span>Inbox</span><span>{unreadCounter}</span>
                </span>
            </Link>
            <Link onClick={() => setSelectedFolder('trash')} to='/mail' className='side-nav-btn'>
                <span className={`flex align-center ${select.trash ? 'selected' : ''}`}>
                    <span class='material-symbols-outlined'>delete</span>Trash
                </span>
            </Link>
            <Link onClick={() => setSelectedFolder('starred')} to='/mail' className='side-nav-btn'>
                <span className={`flex align-center ${select.starred ? 'selected' : ''}`}>
                    <span class='material-symbols-outlined'>star</span>Starred
                </span>
            </Link>
            <Link onClick={() => setSelectedFolder('sent')} to='/mail' className='side-nav-btn'>
                <span className={`flex align-center ${select.sent ? 'selected' : ''}`}>
                    <span class='material-symbols-outlined'>send</span>Sent
                </span>
            </Link>
            <Link onClick={() => setSelectedFolder('draft')} to='/mail' className='side-nav-btn'>
                <span className={`flex align-center ${select.draft ? 'selected' : ''}`}>
                    <span class='material-symbols-outlined'>draft</span>Draft
                </span>
            </Link>
        </section>
    )
}
