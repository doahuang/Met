export const fetchSpots = data => $.ajax({
  method: 'GET', url: 'api/spots', data
});

export const fetchSpot = id => $.ajax({
  method: 'GET', url: `api/spots/${id}`
});

export const createSpot = spot => $.ajax({
  method: 'POST', url: 'api/spots', data: { spot: payload(spot) }
});

export const updateSpot = spot => $.ajax({
  method: 'PATCH', url: `api/spots/${spot.id}`, data: { spot: payload(spot) }
});

const payload = spot => ({
  name: spot.name,
  image_url: spot.imageUrl,
  landscape: spot.landscape,
  size: spot.size,
  price: spot.price,
  description: spot.description,
  latitude: spot.latitude,
  longitude: spot.longitude
});
