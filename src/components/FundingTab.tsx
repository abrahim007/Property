import { useState } from 'react';
import { 
  DollarSign, 
  ShieldAlert, 
  PieChart, 
  Landmark, 
  ArrowRight, 
  Activity, 
  Percent, 
  Check, 
  ShieldCheck, 
  Wallet, 
  Coins, 
  Award, 
  Users, 
  Scale, 
  ChevronRight, 
  BookOpen, 
  Star,
  Info,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export default function FundingTab() {
  const [subTab, setSubTab] = useState<'structure' | 'packages' | 'expenses' | 'security'>('structure');
  const [appreciationPercent, setAppreciationPercent] = useState<number>(35); // Default 35% growth
  const [holdingPeriod, setHoldingPeriod] = useState<number>(24); // 24 months

  // Fixed capital variables
  const directorCount = 25;
  const directorContrib = 500000; // 5 Lakh BDT
  const totalDirectorCapital = directorCount * directorContrib; // 1.25 Crore

  const shareholderCount = 25;
  const shareholderContrib = 200000; // 2 Lakh BDT
  const totalShareholderCapital = shareholderCount * shareholderContrib; // 50 Lakh

  const totalCapital = totalDirectorCapital + totalShareholderCapital; // 1.75 Crore

  // Contribution percentages
  const directorPct = (totalDirectorCapital / totalCapital) * 100; // 71.43%
  const shareholderPct = (totalShareholderCapital / totalCapital) * 100; // 28.57%

  // Expected returns
  const estimatedProfit = totalCapital * (appreciationPercent / 100);
  const totalExpectedValue = totalCapital + estimatedProfit;

  const directorTotalProfit = estimatedProfit * (directorPct / 100);
  const shareholderTotalProfit = estimatedProfit * (shareholderPct / 100);

  const profitPerDirector = directorTotalProfit / directorCount;
  const profitPerShareholder = shareholderTotalProfit / shareholderCount;

  const totalReturnPerDirector = directorContrib + profitPerDirector;
  const totalReturnPerShareholder = shareholderContrib + profitPerShareholder;

  // New investment options / packages designed for expansion
  const premiumPackages = [
    {
      id: "pkg-1",
      title: "লন্ডনি গোল্ড মেম্বারশিপ (NRB Gold Class)",
      badge: "জনপ্রিয় ও সর্বোচ্চ নির্ভরযোগ্য",
      currency: "GBP (£) ও BDT",
      minAmount: "£৩,৫০০ (প্রায় ৫.২৫ লক্ষ টাকা)",
      payoutPeriod: "৩ - ৬ মাস (কুইক ফ্লিপ) অথবা ২ বছর (প্লটিং)",
      benefits: [
        "সরাসরি ইউকে বা অন্য দেশ থেকে ফরেন রেমিট্যান্সের মাধ্যমে প্রেরিত টাকার আইনসম্মত ডাবল সিগনেচার প্রটেকশন।",
        "বাংলাদেশ সরকারের ফরেন এক্সচেঞ্জ নীতি মেনে রেমিট্যান্সের ওপর অতিরিক্ত ২.৫% সরকারি নগদ ক্যাশব্যাক সুবিধা।",
        "সিলেটের স্থানীয় যেকোনো ক্রয়কৃত প্রপার্টিতে সরাসরি জমির রেজিস্ট্রি ও নোটারি দলিলে মালিক হিসেবে নাম অন্তর্ভুক্তি।",
        "ড্রোনের মাধ্যমে প্রপার্টি বা ভরাট কাজের প্রতি মাসের লাইভ ভিডিও আপডেট যা হোয়াটসঅ্যাপ বা ইমেইলে সরাসরি প্রেরণ।"
      ],
      tagline: "লন্ডন, নিউ ইয়র্ক বা ইউরোপে অবস্থানরত প্রবাসী সিলেটিদের জন্য ডিজাইনকৃত বিশেষ প্রটেক্টেড ট্রাস্ট।"
    },
    {
      id: "pkg-2",
      title: "তরুণ পেশাদার মাইক্রো-শেয়ার লুপ (Micro-Investment)",
      badge: "নতুনদের জন্য বিশেষভাবে উপযোগী",
      currency: "BDT ৳",
      minAmount: "৳৫০,০০০ - ৳১,০০,০০০ (সীমিত ক্যাটাগরি)",
      payoutPeriod: "১২ - ২৪ মাস",
      benefits: [
        "কম পুঁজিতে সিলেটের উদীয়মান আবাসন ও জমি ব্যবসায় সংযুক্ত হওয়ার অসামান্য সুযোগ।",
        "সহজ কিস্তিতে বিনিয়োগ সম্পন্ন করার বিশেষ সুযোগ (২টি ধাপে ৫০% করে পরিশোধের ব্যবস্থা)।",
        "অন্যান্য পরিচালকদের মতোই বাৎসরিক সাধারণ সভায় (AGM) ভোটাধিকার এবং মতামতের সুযোগ।",
        "পরবর্তীতে কমার্শিয়াল বা প্লটিং প্রোজেক্টে জমি ক্রয়ের সময় ৫% অতিরিক্ত ল্যান্ড মেম্বার ডিসকাউন্ট পাওয়ার সুবিধা।"
      ],
      tagline: "তরুণ উদ্যোক্তা, ফ্রিল্যান্সার বা তরুণ পেশাদারদের ছোট ফান্ড একত্র করে এক অনন্য মালিকানা সৃষ্টি।"
    },
    {
      id: "pkg-3",
      title: "প্রাতিষ্ঠানিক ল্যান্ড বাই-ব্যাক ব্লক (Institutional Block)",
      badge: "উচ্চ কর্পোরেট প্রবৃদ্ধি",
      currency: "BDT ৳",
      minAmount: "৳১০,০০,০০০ - ৳২৫,০০,০০০ (সর্বোচ্চ ৪ জন)",
      payoutPeriod: "২ - ৩ বছর (লক-ইন পিড)",
      benefits: [
        "মালিকানা শেয়ারের পাশাপাশি কোম্পানির সিকিউর্ড ব্যাংক গ্যারান্টি বা ট্রাস্ট বন্ড সিকিউরিটি।",
        "২ বছর মেয়াদ উত্তীর্ণের পর মূল পুঁজি ফেরত চাইলে ৩০ দিনের নোটিশে ১০০% বাই-ব্যাক (ফেরত নেওয়ার) পূর্ণ আইনি গ্যারান্টি।",
        "কোম্পানির যেকোনো ৩ জন সদস্যের সমন্বয়ে গঠিত এক্সিকিউটিভ কমিটির অডিট মেম্বার প্যানেলে সরাসরি চেয়ার অর্জন।",
        "প্রজেক্টের মূল গেট বা কটেজ এরিয়ায় বিনিয়োগকারী প্রতিষ্ঠানের লোগো বা ব্রোঞ্জ প্লেট সম্মাননা স্থাপন।"
      ],
      tagline: "যারা বড় অংকের ফান্ড অলস না রেখে আবাসন খাতে সর্বোচ্চ নিরাপত্তায় বিনিয়োগ নিশ্চিত করতে চান।"
    }
  ];

  // Detailed Expense Breakdowns (Physical allocation of 1.75 Crore BDT)
  const physicalExpenses = [
    {
      category: "১. জমি এবং প্রপার্টি অধিগ্রহণ ব্যয় (Land Acquisition)",
      allocation: "৮০% (১,৪০,০০,০০০ টাকা)",
      details: [
        { label: "খাস বা ব্যক্তি মালিকানাধীন সস্তা মূল জমি ক্রয়", scale: "১,১০,০০,০০০ - ১,১৫,০০,০০০ টাকা" },
        { label: "সাব-রেজিস্ট্রি ফি, সরকারি স্ট্যাম্প ডিউটি, ও স্থানীয় ভ্যাট-ট্যাক্স", scale: "১২,০০,০০০ - ১৫,০০,০০০ টাকা" },
        { label: "মধ্যস্থতাকারী দালালের নামমাত্র কমিশন ও যাতায়াত খরচ", scale: "৩,০০,০০০ টাকা" },
        { label: "রিয়েল এস্টেট স্ক্রুটিনি, আইনজীবী ফ্যাকিং ও সিএস/আরএস পর্চা তল্লাশি", scale: "২,০০,০০০ টাকা" }
      ],
      summary: "১.৭৫ কোটির সিংহভাগ খরচ সরাসরি জমি ক্রয়ে ও দাপ্তরিক রেজিস্ট্রিতে ব্যবহৃত হবে যাতে প্রতিটি মেম্বারের আইনি স্বত্ব সম্পূর্ণ নিষ্কণ্টক থাকে।"
    },
    {
      category: "২. উন্নয়ন, ড্রেজিং ও ভরাট কাজ (Development & Land Fill)",
      allocation: "১০% (১৭,৫০,০০০ টাকা)",
      details: [
        { label: "নিচু বা ঢালু বিল জমিতে ড্রেজার মেশিন দিয়ে নদীর বালু বা মাটি ফেলানো", scale: "৮,০০,০০০ - ১০,০০,০০০ টাকা" },
        { label: "সীমানা বাউন্ডারি ওয়াল খাড়া করা ও কাটা তারের বেড়া স্থাপন", scale: "৪,০০,০০০ টাকা" },
        { label: "অভ্যন্তরীণ রাস্তা তৈরি (১২ ফুট চওড়া ইটের সলিং বা গ্রেভেল সোয়ার্ম)", scale: "২,৫০,০০০ টাকা" },
        { label: "শাহজালাল প্রবেশদ্বার (Main Entrance Gate) ও কোম্পানির ব্র্যান্ড বোর্ড", scale: "১,০০,০০০ টাকা" }
      ],
      summary: "কাঁচা জমি কিনে ভরাট ও বাউন্ডারি করে প্লট হিসেবে গুছিয়ে বিক্রি করলে বাজারমূল্য তাৎক্ষণিক ৩০% থেকে ৫০% পর্যন্ত বৃদ্ধি পায়।"
    },
    {
      category: "৩. আইনি সজ্জা, আরজেএসসি ও বাৎসরিক অডিট (Legal & Compliance)",
      allocation: "৫% (৮,৭৫,০০০ টাকা)",
      details: [
        { label: "RJSC প্রাইভেট লিমিটেড কোম্পানি নিবন্ধন ও স্ট্যাম্প ডিউটি ফি", scale: "৩,৫০,০০০ টাকা" },
        { label: "করপোরেট ট্রেড লাইসেন্স ও NBR ই-টিন, ভ্যাট (BIN) রেজিস্ট্রি", scale: "১,২৫,০০০ টাকা" },
        { label: "বাৎসরিক বাধ্যতামূলক চার্টার্ড অ্যাকাউন্ট্যান্ট (CA Audit Report) ফি", scale: "১,৫০,০০০ টাকা" },
        { label: "আইনি পরামর্শদাতা এডভোকেট ও ট্রাস্টি স্বাক্ষর ওভারহেড খরচ", scale: "২,৫০,০০০ টাকা" }
      ],
      summary: "কোম্পানিকে শতভাগ সরকারি নিয়ম মেনে পরিচালনা করার জন্য এটি প্রযোজ্য। আইনি জটিলতা পরিহার করতে আমরা RJSC লুপ সম্পূর্ণ ফ্রেশ রাখব।"
    },
    {
      category: "৪. জরুরি আপৎকালীন ব্যাংক রিজার্ভ (Emergency Contingency)",
      allocation: "৫% (৮,৭৫,০০০ টাকা)",
      details: [
        { label: "ব্যাংক অ্যাকাউন্টে যেকোনো জরুরি ও আইনি আইটেমের লিকুইড সাপোর্ট", scale: "৪,০০,০০০ টাকা" },
        { label: "জরুরি নামজারি বা সার্ভেয়ার বিসংবাদ নিষ্পত্তি ফান্ড", scale: "২,৭৫,০০০ টাকা" },
        { label: "সিলেটের বৃষ্টি বা প্রাকৃতিক দুর্যোগে জমি সুরক্ষার অতিরিক্ত ব্রেকআপ", scale: "২,০০,০০০ টাকা" }
      ],
      summary: "এটি সরাসরি ব্যাংকের ডাবল সিগনেচার কারেন্ট হিসাবে রিজার্ভ রাখা থাকবে যা প্রজেক্টের মুনাফা বা জরুরি প্রয়োজন ব্যতীত স্পর্শ করা হবে না।"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Top Value Banner Card */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
              <Sparkles className="h-3 w-3 animate-spin text-emerald-400" /> শাহজালাল ফাইনান্সিয়াল পোর্টফোলিও
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">বিনিয়োগ ও পুঁজি বিস্তারিত নীল নকশা</h1>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              শাহজালাল অ্যাসোসিয়েশন এর ১.৭৫ কোটি টাকার ল্যান্ড প্রজেক্টের ফান্ড ম্যানেজমেন্ট, স্বচ্ছতা, এবং বিনিয়োগকারীদের টাকার শতভাগ আইনি সুরক্ষার পূর্ণ বিবরণী। নিচে নতুন উদ্ভাবনী পরিকল্পনা, বাজেট ডিস্ট্রিবিউশন এবং নিরাপত্তা রক্ষাকবচসমূহ বিস্তারিত আলোকপাত করা হলো।
            </p>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-xs border border-slate-700/50 rounded-xl p-5 shrink-0 w-full lg:w-auto flex flex-col justify-center text-center lg:text-left">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block mb-1">মোট যৌথ তহবিল (Total Asset Pool)</span>
            <span className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">৳১.৭৫ কোটি BDT</span>
            <div className="mt-2 text-[10px] text-slate-300 font-semibold border-t border-slate-700 pt-1.5 flex justify-between gap-4">
              <span>৫০ জন মূল সদস্য</span>
              <span>১০০% ক্যাশ সোর্সড</span>
            </div>
          </div>
        </div>

        {/* Detailed Horizontal Sub-tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-6 mt-6 border-t border-slate-800">
          <button 
            onClick={() => setSubTab('structure')}
            className={`cursor-pointer flex items-center justify-center gap-2 p-3.5 rounded-xl text-xs font-extrabold transition-all ${
              subTab === 'structure' 
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/50" 
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <PieChart className="h-4 w-4" />
            মূলধন ও ROI সিমুলেটর
          </button>

          <button 
            onClick={() => setSubTab('packages')}
            className={`cursor-pointer flex items-center justify-center gap-2 p-3.5 rounded-xl text-xs font-extrabold transition-all relative ${
              subTab === 'packages' 
                ? "bg-emerald-600 text-white shadow-md" 
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Star className="h-4 w-4 text-yellow-400" />
            নতুন বিনিয়োগ প্যাকেজ
            <span className="absolute -top-1.5 -right-1 bg-rose-600 text-[8px] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-bounce">NEW</span>
          </button>

          <button 
            onClick={() => setSubTab('expenses')}
            className={`cursor-pointer flex items-center justify-center gap-2 p-3.5 rounded-xl text-xs font-extrabold transition-all ${
              subTab === 'expenses' 
                ? "bg-emerald-600 text-white shadow-md" 
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            বাজেট ও ফিজিক্যাল খরচ
          </button>

          <button 
            onClick={() => setSubTab('security')}
            className={`cursor-pointer flex items-center justify-center gap-2 p-3.5 rounded-xl text-xs font-extrabold transition-all ${
              subTab === 'security' 
                ? "bg-emerald-600 text-white shadow-md" 
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            নিরাপত্তা ও এক্সিট পলিসি
          </button>
        </div>
      </div>

      {/* Dynamic Content Switching Area */}

      {/* SUB TAB 1: CAPITAL STRUCTURE & SIMULATOR */}
      {subTab === 'structure' && (
        <div className="space-y-8">
          
          {/* Section: Interactive Capital allocation */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <PieChart className="h-5 w-5 text-emerald-600" />
              শেয়ার মূলধন কাঠামো (Capital Allocation)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Custom SVG circular representation and progress indicator */}
              <div className="space-y-6">
                <div className="p-4 bg-slate-50 rounded-xl space-y-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">পুঁজি অনুপাত (Capital Ratio)</span>
                  
                  {/* Stacked Percentage Bar */}
                  <div className="h-6 w-full rounded-full bg-slate-200 overflow-hidden flex shadow-inner">
                    <div 
                      className="bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white transition-all duration-500"
                      style={{ width: `${directorPct}%` }}
                    >
                      {directorPct.toFixed(1)}%
                    </div>
                    <div 
                      className="bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white transition-all duration-500"
                      style={{ width: `${shareholderPct}%` }}
                    >
                      {shareholderPct.toFixed(1)}%
                    </div>
                  </div>

                  {/* Legends with breakdown */}
                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block"></span>
                        <span className="text-xs font-bold text-slate-800">পরিচালক মূলধন (Class A)</span>
                      </div>
                      <p className="text-lg font-extrabold text-emerald-700">১.২৫ কোটি টাকা</p>
                      <p className="text-[11px] text-slate-500">২৫ জন × ৫ টি শেয়ার (৳১,০০,০০০ প্রতি শেয়ার)</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-blue-500 inline-block"></span>
                        <span className="text-xs font-bold text-slate-800">শেয়ারহোল্ডার মূলধন (Class B)</span>
                      </div>
                      <p className="text-lg font-extrabold text-blue-700">৫০ লক্ষ টাকা</p>
                      <p className="text-[11px] text-slate-500">২৫ জন × ২ টি শেয়ার (৳১,০০,০০০ প্রতি শেয়ার)</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-dashed border-emerald-200 bg-emerald-50/30 p-4 space-y-2">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
                    <Percent className="h-3.5 w-3.5" />   মালিকানা ও ভোটাধিকার নীতিমালা
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4 leading-relaxed">
                    <li><strong>শেয়ার প্রতি মূল্য:</strong> প্রতিটি শেয়ারের ফেস ভ্যালু বা নির্ধারিত মূল্য ১ লক্ষ (৳১,০০,০০০) টাকা।</li>
                    <li><strong>পরিচালক হওয়ার ন্যূনতম শর্ত:</strong> কোম্পানি আইন অনুযায়ী একজন পরিচালক (Director) হতে হলে ন্যূনতম ৫টি শেয়ার (যার মোট মূল্য ৳৫,০০,০০০ টাকা) নিজ নামে ধারণ করা বাধ্যতামূলক।</li>
                    <li><strong>মালিকানা অনুপাত:</strong> পরিচালকদের সম্মিলিত মালিকানা ৭১.৪৩% (১২৫টি শেয়ার) এবং সাধারণ শেয়ারহোল্ডারদের সম্মিলিত মালিকানা ২৮.৫৭% (৫০টি শেয়ার)।</li>
                    <li><strong>পরিচালনা পর্ষদ:</strong> ২৫ জন ডিরেক্টরই কোম্পানির নীতিনির্ধারণ ও সিদ্ধান্ত গ্রহণে সরাসরি অংশ নিতে পারবেন (১ ডিরেক্টর = ১ ভোট)।</li>
                  </ul>
                </div>
              </div>

              {/* Right: Asset Allocation Cards */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-800 tracking-wider">১.৭৫ কোটির প্রাথমিক বণ্টন পরিকল্পনা:</h3>
                
                <div className="space-y-3">
                  {[
                    { name: "প্রপার্টি ও ল্যান্ড অধিগ্রহণ (৮০%)", amount: 14000000, desc: "মূল প্রপার্টি ক্রয়, রেজিস্ট্রি ফি ও স্থানীয় সরকারি ট্যাক্স", color: "bg-emerald-600" },
                    { name: "ডেভেলপমেন্ট ও রক্ষণাবেক্ষণ (১০%)", amount: 1750000, desc: "জমি ভরাট, সীমানা প্রাচীর বা প্রপার্টি সংস্কার কাজ", color: "bg-blue-600" },
                    { name: "আইনি, রেজিস্ট্রেশন ও অডিট (৫%)", amount: 875000, desc: "কোম্পানি তৈরি, ট্রেড লাইসেন্স, আইনি পরামর্শ ফি", color: "bg-amber-500" },
                    { name: "জরুরি ব্যাকআপ রিজার্ভ (৫%)", amount: 875000, desc: "জরুরি অবস্থা মোকাবেলা বা সুযোগ বুঝে অতিরিক্ত জমি কেনা", color: "bg-rose-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                      <div className={`mt-1 h-3 w-3 rounded-full ${item.color} shrink-0`}></div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                          <span className="text-xs font-extrabold text-slate-900">
                            {item.amount >= 10000000 ? `${(item.amount / 10000000).toFixed(1)} কোটি` : `${(item.amount / 100000).toFixed(1)} লক্ষ`} টাকা
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic ROI Growth Simulator Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs relative">
            <div className="absolute top-0 right-0 p-3 text-slate-300">
              <Activity className="h-10 w-10 animate-pulse text-emerald-500/10" />
            </div>
            
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-emerald-600" />
              ইন্টারেক্টিভ লাভ-ক্ষতি ও রিটার্ন প্রক্ষেপণ (ROI Projection Simulator)
            </h2>
            <p className="text-xs text-slate-500 mb-6 max-w-xl">
              নিচের স্লাইডার ব্যবহার করে প্রপার্টি বা ল্যান্ডের আনুমানিক মূল্য বৃদ্ধি পরিবর্তন করুন এবং প্রতি পরিচালক ও শেয়ারহোল্ডারের সম্ভাব্য লাভ হিসেব করুন।
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Controls Column */}
              <div className="rounded-xl bg-slate-50 p-5 space-y-6 lg:col-span-1">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-700">জমি/প্রপার্টির প্রত্যাশিত মূল্য বৃদ্ধি (%)</span>
                    <span className="font-extrabold text-emerald-600 bg-emerald-100 px-2.5 py-0.5 rounded-full text-xs">+{appreciationPercent}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="150" 
                    value={appreciationPercent}
                    onChange={(e) => setAppreciationPercent(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>১০% (সাধারণ)</span>
                    <span>৮০% (উচ্চ)</span>
                    <span>১৫০% (বিস্ফোরক)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-700">ধরে রাখার সময়কাল (Holding Period)</span>
                    <span className="font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full text-xs">{holdingPeriod} মাস</span>
                  </div>
                  <input 
                    type="range" 
                    min="6" 
                    max="60" 
                    value={holdingPeriod}
                    onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>৬ মাস</span>
                    <span>৩ বছর</span>
                    <span>৫ বছর (দীর্ঘমেয়াদী)</span>
                  </div>
                </div>

                <div className="rounded-lg bg-yellow-50/50 p-3 border border-yellow-100 flex items-start gap-2 text-[11px] text-amber-800 leading-relaxed">
                  <ShieldAlert className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>নোট:</strong> গণনাটি প্রজেক্টের সামগ্রিক আনুপাতিক (Pro-rata) মালিকানা ভিত্তির উপর ভিত্তি করে প্রাক্কলন করা হয়েছে। ট্যাক্স ও প্রপার্টি রেজিস্ট্রেশন খরচ পরিবর্তনশীল হতে পারে।
                  </span>
                </div>
              </div>

              {/* Results Summary Columns */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Directors Result Card */}
                <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-xs space-y-4 hover:border-emerald-300 transition-all flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> ১ জন পরিচালক (বিনিয়োগ: ৫ লক্ষ | ৫টি শেয়ার)
                    </span>
                    
                    <h3 className="text-xs font-semibold text-slate-500/80 uppercase tracking-wide pt-1">প্রত্যাশিত নীট মুনাফা (Net Profit)</h3>
                    <p className="text-2xl md:text-3xl font-extrabold text-emerald-600">
                      +{Math.round(profitPerDirector).toLocaleString('en-IN')} BDT
                    </p>
                    <p className="text-[11px] text-slate-500">মূলধনের ওপর {appreciationPercent}% সরাসরি লভ্যাংশ</p>
                  </div>

                  <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
                    <span className="text-slate-500">মোট উত্তোলন যোগ্য রিটার্ন:</span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {Math.round(totalReturnPerDirector).toLocaleString('en-IN')} BDT
                    </span>
                  </div>
                </div>

                {/* Shareholders Result Card */}
                <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-xs space-y-4 hover:border-blue-300 transition-all flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span> ১ জন শেয়ারহোল্ডার (বিনিয়োগ: ২ লক্ষ | ২টি শেয়ার)
                    </span>
                    
                    <h3 className="text-xs font-semibold text-slate-500/80 uppercase tracking-wide pt-1">প্রত্যাশিত নীট মুনাফা (Net Profit)</h3>
                    <p className="text-2xl md:text-3xl font-extrabold text-blue-600">
                      +{Math.round(profitPerShareholder).toLocaleString('en-IN')} BDT
                    </p>
                    <p className="text-[11px] text-slate-500">মূলধনের ওপর {appreciationPercent}% সরাসরি লভ্যাংশ</p>
                  </div>

                  <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
                    <span className="text-slate-500">মোট উত্তোলন যোগ্য রিটার্ন:</span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      {Math.round(totalReturnPerShareholder).toLocaleString('en-IN')} BDT
                    </span>
                  </div>
                </div>

                {/* Total Venture Projections Overview */}
                <div className="sm:col-span-2 rounded-xl bg-slate-900 text-white p-5 space-y-3 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-450 tracking-wider">মোট প্রত্যাশিত বিক্রয় মূল্য ({holdingPeriod} মাস পর)</span>
                    <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-sky-450 bg-clip-text text-transparent">
                      {Math.round(totalExpectedValue).toLocaleString('en-IN')} BDT
                    </p>
                  </div>
                  <div className="flex gap-6 text-xs font-medium border-l border-slate-800 lg:pl-6">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase">মোট প্রারম্ভিক পুঁজি</p>
                      <p className="text-sm font-bold text-white">১.৭৫ কোটি BDT</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase">মোট অর্জিত মুনাফা</p>
                      <p className="text-sm font-bold text-emerald-400">+{Math.round(estimatedProfit).toLocaleString('en-IN')} BDT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* SUB TAB 2: SPECIAL INVESTMENT PACKAGES */}
      {subTab === 'packages' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3">
            <h3 className="text-md font-bold text-slate-950 flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              ভবিষ্যত তহবিল বৃদ্ধিতে নতুন বিশেষ বিনিয়োগ রূপরেখা (New Funding Strategy & Packages)
            </h3>
            <p className="text-xs text-slate-650 leading-relaxed">
              শাহজালাল প্রজেক্টের ১.৭৫ কোটি ফান্ডিং সলিড অবস্থায় সচল হওয়া সত্ত্বেও বাজারে বাড়তি সুযোগ লুফে নিতে বা ভবিষ্যতে প্রজেক্ট এগিয়ে নিতে আমরা ৩টি নতুন বিশেষ প্যাকেজ উদ্ভাবন করেছি। এই ক্যাটাগরিগুলো প্রবাসী ট্রাস্ট ডেভেলপমেন্ট ও যুব পেশাদারদের সাথে যৌথ বন্ধন সুদৃঢ় করবে।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {premiumPackages.map((pkg) => (
              <div key={pkg.id} className="rounded-2xl border border-slate-205 bg-white p-6 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  
                  {/* Top area */}
                  <div className="space-y-1.5">
                    <span className="inline-block rounded-md bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-800 uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">{pkg.title}</h4>
                    <p className="text-[11px] text-slate-400 font-mono">মুদ্রা: {pkg.currency}</p>
                  </div>

                  {/* Financial terms Box */}
                  <div className="bg-slate-50 rounded-xl p-3 text-xs grid grid-cols-2 gap-2">
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase">প্যাকেজ কোটা:</span>
                      <span className="font-extrabold text-slate-800">{pkg.minAmount}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase">পayout মেয়াদ:</span>
                      <span className="font-extrabold text-slate-800">{pkg.payoutPeriod}</span>
                    </div>
                  </div>

                  {/* Benefits description */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-extrabold text-slate-900 block uppercase tracking-wide">বিশেষ সুরক্ষাসমূহ ও সুবিধা:</span>
                    <ul className="space-y-2 pl-4 text-xs text-slate-650 list-disc leading-relaxed">
                      {pkg.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card footer */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    "{pkg.tagline}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Remittance Guidelines for Londoni Investors */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-6 flex flex-col md:flex-row gap-5 items-start">
            <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700 shrink-0">
              <Landmark className="h-6 w-6" />
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
              <h4 className="font-bold text-emerald-950 font-sans">লন্ডনি ও ইউকে প্রবাসীদের সরাসরি পাউন্ডে অর্থ পাঠানোর পদ্ধতি</h4>
              <p>
                যেহেতু আমাদের লক্ষ্য প্রবাসীদের কষ্টার্জিত অর্থের নিরাপত্তা দেয়া, তাই বিদেশের ব্যাংকিং চ্যানেল (যেমন: Sonali Bank UK, Brac Saajan, Tabapay, bKash remittance partner) থেকে সরাসরি আমাদের বিশেষ প্রজেক্ট ব্যাংক হিসাবে টাকা পাঠানো যাবে। এতে সরকারি ২.৫% থেকে ৫% পর্যন্ত বৈদেশিক রেমিটেন্সের নগদ প্রণোদনা এবং সরাসরি ইউকে অ্যাডভোকেটদের মাধ্যমে সাক্ষরিত স্ট্যাম্প পেপারে জয়েন্ট লিগ্যাল ডিড (Joint Legal Deed of Trust) প্রদান নিশ্চিত করা হবে।
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUB TAB 3: DETAILED PHYSICAL EXPENSES */}
      {subTab === 'expenses' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-205 bg-white p-6 space-y-3">
            <h3 className="text-md font-bold text-slate-950 flex items-center gap-2">
              <Layers className="h-5 w-5 text-emerald-600" />
              ভৌত প্রজেক্ট প্রাক্কলন ও বাজেট বণ্টন বিশ্লেষণ (Physical Budget Breakdown)
            </h3>
            <p className="text-xs text-slate-650 leading-relaxed">
              আমরা ১.৭৫ কোটি টাকার সম্পূর্ণ তহবিলটিকে শুধুমাত্র কাগুজে পরিকল্পনাতেই সীমাবদ্ধ রাখব না। প্রতিটি টাকার সদ্ব্যবহার নিচে প্রতিটি খাতে নিখুঁত আইটেম অনুযায়ী বণ্টন করা হলো, যা সিলেটের রিয়েল এস্টেট বাজারের বর্তমান ড্রেজিং ও সাব-রেজিস্ট্রেশন ফির সাথে পুরোপুরি মিল রেখে সাজানো।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {physicalExpenses.map((exp, index) => (
              <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <h4 className="font-extrabold text-xs text-slate-900">{exp.category}</h4>
                  <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">{exp.allocation}</span>
                </div>

                {/* Sub items */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">বিস্তারিত আইটেম বণ্টন:</span>
                  <div className="space-y-2">
                    {exp.details.map((detail, ind) => (
                      <div key={ind} className="flex justify-between items-start text-xs border-b border-slate-50 pb-1.5">
                        <span className="text-slate-650">• {detail.label}</span>
                        <span className="font-bold text-slate-800 font-mono shrink-0 pl-4">{detail.scale}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explanation block */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                  <strong>কৌশলগত কার্যকারিতা:</strong> {exp.summary}
                </div>
              </div>
            ))}
          </div>

          {/* Regional Landfill Cost Guidance (Sylhet Specific) */}
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50/50 p-6 flex flex-col md:flex-row gap-5 items-start">
            <div className="rounded-xl bg-yellow-100 p-3 text-amber-600 shrink-0">
              <Info className="h-6 w-6" />
            </div>
            <div className="space-y-1.5 text-xs text-amber-900 leading-relaxed">
              <h4 className="font-bold text-amber-950 font-sans">সিলেটের অঞ্চলভেদে বালি ভরাট ও বাউন্ডারি প্রাচীর নির্মাণ সতর্কতা</h4>
              <p>
                সিলেট সদর, দক্ষিণ সুরমা ও হরিপুর সংলগ্ন অনেক জমিই সাধারণত নিচু বা হাওর সংলগ্ন পতিত হয়ে থাকে। এসকল জমিতে বালি বা লাল মাটি ভরাটের জন্য ড্রেজিং বা ডাম্প ট্রাকের ভাড়ার দর কষাকষি আগে থেকেই করতে হবে। আমরা বাউন্ডারি তৈরি করাকালীন সীমানা পিলার স্থাপনে দক্ষ সার্ভেয়ার (কানুনগো) নিয়োজিত করব যাতে ভবিষ্যতে আশেপাশের ল্যান্ড হোল্ডারের সাথে কো-অর্ডিনেট করতে কোনো প্রকার সীমানা জটিলতা না পোহাতে হয়।
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUB TAB 4: INVESTOR SAFETY & EXIT PROTOCOL */}
      {subTab === 'security' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-205 bg-white p-6 space-y-3">
            <h3 className="text-md font-bold text-slate-950 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              বিনিয়োগকারীদের লুপ-প্রটেক্টেড নিরাপত্তা রক্ষাকবচ ও এক্সিট পলিসি
            </h3>
            <p className="text-xs text-slate-650 leading-relaxed">
              শাহজালাল প্রজেক্টে অর্থ রাখার অর্থ হলো সেটি পুরোপুরি নিষ্কণ্টক আইনি ছায়ায় সুরক্ষিত। সদস্যদের পুঁজির নিরাপত্তা দিতে আমাদের কোম্পানির ৪টি মূল নিরাপত্তা কোর ফিল্টার ও মেম্বার এক্সিট রেগুলেশন সুনির্দিষ্ট করা হয়েছে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Box: 4 Core Security Shields */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-5">
              <h4 className="font-bold text-xs text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-600" /> ৪ স্তর বিশিষ্ট পুঁজি ও ব্যাংক হিসাব নিরাপত্তা প্রোটোকল
              </h4>

              <div className="space-y-4">
                <div className="flex gap-3 items-start text-xs">
                  <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">১</span>
                  <div className="space-y-1">
                    <strong className="text-slate-800">যৌথ ডাবল/ট্রিপল ব্যাংক সিগনেচার (Double Signature Verification)</strong>
                    <p className="text-slate-500 leading-normal">কোম্পানির ব্যাংক অ্যাকাউন্ট থেকে কোনো বড় ফান্ড বা পে-অর্ডার রিলিজ করতে অন্তত ৩ জন মনোনীত বোর্ড ডিরেক্টর (চেয়ারম্যান, এমডি এবং কোষাধক্ষ্য) এর যৌথ স্বাক্ষরের আইনি ব্যবস্থার বাধ্যতামূলক চালুকরণ।</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs">
                  <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">২</span>
                  <div className="space-y-1">
                    <strong className="text-slate-800">জমির স্বত্ব দলিল অনুপাত (Pro-rata Title Deeds)</strong>
                    <p className="text-slate-500 leading-normal">ক্রয়কৃত প্রতিটি মূল দলিলের রেজিস্ট্রি করার সময় সকল নিয়মতান্ত্রিক ডিরেক্টরের মালিকানার অনুপাত স্পষ্ট উল্লেখ রাখা হবে অথবা যৌথ নোটারি চুক্তির মাধ্যমে জমির ভৌত মালিকানা আইনের ধারায় ভাগ করে দেওয়া হবে।</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs">
                  <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">৩</span>
                  <div className="space-y-1">
                    <strong className="text-slate-800">১০০% ডিজিটাল ও ব্যাংক ট্রানজেকশন ট্রেইল (Audit Trail)</strong>
                    <p className="text-slate-500 leading-normal">অ্যাসোসিয়েশনে কোনো প্রকার নগদ টাকা (Cash In Hand) নেওয়া বা দেওয়া হবে না। সমস্ত মূলধন সরাসরি পে-অর্ডার বা সরাসরি ব্যাংক-টু-ব্যাংক চ্যানেল একাউন্টে স্থানান্তরের লিখিত বিবরণী থাকবে যা লাইভ অডিট করা সম্ভব।</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs">
                  <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">৪</span>
                  <div className="space-y-1">
                    <strong className="text-slate-800">মাসে মাসে অডিট এবং জুম মিটিং (Transparency Loop)</strong>
                    <p className="text-slate-500 leading-normal">প্রতিমাসের প্রথম শনিবারে অনলাইনে গুগল মিট বা জুম মিটিং এর মাধ্যমে ডিরেক্টর ও শেয়ারহোল্ডারদের সাথে ব্যাংকের ফিন্যান্সিয়াল ব্যালেন্স শিট, জমির উন্নয়ন ও সার্বিক অগ্রগতি উন্মুক্তভাবে ওপেন শেয়ার করা হবে।</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Member Exit & Share Transfer Policy */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-bold text-xs text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
                  <Scale className="h-4 w-4 text-emerald-600" /> প্রজেক্ট এক্সিট ও শেয়ার হস্তান্তর নীতিমালা (Exit & Buyback Protocols)
                </h4>
                <p className="text-xs text-slate-650 leading-relaxed">
                  বাস্তব জীবনে যেকোনো ডিরেক্টর বা বাহ্যিক শেয়ারহোল্ডারের পারিবারিক বা জরুরি নগদ টাকার প্রয়োজনের তাগিদে প্রজেক্ট চলাকালীন অবস্থায় বিনিয়োগ তুলে নেওয়ার আবশ্যকীয় প্রটোকল নিচে উল্লেখ করা হলো:
                </p>

                <div className="space-y-3 pt-2 text-[11px] leading-relaxed text-slate-600">
                  <div className="bg-slate-50 p-3 rounded-lg border-l-4 border-emerald-500 space-y-1">
                    <strong className="text-slate-800">১. অভ্যন্তরীণ প্রথম অপশন অগ্রাধিকার (Internal Pre-emption Option)</strong>
                    <p>কোনো ডিরেক্টর বের হতে চাইলে তার শেয়ার প্রথমে অন্য কোনো বর্তমান ৫০ জন সদস্য কিনে নেওয়ার জন্য উন্মুক্ত করা হবে। এতে বাইরের মানুষ যুক্ত না করে কো-মেম্বারশিপের নিবিড়তা রক্ষা পাবে।</p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border-l-4 border-teal-500 space-y-1">
                    <strong className="text-slate-800">২. তৃতীয়পক্ষ হস্তান্তর ক্ষমতা (Third Party Assignment Rights)</strong>
                    <p>শেয়ার হস্তান্তরকারী সদস্য তার জায়গায় বিশ্বস্ত নতুন কোনো বন্ধু বা আত্মীয়কে ডিরেক্টর ক্যাটাগরিতে যুক্ত করতে পারবেন। বোর্ড রেজুলেশনের মাধ্যমে তার নামের ছাড়পত্র নতুন সদস্যের নামে আরজেএসসি তে আপডেট করা হবে।</p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border-l-4 border-indigo-500 space-y-1">
                    <strong className="text-slate-800">৩. কোম্পানির রিজার্ভ বাই-ব্যাক (Company Native Buy-Back)</strong>
                    <p>যদি প্রজেক্ট থেকে বের হয়ে যাওয়ার পরও মেম্বারের শেয়ার কেউ কিনতে আগ্রহী না হয়, তবে আমাদের আপৎকালীন ৫% ব্যাংক রিজার্ভ ফান্ড থেকে তার ক্রয়মূল্যে কোম্পানির পক্ষ থেকে শেয়ারটি ফেরত কিনে কোম্পানি ট্রেজারী শেয়ার হিসেবে সংরক্ষণ করবে।</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl text-xs space-y-1.5 border border-emerald-100/50 mt-4 font-sans">
                <span className="font-bold uppercase tracking-wider block text-[10px] text-emerald-950 flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" /> শাহজালাল সিকিউরিটি নিশ্চয়তা
                </span>
                <p className="leading-relaxed">
                  ৫৩ মেম্বার আইনি অংশীদারী দলিল এবং ট্রাস্ট বা ডাবল সিগনেচার লুপের মাধ্যমে ১.৭৫ কোটি টাকা সিলেটে জমি ক্রয়ের জন্য আইনসম্মতভাবে সম্পূর্ণ সুরক্ষিত থাকবে।
                </p>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
