const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0e92bcf687b3f7e83dc0ba597c81880c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;