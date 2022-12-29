const { Link } = ReactRouterDOM


export function EmailSideNav() {

    return <section>
    <Link to='/mail/compose'>
                       
                       <button className='mail-compose-btn flex align-center'> <span class='material-symbols-outlined'>edit</span> Compose</button>
                   </Link>

                   <Link to='/mail' className="side-nav-btn"><span className='flex align-center'><span class='material-symbols-outlined'>inbox</span>Inbox</span></Link>
                   <Link to='/mail' className="side-nav-btn"><span className='flex align-center'><span class='material-symbols-outlined'>delete</span>Trash</span></Link>
                   <Link to='/mail' className="side-nav-btn"><span className='flex align-center'><span class='material-symbols-outlined'>star</span>Starred</span></Link>
                   <Link to='/mail' className="side-nav-btn"><span className='flex align-center'><span class='material-symbols-outlined'>send</span>Sent</span></Link>


    </section>

}