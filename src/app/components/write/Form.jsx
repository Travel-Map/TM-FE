"use client";
import React, { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [partner, setPartner] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 여기서 서버에 데이터를 업로드하거나 필요한 동작을 수행합니다.
  };

  const handleCancel = () => {
    setTitle("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setPartner("");
    setContent("");
  };
  return (
    <div>
      <div className="flex w-full items-center justify-center h-full flex-col mt-20">
        <form
          onSubmit={handleSubmit}
          className="w-[800px] bg-gray-100 p-6 rounded-lg shadow-lg"
        >
          <div className="w-full mb-4 flex items-center">
            <label
              htmlFor="title"
              className="block text-black font-bold w-1/5 text-center"
            >
              글 제목
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-4/5 mt-1 p-2 border rounded focus:outline-none focus:border-blue-500"
              maxLength="20"
              placeholder="여행의 테마를 나타내는 제목을 지어주세요!"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="subtitle"
              className="block text-black font-bold w-1/5 text-center"
            >
              여행지 선택
            </label>
            <input
              type="text"
              id="subtitle"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-4/5 mt-1 p-2 border rounded focus:outline-none focus:border-blue-500"
              maxLength="20"
              placeholder="다녀온 여행지를 적어주세요!"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center">
            <label
              htmlFor="subtitle"
              className="block text-black font-bold w-auto text-center"
            >
              여행 시작일
            </label>
            <input
              type="text"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-auto mt-1 p-2 border rounded focus:outline-none focus:border-blue-500"
              maxLength="20"
              placeholder="여행 시작!"
            />
            <label
              htmlFor="subtitle"
              className="block text-black font-bold w-auto text-center"
            >
              여행 마감일
            </label>
            <input
              type="text"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-auto mt-1 p-2 border rounded focus:outline-none focus:border-blue-500"
              maxLength="20"
              placeholder="여행 끝 ㅠ"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="subtitle"
              className="block text-black font-bold w-1/5 text-center"
            >
              여행 파트너
            </label>
            <input
              type="text"
              id="subtitle"
              value={partner}
              onChange={(e) => setPartner(e.target.value)}
              className="w-4/5 mt-1 p-2 border rounded focus:outline-none focus:border-blue-500"
              maxLength="20"
              placeholder="누구와 함께한 여행이었나요?"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="content"
              className="block text-black font-bold w-1/5 text-center"
            >
              내용
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-4/5 h-80 mt-1 p-2 border rounded focus:outline-none focus:border-blue-500"
              maxLength="250"
              placeholder="250자까지 작성할 수 있어"
            />
          </div>
        </form>
        <div className="flex justify-between items-center w-[800px] mt-4">
          <button
            type="submit"
            onClick={handleCancel}
            className="w-1/2 mr-8 py-2 px-4 font-bold rounded-full border border-black bg-white text-black hover:bg-gray-300 focus:outline-none"
          >
            작성 취소
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-1/2 py-2 px-4 font-bold rounded-full border border-black bg-blue-500 text-white hover:bg-blue-800 focus:outline-none"
          >
            블로그 업로드
          </button>
        </div>
      </div>
    </div>
  );
}
