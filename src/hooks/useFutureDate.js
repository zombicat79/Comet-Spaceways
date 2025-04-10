function useFutureDate(type) {
    const presentDate = new Date();
    const dateComponents = {
        day: presentDate.getDate(),
        month: presentDate.getMonth(),
        year: presentDate.getFullYear(),
    }

    const futureDate = `${dateComponents.day}-${dateComponents.month + 1}-${dateComponents.year + 100}`;

    return futureDate;
}

export default useFutureDate;