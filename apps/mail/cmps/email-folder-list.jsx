


export function EmailFolderList({onChangeFilterType}) {

    return <section>
    <button onClick={()=> onChangeFilterType('inbox')}>inbox</button>
    <button onClick={()=> onChangeFilterType('sent')}>sent</button>
    <button onClick={()=> onChangeFilterType('trash')}>trash</button>
    <button onClick={()=> onChangeFilterType('draft')}>draft</button>
    </section>

}