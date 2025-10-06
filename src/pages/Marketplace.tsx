import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown } from "lucide-react";

const Marketplace = () => {
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState<"buy" | "sell">("buy");

  const orderBook = [
    { price: 23.52, amount: 150, type: "buy" },
    { price: 23.50, amount: 200, type: "buy" },
    { price: 23.48, amount: 175, type: "buy" },
    { price: 23.55, amount: 125, type: "sell" },
    { price: 23.57, amount: 180, type: "sell" },
    { price: 23.60, amount: 220, type: "sell" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Marketplace
        </h1>
        <p className="text-muted-foreground">
          Trade Orbit Credits with certified operators
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <Card className="lg:col-span-2 bg-white border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-deep-blue">$23.50</h3>
              <p className="text-sm text-success flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                +2.5% (24h)
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              OCE/USD
            </div>
          </div>

          {/* Simulated Chart */}
          <div className="h-64 bg-blue-50 rounded-lg flex items-end justify-around p-4 gap-1">
            {[65, 72, 68, 75, 82, 78, 85, 88, 92, 87, 95, 100].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t transition-all hover:opacity-80"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </Card>

        {/* Trading Panel */}
        <Card className="bg-white border-border p-6">
          <Tabs value={action} onValueChange={(v) => setAction(v as "buy" | "sell")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="buy">Buy</TabsTrigger>
              <TabsTrigger value="sell">Sell</TabsTrigger>
            </TabsList>

            <TabsContent value="buy" className="space-y-4">
              <div className="space-y-2">
                <Label>Amount (OCE)</Label>
                <Input
                  type="number"
                  placeholder="100"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-input border-border"
                />
              </div>
              <div className="space-y-2">
                <Label>Price (USD)</Label>
                <Input
                  type="text"
                  value="23.50"
                  disabled
                  className="bg-input border-border"
                />
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-semibold text-foreground">
                    ${amount ? (parseFloat(amount) * 23.50).toFixed(2) : "0.00"}
                  </span>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                Buy OCE
              </Button>
            </TabsContent>

            <TabsContent value="sell" className="space-y-4">
              <div className="space-y-2">
                <Label>Amount (OCE)</Label>
                <Input
                  type="number"
                  placeholder="100"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-input border-border"
                />
              </div>
              <div className="space-y-2">
                <Label>Price (USD)</Label>
                <Input
                  type="text"
                  value="23.50"
                  disabled
                  className="bg-input border-border"
                />
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-semibold text-foreground">
                    ${amount ? (parseFloat(amount) * 23.50).toFixed(2) : "0.00"}
                  </span>
                </div>
              </div>
              <Button className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                Sell OCE
              </Button>
            </TabsContent>
          </Tabs>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Available Balance: <span className="text-foreground font-semibold">1,250 OCE</span>
            </p>
          </div>
        </Card>
      </div>

      {/* Order Book */}
      <Card className="bg-white border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Order Book</h3>
        <div className="grid grid-cols-3 gap-4 text-sm font-medium text-muted-foreground mb-2">
          <div>Price (USD)</div>
          <div className="text-right">Amount (OCE)</div>
          <div className="text-right">Total (USD)</div>
        </div>
        <div className="space-y-2">
          {orderBook.map((order, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 gap-4 p-3 rounded-lg ${
                order.type === "buy"
                  ? "bg-success/10 hover:bg-success/20"
                  : "bg-destructive/10 hover:bg-destructive/20"
              } transition-colors`}
            >
              <div className="flex items-center gap-2">
                {order.type === "buy" ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                )}
                <span className="font-semibold text-foreground">
                  ${order.price.toFixed(2)}
                </span>
              </div>
              <div className="text-right text-foreground">{order.amount}</div>
              <div className="text-right text-foreground">
                ${(order.price * order.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Marketplace;
