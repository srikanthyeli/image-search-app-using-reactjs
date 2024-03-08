// src/utils/visionAPI.js

import axios from 'axios';

const API_KEY = 'AIzaSyDWDxJd4aGI5VwgbhZOJwftzyJWeEF4Gu8';
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

export const analyzeImage = async (image) => {
    let formData = new FormData();
    formData.append('image', image);

    const requestBody = {
        requests: [
            {
                image: {
                    content: image
                },
                features: [
                    { type: 'LABEL_DETECTION', maxResults: 5 }
                ]
            }
        ]
    };

    try {
        const response = await axios.post(API_URL, requestBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error calling the Vision API", error);
        throw error;
    }
};
