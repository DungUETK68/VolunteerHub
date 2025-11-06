import React, { useState } from "react";
import "../../assets/styles/events.css";
import Sidebar from "../../components/common/Sidebar";

export default function EventsVolunteer() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const events = [
    {
      id: 1,
      title: "Dọn rác bãi biển",
      date: "20/11/2025",
      location: "Đà Nẵng",
      desc: "Cùng nhau làm sạch bãi biển Mỹ Khê.",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Trồng cây xanh tại trường",
      date: "15/11/2025",
      location: "Hà Nội",
      desc: "Chương trình trồng 500 cây xanh.",
      status: "ongoing",
    },
    {
      id: 3,
      title: "Phát quà cho trẻ em",
      date: "01/10/2025",
      location: "TP. Hồ Chí Minh",
      desc: "Tặng quà trung thu cho trẻ em khó khăn.",
      status: "completed",
    },
  ];

  const filteredEvents = events.filter((e) => e.status === activeTab);

  return (
    <div className="events-container">
      <Sidebar />

      <main className="main-content">
        <div className="events-header">
          <h2>Sự Kiện Tình Nguyện</h2>
          <button className="add-event-btn">Thêm Sự Kiện Mới</button>
        </div>

        <div className="events-tabs">
          <button
            className={`event-tab ${activeTab === "upcoming" ? "active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Sắp diễn ra
          </button>
          <button
            className={`event-tab ${activeTab === "ongoing" ? "active" : ""}`}
            onClick={() => setActiveTab("ongoing")}
          >
            Đang diễn ra
          </button>
          <button
            className={`event-tab ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Đã hoàn thành
          </button>
        </div>

        <div id="events-area">
          {filteredEvents.length === 0 ? (
            <div className="loading">Không có sự kiện nào.</div>
          ) : (
            <div className="event-list">
              {filteredEvents.map((event) => (
                <div key={event.id} className="event-card event-vol">
                  <div className="event-title-row">
                    <a href="#" className="event-title">
                      {event.title}
                    </a>
                    <span className="event-date">{event.date}</span>
                  </div>
                  <div className="event-location">{event.location}</div>
                  <div className="event-desc">{event.desc}</div>
                  <div className="event-tags">
                    <span className={`event-status ${event.status}`}>
                      {event.status === "upcoming"
                        ? "Sắp diễn ra"
                        : event.status === "ongoing"
                        ? "Đang diễn ra"
                        : "Đã hoàn thành"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
