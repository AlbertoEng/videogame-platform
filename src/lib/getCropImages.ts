const getCropImages = (imageUrl: string) => {
    console.log(imageUrl)
    const target = 'media/';
    const targetIndex = imageUrl.indexOf(target) + target.length;
    const sizeImage = 'crop/600/400/';
    const endpointCrop = imageUrl.slice(0, targetIndex) + sizeImage + imageUrl.slice(targetIndex);
    console.log(endpointCrop)
    return endpointCrop;
};

export default getCropImages;
