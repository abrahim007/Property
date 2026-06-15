import { useState, useEffect } from 'react';
import { 
  Building2, 
  PieChart, 
  Scale, 
  Users, 
  Calendar, 
  Calculator, 
  HelpCircle, 
  Presentation, 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Bookmark, 
  FolderLock,
  ArrowRight,
  Compass,
  FileText
} from 'lucide-react';

// Components
import OverviewTab from './components/OverviewTab';
import FundingTab from './components/FundingTab';
import LegalTab from './components/LegalTab';
import MoaAoaTab from './components/MoaAoaTab';
import OperationalTab from './components/OperationalTab';
import RoadmapTab from './components/RoadmapTab';
import CalculatorTab from './components/CalculatorTab';
import FaqTab from './components/FaqTab';
import PlanTab from './components/PlanTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [presentationMode, setPresentationMode] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!presentationMode) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        setPresentationMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [presentationMode, currentSlide]);

  const tabs = [
    { id: 'overview', label: 'পরিচিতি ও ভিশন', icon: <Building2 className="h-4 w-4" /> },
    { id: 'plan', label: 'ব্যবসায়িক পরিকল্পনা', icon: <Compass className="h-4 w-4" /> },
    { id: 'funding', label: 'বিনিয়োগ ও পুঁজি', icon: <PieChart className="h-4 w-4" /> },
    { id: 'legal', label: 'আইনি নিবন্ধন (A-Z)', icon: <Scale className="h-4 w-4" /> },
    { id: 'moa-aoa', label: 'MoA & AoA খসড়া', icon: <FileText className="h-4 w-4" /> },
    { id: 'operational', label: 'চলমান পরিচালনা', icon: <Users className="h-4 w-4" /> },
    { id: 'roadmap', label: '২৪ মাসের রোড়ম্যাপ', icon: <Calendar className="h-4 w-4" /> },
    { id: 'calculator', label: 'ডিল ক্যালকুলেটর', icon: <Calculator className="h-4 w-4" /> },
    { id: 'faq', label: 'প্রশ্নোত্তর ফোরাম', icon: <HelpCircle className="h-4 w-4" /> }
  ];

  // Slide declarations for Presentation Mode
  const slides = [
    {
      title: "শাহজালাল অ্যাসোসিয়েশন (Shahjalal Association)",
      subtitle: "সিলেটে যৌথ পদ্ধতিতে ভূমি ও সম্পদ প্রপার্টি প্রজেক্ট পরিকল্পনার রূপরেখা",
      category: "শুভ আরম্ভ",
      content: (
        <div className="text-center space-y-8 max-w-4xl mx-auto py-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs text-emerald-400 font-semibold uppercase">
            সিলেট রিয়েল এস্টেট স্টার্টআপ
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-normal">
            শাহজালাল অ্যাসোসিয়েশন
          </h1>
          <p className="text-lg sm:text-2xl text-slate-350 font-sans max-w-2xl mx-auto leading-relaxed">
            সিলেটের ২৫ জন সম্মানিত পরিচালক ও ২৫ জন শেয়ারহোল্ডারের সম্মিলিত মূলধন নিয়ে ১.৭৫ কোটি টাকার ল্যান্ড প্রজেক্ট।
          </p>
          <div className="pt-8 grid grid-cols-3 gap-6 text-center max-w-3xl mx-auto border-t border-slate-800">
            <div>
              <p className="text-slate-450 text-xs sm:text-sm uppercase tracking-wide">১. পরিচালক দল</p>
              <p className="text-xl sm:text-3xl font-extrabold text-emerald-400 mt-1">২৫ জন (৫L করে)</p>
            </div>
            <div>
              <p className="text-slate-450 text-xs sm:text-sm uppercase tracking-wide">২. শেয়ারহোল্ডার দল</p>
              <p className="text-xl sm:text-3xl font-extrabold text-sky-400 mt-1">২৫ জন (২L করে)</p>
            </div>
            <div>
              <p className="text-slate-450 text-xs sm:text-sm uppercase tracking-wide">৩. মোট তহবিল</p>
              <p className="text-xl sm:text-3xl font-extrabold text-emerald-400 mt-1">১.৭৫ কোটি BDT</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "আমাদের মূল ভিশন ও ডিল কৌশল",
      subtitle: "৫০ জনের টিম কেন রিয়েল এস্টেট বাজারে অপরাজেয় থাকবে?",
      category: "মূল কৌশল",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left py-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-slate-850 pb-2">১. ল্যান্ড একুইজিশন (সিলেট হটস্পট)</h3>
            <p className="text-sm text-slate-350 leading-relaxed">
              সিলেট সিটি কর্পোরেশনের বর্ধিত এলাকা এবং সংলগ্ন হাই-ডিমান্ড রোড (যেমন: এয়ারপোর্ট রোড, খাদিম নগর বিসিক, বটেশ্বর, হরিপুরের কাঁচা ও টিলাভাত জমি) নগদ ১.৭৫ কোটি তহবিলের ক্ষমতাবলে বাজারদরের চেয়ে ২০-৩০% সস্তা দরে কিনব।
            </p>
            <div className="p-3.5 bg-slate-850 rounded-xl space-y-1">
              <span className="text-[10px] uppercase font-bold text-emerald-400">সুবিধা:</span>
              <p className="text-xs text-slate-350">পূর্ণ নগদ পেমেন্ট ক্ষমতা বড় ডিসকাউন্টের সুযোগ এনে দেবে।</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-slate-850 pb-2">২. ভ্যালু অ্যাডিশন (সংস্কার ও ডিক্লারেশন)</h3>
            <p className="text-sm text-slate-350 leading-relaxed">
              জমি ভরাট, সীমানা প্রাচীর দিয়ে কোম্পানির প্রপার্টি সাইনবোর্ড দেওয়া। প্রয়োজনে বড় রিয়েল এস্টেট কোম্পানির সাথে ৫০:৫০ ফ্ল্যাট মেকিং পার্টনারশিপে যাওয়া যা দীর্ঘমেয়াদী এবং সুরক্ষিত মুনাফা রিলিজ করবে।
            </p>
            <div className="p-3.5 bg-slate-850 rounded-xl space-y-1">
              <span className="text-[10px] uppercase font-bold text-sky-400">সুবিধা:</span>
              <p className="text-xs text-slate-350">৫০ সদস্যের নেটওয়ার্ক থেকে সহজেই সঠিক ক্রেতা ও রিসোর্স পাওয়া যাবে।</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "শেয়ার মূলধন অনুপাত ও মালিকানা কাঠামো",
      subtitle: "৭১.৪৩% পরিচালকদের দল ও ২৮.৫৭% সাধারণ শেয়ারহোল্ডারদের ফান্ড",
      category: "পুঁজি বণ্টন",
      content: (
        <div className="space-y-8 max-w-4xl mx-auto py-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-850 p-6 rounded-2xl border border-slate-800">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">বিনিয়োগ ও মালিকানা ব্রেকডাউন:</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>২৫ জন ডিরেক্টর (২৫ × ৫ লক্ষ):</span>
                  <span className="font-bold text-emerald-400">১,২৫,০০,০০০ টাকা (৭১.৪৩%)</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span>২৫ জন শেয়ারহোল্ডার (২৫ × ২ লক্ষ):</span>
                  <span className="font-bold text-blue-400">৫০,০০,০০০ টাকা (২৮.৫৭%)</span>
                </li>
                <li className="flex justify-between font-extrabold pt-1">
                  <span>সর্বমোট প্রারম্ভিক শেয়ার মূলধন:</span>
                  <span>১,৭৫,০০,০০০ টাকা (১০০%)</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 bg-slate-900 p-5 rounded-xl border border-slate-800 text-xs text-slate-350">
              <h4 className="font-bold text-white text-sm">ভোটাধিকার ও কোম্পানি কন্ট্রোল:</h4>
              <p className="leading-relaxed">
                কোম্পানির নীতিনির্ধারণ ও সিদ্ধান্ত গ্রহণে সরাসরি অংশ নেবেন ২৫ জন ডিরেক্টর। ২৫ জন সাধারণ শেয়ারহোল্ডার কোম্পানির স্লিপিং বা প্যাসিভ পার্টনার হয়ে মুনাফার সমান ভাগ পাবেন কিন্তু দৈনিক ডে-টু-ডে পরিচালনায় কোনো হস্তক্ষেপ করবেন না।
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "প্রাথমিক পুঁজি বণ্টন ও বাজেট বাজেট লুপ",
      subtitle: "সম্পদ ক্রয়ের পূর্বে তহবিলের বিচক্ষণ ও নিরাপদ সুরক্ষাবলয়",
      category: "বাজেট",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left py-4">
          <div className="bg-slate-850 p-5 rounded-xl border border-slate-800 space-y-2">
            <span className="text-2xl font-extrabold text-emerald-400">৮০%</span>
            <h4 className="font-bold text-white text-xs">ভূমি ও সম্পদ অধিগ্রহণ</h4>
            <p className="text-[11px] text-slate-400">১,৪০,০০,০০০ টাকা মূল জমি কেনা ও রেজিস্ট্রি সরকারি ট্যাক্স پرداخت ফি এর কাজে আবশ্যক ফিক্সড ক্যাশ হিসেবে থাকবে।</p>
          </div>
          <div className="bg-slate-850 p-5 rounded-xl border border-slate-800 space-y-2">
            <span className="text-2xl font-extrabold text-blue-400">১০%</span>
            <h4 className="font-bold text-white text-xs">ল্যান্ড ডেভেলপমেন্ট</h4>
            <p className="text-[11px] text-slate-400">১৭,৫০,০০০ টাকা জমি ভরাট, সংস্কার কাজ ও প্লট লে-আউট প্রাচীর তৈরিতে বাৎসরিক বাজেট হিসেবে থাকবে।</p>
          </div>
          <div className="bg-slate-850 p-5 rounded-xl border border-slate-800 space-y-2">
            <span className="text-2xl font-extrabold text-orange-400">৫%</span>
            <h4 className="font-bold text-white text-xs">আইনি ও সরকারি লাইসেন্স</h4>
            <p className="text-[11px] text-slate-400">৮,৭৫,০০০ টাকা কোম্পানি শুরুকরণ, RJSC, ট্রেড লাইসেন্স, ই-টিন, ভ্যাট সার্টিফিকেট ও ল্যান্ড আইনজীবী প্রিসেট ফি।</p>
          </div>
          <div className="bg-slate-855 bg-slate-850 p-5 rounded-xl border border-slate-800 space-y-2">
            <span className="text-2xl font-extrabold text-rose-455 text-rose-500">৫%</span>
            <h4 className="font-bold text-white text-xs">জরুরি রিজার্ভ ফান্ড</h4>
            <p className="text-[11px] text-slate-400">৮,৭৫,০০০ টাকা করপোরেট ব্যাংক একাউন্টে অলস ব্যাকআপ বন্ড হিসেবে থাকবে যা যেকোনো আপদকালীন মামলা বা খরচ সামাল দেবে।</p>
          </div>
        </div>
      )
    },
    {
      title: "আইনি নিবন্ধন ও জয়েন্ট স্টক কোম্পানি (RJSC) প্রসেস",
      subtitle: "প্রাইভেট লিমিটেড কোম্পানি তৈরির ধারাবাহিক ধাপসমূহ (A to Z)",
      category: "আইনি অনুমোদন",
      content: (
        <div className="max-w-5xl mx-auto text-left py-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-855 bg-slate-850 p-5 rounded-xl space-y-3 border border-slate-800">
            <span className="h-6 w-6 rounded-full bg-emerald-950 text-emerald-400 font-bold inline-flex items-center justify-center text-xs">১</span>
            <h4 className="font-semibold text-white text-xs">নামের ছাড়পত্র (Name Clearance)</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">কোম্পানির নাম ইউনিক রেখে RJSC অনলাইনে ২-৩ দিনে অনুমোদনপত্র সংগ্রহ করা যা ৩০ দিন পর্যন্ত আইনি মেয়াদে থাকবে।</p>
          </div>
          <div className="bg-slate-850 p-5 rounded-xl space-y-3 border border-slate-800">
            <span className="h-6 w-6 rounded-full bg-blue-955 bg-blue-950 text-blue-405 text-blue-400 font-bold inline-flex items-center justify-center text-xs">২</span>
            <h4 className="font-semibold text-white text-xs">MoA ও AoA চুক্তি প্রস্তুত করা</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">আইনজীবী দিয়ে কোম্পানির মেমোরেন্ডাম তৈরি করা যেখানে ৫০ সদস্যের ভোট, রিজার্ভ ফান্ডের নিয়ম ও লাভ বা শেয়ার ট্রান্সফারের কঠোর আইনি ধারা স্পষ্ট থাকবে।</p>
          </div>
          <div className="bg-slate-850 p-5 rounded-xl space-y-3 border border-slate-800">
            <span className="h-6 w-6 rounded-full bg-slate-800 text-white font-bold inline-flex items-center justify-center text-xs">৩</span>
            <h4 className="font-semibold text-white text-xs">সার্টিফিকেট অফ ইনকর্পোরেশন</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">ব্যাংক ট্র্যান্সফারের মাধ্যমে ৫০ জন মেম্বার থেকে টাকা কোম্পানির নামে সংগ্রহ করা ও RJSC নিবন্ধন ফি দিয়ে কোম্পানির জন্ম সনদ তথা রেজিস্ট্রেশন চূড়ান্ত করা।</p>
          </div>
        </div>
      )
    },
    {
      title: "সুশৃঙ্খল পরিচালনা ও বোর্ড মেম্বার ম্যানেজমেন্ট",
      subtitle: "২৫ পরিচালক এবং ২৫ সাধারণ শেয়ারহোল্ডার পরিচালনা পর্ষদ মডেল",
      category: "অপারেশন",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left py-4">
          <div className="bg-slate-850 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-white text-xs text-emerald-400">১. সাধারণ পর্ষদ (General Body)</h4>
            <p className="text-[11px] text-slate-350 leading-relaxed">৫০ জন সদস্যের সর্বোচ্চ সিদ্ধান্ত গ্রহণ দল। বছরে একবার বাধ্যতামূলক বার্ষিক সাধারণ সভা (AGM)।</p>
          </div>
          <div className="bg-slate-850 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-white text-xs text-blue-400">২. পরিচালনা পর্ষদ (BOD)</h4>
            <p className="text-[11px] text-slate-350 leading-relaxed">২৫ জন পরিচালকদের বোর্ড যারা বাৎসরিক পরিকল্পনা, বড় ডিল বা জমি নির্বাচনের ত্রৈমাসিক রেজল্যুশন পাস বা ভোট দেবেন।</p>
          </div>
          <div className="bg-slate-850 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-white text-xs text-orange-400">৩. কার্যনির্বাহী কমিটি (EC)</h4>
            <p className="text-[11px] text-slate-350 leading-relaxed">BOD পর্ষদ থেকে নির্বাচিত ৫-৭ সদস্যের অ্যাক্টিভ টিম (MD, CFO, Chairman)। এরা ফিজিক্যাল দরাদরি, ডে-টু-ডে ব্যাংক ট্রানজেকশন পরিচালনা করবেন।</p>
          </div>
        </div>
      )
    },
    {
      title: "যৌথ ব্যাংক অ্যাকাউন্টের নিরাপত্তা রুলস",
      subtitle: "১ টাকাও আত্মসাৎ অসম্ভব করতে ডাবল-সিগনেচার ট্রিপল অডিট পলিসি",
      category: "তহবিল নিয়ন্ত্রণ",
      content: (
        <div className="max-w-4xl mx-auto text-left py-4 space-y-4 bg-slate-850 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-bold text-white">কঠোর ব্যাংকিং ও অডিটিং নীতিমালা:</h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
            <li className="flex gap-2 items-start">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
              <span><strong>ট্রিপল-সিগনেচার ব্যবস্থা:</strong> চেক পাস হতে ৩ জন মনোনীত পরিচালকের মধ্য থেকে কমপক্ষে যেকোনো ২ জনের আসল স্বাক্ষর লাগবে (MD + কোষাধ্যক্ষ/CFO বা MD + চেয়ারম্যান)।</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
              <span><strong>সম্পূর্ণ ব্যাংকিং লেনদেন:</strong> জমির বায়না, রেজিস্ট্রেশন ফি, কর পরিশোধ ইত্যাদিতে কোনো প্রকার ক্যাশ ট্রানজেকশন করা যাবে না, সবই আবশ্যিকভাবে পে-অর্ডারের মাধ্যমে হবে।</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
              <span><strong>নিরীক্ষিত হিসাব (Audited Output):</strong> প্রতি বছর বহিরাগত থার্ড-পার্টি চার্টার্ড একাউন্ট কোম্পানি দ্বারা অডিট সম্পন্ন করে ৫০ জন শেয়ারহোল্ডারকে সরাসরি মেইল ও হোয়াটসঅ্যাপে সরবরাহ।</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "২৪ মাসের প্রজেক্ট বাস্তবায়ন রোড়ম্যাপ",
      subtitle: "প্রস্তুতি থেকে শুরু করে জমি ক্রয়, উন্নয়ন ও চূড়ান্ত প্রস্থান",
      category: "বাস্তবায়ন সময়সীমা",
      content: (
        <div className="max-w-5xl mx-auto text-left py-4 grid grid-cols-1 sm:grid-cols-5 gap-3">
          <div className="bg-slate-850 p-4 rounded-xl space-y-2 border border-slate-800">
            <span className="text-[9px] font-bold text-emerald-400">ধাপ ১ (১-২ মাস)</span>
            <h5 className="font-bold text-white text-xs">আইনি নিবন্ধন</h5>
            <p className="text-[10px] text-slate-400">RJSC রেজিস্ট্রেশন, ২৫ লাখ ও ২ লাখ করে ৫০ জনের ক্যাপিটাল সংগ্রহ সম্পন্ন করে ব্যাংক সচল করা।</p>
          </div>
          <div className="bg-slate-850 p-4 rounded-xl space-y-2 border border-slate-800">
            <span className="text-[9px] font-bold text-blue-400">ধাপ ২ (৩-৪ মাস)</span>
            <h5 className="font-bold text-white text-xs">জমি লবিং ও তল্লাশী</h5>
            <p className="text-[10px] text-slate-400">কম দামে নিষ্কণ্টক জমি খোঁজা, দলিল রেজিস্ট্রি অফিসে তল্লাশী দিয়ে দলিল সঠিক কিনা কো-ভেরিফাই করা।</p>
          </div>
          <div className="bg-slate-850 p-4 rounded-xl space-y-2 border border-slate-800">
            <span className="text-[9px] font-bold text-orange-400">ধাপ ৩ (৫-৬ মাস)</span>
            <h5 className="font-bold text-white text-xs">ক্রয় ও নামজারি</h5>
            <p className="text-[10px] text-slate-400">ভূমি রেজিস্ট্রি সম্পন্নকরণ, দখল নিয়ে সীমানা দেয়াল দিয়ে কোম্পানির সাইনবোর্ড দেওয়া ও নামজারি সম্পন্ন করা।</p>
          </div>
          <div className="bg-slate-850 p-4 rounded-xl space-y-2 border border-slate-800">
            <span className="text-[9px] font-bold text-indigo-400">ধাপ ৪ (৭-১৮ মাস)</span>
            <h5 className="font-bold text-white text-xs">উন্নয়ন ও অপেক্ষা</h5>
            <p className="text-[10px] text-slate-400">জমি ভরাট করা ও প্রপার্টি মূল্যের সর্বোচ্চ বৃদ্ধির জন্য প্যাসিভ হোল্ডিং ধরে রাখা।</p>
          </div>
          <div className="bg-slate-850 p-4 rounded-xl space-y-2 border border-slate-800">
            <span className="text-[9px] font-bold text-rose-455 text-rose-500">ধাপ ৫ (১৯-২৪ মাস)</span>
            <h5 className="font-bold text-white text-xs">বিক্রয় ও লাভ বণ্টন</h5>
            <p className="text-[10px] text-slate-400">ল্যান্ড প্লটিং বা সম্পূর্ণ বিক্রি সম্পন্ন করে ব্যাংক একাউন্টের মাধ্যমে প্রো-রাটা অনুযায়ী মুনাফা বণ্টন।</p>
          </div>
        </div>
      )
    },
    {
      title: "ধন্যবাদ ও প্রশ্নোত্তর অধিবেশন (FAQ)",
      subtitle: "যৌথ আস্থার ভিত্তি সুদৃঢ় থাকুক আমাদের সম্মিলিত উদ্যোগে",
      category: "উপসংহার",
      content: (
        <div className="text-center space-y-6 max-w-3xl mx-auto py-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-emerald-405 from-emerald-400 to-sky-455 to-sky-400 bg-clip-text text-transparent">
            শাহজালাল অ্যাসোসিয়েশন - সিলেটের যৌথ প্রপার্টি উদ্যোগ
          </h2>
          <p className="text-sm sm:text-base text-slate-350">
            আসুন, সিলেটে প্রবাসী ও স্থানীয়দের যৌথ আস্থার ভিত্তিতে বিশ্বস্ত এবং সুপরিচিত প্রপার্টি ব্র‍্যান্ড প্রতিষ্ঠায় আমরা পরস্পর সহযাত্রী হই।
          </p>
          <div className="pt-6">
            <button 
              onClick={() => {
                setPresentationMode(false);
                setActiveTab('faq');
              }}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-800/30 text-xs sm:text-sm"
            >
              সদস্যদের সাধারণ প্রশ্ন সেশন দেখুন
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab onNavigate={(tab) => setActiveTab(tab)} />;
      case 'plan':
        return <PlanTab />;
      case 'funding':
        return <FundingTab />;
      case 'legal':
        return <LegalTab />;
      case 'moa-aoa':
        return <MoaAoaTab />;
      case 'operational':
        return <OperationalTab />;
      case 'roadmap':
        return <RoadmapTab />;
      case 'calculator':
        return <CalculatorTab />;
      case 'faq':
        return <FaqTab />;
      default:
        return <OverviewTab onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <div id="app_root" className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased flex flex-col justify-between">
      
      {/* Top Header */}
      <header id="main_header" className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-3xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-slate-905 bg-slate-900 text-white flex items-center justify-center">
                <Building2 className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-xs sm:text-sm font-extrabold text-slate-900 font-sans tracking-tight">
                  শাহজালাল অ্যাসোসিয়েশন (সিলেট)
                </h1>
                <p className="text-[9px] font-bold text-slate-450 uppercase tracking-widest">
                  Shahjalal Association Sylhet Suite
                </p>
              </div>
            </div>

            {/* Quick Actions / Presentation Toggle button */}
            <div className="flex items-center gap-3">
              <button 
                id="presentation_trigger"
                onClick={() => {
                  setPresentationMode(true);
                  setCurrentSlide(0);
                }}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Presentation className="h-3.5 w-3.5 text-emerald-400" />
                <span className="hidden sm:inline">প্রেজেন্টেশন স্ক্রিনঅন (Slide Mode)</span>
                <span className="sm:hidden">স্লাইড মোড</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content body wrapper */}
      <main id="main_content_area" className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Responsive Tab Panel */}
        <div id="tabs_rail" className="flex flex-wrap gap-1.5 bg-white p-2 rounded-2xl border border-slate-200/80 shadow-3xs justify-start md:justify-center">
          {tabs.map((tab) => (
            <button
              id={`tab_nav_${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex-auto sm:flex-initial justify-center md:justify-start ${
                activeTab === tab.id 
                  ? "bg-slate-900 text-white shadow-xs scale-100" 
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Inner Tab Content with transition animations */}
        <div id="tab_container" className="min-h-[500px]">
          {renderTabContent()}
        </div>

      </main>

      {/* Corporate Bengali Footer */}
      <footer id="app_footer" className="bg-white border-t border-slate-200 mt-12 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-extrabold text-slate-800 text-[11px] uppercase tracking-wide">শাহজালাল অ্যাসোসিয়েশন © ২০২৬</p>
            <p className="text-[10px] text-slate-500 leading-normal">সিলেট সিটি কর্পোরেশন ও কোম্পানি আইন ১৯৯৪ এর আওতাধীন একটি প্রস্তাবিত যৌথ প্রপার্টি লিমিটেড কোম্পানি।</p>
          </div>
          <div className="flex gap-4 items-center text-[10px] uppercase font-bold text-slate-450">
            <span className="flex items-center gap-1"><FolderLock className="h-3 w-3" /> ডাবল সিকিউরিটি অ্যাকাউন্ট</span>
            <span className="h-4 w-px bg-slate-200"></span>
            <span>৫৩ মেম্বার লিমিট সিকিউরড</span>
          </div>
        </div>
      </footer>

      {/* Presentation Fullscreen Overlay Modal (Slideshow UI) */}
      {presentationMode && (
        <div id="presentation_overlay" className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col select-none justify-between animate-fade-in">
          
          {/* Slideshow Top Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-900 bg-slate-900/40 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-xs font-extrabold bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full">
                {slides[currentSlide].category}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                স্লাইড {currentSlide + 1} / {slides.length}
              </span>
            </div>
            
            <button 
              id="presentation_close"
              onClick={() => setPresentationMode(false)}
              className="p-2 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-all cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Slideshow Active Item Canvas */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-10 flex flex-col justify-center items-center">
            <div className="w-full max-w-5xl space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans text-white">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-400">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* Subcontent Wrapper */}
              <div className="pt-6 animate-slide-up">
                {slides[currentSlide].content}
              </div>
            </div>
          </div>

          {/* Slideshow Controls Navigation Footer */}
          <div className="p-4 sm:p-6 border-t border-slate-900 bg-slate-900/40 flex justify-between items-center">
            {/* Slide Progressive Dots */}
            <div className="hidden sm:flex gap-1.5">
              {slides.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-6 bg-emerald-500" : "w-2.5 bg-slate-800"
                  }`}
                ></div>
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <button 
                id="slide_prev"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-800 hover:border-slate-700 hover:bg-slate-900 px-5 py-3 text-xs font-semibold text-slate-350 hover:text-white transition-all disabled:opacity-20 disabled:pointer-events-none"
              >
                <ChevronLeft className="h-4 w-4" /> পিছে যান
              </button>

              <button 
                id="slide_next"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-5 py-3 text-xs font-semibold text-white transition-all disabled:opacity-20 disabled:pointer-events-none shadow-lg shadow-emerald-900/20"
              >
                সামনে যান <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
