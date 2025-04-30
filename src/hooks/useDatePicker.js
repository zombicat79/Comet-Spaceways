function useDatePicker(identifier, futurizedDate, dateComponents, searchScope, departureDate, returnDate) {
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
        return new Date(`${dateComponents.month + 1}-${dateComponents.day}-${dateComponents.year + 101}`);
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