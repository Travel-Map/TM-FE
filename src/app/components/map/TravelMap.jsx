"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const apiKey = process.env.API_KEY;
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;

export default function TravelMap() {
  const [state, setState] = useState({
    center: {
      lat: 0,
      lng: 0,
    },
    errMsg: null,
    isLoading: true,
  });
  const [seoulMarker, setSeoulMarker] = useState(null);
  const [gyeonggiMarker, setGyeonggiMarker] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "지도를",
        isLoading: false,
      }));
    }
  }, []);

  useEffect(() => {
    if (!state.isLoading) {
      const seoulMarkerPosition = {
        lat: 37.518,
        lng: 126.9734,
      };
      setSeoulMarker(seoulMarkerPosition);
    }
  }, [state.isLoading]);

  useEffect(() => {
    if (!state.isLoading) {
      const gyeonggiMarkerPosition = {
        lat: 37.3605,
        lng: 126.9469,
      };
      setGyeonggiMarker(gyeonggiMarkerPosition);
    }
  }, [state.isLoading]);

  return (
    <>
      <Script
        src={KAKAO_SDK_URL}
        strategy="beforeInteractive"
        onLoad={() => console.log("Kakao SDK loaded")}
      />

      {!state.isLoading ? (
        <div style={{ width: "100%", height: "500px" }}>
          {/* Ensure the container has a size */}
          <Map center={state.center} style={{ width: "100%", height: "100%" }}>
            <MapMarker position={state.center}></MapMarker>
            {seoulMarker && <MapMarker position={seoulMarker}></MapMarker>}
            {gyeonggiMarker && (
              <MapMarker position={gyeonggiMarker}></MapMarker>
            )}
          </Map>
        </div>
      ) : (
        <div className="text-2xl items-center text-center">
          지도 이미지 불러오는 중..
        </div>
      )}
    </>
  );
}
