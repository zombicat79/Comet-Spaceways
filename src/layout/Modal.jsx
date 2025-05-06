function Modal({ modalShown }) {
    return (
        <div className={modalShown ? 'modal modal--appearing modal--shine-in' : 'modal modal--disappearing'}>
            Hello
        </div>
    )
}

export default Modal;