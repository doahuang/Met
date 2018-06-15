# Met

![Met](https://raw.githubusercontent.com/doahuang/Met/master/public/met_logo.png)

Met, Middle-earth travel. Built with React/Redux.

__[Live](https://met-app.herokuapp.com/#/)__

__[Wiki](../../wiki)__

## Table of Contents

+ [Introduction](#introduction)
+ [Features](#features)
+ [Technologies](#technologies)
+ [Challenges](#challenges)
+ [Code snippets](#code-snippets)
+ [Acknowledgments](#acknowledgments)

## Introduction

Met, aka Middle-earth travel, is a clone of Airbnb.

It is a travel booking website built with React/Redux that allows users to browse, book, and review best places to visit in the Middle-earth.

## Features

A few of the things you can do with Met:

+ View all spots and single spot listing
+ Create and edit your spot listing
+ Create, view, and delete your bookings
+ Add and delete your reviews
+ Search by spot name, location, landscape, etc.
+ Filter by map bounds
+ Mobile responsive design

## Technologies

+ [React](https://reactjs.org/)
+ [Redux](https://redux.js.org/)
+ [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
+ [PgSearch](https://github.com/Casecommons/pg_search)
+ [React Rating](https://www.npmjs.com/package/react-rating)

## Challenges

#### Google Maps and markers

To create or edit a booking, the user will drag and drop the marker on the map to pin or adjust the spot.

As the map component is independent of other representational parts, I pass a callback to marker and invoke it to close over the spot and marker's coordinates in 'dragend' event listener, then update spot's latitude and longitude by the coordinates.

#### Mobile responsive design

To enable smooth transition and responsive design, I apply multiple media rules to render layouts by viewport and resolution for different devices.

## Code snippets

```javascript
componentDidMount() {
  let { center, zoom, gestureHandling, draggable, spots } = this.props;

  const mapOptions = {
    center,
    zoom,
    gestureHandling,
    clickableIcons: false
  };

  this.map = new google.maps.Map(this.refs.map, mapOptions);
  this.MarkerManager = new MarkerManager({
    map: this.map,
    draggable,
    handleMarkerDrag: this.handleMarkerDrag.bind(this)
  });

  this.registerListeners();
  this.MarkerManager.updateMarkers(spots);
}
```

```javascript
updateMarkers(spots) {
  const spotsObj = {};
  spots.forEach(spot => spotsObj[spot.id] = spot);

  spots.filter(spot => !this.markers[spot.id])
    .forEach(spot => this.createMarkerFromSpot(spot));

  Object.values(this.markers)
    .filter(marker => !spotsObj[marker.spotId])
    .forEach(marker => this.removeMarker(marker));
}
```

## Acknowledgments

Thanks to [@niartenyaw](https://github.com/niartenyaw) [@mwojick](https://github.com/mwojick) [@cjthom03](https://github.com/cjthom03) [@ThinkSalat](https://github.com/ThinkSalat) for help during the project.
