import React, { useState, useEffect } from "react";

type YearKey = "1.0" | "2.0" | "3.0";

const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState<YearKey>("2.0");

  const statsData: Record<YearKey, {
    year: string;
    title: string;
    overview: {
      participants: number;
      projects: number;
      hours: number;
      states: number;
    };
    categories: Array<{
      name: string;
      value: number;
      color: string;
    }>;
    achievements: Array<{
      icon: string;
      label: string;
      value: string;
    }>;
    impact: Array<{
      value: string;
      label: string;
    }>;
  }> = {
    "1.0": {
      year: "2023",
      title: "HackOverflow 1.0",
      overview: { participants: 200, projects: 50, hours: 36, states: 10 },
      categories: [
        { name: "Web Development", value: 35, color: "#FCB216" },
        { name: "AI/ML", value: 25, color: "#E85D24" },
        { name: "Blockchain", value: 15, color: "#D91B57" },
        { name: "IoT", value: 15, color: "#63205F" },
        { name: "Other", value: 10, color: "#B0B0B0" }
      ],
      achievements: [
        { icon: "🏆", label: "Winning Teams", value: "3 Teams" },
        { icon: "💡", label: "Ideas Pitched", value: "65+" },
        { icon: "🎯", label: "Completion Rate", value: "92%" },
        { icon: "⭐", label: "Satisfaction", value: "4.8 / 5" }
      ],
      impact: [
        { value: "18+", label: "Mentors" },
        { value: "25+", label: "Colleges" },
        { value: "20 hrs", label: "Avg Coding" },
        { value: "12+", label: "Deployments" }
      ]
    },

    "2.0": {
      year: "2024",
      title: "HackOverflow 2.0",
      overview: { participants: 200, projects: 55, hours: 36, states: 12 },
      categories: [
        { name: "Web Development", value: 30, color: "#FCB216" },
        { name: "AI/ML", value: 30, color: "#E85D24" },
        { name: "Blockchain", value: 15, color: "#D91B57" },
        { name: "IoT", value: 15, color: "#63205F" },
        { name: "Other", value: 10, color: "#B0B0B0" }
      ],
      achievements: [
        { icon: "🏆", label: "Winning Teams", value: "5 Teams" },
        { icon: "💡", label: "Ideas Pitched", value: "95+" },
        { icon: "🎯", label: "Completion Rate", value: "95%" },
        { icon: "⭐", label: "Satisfaction", value: "4.9 / 5" }
      ],
      impact: [
        { value: "22+", label: "Mentors" },
        { value: "40+", label: "Colleges" },
        { value: "24 hrs", label: "Avg Coding" },
        { value: "18+", label: "Deployments" }
      ]
    },

    "3.0": {
      year: "2025",
      title: "HackOverflow 3.0",
      overview: { participants: 250, projects: 60, hours: 36, states: 15 },
      categories: [
        { name: "Web Development", value: 28, color: "#FCB216" },
        { name: "AI/ML", value: 35, color: "#E85D24" },
        { name: "Blockchain", value: 12, color: "#D91B57" },
        { name: "IoT", value: 15, color: "#63205F" },
        { name: "Other", value: 10, color: "#B0B0B0" }
      ],
      achievements: [
        { icon: "🏆", label: "Winning Teams", value: "7 Teams" },
        { icon: "💡", label: "Ideas Pitched", value: "120+" },
        { icon: "🎯", label: "Completion Rate", value: "97%" },
        { icon: "⭐", label: "Satisfaction", value: "5.0 / 5" }
      ],
      impact: [
        { value: "30+", label: "Mentors" },
        { value: "55+", label: "Colleges" },
        { value: "28 hrs", label: "Avg Coding" },
        { value: "25+", label: "Deployments" }
      ]
    }
  };

  const current = statsData[selectedYear];

  return (
    <section className="stats-section">
      <style>{`
        .stats-section {
          background: #0f0f0f;
          padding: 4rem 0;
          font-family: Poppins, sans-serif;
        }

        .stats-container {
          max-width: 1400px;
          margin: auto;
          padding: 0 2rem;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .stats-title {
          font-size: 3.2rem;
          font-weight: 800;
          color: #fff;
        }

        .gradient-text {
          background: linear-gradient(90deg, #FCB216, #E85D24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .year-selector {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .year-btn {
          padding: 1rem 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: #aaa;
          cursor: pointer;
        }

        .year-btn.active {
          background: linear-gradient(135deg,#FCB216,#E85D24);
          color: #fff;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .overview-card {
          padding: 2rem;
          text-align: center;
          background: rgba(255,255,255,0.04);
          border-radius: 14px;
        }

        .overview-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #FCB216;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1.2rem;
        }

        .stat-card {
          background: rgba(255,255,255,0.04);
          border-radius: 14px;
          padding: 2rem;
        }

        .stat-card-title {
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 1.5rem;
        }

        .category-item,
        .achievement-item,
        .impact-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          margin-bottom: 1rem;
        }

        .achievement-grid,
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 1rem;
        }

        .impact-item {
          flex-direction: column;
          text-align: center;
        }

        .impact-value {
          font-size: 1.3rem;
          font-weight: 700;
          color: #FCB216;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .overview-grid,
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">
            HackOverflow <span className="gradient-text">Statistics</span>
          </h2>
        </div>

        <div className="year-selector">
          {(Object.keys(statsData) as YearKey[]).map(y => (
            <button
              key={y}
              className={`year-btn ${selectedYear === y ? "active" : ""}`}
              onClick={() => setSelectedYear(y)}
            >
              {statsData[y].title}
            </button>
          ))}
        </div>

        <div className="overview-grid">
          {Object.entries(current.overview).map(([k, v]) => (
            <div key={k} className="overview-card">
              <div className="overview-number">{v}</div>
              <div>{k.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-card-title">Project Categories</h3>
            {current.categories.map((c, i) => (
              <div key={i} className="category-item">
                <span>{c.name}</span>
                <strong>{c.value}%</strong>
              </div>
            ))}
          </div>

          <div className="stat-card">
            <h3 className="stat-card-title">Key Achievements</h3>
            <div className="achievement-grid">
              {current.achievements.map((a, i) => (
                <div key={i} className="achievement-item">
                  <span>{a.icon}</span>
                  <strong>{a.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="stat-card">
            <h3 className="stat-card-title">Impact Highlights</h3>
            <div className="impact-grid">
              {current.impact.map((i, idx) => (
                <div key={idx} className="impact-item">
                  <div className="impact-value">{i.value}</div>
                  <div>{i.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;