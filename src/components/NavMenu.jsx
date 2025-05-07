import NavBar from './NavBar';

function NavMenu({ title, columns, rows, links, decoration, tooling }) {
    let navbarColumns = [];
    for (let i = 0; i < columns; i++) {
        navbarColumns.push(true);
    }

    let distributedLinks = {};

    let tempLinks = [...links];
    for (let i = 0; i < columns; i++) {
        distributedLinks[i] = [];
        tempLinks.forEach((el, index) => {
            if (index < rows) {
                distributedLinks[i].push(el);
            }
        });
        tempLinks.splice(tempLinks[0], rows);
    }

    return (
        <div className="navmenu">
            <h3 className="navmenu__title">{title}</h3>
            <div className="navmenu__column">
                {
                navbarColumns.map((el, index) => {
                    return <NavBar
                        key={el + index} 
                        direction='vertical'
                        links={distributedLinks[index]}
                        decoration={decoration}
                        tooling={tooling}
                    />
                })
                }
            </div>
        </div>
    );
}

export default NavMenu;