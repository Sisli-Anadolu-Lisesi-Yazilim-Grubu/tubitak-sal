const getMobileOperatingSystem = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent))
        return "Android";
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
        return "iOS";
    else return "unknown";
};

export { getMobileOperatingSystem };