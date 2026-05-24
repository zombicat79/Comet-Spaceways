function ContentSection({ children, bodyModifiers }) {
    let cssClasses = 'content-section__body';
    if (bodyModifiers) bodyModifiers.forEach((el) => cssClasses = cssClasses + ' content-section__body--' + el);
    
    return (
        <section className="content-section">
            <div className={cssClasses}>
                {children}  
            </div>
        </section>
    )
}

export default ContentSection