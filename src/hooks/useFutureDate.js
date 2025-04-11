function useFutureDate() {
    const presentDate = new Date();
    const dateComponents = {
        day: presentDate.getDate(),
        month: presentDate.getMonth(),
        year: presentDate.getFullYear(),
    }

    const futurizedDate = new Date(`${dateComponents.day}-${dateComponents.month + 1}-${dateComponents.year + 100}`);

    return { futurizedDate, dateComponents };
}

export default useFutureDate;