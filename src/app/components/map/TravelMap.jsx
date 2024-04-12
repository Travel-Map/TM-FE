"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Link from "next/link";
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
  const [marker, setMarker] = useState(null);
  const [result, setResult] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleMapClick = (_, mouseEvent) => {
    const latlng = mouseEvent.latLng;
    setMarker({ lat: latlng.getLat(), lng: latlng.getLng() });
    setResult(
      `클릭한 위치의 위도는 ${latlng.getLat()} 이고, 경도는 ${latlng.getLng()} 입니다`
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-bg")) {
      closeModal();
    }
  };

  return (
    <>
      <Script
        src={KAKAO_SDK_URL}
        strategy="beforeInteractive"
        onLoad={() => console.log("Kakao SDK loaded")}
      />

      <div className="flex">
        <div className="relative w-[800px] h-[600px]">
          <Map
            center={state.center}
            style={{ width: "100%", height: "100%" }}
            level={13}
            onClick={handleMapClick}
          >
            {marker && (
              <MapMarker position={marker} clickable={true}></MapMarker>
            )}
          </Map>
        </div>
        {isModalOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
            onClick={handleModalClick}
          >
            <div className="modal-bg absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="modal-content bg-white border rounded-lg p-4 z-50 relative">
              <span
                className="close text-2xl font-bold absolute top-0 right-0 m-4 cursor-pointer text-black"
                onClick={closeModal}
              >
                &times;
              </span>
              <Link href="/write">
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  여행 추억 기록하러 가기
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
