// src/components/ReportDetailModal.tsx
import React from 'react';
import { BaselineReport } from '@/lib/types'; // Adjust path if your types are elsewhere
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { FaTimes } from 'react-icons/fa';

interface ReportDetailModalProps {
  report: BaselineReport | null;
  isOpen: boolean;
  onClose: () => void;
}

const ReportDetailModal: React.FC<ReportDetailModalProps> = ({ report, isOpen, onClose }) => {
  if (!report) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] p-0 max-h-[90vh] flex flex-col">
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-blue-700">
            Baseline Study Report Summary
          </DialogTitle>
          <DialogDescription className="text-gray-500 mt-1">
            Key insights and outcomes from our study in Minna.
          </DialogDescription>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-full">
              <FaTimes className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>

        <ScrollArea className="flex-grow p-6">
          <div className="space-y-8"> {/* Increased spacing between main sections */}
            <section aria-labelledby="report-overview">
              <h3 id="report-overview" className="text-xl font-semibold text-blue-600 mb-3">Overview</h3>
              <p className="text-gray-700 leading-relaxed">{report.overview}</p>
            </section>

            <section aria-labelledby="report-summary">
              <h3 id="report-summary" className="text-xl font-semibold text-blue-600 mb-3">Summary of Findings</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                {report.summaryOfFindings.map((finding, index) => (
                  <li key={index}>{finding}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="report-recommendations">
              <h3 id="report-recommendations" className="text-xl font-semibold text-blue-600 mb-3">Key Recommendations</h3>
              {report.keyRecommendations.map((rec, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1 text-lg">{rec.title}</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4 leading-relaxed">
                    {rec.points.map((point, pIndex) => (
                      <li key={pIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section aria-labelledby="report-future-goals">
              <h3 id="report-future-goals" className="text-xl font-semibold text-blue-600 mb-3">Suggestions for Future Goals</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                {report.futureGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ReportDetailModal;
