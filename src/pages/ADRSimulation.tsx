import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Rocket, Zap, Target, Award } from "lucide-react";

const ADRSimulation = () => {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [targetDebris, setTargetDebris] = useState(200);
  const [rewardCredits, setRewardCredits] = useState(100);
  const [rewardUsd, setRewardUsd] = useState(50);
  const [impact, setImpact] = useState("High");
  const [lastMissionTime, setLastMissionTime] = useState<number>(0);

  const startMission = () => {
    // Cooldown check - 30 seconds between missions
    const now = Date.now();
    if (now - lastMissionTime < 30000 && lastMissionTime !== 0) {
      const waitTime = Math.ceil((30000 - (now - lastMissionTime)) / 1000);
      alert(`Please wait ${waitTime} seconds before starting a new mission.`);
      return;
    }

    setIsActive(true);
    setProgress(0);
    setLastMissionTime(now);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsActive(false);
          
          // Generate new mission data only after completion
          const debris = Math.floor(Math.random() * 400) + 100; // 100-500kg
          const reward = Math.floor(debris * 0.5); // 0.5 OCE per kg
          const usdValue = Number((reward * 0.5).toFixed(2)); // $0.50 per OCE
          const impacts = ["Low", "Medium", "High", "Critical"];
          const randomImpact = impacts[Math.floor(Math.random() * impacts.length)];
          
          setTargetDebris(debris);
          setRewardCredits(reward);
          setRewardUsd(usdValue);
          setImpact(randomImpact);
          
          return 100;
        }
        return prev + 5; // Slower progress for more realism
      });
    }, 800); // Slower intervals
  };

  const missions = [
    {
      name: "LEO Cleanup Alpha",
      debris: "250kg",
      status: "Completed",
      credits: "+125 OCE",
    },
    {
      name: "Orbital Sweep Beta",
      debris: "180kg",
      status: "Completed",
      credits: "+90 OCE",
    },
    {
      name: "Space Debris Gamma",
      debris: "70kg",
      status: "In Progress",
      credits: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          ADR Simulation
        </h1>
        <p className="text-muted-foreground">
          Active Debris Removal - Simulate cleanup missions
        </p>
      </div>

      {/* Mission Control */}
      <Card className="bg-blue-50 border-blue-200 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-deep-blue mb-2">
                Mission Control
              </h2>
              <p className="text-muted-foreground">
                Initialize debris removal sequence
              </p>
            </div>
            <div className="h-20 w-20 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Rocket className="h-10 w-10 text-primary" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Target</span>
              </div>
              <p className="text-xl font-bold text-deep-blue">{targetDebris}kg Debris</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Reward</span>
              </div>
              <p className="text-xl font-bold text-primary">+{rewardCredits} OCE</p>
              <p className="text-sm text-muted-foreground mt-1">≈ ${rewardUsd} USD</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Impact</span>
              </div>
              <p className={`text-xl font-bold ${
                impact === "Critical" ? "text-destructive" :
                impact === "High" ? "text-success" :
                impact === "Medium" ? "text-warning" : "text-muted-foreground"
              }`}>{impact}</p>
            </div>
          </div>

          {isActive && (
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Mission Progress</span>
                <span className="text-foreground font-semibold">{progress}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
          )}

          <Button
            onClick={startMission}
            disabled={isActive}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isActive ? `Mission In Progress... ${progress}%` : "Initialize Mission"}
          </Button>
          {!isActive && lastMissionTime !== 0 && (
            <p className="text-xs text-muted-foreground text-center mt-3">
              Mission cooldown: 30 seconds between missions
            </p>
          )}
        </div>
      </Card>

      {/* Mission History */}
      <Card className="bg-white border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Mission History
        </h3>
        <div className="space-y-3">
          {missions.map((mission, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground">{mission.name}</h4>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    mission.status === "Completed"
                      ? "bg-success/20 text-success"
                      : "bg-warning/20 text-warning"
                  }`}
                >
                  {mission.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Debris Removed: {mission.debris}
                </span>
                <span
                  className={`font-semibold ${
                    mission.status === "Completed"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {mission.credits}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-100 border-blue-200 p-6 hover:shadow-lg transition-all">
          <h4 className="text-sm text-muted-foreground mb-2">Total Missions</h4>
          <p className="text-3xl font-bold text-deep-blue">12</p>
        </Card>
        <Card className="bg-blue-200 border-blue-300 p-6 hover:shadow-lg transition-all">
          <h4 className="text-sm text-muted-foreground mb-2">Total Debris Cleared</h4>
          <p className="text-3xl font-bold text-primary">2.4 tons</p>
        </Card>
        <Card className="bg-blue-100 border-blue-200 p-6 hover:shadow-lg transition-all">
          <h4 className="text-sm text-muted-foreground mb-2">Credits Earned</h4>
          <p className="text-3xl font-bold text-success">+1,200 OCE</p>
        </Card>
      </div>
    </div>
  );
};

export default ADRSimulation;
