import { Card } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle, TrendingUp, Activity } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome to OCE
        </h1>
        <p className="text-muted-foreground">
          Orbit Credits Exchange - Your LEO Sustainability Dashboard
        </p>
      </div>

      {/* Balance Card - Featured */}
      <Card className="bg-gradient-primary border-border p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-white/80 mb-1">Total Balance</p>
              <h2 className="text-5xl font-bold text-primary">
                1,250 OCE
              </h2>
              <p className="text-lg text-white/60 mt-1">≈ $625.00 USD</p>
            </div>
            <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-success">
            <ArrowUpRight className="h-4 w-4" />
            <span className="text-sm font-medium text-white">+12.5% this month</span>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-100 border-blue-200 p-6 hover:shadow-lg transition-all">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Compliance Status</p>
              <h3 className="text-2xl font-bold text-deep-blue">Certified</h3>
            </div>
            <div className="h-12 w-12 rounded-xl bg-success/20 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Active ESG compliance maintained
          </p>
        </Card>

        <Card className="bg-blue-200 border-blue-300 p-6 hover:shadow-lg transition-all">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Market Value</p>
              <h3 className="text-2xl font-bold text-deep-blue">$23.50</h3>
            </div>
            <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Activity className="h-6 w-6 text-primary" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Per credit (24h average)
          </p>
        </Card>

        <Card className="bg-blue-100 border-blue-200 p-6 hover:shadow-lg transition-all">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">ADR Missions</p>
              <h3 className="text-2xl font-bold text-deep-blue">3 Active</h3>
            </div>
            <div className="h-12 w-12 rounded-xl bg-warning/20 flex items-center justify-center">
              <Activity className="h-6 w-6 text-warning" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Total debris cleared: 500kg
          </p>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-white border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[
            {
              action: "Credit Purchase",
              amount: "+150 OCE",
              time: "2 hours ago",
              type: "buy",
            },
            {
              action: "ADR Mission Completed",
              amount: "+75 OCE",
              time: "5 hours ago",
              type: "mission",
            },
            {
              action: "ESG Report Generated",
              amount: "Q4 2024",
              time: "1 day ago",
              type: "report",
            },
          ].map((activity, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <div>
                <p className="font-medium text-foreground">{activity.action}</p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
              <div
                className={`font-semibold ${
                  activity.type === "buy"
                    ? "text-primary"
                    : activity.type === "mission"
                    ? "text-success"
                    : "text-muted-foreground"
                }`}
              >
                {activity.amount}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
