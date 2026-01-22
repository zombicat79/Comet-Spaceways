function SearchTool({ onFilter }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const queryTerm = (formData.get("term"));
        onFilter(queryTerm.toLocaleLowerCase());
    }

    return (
        <form id="form" className="searchtool" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="term" />
        </form>
    )
}

export default SearchTool;