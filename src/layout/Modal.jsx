import { useContext } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

function Modal({ modalShown, modalClass, content, width, height }) {
    const { layoutState, dispatch } = useContext(LayoutContext);
    
    function deployGenericClasses() {
        return modalShown ? `modal__content modal__content--default modal__content--shine-in modal__content--${width}-width modal__content--${height}-height` 
        : `modal__content modal__content--default modal__content--shine-out modal__content--${width}-width modal__content--${height}-height`
    }

    function deployFlightPreviewClasses() {
        return modalShown ? `modal__content modal__content--flight-preview modal__content--${width}-width modal__content--${height}-height` 
        : `modal__content modal__content--flight-preview modal__content--${width}-width modal__content--${height}-height`
    }

    function closeModal() {
        dispatch({ type: 'toggle/modal' });
        setTimeout(() => {
            dispatch({ type: 'toggle/scroll' });
            dispatch({ type: 'fill/modal', payload: null })
        }, 1000);
    }
    
    return (
      <div
        className={
          modalShown === null
            ? 'modal--not-rendered' :
          modalShown ? `modal modal--${width}-width modal--${width}-height modal--appearing`
            : `modal modal--${width}-width modal--${width}-height modal--disappearing`
        }
      >
        <div
          className={
            modalClass === "flight-preview"
              ? deployFlightPreviewClasses()
              : deployGenericClasses()
          }
        >
          {layoutState.viewportWidth <= 600 && (
            <header className="modal__header">
              <svg
                className="modal__closer"
                onClick={closeModal}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                    fill={layoutState.modalClass === 'flight-preview' ? "#121212" : "#e3f6f5"}
                  ></path>
                </g>
              </svg>
            </header>
          )}
          {content}
        </div>
      </div>
    );
}

export default Modal;