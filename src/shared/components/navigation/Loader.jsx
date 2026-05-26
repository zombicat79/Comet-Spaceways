function Loader({ spinner, loadMsg }) {
    return (
        <div className='loader'>
            <img className='loader__spinner' src={spinner ? `/assets/spinners/${spinner}.gif`: '/assets/spinners/spinner.gif'} alt='loader spinner' />
            {loadMsg && <h4 className="loader__msg">{loadMsg}</h4>}
        </div>
    )
}

export default Loader;