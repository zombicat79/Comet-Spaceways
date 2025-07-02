function Modal({ modalShown, modalClass, content, width, height }) {
    
    function deployGenericClasses() {
        return modalShown ? `modal__content modal__content--default modal__content--shine-in modal__content--${width}-width modal__content--${height}-height` 
        : `modal__content modal__content--default modal__content--shine-out modal__content--${width}-width modal__content--${height}-height`
    }

    function deployFlightPreviewClasses() {
        return modalShown ? `modal__content modal__content--flight-preview modal__content--${width}-width modal__content--${height}-height` 
        : `modal__content modal__content--flight-preview modal__content--${width}-width modal__content--${height}-height`
    }
    
    return (
        <div className={modalShown ? `modal modal--${width}-width modal--${width}-height modal--appearing` : modalShown === null ? `modal` : `modal modal--disappearing `}>
            <div className={modalClass === 'generic' ? deployGenericClasses() : deployFlightPreviewClasses()}>
                {content}
            </div>
        </div>
    )
}

export default Modal;