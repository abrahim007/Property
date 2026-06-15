import React, { useState, useEffect } from 'react';
import { Calculator, Plus, Trash2, Save, FileText, Check, Landmark, DollarSign, Wallet } from 'lucide-react';
import { SimulationState } from '../types';

export default function CalculatorTab() {
  const [propertyName, setPropertyName] = useState<string>("খাদিম নগর বিসিক সংলগ্ন ১০ শতক প্লট");
  const [purchasePrice, setPurchasePrice] = useState<number>(11000000); // 1.10 Crore BDT
  const [taxRegistrationPercent, setTaxRegistrationPercent] = useState<number>(11); // 11% Registration tax
  const [developmentHoldingCost, setDevelopmentHoldingCost] = useState<number>(800000); // 8 Lakh BDT
  const [targetSellingPrice, setTargetSellingPrice] = useState<number>(18500000); // 1.85 Crore BDT
  const [holdingPeriodMonths, setHoldingPeriodMonths] = useState<number>(24); // 24 months
  const [annualRentIncome, setAnnualRentIncome] = useState<number>(0); // 0 Rent for raw land

  const [savedScenarios, setSavedScenarios] = useState<SimulationState[]>([]);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  // Load scenarios on mount
  useEffect(() => {
    const saved = localStorage.getItem('property_scenarios');
    if (saved) {
      try {
        setSavedScenarios(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Recalculations
  const registrationCost = purchasePrice * (taxRegistrationPercent / 100);
  const totalCostOfAcquisition = purchasePrice + registrationCost + developmentHoldingCost;
  
  // Total Rent earned over the holding time (converted from annual to actual duration)
  const totalRentEarned = (annualRentIncome / 12) * holdingPeriodMonths;
  const totalRevenue = targetSellingPrice + totalRentEarned;
  
  const netProfit = totalRevenue - totalCostOfAcquisition;
  const roiPercent = totalCostOfAcquisition > 0 ? (netProfit / totalCostOfAcquisition) * 100 : 0;

  // Partner distribution shares based on 25 Directors (BOD) and 25 Shareholders (SH)
  // Total Capital of the venture: 1.75 Crore
  // Profit distribution is proportional to original investment:
  // Director (5L) = 5/175 = 1/35 of total net profit = 2.857% 
  // Shareholder (2L) = 2/175 = 2/175 of total net profit = 1.143%
  const profitPerDirector = netProfit * (500000 / 17500000);
  const profitPerShareholder = netProfit * (200000 / 17500000);

  const saveScenario = () => {
    const newScenario: SimulationState = {
      id: Date.now().toString(),
      propertyName: propertyName || "নতুন প্রপার্টি খসড়া",
      purchasePrice,
      taxRegistrationPercent,
      developmentHoldingCost,
      targetSellingPrice,
      holdingPeriodMonths,
      annualRentIncome,
      timestamp: new Date().toLocaleDateString('bn-BD')
    };

    const updated = [...savedScenarios, newScenario];
    setSavedScenarios(updated);
    localStorage.setItem('property_scenarios', JSON.stringify(updated));
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const deleteScenario = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = savedScenarios.filter(s => s.id !== id);
    setSavedScenarios(updated);
    localStorage.setItem('property_scenarios', JSON.stringify(updated));
  };

  const loadScenario = (sc: SimulationState) => {
    setPropertyName(sc.propertyName);
    setPurchasePrice(sc.purchasePrice);
    setTaxRegistrationPercent(sc.taxRegistrationPercent);
    setDevelopmentHoldingCost(sc.developmentHoldingCost);
    setTargetSellingPrice(sc.targetSellingPrice);
    setHoldingPeriodMonths(sc.holdingPeriodMonths);
    setAnnualRentIncome(sc.annualRentIncome);
  };

  return (
    <div className="space-y-8">
      {/* Visual Calculator Intro Section */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Calculator className="h-5 w-5 text-emerald-600" />
          স্মার্ট প্রপার্টি বাজেট ও লাভ-ক্ষতি ক্যালকুলেটর
        </h2>
        <p className="text-xs text-slate-500 mb-6 max-w-xl">
          যৌথ তহবিলের আওতায় কোনো নির্দিষ্ট প্রপার্টি বা জমি কেনার পূর্বে তা লাভজনক হবে কিনা যাচাই করতে নিচের স্লাইডার ও ইনপুটসমূহ কাস্টমাইজ করুন।
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Inputs Section (2 Cols Wide on large screen) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">প্রপার্টি/প্লটের নাম বা পরিচিতি</label>
                <input 
                  type="text" 
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                  placeholder="এয়ারপোর্ট রোড ১০ শতক প্লট"
                  className="w-full rounded-xl border border-slate-250 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-hidden"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">ধরে রাখার সময়কাল (Holding Months)</label>
                <select 
                  value={holdingPeriodMonths}
                  onChange={(e) => setHoldingPeriodMonths(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-250 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:border-emerald-500 focus:outline-hidden"
                >
                  <option value={6}>৬ মাস</option>
                  <option value={12}>১২ মাস (১ বছর)</option>
                  <option value={18}>১৮ মাস (১.৫ বছর)</option>
                  <option value={24}>২৪ মাস (২ বছর)</option>
                  <option value={36}>৩৬ মাস (৩ বছর)</option>
                  <option value={48}>৪৮ মাস (৪ বছর)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Purchase Price Input */}
              <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-slate-700">১. ক্রয় মূল্য (Purchase Price)</span>
                  <span className="text-xs font-extrabold text-slate-900">{(purchasePrice / 100000).toFixed(1)} লক্ষ BDT</span>
                </div>
                <input 
                  type="range" 
                  min="2000000" 
                  max="16000000" 
                  step="100000"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <input 
                  type="number" 
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="w-full bg-white rounded-lg border border-slate-200 px-2.5 py-1 text-center font-mono text-xs text-slate-800"
                />
              </div>

              {/* Target Selling Price Input */}
              <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-slate-700">৪. বিক্রয় মূল্য (Target Selling Price)</span>
                  <span className="text-xs font-extrabold text-slate-900">{(targetSellingPrice / 100000).toFixed(1)} লক্ষ BDT</span>
                </div>
                <input 
                  type="range" 
                  min="3000000" 
                  max="25000000" 
                  step="100000"
                  value={targetSellingPrice}
                  onChange={(e) => setTargetSellingPrice(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <input 
                  type="number" 
                  value={targetSellingPrice}
                  onChange={(e) => setTargetSellingPrice(Number(e.target.value))}
                  className="w-full bg-white rounded-lg border border-slate-200 px-2.5 py-1 text-center font-mono text-xs text-slate-800"
                />
              </div>

              {/* Development & Holding cost */}
              <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-slate-700">৩. উন্নয়ন ও উন্নয়ন কর্মী খরচ</span>
                  <span className="text-xs font-extrabold text-slate-900">{(developmentHoldingCost / 100000).toFixed(1)} লক্ষ BDT</span>
                </div>
                <input 
                  type="range" 
                  min="50000" 
                  max="4000000" 
                  step="50000"
                  value={developmentHoldingCost}
                  onChange={(e) => setDevelopmentHoldingCost(Number(e.target.value))}
                  className="w-full accent-emerald-650 accent-emerald-600 cursor-pointer"
                />
              </div>

              {/* Registration and tax settings */}
              <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-slate-700">২. রেজিস্ট্রি, ট্যাক্স ও আইনজীবী ফি</span>
                  <span className="text-xs font-extrabold text-slate-900">{taxRegistrationPercent}% ({(registrationCost / 100000).toFixed(1)} লক্ষ)</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="15" 
                  value={taxRegistrationPercent}
                  onChange={(e) => setTaxRegistrationPercent(Number(e.target.value))}
                  className="w-full accent-slate-600 cursor-pointer"
                />
              </div>

              {/* Optional renting space income */}
              <div className="bg-slate-50 p-4 rounded-xl sm:col-span-2 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-emerald-850">খসড়া কমার্শিয়াল বা মাসিক লিজ হতে বাৎসরিক আয় (ঐচ্ছিক)</span>
                  <span className="text-xs font-extrabold text-emerald-600">{(annualRentIncome / 100000).toFixed(1)} লক্ষ BDT / বছর</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="2400000" 
                  step="50000"
                  value={annualRentIncome}
                  onChange={(e) => setAnnualRentIncome(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Save Buttons & Trigger */}
            <div className="flex justify-end items-center gap-3">
              <button 
                onClick={saveScenario}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-5 py-2.5 text-xs font-semibold text-white transition-all"
              >
                {saveSuccess ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    খসড়া ফাইল হিসেবে সংরক্ষিত হয়েছে!
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    এই হিসাবটি ড্রাফট হিসেবে সেভ করুন
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Calculator Results Panel Sidebar (Right 1 col) */}
          <div className="rounded-xl border border-slate-200 bg-slate-950 text-white p-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block border-b border-slate-800 pb-2">
                চূড়ান্ত ডিল সারসংক্ষেপ (Summary)
              </span>

              {/* Capital Breakdown List */}
              <div className="space-y-2.5 text-xs pb-4 border-b border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">১. ক্রয়মূল্য:</span>
                  <span className="font-mono font-bold">{(purchasePrice).toLocaleString('en-IN')} BDT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">২. রেজিস্ট্রেশন ও ট্যাক্স:</span>
                  <span className="font-mono font-bold">{(registrationCost).toLocaleString('en-IN')} BDT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">৩. সংস্কার ও উন্নয়ন খরচ:</span>
                  <span className="font-mono font-bold">{(developmentHoldingCost).toLocaleString('en-IN')} BDT</span>
                </div>
                <div className="flex justify-between border-t border-slate-850 pt-2 font-bold text-white">
                  <span>মোট ডিল বাজেট:</span>
                  <span className="font-mono text-emerald-400">{(totalCostOfAcquisition).toLocaleString('en-IN')} BDT</span>
                </div>
              </div>

              {/* Profit calculation */}
              <div className="space-y-2 pb-4 border-b border-slate-800">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">অর্জিত লিজ ভাড়া ({holdingPeriodMonths} মাস):</span>
                  <span className="font-mono">{(totalRentEarned).toLocaleString('en-IN')} BDT</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">বিক্রয়মূল্য:</span>
                  <span className="font-mono">{(targetSellingPrice).toLocaleString('en-IN')} BDT</span>
                </div>
                <div className="flex justify-between text-xs font-bold pt-1 text-white">
                  <span>সর্বমোট অর্জিত রাজস্ব:</span>
                  <span className="font-mono">{(totalRevenue).toLocaleString('en-IN')} BDT</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">প্রত্যাশিত নীট লাভ (Net Profit)</span>
                <p className={`text-2xl font-bold ${netProfit >= 0 ? 'text-emerald-400' : 'text-rose-450 text-rose-500'}`}>
                  {netProfit >= 0 ? '+' : ''}{(netProfit).toLocaleString('en-IN')} BDT
                </p>
                <p className="text-[10px] text-slate-400">রিটার্ন অফ ইনভেস্টমেন্ট (ROI): <span className="font-bold text-white">{roiPercent.toFixed(1)}%</span></p>
              </div>
            </div>

            {/* Pro-rata returns section */}
            <div className="bg-slate-900 rounded-xl p-3.5 border border-slate-800 space-y-3">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wide">১ জন মেম্বারের প্র-রাটা নেট লভ্যাংশ:</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-[9px] text-slate-400">১ জন পরিচালক (৫L)</p>
                  <p className="font-bold text-emerald-400 text-sm">+{profitPerDirector.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400">১ জন শেয়ারহোল্ডার (২L)</p>
                  <p className="font-bold text-sky-450 text-sky-400 text-sm">+{profitPerShareholder.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Drafts / Scenarios Section */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-1.5">
          <FileText className="h-5 w-5 text-emerald-600" />
          সংরক্ষিত প্রপার্টি প্ল্যানিং খসড়াসমূহ ({savedScenarios.length})
        </h3>
        {savedScenarios.length === 0 ? (
          <div className="text-center py-8 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500">
            এখনো কোনো খসড়া প্রপার্টি হিসাব সেভ করা হয়নি। উপরে কোম্পানির হিসাব কাস্টমাইজ করে ড্রাফট হিসেবে সেভ করুন।
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedScenarios.map((sc) => {
              const scReg = sc.purchasePrice * (sc.taxRegistrationPercent / 100);
              const scTotal = sc.purchasePrice + scReg + sc.developmentHoldingCost;
              const scProfit = sc.targetSellingPrice + ((sc.annualRentIncome / 12) * sc.holdingPeriodMonths) - scTotal;
              const scRoi = scTotal > 0 ? (scProfit / scTotal) * 100 : 0;

              return (
                <div 
                  key={sc.id}
                  onClick={() => loadScenario(sc)}
                  className="rounded-xl border border-slate-200 hover:border-emerald-305 hover:bg-slate-50/50 p-4 transition-all cursor-pointer space-y-3 relative group"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-emerald-700">{sc.propertyName}</h4>
                      <p className="text-[10px] text-slate-550">সেভড ডেট: {sc.timestamp}</p>
                    </div>
                    <button 
                      onClick={(e) => deleteScenario(sc.id, e)}
                      className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1.5 border-t border-slate-100">
                    <div>
                      <p className="text-[10px] text-slate-400">মোট বিনিয়োগ:</p>
                      <p className="font-bold text-slate-900">{(scTotal / 100000).toFixed(1)} লক্ষ BDT</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">প্রত্যাশিত লাভ:</p>
                      <p className="font-bold text-emerald-600">{(scProfit / 100000).toFixed(1)} লক্ষ ({scRoi.toFixed(0)}%)</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
