
export const placesData = await fetch('https://nijin-server.vercel.app/api/explorer')
.then(response => response.json())
.then(data => {
    return data;
})
.catch(error => console.error('Error reading JSON file:', error));