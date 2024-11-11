const API_KEY = '47015635-abc1d6fc17d6df7da0f15a0aa';  

export const fetchImages = async (query) => {  
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
    
    try {  
        const response = await fetch(url);  
        if (!response.ok) {  
            throw new Error('Network response was not ok');  
        }  
        const data = await response.json();  
        return data; 
    } catch (error) {  
        throw error;  
    }  
};

const getImages = async (query) => {
    try {
        const imagesData = await fetchImages(query);
        const imageHits = imagesData.hits; // Дістаємо масив зображень
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};

getImages('nature'); 