function Loader({ loadMsg }) {
    return (
        <div className='loader'>
            <img className='loader__spinner' src='./../../public/assets/spinners/spinner.gif' alt='loader spinner' />
            {loadMsg && <h4 className="loader__msg">{loadMsg}</h4>}
        </div>
    )
}

export default Loader;