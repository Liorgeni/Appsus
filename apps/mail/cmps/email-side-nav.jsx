const { Link } = ReactRouterDOM


export function EmailSideNav({onChangeFilterType}) {

    return <section>
    <Link to='/mail/compose'>
                       
                       <button className='mail-compose-btn flex align-center'> <span class='material-symbols-outlined'>edit</span> Compose</button>
                   </Link>

                   <Link onClick={()=> onChangeFilterType('inbox')} to='/mail' className="side-nav-btn"><span className='flex align-center'><span class='material-symbols-outlined'>inbox</span>Inbox</span></Link>
                   <Link onClick={()=> onChangeFilterType('trash')} to='/mail' className="side-nav-btn"><span className='flex align-center'><span class='material-symbols-outlined'>delete</span>Trash</span></Link>
                   <Link to='/mail' className="side-nav-btn"><span className='flex align-center'><span class='material-symbols-outlined'>star</span>Starred</span></Link>
                   <Link onClick={()=> onChangeFilterType('sent')} to='/mail' className="side-nav-btn"><span className='flex align-center'><span class='material-symbols-outlined'>send</span>Sent</span></Link>


    </section>

}


