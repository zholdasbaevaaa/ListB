let ads = [];

export const fetchAds = () => {
    return new Promise(resolve => {
        resolve(ads);
    });
};

export const addAd = (text) => {
    return new Promise(resolve => {
        const newAd = {
            id: new Date().getTime(),
            text
        };
        ads.push(newAd);
        resolve(newAd);
    });
};

export const deleteAd = (id) => {
    return new Promise(resolve => {
        ads = ads.filter(ad => ad.id !== id);
        resolve();
    });
};
