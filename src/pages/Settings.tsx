import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Globe, Shield, Key, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [apiToken] = useState("OCE-SAT-API-2024-" + Math.random().toString(36).substring(2, 15).toUpperCase());
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiToken);
    setCopied(true);
    toast.success("API Token copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and preferences
        </p>
      </div>

      {/* Profile Settings */}
      <Card className="bg-card border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Profile Information
          </h3>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Organization Name</Label>
              <Input
                defaultValue="Global Satellite Corp"
                className="bg-input border-border"
              />
            </div>
            <div className="space-y-2">
              <Label>Account ID</Label>
              <Input
                defaultValue="OCE-2024-001"
                disabled
                className="bg-input border-border"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              defaultValue="operator@oce.space"
              className="bg-input border-border"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Save Changes
          </Button>
        </div>
      </Card>

      {/* Display Settings */}
      <Card className="bg-card border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Display Settings
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-foreground">Sci-Fi Mode</p>
              <p className="text-sm text-muted-foreground">
                Enable enhanced visual effects and animations
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-foreground">Minimal Mode</p>
              <p className="text-sm text-muted-foreground">
                Simplified interface for faster loading
              </p>
            </div>
            <Switch />
          </div>
          <div className="space-y-2">
            <Label>Language</Label>
            <select className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Japanese</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="bg-card border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Notifications
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-foreground">Mission Updates</p>
              <p className="text-sm text-muted-foreground">
                Get notified about ADR mission progress
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-foreground">Market Alerts</p>
              <p className="text-sm text-muted-foreground">
                Receive alerts for price changes
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-foreground">ESG Reports</p>
              <p className="text-sm text-muted-foreground">
                Notifications when new reports are available
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      {/* API Integration */}
      <Card className="bg-card border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <Key className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            API Integration
          </h3>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Connect your satellite to the OCE platform using this API token.
            Keep it secure and never share it publicly.
          </p>
          <div className="space-y-2">
            <Label>Your API Token</Label>
            <div className="flex gap-2">
              <Input
                value={apiToken}
                readOnly
                className="bg-muted border-border font-mono text-sm"
              />
              <Button 
                variant="outline" 
                size="icon"
                onClick={copyToClipboard}
                className="flex-shrink-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-success" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <h4 className="font-medium text-foreground mb-2 text-sm">Integration Instructions:</h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Copy your API token above</li>
              <li>Configure your satellite software with the token</li>
              <li>Enable data transmission to OCE servers</li>
              <li>Monitor connection status in the dashboard</li>
            </ol>
          </div>
          <Button variant="outline" className="w-full">
            Regenerate Token
          </Button>
        </div>
      </Card>

      {/* Security */}
      <Card className="bg-card border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Security</h3>
        </div>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Two-Factor Authentication
          </Button>
          <Button variant="outline" className="w-full justify-start text-destructive">
            Sign Out
          </Button>
        </div>
      </Card>

      {/* Simulation Notice */}
      <Card className="bg-muted/20 border-border p-4">
        <p className="text-sm text-muted-foreground text-center">
          This is a simulation environment. All data is for demonstration purposes.
        </p>
      </Card>
    </div>
  );
};

export default Settings;
