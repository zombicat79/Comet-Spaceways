function PageRibbon({ color = "transparent", children }) {
    return (
        <div className={`ribbon ribbon--${color}`}>
            {children}
        </div>
    )
}

export default PageRibbon