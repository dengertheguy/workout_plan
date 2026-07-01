import { useState, useEffect } from "react";

const workoutDays = [
  {
    id: 1,
    label: "DAY 1",
    title: "Push",
    subtitle: "Chest + Triceps",
    color: "#E84040",
    time: "~75 min",
    exercises: [
      {
        name: "Barbell Bench Press",
        sets: 4,
        reps: "5",
        note: "Heavy — main strength lift · do this first while fresh",
      },
      {
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: "6",
        note: "Second compound before fatigue sets in",
      },
      {
        name: "Weighted Dips",
        sets: 3,
        reps: "6",
        note: "Still a compound — do before isolation · bodyweight if needed",
      },
      {
        name: "Cable Fly / Pec Deck",
        sets: 3,
        reps: "10",
        note: "Chest isolation — squeeze at peak contraction",
      },
      {
        name: "Single Arm Tricep Pushdown",
        sets: 3,
        reps: "10",
        note: "Cable + single handle · concentrated, each arm independently",
      },
      {
        name: "Overhead Tricep Extension",
        sets: 3,
        reps: "8",
        note: "Dumbbell or cable — finish triceps here",
      },
      {
        name: "Cable Lateral Raise",
        sets: 3,
        reps: "12",
        note: "D-bar attachment · unilateral each side · side delt finisher to cap off the session",
      },
    ],
  },
  {
    id: 2,
    label: "DAY 2",
    title: "Pull",
    subtitle: "Back + Biceps",
    color: "#2563EB",
    time: "~85 min",
    exercises: [
      {
        name: "Deadlift",
        sets: 4,
        reps: "4",
        note: "First — heaviest lift of the day, CNS needs to be fresh · use lifting straps",
      },
      {
        name: "Barbell Row",
        sets: 4,
        reps: "5",
        note: "Second compound while still strong · overhand, chest to bar · use lifting straps",
      },
      {
        name: "Lat Pulldown",
        sets: 4,
        reps: "6",
        note: "Full stretch at bottom · use lifting straps",
      },
      {
        name: "Seated Cable Row",
        sets: 3,
        reps: "8",
        note: "Elbows tight · use lifting straps",
      },
      {
        name: "Back Extension (Hyperextension)",
        sets: 3,
        reps: "10",
        note: "45° or GHD bench · keep back neutral at top, don't hyperextend · can hold a plate for added resistance",
      },
      {
        name: "Face Pulls",
        sets: 3,
        reps: "15",
        note: "Rear delt + rotator cuff health — lighter, treat as active recovery",
      },
      {
        name: "Barbell Curl",
        sets: 3,
        reps: "6",
        note: "Biceps fresh enough after back work",
      },
      {
        name: "Hammer Curl",
        sets: 3,
        reps: "8",
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
    time: "~80 min",
    exercises: [
      {
        name: "Overhead Shoulder Press",
        sets: 4,
        reps: "6",
        note: "Main compound — shoulders completely fresh, hit this hard",
      },
      {
        name: "Incline DB Press",
        sets: 3,
        reps: "6",
        note: "Chest secondary work · front delts already warm from OHP · full range of motion, controlled negative",
      },
      {
        name: "Cable Lateral Raise",
        sets: 3,
        reps: "12",
        note: "D-bar attachment · wrap wrist wrap around bar as padding · unilateral each side",
      },
      {
        name: "DB Lateral Raise / Lateral Raise Machine",
        sets: 3,
        reps: "10",
        note: "Side delt isolation — slight forward lean, lead with elbow, controlled negative · superset with cable raises if pressed for time",
      },
      {
        name: "Rear Delt Fly / Reverse Pec Deck",
        sets: 3,
        reps: "12",
        note: "Finish delts before moving to arms",
      },
      {
        name: "Pec Deck / Cable Fly",
        sets: 3,
        reps: "10",
        note: "Chest isolation — squeeze hard at peak contraction · takes advantage of the incline press warm-up earlier",
      },
      {
        name: "EZ Bar Curl",
        sets: 3,
        reps: "6",
        note: "Heavier bicep movement — do first while arms are fresh",
      },
      {
        name: "Preacher Curl",
        sets: 3,
        reps: "8",
        note: "EZ bar or DB — locks out the arm so no cheating, great bicep isolation",
      },
      {
        name: "Tricep Pushdown / Tricep Press",
        sets: 3,
        reps: "10",
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
    time: "~80 min",
    exercises: [
      {
        name: "Barbell Back Squat",
        sets: 4,
        reps: "5",
        note: "Heaviest compound first — legs need to be completely fresh",
      },
      {
        name: "Romanian Deadlift",
        sets: 4,
        reps: "8",
        note: "Hinge at hips, soft knees · use lifting straps",
      },
      {
        name: "Leg Press",
        sets: 3,
        reps: "8",
        note: "Feet shoulder-width, full depth — quads + glutes",
      },
      {
        name: "Leg Curl (seated or lying)",
        sets: 3,
        reps: "10",
        note: "Hamstring isolation — go after leg press while quads rest",
      },
      {
        name: "Leg Extension",
        sets: 3,
        reps: "10",
        note: "Quad isolation — finish quads here",
      },
      {
        name: "Standing Calf Raise",
        sets: 4,
        reps: "15",
        note: "Always last — full stretch at bottom, slow negatives",
      },
      {
        name: "Cable Forearm Curl",
        sets: 3,
        reps: "12",
        note: "Straight bar on low cable · overhand grip for reverse curls · grip already warmed up from all the leg work · light weight, squeeze at top",
      },
      {
        name: "Decline Bench Crunch",
        sets: 3,
        reps: "15",
        note: "Feet hooked on decline bench — full range, slow and controlled",
      },
    ],
  },
  {
    id: 5,
    label: "DAY 5",
    title: "Home",
    subtitle: "Dumbbells + Bodyweight",
    color: "#7C3AED",
    time: "~50 min",
    exercises: [
      {
        name: "Bulgarian Split Squat",
        sets: 4,
        reps: "8",
        note: "Dumbbells or bodyweight \u00b7 rear foot on chair or couch \u00b7 full depth, controlled negative \u00b7 expose any left-right imbalance",
      },
      {
        name: "Chest Supported DB Row",
        sets: 4,
        reps: "8",
        note: "Chest on incline bench or angled chair \u00b7 elbows drive back \u00b7 full stretch at bottom \u00b7 squeeze hard at top",
      },
      {
        name: "DB Lateral Raise",
        sets: 3,
        reps: "12",
        note: "Light dumbbells \u00b7 lead with elbow, slight forward lean \u00b7 controlled negative",
      },
      {
        name: "Rope Jumps",
        sets: 3,
        reps: "15",
        note: "Cardio finisher · stay light on your feet, consistent rhythm · 60 sec rest between sets",
      },
    ],
  },
];

const tips = [
  "Rest 2–3 min between heavy compound sets, 60–90 sec on isolation work",
  "Progressive overload — add weight or reps each week when possible",
  "Warm up 5–10 min before lifting — light cardio + dynamic stretching",
];

export default function WorkoutPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Timer state for the current activeDay
  const [timerState, setTimerState] = useState<{
    isRunning: boolean;
    startTime: number | null;
    accumulatedMs: number;
  }>({ isRunning: false, startTime: null, accumulatedMs: 0 });

  const [displayTimeMs, setDisplayTimeMs] = useState(0);

  // Sync state with localStorage whenever activeDay changes
  useEffect(() => {
    const saved = localStorage.getItem(`workout_timer_${activeDay}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTimerState(parsed);
      } catch (e) {
        setTimerState({ isRunning: false, startTime: null, accumulatedMs: 0 });
      }
    } else {
      setTimerState({ isRunning: false, startTime: null, accumulatedMs: 0 });
    }
  }, [activeDay]);

  const saveTimerState = (dayId: number, state: typeof timerState) => {
    localStorage.setItem(`workout_timer_${dayId}`, JSON.stringify(state));
    setTimerState(state);
  };

  // Timer tick effect
  useEffect(() => {
    const calculateCurrentTime = () => {
      if (timerState.isRunning && timerState.startTime) {
        return timerState.accumulatedMs + (Date.now() - timerState.startTime);
      }
      return timerState.accumulatedMs;
    };

    setDisplayTimeMs(calculateCurrentTime());

    if (!timerState.isRunning) return;

    const interval = setInterval(() => {
      setDisplayTimeMs(calculateCurrentTime());
    }, 200);

    return () => clearInterval(interval);
  }, [timerState]);

  const startTimer = () => {
    const newState = {
      isRunning: true,
      startTime: Date.now(),
      accumulatedMs: timerState.accumulatedMs,
    };
    saveTimerState(activeDay, newState);
  };

  const pauseTimer = () => {
    if (!timerState.isRunning || !timerState.startTime) return;
    const elapsed = Date.now() - timerState.startTime;
    const newState = {
      isRunning: false,
      startTime: null,
      accumulatedMs: timerState.accumulatedMs + elapsed,
    };
    saveTimerState(activeDay, newState);
  };

  const resetTimer = () => {
    if (window.confirm("Are you sure you want to reset the timer for this workout?")) {
      const newState = {
        isRunning: false,
        startTime: null,
        accumulatedMs: 0,
      };
      saveTimerState(activeDay, newState);
    }
  };

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => String(num).padStart(2, "0");

    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  const day = workoutDays[activeDay];
  const doneCount = day.exercises.filter(
    (_, i) => checked[`${activeDay}-${i}`]
  ).length;
  const progress = (doneCount / day.exercises.length) * 100;

  const toggleCheck = (key: string) =>
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
          Marius's Workout Plan v2
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

        {/* Style block for global resets and animations */}
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background-color: #0f0f0f;
          }
          @keyframes timer-pulse {
            0% { opacity: 0.3; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0.3; transform: scale(0.9); }
          }
        `}</style>

        {/* Timer Control Widget */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#161616",
            border: "1px solid #222",
            borderRadius: 8,
            padding: "14px 18px",
            marginBottom: 24,
            boxShadow: timerState.isRunning
              ? `0 0 15px ${day.color}15`
              : "none",
            transition: "all 0.3s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: timerState.isRunning ? day.color : "#444",
                boxShadow: timerState.isRunning
                  ? `0 0 8px ${day.color}`
                  : "none",
                animation: timerState.isRunning
                  ? "timer-pulse 2s infinite ease-in-out"
                  : "none",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: 10,
                  color: timerState.isRunning ? day.color : "#555",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 2,
                }}
              >
                {timerState.isRunning ? "Active Workout Timer" : "Workout Timer"}
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  fontFamily: "monospace",
                  color: timerState.isRunning || displayTimeMs > 0 ? "#fff" : "#666",
                  lineHeight: 1,
                }}
              >
                {formatTime(displayTimeMs)}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            {!timerState.isRunning && displayTimeMs === 0 && (
              <button
                onClick={startTimer}
                style={{
                  background: day.color,
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Start Workout
              </button>
            )}
            {timerState.isRunning && (
              <button
                onClick={pauseTimer}
                style={{
                  background: "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#444")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#333")}
              >
                Pause
              </button>
            )}
            {!timerState.isRunning && displayTimeMs > 0 && (
              <button
                onClick={startTimer}
                style={{
                  background: day.color,
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Resume
              </button>
            )}
            {displayTimeMs > 0 && (
              <button
                onClick={resetTimer}
                style={{
                  background: "transparent",
                  color: "#ff4d4d",
                  border: "1px solid #ff4d4d22",
                  borderRadius: 6,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#ff4d4d15";
                  e.currentTarget.style.borderColor = "#ff4d4d";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "#ff4d4d22";
                }}
              >
                Reset
              </button>
            )}
          </div>
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
