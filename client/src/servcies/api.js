

const API_URL = "http://localhost:8080";

export const getAnalyticsData = async() => {
 try{
    const response = await fetch(`${API_URL}/analytics`);

    if(!response.ok){
        throw new Error(`HTTP error! : ${response.status}`);

    }
    const data = await response.json();
    return data;
 }
 catch(error){
    console.log("Error fetching analytics data :", error);
    return null;
 }
}

