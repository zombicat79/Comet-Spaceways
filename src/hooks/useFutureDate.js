import { addYears } from "date-fns";

function useFutureDate() {
    const futurizedDate = addYears(new Date(), 100);
    return { futurizedDate };
}

export default useFutureDate;