function ContentSection({ children }) {
    return (
        <section className="content-section">
            <div className="content-section__body">
                {children}  
            </div>
        </section>
    )
}

export default ContentSection