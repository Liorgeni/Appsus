



export function EmailCompose() {

    return <section>
   <h1>New Message</h1>
   <form>
   <label htmlFor="to">To: </label>
            <input type="text"
                name="mailAddress"
                id="to"
                // placeholder="To"
                // value={carToEdit.vendor}
                // onChange={handleChange}
            />
            <hr/>
   <label htmlFor="subject">Subject: </label>
            <input type="text"
                name="title"
                id="subject"
                // placeholder="To"
                // value={carToEdit.vendor}
                // onChange={handleChange}
            />
            <hr/>
   <label htmlFor="txt"></label>
            <textarea type="text"
            rows="4" cols="50"
                name="description"
                id="txt"
                // placeholder="To"
                // value={carToEdit.vendor}
                // onChange={handleChange}
            />
  
   </form>
    </section>

}