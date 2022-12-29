const { useState, useEffect, useRef } = React

import { EmailFolderList } from "./email-folder-list.jsx";
import { mailService } from "../services/mail.service.js";


export function EmailFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(mailService.getDefaultFilter())
    // const elInputRef = useRef(null)

    // useEffect(() => {
    //     elInputRef.current.focus()
    // }, [])

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        // update father cmp that filters change on submit
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    function onChangeFilterType(filterType){
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, status: filterType }))
        onSetFilter(filterByToEdit)
     }

    return <section className="filter-mails">
    Filter!
    <EmailFolderList onChangeFilterType={onChangeFilterType}/>
    <form onSubmit={onSubmitFilter}>
            <label htmlFor="search"></label>
            <input type="text"
                id="search"
                name="txt"
                placeholder="Search mail"
                value={filterByToEdit.txt}
                onChange={handleChange}
                // ref={elInputRef}
            />

            {/* <label htmlFor="minSpeed">Min speed:</label>
            <input type="number"
                id="minSpeed"
                name="minSpeed"
                placeholder="By min speed"
                value={filterByToEdit.minSpeed}
                onChange={handleChange}
            /> */}

            <button><span class="material-symbols-outlined">search</span></button>
        </form>

    </section>


    

}