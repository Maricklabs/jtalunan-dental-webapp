"use client";

import { MapContainer, Marker, Polyline, Popup, TileLayer, Tooltip, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";

const clinicLocation = {
  lat: 10.694158551670848,
  lng: 122.48035525901
};

const mapContainerClassName =
  "h-[420px] w-full rounded-3xl border border-sand/80 bg-sand/40 shadow-soft";

const clinicLatLng: LatLngTuple = [clinicLocation.lat, clinicLocation.lng];

type MapAutoFitProps = {
  userLocation: LatLngTuple | null;
  route: LatLngTuple[];
};

function MapAutoFit({ userLocation, route }: MapAutoFitProps) {
  const map = useMap();

  useEffect(() => {
    if (route.length > 0) {
      map.fitBounds(route, { padding: [40, 40] });
      return;
    }

    if (userLocation) {
      map.fitBounds([userLocation, clinicLatLng], { padding: [40, 40] });
    }
  }, [map, route, userLocation]);

  return null;
}

export default function LocationMap() {
  const [userLocation, setUserLocation] = useState<LatLngTuple | null>(null);
  const [status, setStatus] = useState<string>("");
  const [route, setRoute] = useState<LatLngTuple[]>([]);

  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
    });
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported on this device.");
      return;
    }

    setStatus("Tracking your location...");
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        setStatus("We could not access your location. Please allow GPS access.");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 10000
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  useEffect(() => {
    if (!userLocation) {
      return;
    }

    const controller = new AbortController();

    const fetchRoute = async () => {
      try {
        setStatus("Updating route...");
        const response = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${userLocation[1]},${userLocation[0]};${clinicLocation.lng},${clinicLocation.lat}?overview=full&geometries=geojson`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch route");
        }

        const data = await response.json();
        const coordinates: [number, number][] =
          data?.routes?.[0]?.geometry?.coordinates ?? [];
        const mappedRoute = coordinates.map(
          ([lng, lat]) => [lat, lng] as LatLngTuple
        );

        setRoute(mappedRoute);
        setStatus("Route updated.");
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          return;
        }
        setRoute([]);
        setStatus("We could not fetch a route right now.");
      }
    };

    fetchRoute();

    return () => {
      controller.abort();
    };
  }, [userLocation]);

  return (
    <div className="space-y-4">
      {status ? <p className="text-sm uppercase tracking-[0.25em] text-olive">{status}</p> : null}
      <MapContainer
        className={mapContainerClassName}
        center={clinicLatLng}
        zoom={16}
        scrollWheelZoom
      >
        <MapAutoFit userLocation={userLocation} route={route} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={clinicLatLng}>
          <Popup>JT Alunan Dental Clinic</Popup>
          <Tooltip direction="top" offset={[0, -18]} permanent>
            Clinic Location
          </Tooltip>
        </Marker>
        {userLocation ? (
          <Marker position={userLocation}>
            <Popup>Your current location</Popup>
            <Tooltip direction="top" offset={[0, -18]} permanent>
              Your Location
            </Tooltip>
          </Marker>
        ) : null}
        {route.length > 0 ? (
          <Polyline
            positions={route}
            pathOptions={{ color: "#7A6F1D", weight: 6, opacity: 0.85 }}
          />
        ) : null}
      </MapContainer>
    </div>
  );
}
