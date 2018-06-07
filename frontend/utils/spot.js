export const fetchSpots = () => $.ajax({
  method: 'GET', url: 'api/spots'
});

export const fetchSpot = id => $.ajax({
  method: 'GET', url: `api/spots/${id}`
});

let randomFloat = 100 * Math.random();

export const createSpot = spot => {
  let imageUrl = `https://picsum.photos/1600/1200/?image=${spot.imageUrl}`;
  const newSpot = {
    name: spot.name,
    image_url: imageUrl,
    latitude: randomFloat,
    longitude: randomFloat,
    landscape: spot.landscape,
    size: spot.size,
    price: spot.price,
    description: spot.description
  };
  return $.ajax({
    method: 'POST', url: 'api/spots', data: { spot: newSpot }
  });
}

export const updateSpot = spot => $.ajax({
  method: 'PATCH', url: `api/spots/${spot.id}`, data: { spot }
});
