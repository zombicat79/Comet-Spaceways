function SearchTool({ id, onFilter }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const queryTerm = (formData.get("term"));
        onFilter(queryTerm.toLocaleLowerCase());
    }

    return (
        <form id={`${id}-search`} className="form form--flex-row searchtool" onSubmit={(e) => handleSubmit(e)}>
            <input className="searchtool__field searchtool__field--left field field--contrast" type="text" name="term" placeholder="🔎" />
            <button className="searchtool__btn searchtool__btn--right btn">Go &rarr;</button>
        </form>
    )
}

export default SearchTool;