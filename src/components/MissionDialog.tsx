import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MissionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => void;
}

export const MissionDialog = ({ open, onOpenChange, onSubmit }: MissionDialogProps) => {
  const [formData, setFormData] = useState({
    tle1: "",
    tle2: "",
    size: "",
    mass: "",
    type: "",
    velocity: "",
    orbitHeight: "",
    inclination: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Initialize ADR Mission</DialogTitle>
          <DialogDescription>
            Enter the debris parameters to calculate removal difficulty and OCE credits
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tle1">TLE Line 1 (Two-Line Element Set)</Label>
            <Input
              id="tle1"
              placeholder="1 25544U 98067A   24001.50000000  .00016717  00000-0  10270-3 0  9005"
              value={formData.tle1}
              onChange={(e) => setFormData({ ...formData, tle1: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tle2">TLE Line 2</Label>
            <Input
              id="tle2"
              placeholder="2 25544  51.6461 339.8014 0002571  48.8179  63.2261 15.48919393123456"
              value={formData.tle2}
              onChange={(e) => setFormData({ ...formData, tle2: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="size">Size (meters)</Label>
              <Input
                id="size"
                type="number"
                step="0.1"
                placeholder="2.5"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mass">Mass (kg)</Label>
              <Input
                id="mass"
                type="number"
                placeholder="200"
                value={formData.mass}
                onChange={(e) => setFormData({ ...formData, mass: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Object Type</Label>
            <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select debris type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="functional-satellite">Functional Satellite</SelectItem>
                <SelectItem value="dead-satellite">Dead Satellite</SelectItem>
                <SelectItem value="rocket-stage">Rocket Stage</SelectItem>
                <SelectItem value="fragment">Fragment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="velocity">Relative Velocity (km/s)</Label>
            <Input
              id="velocity"
              type="number"
              step="0.1"
              placeholder="7.8"
              value={formData.velocity}
              onChange={(e) => setFormData({ ...formData, velocity: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="orbitHeight">Orbit Height (km)</Label>
              <Input
                id="orbitHeight"
                type="number"
                placeholder="400"
                value={formData.orbitHeight}
                onChange={(e) => setFormData({ ...formData, orbitHeight: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inclination">Inclination (degrees)</Label>
              <Input
                id="inclination"
                type="number"
                step="0.1"
                placeholder="51.6"
                value={formData.inclination}
                onChange={(e) => setFormData({ ...formData, inclination: e.target.value })}
                required
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Calculate & Start Mission
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
