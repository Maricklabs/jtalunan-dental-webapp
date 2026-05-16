"use client";

import { DirectionsRenderer, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo, useState } from "react";

const clinicLocation = {
  lat: 10.7397,
  lng: 122.5586
};

  const mapContainerClassName =
  "h-[420px] w-full rounded-3xl border border-sand/80 bg-sand/40 shadow-soft";

export default function LocationMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
  const { isLoaded } = useJsApiLoader({
    id: "jt-alunan-map",
    googleMapsApiKey: apiKey
  });

  const center = useMemo(() => clinicLocation, []);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [status, setStatus] = useState<string>("");

  const handleDirections = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported on this device.");
      return;
    }
    if (!isLoaded || !window.google) {
      setStatus("Map is still loading. Try again in a moment.");
      return;
    }

    setStatus("Locating you...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const service = new google.maps.DirectionsService();
        service.route(
          {
            origin,
            destination: clinicLocation,
            travelMode: google.maps.TravelMode.DRIVING
          },
          (result, routeStatus) => {
            if (routeStatus === google.maps.DirectionsStatus.OK && result) {
              setDirections(result);
              setStatus("Route ready. Safe travels!");
            } else {
              setStatus("We could not fetch directions right now.");
            }
          }
        );
      },
      () => {
        setStatus("We could not access your location. Please allow GPS access.");
      }
    );
  };

  if (!apiKey) {
    return (
      <div className="card-shell p-6 text-base text-ink/70">
        Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file to load the
        live map and directions.
      </div>
    );
  }

  if (!isLoaded) {
    return <div className="card-shell p-6 text-base text-ink/70">Loading map...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className="btn-primary" onClick={handleDirections}>
          Get Directions
        </button>
        {status ? <p className="text-sm uppercase tracking-[0.25em] text-olive">{status}</p> : null}
      </div>
      <GoogleMap mapContainerClassName={mapContainerClassName} zoom={14} center={center}>
        <Marker position={clinicLocation} />
        {directions ? <DirectionsRenderer directions={directions} /> : null}
      </GoogleMap>
    </div>
  );
}
