import { addYears } from "date-fns";

function useDatePicker(identifier, futurizedDate, searchScope, departureDate, returnDate) {
    if (!searchScope) return { minDate: null, maxDate: null, rangeStartDate: null, rangeEndDate: null };
    if (identifier !== 'Departure-Date' && identifier !== 'Return-Date') return { minDate: null, maxDate: null, rangeStartDate: null, rangeEndDate: null };
    
    function determineMinDate() {
        if (identifier === 'Departure-Date') {
            return futurizedDate;
        }
        if (identifier === 'Return-Date') {
            return departureDate || futurizedDate;
        }
    }

    function determineMaxDate() {
        return addYears(new Date(), 101);
    }

    function determineRangeStartDate() {
        if (searchScope === '🔄 Round Trip') {
            return departureDate || futurizedDate;
        } else {
            return null;
        }
    }

    function determineRangeEndDate() {
        if (searchScope === '🔄 Round Trip') {
            return returnDate || null;
        } else {
            return null;
        }
    }

    return { minDate: determineMinDate(), maxDate: determineMaxDate(), rangeStartDate: determineRangeStartDate(), rangeEndDate: determineRangeEndDate() }
}

export default useDatePicker;