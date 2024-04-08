
export const placesData = await fetch('/resources/places.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    return data;
})
.catch(error => console.error('Error reading JSON file:', error));