import { getYear } from "date-fns";

function Copyright() {
    const currentYear = getYear(new Date());

    return <p className="copyright">Comet Spaceways {currentYear} - © All rights reserved</p>
}

export default Copyright;