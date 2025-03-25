import NavBar from './NavBar';

function NavMenu({ title, columns, rows, links}) {
    let navbarColumns = [];
    for (let i = 0; i < columns; i++) {
        navbarColumns.push(true);
    }

    return (
        <div className={`navmenu navmenu--col-${columns} navmenu--row-${rows}`}>
            {
            navbarColumns.map((el, index) => {
                return <NavBar
                    key={el + index} 
                    direction='vertical'
                    links={links}
                />
            })
            }
        </div>
    );
}

export default NavMenu;