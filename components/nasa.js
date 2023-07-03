import https from 'https';


export const getAsteroids = (startDate, endDate, apiKey, req, res) => {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;

    https.get(url, (data) => {
    let json = '';
    data.on('data', (chunk) => {
    json += chunk;
    });
    data.on('end', () => {
        json = JSON.parse(json);
        const asteroidData = parseAsteroidData(json);
        const plantilla = generateAsteroidPlantilla(asteroidData);
        res.end(plantilla);
    });
    }).on('error', (err) => {
    console.error('Error al obtener los datos de la API de la NASA:', err.message);
    res.statusCode = 500;
    res.end('Error al obtener los datos de la API de la NASA');
    });
};

const parseAsteroidData = (data) => {
    return data;
};

const generateAsteroidPlantilla = (data) => {
    let plantilla = `
        <h1>Datos de los asteroides:</h1>
            <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Diámetro (metros)</th>
                    <th>Velocidad (km/h)</th>
                    <th>Distancia (km)</th>
                </tr>
            </thead>
            <tbody>
    `;

    data.near_earth_objects.forEach((asteroid) => {

        plantilla += `
        <tr>
            <td>${asteroid.name}</td>
            <td>${asteroid.estimated_diameter.meters.estimated_diameter_max}</td>
            <td>${asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour}</td>
            <td>${asteroid.close_approach_data[0].miss_distance.kilometers}</td>
        </tr>
        `;
    });

    plantilla += `
        </tbody>
    </table>
    `;

    return plantilla;
    };
