function Modal({ modalShown, content }) {
    return (
        <div className={modalShown ? 'modal modal--appearing' : modalShown === null ? 'modal' : 'modal modal--disappearing'}>
            <div className={modalShown ? 'modal__content modal__content--shine-in' : 'modal__content modal__content--shine-out'}>
                {content}
            </div>
        </div>
    )
}

export default Modal;