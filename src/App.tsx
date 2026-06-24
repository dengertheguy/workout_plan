import { useState } from "react";

const workoutDays = [
  {
    id: 1,
    label: "DAY 1",
    title: "Push",
    subtitle: "Chest + Triceps",
    color: "#E84040",
    time: "~60 min",
    exercises: [
      {
        name: "Barbell Bench Press",
        sets: 4,
        reps: "5–6",
        note: "Heavy — main strength lift · do this first while fresh",
      },
      {
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: "8–10",
        note: "Second compound before fatigue sets in",
      },
      {
        name: "Weighted Dips",
        sets: 3,
        reps: "8–10",
        note: "Still a compound — do before isolation · bodyweight if needed",
      },
      {
        name: "Cable Fly / Pec Deck",
        sets: 3,
        reps: "12–15",
        note: "Chest isolation — squeeze at peak contraction",
      },
      {
        name: "Single Arm Tricep Pushdown",
        sets: 3,
        reps: "12–15",
        note: "Cable + single handle · concentrated, each arm independently",
      },
      {
        name: "Overhead Tricep Extension",
        sets: 3,
        reps: "10–12",
        note: "Dumbbell or cable — finish triceps here",
      },
    ],
  },
  {
    id: 2,
    label: "DAY 2",
    title: "Pull",
    subtitle: "Back + Biceps",
    color: "#2563EB",
    time: "~80 min",
    exercises: [
      {
        name: "Deadlift",
        sets: 4,
        reps: "4–5",
        note: "First — heaviest lift of the day, CNS needs to be fresh · use lifting straps",
      },
      {
        name: "Barbell Row",
        sets: 4,
        reps: "6–8",
        note: "Second compound while still strong · overhand, chest to bar · use lifting straps",
      },
      {
        name: "Lat Pulldown",
        sets: 4,
        reps: "6–8",
        note: "Full stretch at bottom · use lifting straps",
      },
      {
        name: "Seated Cable Row",
        sets: 3,
        reps: "10–12",
        note: "Elbows tight · use lifting straps",
      },
      {
        name: "Face Pulls",
        sets: 3,
        reps: "15–20",
        note: "Rear delt + rotator cuff health — lighter, treat as active recovery",
      },
      {
        name: "Barbell Curl",
        sets: 3,
        reps: "8–10",
        note: "Biceps fresh enough after back work",
      },
      {
        name: "Hammer Curl",
        sets: 3,
        reps: "10–12",
        note: "Brachialis builder",
      },
    ],
  },
  {
    id: 3,
    label: "DAY 3",
    title: "Shoulders + Arms",
    subtitle: "Delts + Bis + Tris",
    color: "#16A34A",
    time: "~65 min",
    exercises: [
      {
        name: "Machine Shoulder Press",
        sets: 4,
        reps: "6–8",
        note: "Main compound — do this first while shoulders are fresh",
      },
      {
        name: "Front Lateral Raises",
        sets: 4,
        reps: "15–20",
        note: "Dumbbells or plate — targets front delt, control the negative",
      },
      {
        name: "Cable Lateral Raise",
        sets: 3,
        reps: "15",
        note: "D-bar attachment · wrap wrist wrap around bar as padding · unilateral each side",
      },
      {
        name: "Rear Delt Fly / Reverse Pec Deck",
        sets: 3,
        reps: "15",
        note: "Finish delts before moving to arms",
      },
      {
        name: "EZ Bar Curl",
        sets: 3,
        reps: "8–10",
        note: "Heavier bicep movement — do first while arms are fresh",
      },
      {
        name: "Preacher Curl",
        sets: 3,
        reps: "10–12",
        note: "EZ bar or DB — locks out the arm so no cheating, great bicep isolation",
      },
      {
        name: "Tricep Pushdown (lifting strap)",
        sets: 3,
        reps: "12–15",
        note: "Loop strap over cable hook, grip both ends",
      },
    ],
  },
  {
    id: 4,
    label: "DAY 4",
    title: "Legs",
    subtitle: "Quads · Hamstrings · Glutes · Calves",
    color: "#D97706",
    time: "~70 min",
    exercises: [
      {
        name: "Barbell Back Squat",
        sets: 4,
        reps: "5–6",
        note: "Heaviest compound first — legs need to be completely fresh",
      },
      {
        name: "Romanian Deadlift",
        sets: 4,
        reps: "8–10",
        note: "Hinge at hips, soft knees · use lifting straps",
      },
      {
        name: "Leg Press",
        sets: 3,
        reps: "10–12",
        note: "Feet shoulder-width, full depth — quads + glutes",
      },
      {
        name: "Leg Curl (seated or lying)",
        sets: 3,
        reps: "12–15",
        note: "Hamstring isolation — go after leg press while quads rest",
      },
      {
        name: "Leg Extension",
        sets: 3,
        reps: "12–15",
        note: "Quad isolation — finish quads here",
      },
      {
        name: "Standing Calf Raise",
        sets: 4,
        reps: "15–20",
        note: "Always last — full stretch at bottom, slow negatives",
      },
      {
        name: "Decline Bench Crunch",
        sets: 3,
        reps: "15–20",
        note: "Feet hooked on decline bench — full range, slow and controlled",
      },
    ],
  },
];

const tips = [
  "Rest 2–3 min between heavy compound sets, 60–90 sec on isolation work",
  "Progressive overload — add weight or reps each week when possible",
  "Example schedule: Mon (Push) · Tue (Pull) · Thu (Shoulders/Arms) · Sat (Legs)",
  "Warm up 5–10 min before lifting — light cardio + dynamic stretching",
];

export default function WorkoutPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [checked, setChecked] = useState({});

  const day = workoutDays[activeDay];
  const doneCount = day.exercises.filter(
    (_, i) => checked[`${activeDay}-${i}`]
  ).length;
  const progress = (doneCount / day.exercises.length) * 100;

  const toggleCheck = (key) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "#f0f0f0",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        padding: "0 0 60px 0",
      }}
    >
      <div
        style={{ padding: "32px 24px 20px", borderBottom: "1px solid #222" }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.15em",
            color: "#666",
            marginBottom: 6,
            textTransform: "uppercase",
          }}
        >
          4-Day Split · Full Body
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Workout Plan
        </div>
      </div>

      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #222",
          overflowX: "auto",
        }}
      >
        {workoutDays.map((d, i) => (
          <button
            key={d.id}
            onClick={() => setActiveDay(i)}
            style={{
              flex: 1,
              padding: "14px 8px",
              background: "transparent",
              border: "none",
              borderBottom:
                activeDay === i
                  ? `3px solid ${d.color}`
                  : "3px solid transparent",
              color: activeDay === i ? "#f0f0f0" : "#555",
              cursor: "pointer",
              fontWeight: activeDay === i ? 700 : 400,
              fontSize: 13,
              letterSpacing: "0.05em",
              transition: "all 0.15s",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: activeDay === i ? d.color : "#444",
                letterSpacing: "0.1em",
                marginBottom: 2,
              }}
            >
              {d.label}
            </div>
            {d.title}
          </button>
        ))}
      </div>

      <div style={{ padding: "24px 24px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              {day.title}
            </div>
            <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>
              {day.subtitle}
            </div>
            <div
              style={{
                fontSize: 12,
                color: day.color,
                marginTop: 4,
                fontWeight: 600,
              }}
            >
              ⏱ {day.time}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: day.color }}>
              {doneCount}/{day.exercises.length}
            </div>
            <div style={{ fontSize: 11, color: "#555" }}>complete</div>
          </div>
        </div>
        <div
          style={{
            height: 4,
            background: "#222",
            borderRadius: 2,
            marginBottom: 24,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: day.color,
              borderRadius: 2,
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      <div style={{ padding: "0 24px" }}>
        {day.exercises.map((ex, i) => {
          const key = `${activeDay}-${i}`;
          const done = !!checked[key];
          return (
            <div
              key={key}
              onClick={() => toggleCheck(key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 0",
                borderBottom: "1px solid #1a1a1a",
                cursor: "pointer",
                opacity: done ? 0.4 : 1,
                transition: "opacity 0.2s",
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 4,
                  border: `2px solid ${done ? day.color : "#333"}`,
                  background: done ? day.color : "transparent",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.15s",
                }}
              >
                {done && (
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5L4.5 8.5L11 1.5"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: done ? "line-through" : "none",
                    marginBottom: ex.note ? 3 : 0,
                  }}
                >
                  {ex.name}
                </div>
                {ex.note && (
                  <div style={{ fontSize: 12, color: "#555" }}>{ex.note}</div>
                )}
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div
                  style={{ fontSize: 14, fontWeight: 700, color: day.color }}
                >
                  {ex.sets} × {ex.reps}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ padding: "32px 24px 0" }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            color: "#555",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Notes
        </div>
        {tips.map((tip, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 10,
              fontSize: 13,
              color: "#666",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: "#333", flexShrink: 0 }}>—</span>
            {tip}
          </div>
        ))}
      </div>
    </div>
  );
}
