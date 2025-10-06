import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      title: "Q4 2024 ESG Report",
      company: "Global Satellite Corp",
      missions: 5,
      debris: "850kg",
      date: "Dec 31, 2024",
      status: "Certified",
    },
    {
      title: "Q3 2024 ESG Report",
      company: "Global Satellite Corp",
      missions: 3,
      debris: "520kg",
      date: "Sep 30, 2024",
      status: "Certified",
    },
    {
      title: "Annual Compliance 2024",
      company: "Global Satellite Corp",
      missions: 12,
      debris: "2,400kg",
      date: "Dec 31, 2024",
      status: "Certified",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            ESG Reports
          </h1>
          <p className="text-muted-foreground">
            Environmental, Social, and Governance compliance documentation
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
          <FileText className="h-4 w-4 mr-2" />
          Generate New Report
        </Button>
      </div>

      {/* Featured Report */}
      <Card className="bg-blue-50 border-blue-200 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm text-success font-semibold">
                  OCE Compliant
                </span>
              </div>
              <h2 className="text-2xl font-bold text-deep-blue mb-1">
                Annual ESG Report 2024
              </h2>
              <p className="text-muted-foreground">Global Satellite Corp</p>
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/placeholder.svg';
                link.download = 'OCE_ESG_Report_2024.pdf';
                link.click();
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <p className="text-sm text-muted-foreground mb-1">
                ADR Missions Financed
              </p>
              <p className="text-2xl font-bold text-deep-blue">12</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <p className="text-sm text-muted-foreground mb-1">
                Total Debris Removed
              </p>
              <p className="text-2xl font-bold text-primary">2,400kg</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <p className="text-sm text-muted-foreground mb-1">
                Environmental Impact Score
              </p>
              <p className="text-2xl font-bold text-success">95/100</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Report List */}
      <Card className="bg-white border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Report Archive
        </h3>
        <div className="space-y-3">
          {reports.map((report, i) => (
            <div
              key={i}
              className="p-5 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      {report.title}
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-success/20 text-success">
                      {report.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {report.company} • {report.date}
                  </p>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Missions: </span>
                      <span className="text-foreground font-medium">
                        {report.missions}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Debris: </span>
                      <span className="text-foreground font-medium">
                        {report.debris}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-4">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Compliance Badge */}
      <Card className="bg-white border-border p-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-success/20 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-success" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-deep-blue mb-1">
              ESG Compliance Status
            </h3>
            <p className="text-sm text-muted-foreground">
              Your organization maintains full OCE certification. All debris removal
              activities are properly documented and verified.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Reports;
