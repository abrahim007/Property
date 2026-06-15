import { useState } from 'react';
import { 
  FileText, 
  Settings, 
  Printer, 
  Copy, 
  Check, 
  Users, 
  Building, 
  Scale, 
  TrendingUp, 
  ShieldAlert, 
  Briefcase, 
  Coins, 
  Download, 
  Info,
  Calendar,
  Layers,
  Award,
  ChevronDown,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function MoaAoaTab() {
  const [activeDocument, setActiveDocument] = useState<'moa' | 'aoa' | 'subscribers'>('moa');
  const [companyName, setCompanyName] = useState<string>('SHAHJALAL LAND DEVELOPMENT & ASSETS LIMITED');
  const [companyNameBangla, setCompanyNameBangla] = useState<string>('শাহজালাল ল্যান্ড ডেভেলপমেন্ট অ্যান্ড অ্যাসেটস লিমিটেড');
  const [authorizedCapital, setAuthorizedCapital] = useState<number>(50000000); // 5 Crore BDT Default
  const [shareValue, setShareValue] = useState<number>(100000); // BDT 100,000 per share (1 Lakh) Standard
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [witnessName, setWitnessName] = useState<string>('Advocate Chowdhury Mahbubur Rahman');
  const [witnessAddress, setWitnessAddress] = useState<string>('Zilla Court Bar Association, Sylhet, Bangladesh');

  // Subscriber base config
  const directorCount = 25;
  const directorContrib = 500000; // 5 Lakh
  const shareholderCount = 25;
  const shareholderContrib = 200000; // 2 Lakh

  const totalDirectorShares = (directorCount * directorContrib) / shareValue; // 125,000 shares
  const totalShareholderShares = (shareholderCount * shareholderContrib) / shareValue; // 50,000 shares
  const totalPaidUpCapital = (directorCount * directorContrib) + (shareholderCount * shareholderContrib); // 1.75 Crore BDT
  const totalShares = totalPaidUpCapital / shareValue; // 175,000 shares

  // Dynamic signatories array editable by user
  const [signatories, setSignatories] = useState(() => {
    const list = [];
    // 25 Directors
    for (let i = 1; i <= directorCount; i++) {
      list.push({
        id: `dir-${i}`,
        serial: i,
        name: `Director ${i}`,
        fatherName: `Father of Director ${i}`,
        address: `House ${10 + i}, Road ${i % 3 === 0 ? 'Airport Road' : i % 3 === 1 ? 'Bateshwar' : 'Khadim Nagar'}, Sylhet`,
        nid: `19859115${1000 + i}`,
        nationality: 'Bangladeshi',
        shares: directorContrib / shareValue,
        class: 'Director (BOD)'
      });
    }
    // 25 Shareholders
    for (let i = 1; i <= shareholderCount; i++) {
      list.push({
        id: `sh-${i}`,
        serial: directorCount + i,
        name: `Shareholder ${i}`,
        fatherName: `Father of Shareholder ${i}`,
        address: `Village ${5 + i}, Bateshwar, South Surma / Sylhet Sadar`,
        nid: `19909115${4000 + i}`,
        nationality: 'Bangladeshi / NRB UK',
        shares: shareholderContrib / shareValue,
        class: 'General Shareholder (Passive)'
      });
    }
    return list;
  });

  const handleEditSignatory = (id: string, field: string, value: any) => {
    setSignatories(prev => prev.map(sig => {
      if (sig.id === id) {
        return { ...sig, [field]: value };
      }
      return sig;
    }));
  };

  const handleCopyText = (textId: string) => {
    const element = document.getElementById(textId);
    if (element) {
      navigator.clipboard.writeText(element.innerText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    const printContent = document.getElementById('printable-legal-document');
    if (printContent) {
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload(); // Quick refresh to restore react bindings safely
    }
  };

  return (
    <div className="space-y-8 animate-fade-in text-slate-800">
      
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold">
              <Scale className="h-4.5 w-4.5" /> RJSC কমপ্লায়েন্স ড্রাফটার
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">MoA ও AoA খসড়া প্রস্তুতকরণ মডিউল</h1>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              বাংলাদেশ কোম্পানি আইন ১৯৯৪ এর অধীনে সিলেটের যৌথ ভূমি প্রজেক্টের জন্য একটি পূর্ণাঙ্গ **Memorandum of Association (MoA)** এবং **Articles of Association (AoA)** ড্রাফটিং করা হলো। নিচে প্যারামিটার ও সদস্যদের বিস্তারিত বিবরণী কাস্টমাইজ করুন এবং প্রিন্ট বা কপি করে নিন।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button 
              onClick={handlePrint}
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-3 text-xs font-bold text-white border border-slate-700 transition"
            >
              <Printer className="h-4 w-4 text-emerald-400" />
              প্রিন্ট ফ্রেন্ডলি PDF মোড
            </button>
            <button 
              onClick={() => handleCopyText('printable-legal-document')}
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-4 py-3 text-xs font-bold text-white transition shadow-lg shadow-emerald-950/20"
            >
              {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {isCopied ? 'কপি সফল হয়েছে!' : 'সম্পূর্ণ দলিল কপি করুন'}
            </button>
          </div>
        </div>
      </div>

      {/* Configuration & Controls Accordion */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-3xs space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
          <Settings className="h-4 w-4 text-emerald-600" />
          কোম্পানি ও ক্যাপিটাল প্যারামিটার কাস্টমাইজ করুন (Real-time Customization)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-500 block uppercase">কোম্পানির নাম (ইংরেজি)</label>
            <input 
              type="text" 
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value.toUpperCase())}
              className="w-full text-xs font-sans font-bold border border-slate-250 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-500 block uppercase">কোম্পানির নাম (বাংলা)</label>
            <input 
              type="text" 
              value={companyNameBangla}
              onChange={(e) => setCompanyNameBangla(e.target.value)}
              className="w-full text-xs font-bold border border-slate-250 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-500 block uppercase">অনুমোদিত মূলধন (Authorized Capital BDT)</label>
            <input 
              type="number" 
              value={authorizedCapital}
              onChange={(e) => setAuthorizedCapital(Number(e.target.value))}
              className="w-full text-xs font-sans font-semibold border border-slate-250 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-500 block uppercase">শেয়ার প্রতি ফেস ভ্যালু (Face Value BDT)</label>
            <select
              value={shareValue}
              onChange={(e) => {
                const newVal = Number(e.target.value);
                setShareValue(newVal);
                setSignatories(prev => prev.map(sig => ({
                  ...sig,
                  shares: sig.class.includes('Director') ? (directorContrib / newVal) : (shareholderContrib / newVal)
                })));
              }}
              className="w-full text-xs font-sans font-semibold border border-slate-250 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-emerald-500"
            >
              <option value={100}>৳ ১০০ টাকা</option>
              <option value={1000}>৳ ১,০০০ টাকা</option>
              <option value={100000}>৳ ১,০০,০০০ টাকা (১ লাখ - কোম্পানি স্ট্যান্ডার্ড)</option>
            </select>
          </div>
        </div>

        {/* Informational Warning */}
        <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900 leading-relaxed flex items-start gap-2">
          <Info className="h-4.5 w-4.5 text-indigo-600 shrink-0 mt-0.5" />
          <span>
            <strong>অনুবাদ ও ড্রাফটিং নোট:</strong> RJSC-তে কোম্পানি আইন ১৯৯৪ এর ফর্ম অনুযায়ী স্মারকলিপি (MoA) সাধারণত ইংরেজি কর্পোরেট ফরম্যাটে সাবমিট করতে হয়। তবে আস্থার স্বচ্ছতার জন্য নিচে কাস্টমাইজেশন প্যানেল সহ সম্পূর্ণ দ্বিভাষিক বঙ্গানুবাদসহ আইনি ধারা সংযুক্ত করা হয়েছে যা সরাসরি সাব-রেজিস্ট্রার বা ব্যাংক নোটারাইজেশনে ব্যবহারযোগ্য।
          </span>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex border-b border-slate-200 gap-4">
        {[
          { id: 'moa', label: '১. স্মারকলিপি (Memorandum of Association)', count: 'MoA' },
          { id: 'aoa', label: '২. সংঘবিধি (Articles of Association)', count: 'AoA' },
          { id: 'subscribers', label: '৩. ৫০ জন সাবস্ক্রাইবার ও সাক্ষীদের তালিকা', count: '৫০ জন' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveDocument(tab.id as any)}
            className={`cursor-pointer pb-3 text-xs font-extrabold border-b-2 transition-all relative ${
              activeDocument === tab.id 
                ? "border-emerald-600 text-slate-900 font-extrabold" 
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab.label}
            <span className="ml-1.5 rounded-md bg-slate-100 text-slate-600 px-1.5 py-0.5 text-[10px]">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* MAIN VIEWPORT PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Side: Summary Panel / Legal Context (1 span) */}
        <div className="lg:col-span-1 rounded-2xl border border-slate-200 bg-white p-5 space-y-6 self-start">
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest pb-2 border-b border-slate-100">
              খসড়া ফাইলের টেকনিক্যাল ড্যাশবোর্ড
            </h4>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                <span className="text-slate-500">অনুমোদিত শেয়ার সংখ্যা:</span>
                <span className="font-bold text-slate-900 font-sans">
                  {(authorizedCapital / shareValue).toLocaleString('en-IN')} টি
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                <span className="text-slate-500">পরিশোধিত শেয়ার সংখ্যা:</span>
                <span className="font-bold text-slate-900 font-sans">
                  {totalShares.toLocaleString('en-IN')} টি
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                <span className="text-slate-500">মোট পেইড-আপ মূলধন (৳):</span>
                <span className="font-bold text-emerald-600 font-sans">
                  ৳{totalPaidUpCapital.toLocaleString('en-IN')} BDT
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                <span className="text-slate-500">পরিচালক গ্রুপ শেয়ার:</span>
                <span className="font-bold text-slate-900 font-sans">
                  {totalDirectorShares.toLocaleString('en-IN')} ({((totalDirectorShares / totalShares) * 100).toFixed(1)}%)
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                <span className="text-slate-500">শেয়ারহোল্ডার গ্রুপ শেয়ার:</span>
                <span className="font-bold text-slate-900 font-sans">
                  {totalShareholderShares.toLocaleString('en-IN')} ({((totalShareholderShares / totalShares) * 100).toFixed(1)}%)
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 border border-slate-150 text-[11px] text-slate-600 leading-relaxed space-y-1">
              <p className="font-bold text-slate-900">🔔 শেয়ার বরাদ্দ নীতিমালা:</p>
              <p>• <strong>কোয়ালিফিকেশন শেয়ার:</strong> ডিরেক্টর হওয়ার জন্য কমপক্ষে <strong>৫টি শেয়ার (৳৫ লাখ)</strong> থাকতে হবে।</p>
              <p>• <strong>সাধারণ মেম্বার:</strong> শেয়ারহোল্ডাররা চাইলে সর্বনিম্ন <strong>১টি শেয়ার (৳১ লাখ)</strong> দিয়েও যুক্ত হতে পারবেন। কোনো আইনি বাধা বা সমস্যা নেই।</p>
            </div>
          </div>

          <div className="space-y-2.5 pt-2 border-t border-slate-100">
            <h4 className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wide">
              স্বাক্ষী ও অ্যাডভোকেট তথ্য:
            </h4>
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <span className="text-[9px] text-slate-500 block uppercase font-bold">সার্টিফাইড এডভোকেট নাম:</span>
                <input 
                  type="text" 
                  value={witnessName}
                  onChange={(e) => setWitnessName(e.target.value)}
                  className="w-full text-xs font-bold border border-slate-200 rounded-lg px-2.5 py-1.5"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] text-slate-500 block uppercase font-bold">অ্যাডভোকেট ঠিকানা:</span>
                <textarea 
                  value={witnessAddress}
                  onChange={(e) => setWitnessAddress(e.target.value)}
                  className="w-full text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 h-16 font-sans resize-none"
                />
              </div>
            </div>
          </div>

          {/* Download button */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <div className="rounded-lg bg-emerald-50/50 p-3 border border-emerald-100 text-[11px] text-emerald-800 leading-relaxed">
              <strong>আইনি নোটিশ:</strong> MoA (স্মারকলিপি) হলো কোম্পানির বাহ্যিক চার্টার এবং AoA (সংঘবিধি) হলো অভ্যন্তরীণ বাইল বাই-লজ। RJSC-তে এই দলিলগুলির প্রথম ও শেষ পৃষ্ঠায় নির্ধারিত সরকারি মূল্যের নন-জুডিশিয়াল স্ট্যাম্প সাটাতে হয়।
            </div>
          </div>
        </div>

        {/* Right Side: Document Engine (3 spans) */}
        <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs max-h-[750px] overflow-y-auto relative scrollbar-thin">
          
          <div id="printable-legal-document" className="space-y-6 font-sans text-slate-900 py-4 px-2 select-text">
            
            {/* 1. VIEW OF MEMORANDUM OF ASSOCIATION (MoA) */}
            {activeDocument === 'moa' && (
              <div className="space-y-8 text-xs sm:text-sm leading-relaxed" id="moa-text-content">
                
                {/* Master Title */}
                <div className="text-center space-y-3 border-b-2 border-slate-900 pb-6">
                  <p className="text-slate-500 text-xs tracking-widest uppercase font-bold text-center">THE COMPANIES ACT, 1994</p>
                  <p className="text-slate-500 text-xs font-bold text-center">(A COMPANY LIMITED BY SHARES)</p>
                  <h1 className="text-lg md:text-xl font-bold uppercase tracking-tight text-center">MEMORANDUM OF ASSOCIATION</h1>
                  <h2 className="text-md md:text-lg font-black text-center text-slate-900 uppercase">OF</h2>
                  <h3 className="text-base md:text-lg font-black text-emerald-800 tracking-wide text-center uppercase border border-slate-200 py-2.5 bg-slate-50 rounded-xl px-4 inline-block font-sans">
                    {companyName}
                  </h3>
                  <p className="text-center text-xs font-semibold text-slate-700">
                    (বাংলা প্রতিশব্দ: <strong>{companyNameBangla}</strong>)
                  </p>
                </div>

                {/* Clause I */}
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-950 uppercase text-xs border-b border-slate-200 pb-1 font-sans">
                    CLAUSE I: NAME OF THE COMPANY
                  </h4>
                  <p className="font-bold">
                    The name of the Company is <span className="text-emerald-800 font-sans font-black">"{companyName}"</span>.
                  </p>
                  <p className="text-slate-600">
                    <strong>বঙ্গানুবাদ (নাম ধারা):</strong> কোম্পানির নাম হইবে <strong>"{companyNameBangla}"</strong>।
                  </p>
                </div>

                {/* Clause II */}
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-950 uppercase text-xs border-b border-slate-200 pb-1 font-sans">
                    CLAUSE II: REGISTERED OFFICE
                  </h4>
                  <p className="font-bold">
                    The Registered Office of the Company will be situated in the district of **Sylhet, Bangladesh**.
                  </p>
                  <p className="text-slate-600">
                    <strong>বঙ্গানুবাদ (ঠিকানা ধারা):</strong> কোম্পানির নিবন্ধিত কার্যালয় (Registered Office) গণপ্রজাতন্ত্রী বাংলাদেশের <strong>সিলেট জেলায় / সিটি কর্পোরেশন এলাকায়</strong> অবস্থিত হইবে।
                  </p>
                </div>

                {/* Clause III: Objects (tailored for property, land acquisition, plotting, dredging) */}
                <div className="space-y-3">
                  <h4 className="font-extrabold text-slate-950 uppercase text-xs border-b border-slate-200 pb-1 font-sans">
                    CLAUSE III: MEMORANDUM OF OBJECTS (উদ্দেশ্যাবলী)
                  </h4>
                  <p className="font-bold text-slate-900">
                    The dynamic objects for which the Company is established are to perform all or any of the following activities in Bangladesh and abroad:
                  </p>
                  <p className="text-[11px] text-slate-500 leading-normal italic">
                    (কোম্পানি আইন অনুযায়ী নিম্মোক্ত এলাকাসমূহে রিয়েল এস্টেট, জমি কেনাবেচা, ড্রেজিং ও উন্নয়ন ব্যবসা পরিচালনার সকল আইনি ক্ষমতা কোম্পানির থাকিবে:)
                  </p>

                  <ol className="space-y-4 pl-4 list-decimal text-xs font-sans leading-relaxed text-slate-800">
                    <li>
                      <strong>Land Acquisition, Purchase & Plotting:</strong> To buy, sell, acquire, sub-divide, plot, clear, lease, exchange or otherwise construct and develop land, estates, agricultural areas, open marshes, river-adjacent grounds, or hillsides in Sylhet District and other territorial regions in Bangladesh for agricultural, commercial, industrial, residential, and tourism setups.
                      <p className="text-slate-600 text-[11px] font-sans mt-1">
                        <strong>বঙ্গানুবাদ:</strong> সিলেটের অন্তর্গত যেকোনো স্থানে বা বাংলাদেশের যেকোনো প্রান্তে জমি ক্রয়, বিক্রয়, অধিগ্রহণ, প্লটিং, সমতল করা, লিজ দেওয়া, বিনিময় করা এবং ওই সকল ভূমির মালিকানা বা ইজারা স্বত্ব বহাল রাখা।
                      </p>
                    </li>

                    <li>
                      <strong>Dredging, Earth Filling & Infrastructure:</strong> To carry out dredging of lowlands, swampy soils, haor-adjacent plots, and carry out soil-filling, land level optimization, building of roads, lanes, culverts, sewage tunnels, compound boundary brick walls, and শাহজালাল ব্র্যান্ড প্রবেশদ্বার (Main Gates) to enhance raw property values.
                      <p className="text-slate-600 text-[11px] font-sans mt-1">
                        <strong>বঙ্গানুবাদ:</strong> নিচু বা ঢালু জলাশয়ে বালু/মাটি ভরাট করা, ড্রেজার বসিয়ে উন্নয়ন করা, সীমানা বাউন্ডারি প্রাচীর নির্মাণ, ড্রেনেজ বা সুয়ারেজ ব্যবস্থা এবং প্রপার্টির মূল্য বৃদ্ধির জন্য রাস্তা তৈরি করা।
                      </p>
                    </li>

                    <li>
                      <strong>Joint Venture and NRB Custom Investment Trusts:</strong> To establish, promote, finance, organize, co-manage, and coordinate strategic business partnerships with non-resident Bangladeshis (NRBs in United Kingdom, London, USA, Middle East etc.) for capital syndication, property flipping, long-term plotting, and commercial cottage development.
                      <p className="text-slate-600 text-[11px] font-sans mt-1">
                        <strong>বঙ্গানুবাদ:</strong> বিদেশে অবস্থানরত সিলেউ বা প্রবাসী বাংলাদেশীদের (NRB) সাথে যৌথ অংশীদারিত্ব প্রতিষ্ঠা করা, প্রবাসী বিনিযোগ প্যাকেজ রক্ষণাবেক্ষণ করা এবং রিয়েল এস্টেট উন্নয়নে ফান্ড একত্রীকরণ করা।
                      </p>
                    </li>

                    <li>
                      <strong>Commercial Leasing, Homestays and Eco-Tourism Resorts:</strong> To erect, build, operate, manage, and lease out vacation homestays, eco-friendly tea resort quarters, tourist cottages, commercial office hubs, motels, family recreational parks, and community centers.
                      <p className="text-slate-600 text-[11px] font-sans mt-1">
                        <strong>বঙ্গানুবাদ:</strong> সিলেটে চা-বাগান বা হাওর সংলগ্ন রিসোর্ট, ইকো-ট্যুরিজম কুঠির, হলিডে হোমস্টেই, কমার্শিয়াল মার্কেট প্লেস বা অফিস স্পেস তৈরি, পরিচালনা ও ভাড়া দেওয়া।
                      </p>
                    </li>

                    <li>
                      <strong>To Borrow and Take Loans:</strong> To raise or borrow fund, obtain loans, open credit lines, pledge assets, hypothecate company land to commercial banks and financial institutes for scaling the business upon resolution of more than two-thirds majority of Board Directors.
                      <p className="text-slate-600 text-[11px] font-sans mt-1">
                        <strong>বঙ্গানুবাদ:</strong> কোম্পানির ব্যবসায়িক প্রয়োজনে পরিচালক পর্ষদের দুই-তৃতীয়াংশের সংখ্যাগরিষ্ঠ ভোটে যেকোনো তফসিলি ব্যাংক বা আর্থিক প্রতিষ্ঠান হইতে পুঁজি বা ঋণ গ্রহণ করা।
                      </p>
                    </li>
                  </ol>
                </div>

                {/* Clause IV */}
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-950 uppercase text-xs border-b border-slate-200 pb-1 font-sans">
                    CLAUSE IV: LIABILITY CLAUSE
                  </h4>
                  <p className="font-bold">
                    The liability of the members is Limited.
                  </p>
                  <p className="text-slate-600">
                    <strong>বঙ্গানুবাদ:</strong> শেয়ারহোল্ডার বা সদস্যদের আইনি আর্থিক দায়বদ্ধতা কেবল তাহাদের ক্রয়কৃত শেয়ারের ফেস ভ্যালু মূলধন পর্যন্তই সীমাবদ্ধ (Limited)।
                  </p>
                </div>

                {/* Clause V */}
                <div className="space-y-2">
                  <h4 className="font-extrabold text-slate-950 uppercase text-xs border-b border-slate-200 pb-1 font-sans">
                    CLAUSE V: SHARE CAPITAL (শেয়ার মূলধন ধারা)
                  </h4>
                  <p className="font-sans">
                    The Authorized Capital of the Company is <span className="font-bold text-slate-950">BDT {authorizedCapital.toLocaleString('en-IN')}</span> (Taka {authorizedCapital >= 50000000 ? 'Five Crore Only' : `${authorizedCapital} BDT`}) divided into <span className="font-bold text-slate-950">{(authorizedCapital / shareValue).toLocaleString('en-IN')}</span> Ordinary Shares of <span className="font-bold text-slate-950">BDT {shareValue}</span> each.
                  </p>
                  <p className="font-sans font-medium text-slate-700">
                    The Company has the power to increase, divide, or consolidate the capital, to divide shares into several classes, and attach preferential rights or restrictions upon AGM guidelines.
                  </p>
                  <p className="text-slate-600 text-xs">
                    <strong>বঙ্গানুবাদ:</strong> কোম্পানির অনুমোদিত মূলধন (Authorized Capital) হইবে <strong>৳{(authorizedCapital / 10000000).toFixed(1)} কোটি টাকা</strong>, যাহা <strong>{(authorizedCapital / shareValue).toLocaleString('en-IN')} টি</strong> সাধারণ শেয়ারে বিভক্ত এবং প্রতিটি শেয়ারের ফেস ভ্যালু বা নামমাত্র মূল্য হইবে <strong>৳{shareValue} টাকা</strong>।
                  </p>
                </div>

                {/* Subscription Declaration */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <p className="font-bold italic">
                    We, the several persons whose names, addresses, and descriptions are subscribed, are desirous of being formed into a Company in pursuance of this Memorandum of Association (MoA), and we respectively agree to take the number of shares in the Capital of the Company set opposite our respective names:
                  </p>
                  <p className="text-slate-600 text-xs">
                    আমরা, নিচে স্বাক্ষরকারী সকল সদস্যবর্গ, এই স্মারকলিপির (MoA) বিধান মোতাবেক একটি জয়েন্ট স্টক কোম্পানি বা প্রাইভেট লিমিটেড কোম্পানি গঠনে সম্মত হইলাম এবং আমাদের প্রত্যেকের নামের পাশে উল্লিখিত সংখ্যক শেয়ার ক্রয়ের অঙ্গীকার গ্রহণ করিলাম:
                  </p>
                </div>

              </div>
            )}

            {/* 2. VIEW OF ARTICLES OF ASSOCIATION (AoA) */}
            {activeDocument === 'aoa' && (
              <div className="space-y-8 text-xs sm:text-sm leading-relaxed" id="aoa-text-content">
                
                {/* Title */}
                <div className="text-center space-y-3 border-b-2 border-slate-900 pb-6">
                  <p className="text-slate-500 text-xs tracking-widest uppercase font-bold text-center">THE COMPANIES ACT, 1994</p>
                  <p className="text-slate-500 text-xs font-bold text-center">(A COMPANY LIMITED BY SHARES)</p>
                  <h1 className="text-lg md:text-xl font-bold uppercase tracking-tight text-center">ARTICLES OF ASSOCIATION</h1>
                  <h2 className="text-md md:text-lg font-black text-center text-slate-900 uppercase">OF</h2>
                  <h3 className="text-base md:text-lg font-black text-emerald-800 tracking-wide text-center uppercase border border-slate-200 py-2.5 bg-slate-50 rounded-xl px-4 inline-block font-sans">
                    {companyName}
                  </h3>
                </div>

                {/* Articles Table of Clauses */}
                <div className="space-y-4">
                  
                  {/* Art 1 */}
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-900 uppercase text-xs font-sans">
                      ARTICLE 1: TABLE 'A' EXCLUSION
                    </h4>
                    <p className="text-slate-700">
                      Regulations contained in Table 'A' of Schedule I to the Companies Act, 1994 shall apply to this Company except where specifically overridden or modified herein.
                    </p>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      <strong>বঙ্গানুবাদ:</strong> কোম্পানি আইন ১৯৯৪ এর তফসিল-১ এর ‘টেবিল-এ’ এর সাধারণ নিয়মসমূহ এই কোম্পানির সংঘবিধি (AoA) এর ধারা দ্বারা পরিবর্তিত বা সুনির্দিষ্ট না হইলে প্রযোজ্য থাকিবে।
                    </p>
                  </div>

                  {/* Art 2: Share Capital and Allotment */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <h4 className="font-extrabold text-slate-900 uppercase text-xs font-sans">
                      ARTICLE 2: CAPITAL, SHARE ALLOTMENT AND CONTRIBUTION
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                      <li>The initial Paid-up Capital (পরিশোধিত মূলধন) is <strong>BDT {totalPaidUpCapital.toLocaleString('en-IN')}</strong>, divided into <strong>{totalShares.toLocaleString('en-IN')} ordinary shares</strong>.</li>
                      <li>There shall be two categories of subscribers: 
                        <ul className="list-circle pl-5 mt-1">
                          <li><strong>Class A Director Subscribers:</strong> 25 members, where each director must subscribe to a minimum of 5 shares (equivalent to BDT {directorContrib.toLocaleString('en-IN')}) to hold their board eligibility.</li>
                          <li><strong>Class B Shareholder Subscribers:</strong> Passive investors subscribing to any number of shares starting from a minimum of 1 share (equivalent to BDT 1,00,000 or 1 Lakh Taka per share). For this model's reference, 25 general subscribers are set at { (shareholderContrib / shareValue) } shares (BDT {shareholderContrib.toLocaleString('en-IN')}) each.</li>
                        </ul>
                      </li>
                      <li>All shares must be allotted only upon receipt of BDT funds through legal banking transfers (Pay Orders / RTGS / Bank wire). No cash transactions inside the company books allowed.</li>
                    </ul>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      <strong>বঙ্গানুবাদ:</strong> পরিশোধিত মূলধন হইবে ১.৭৫ কোটি টাকা। ২৫ জন পরিচালক প্রত্যেকে ন্যূনতম ৫টি শেয়ার (আর্থিক মূল্য ৫ লক্ষ টাকা) এবং ২৫ জন সাধারণ শেয়ারহোল্ডার প্রত্যেকে ২ লক্ষ টাকা (অথবা যেকোনো সদস্য চাইলে সর্বনিম্ন ১টি শেয়ার অর্থাৎ ১ লক্ষ টাকা থেকে শুরু জরে যেকোনো পরিমাণ শেয়ার) ব্যাংক পে-অর্ডারের মাধ্যমে পরিশোধ করিবেন এবং এই টাকা ভিন্ন কোনো ব্যক্তিগত খাতে ব্যবহার করা যাইবে না।
                    </p>
                  </div>

                  {/* Art 3: Transfer of Shares - Strict Exit protections */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <h4 className="font-extrabold text-slate-900 uppercase text-xs font-sans">
                      ARTICLE 3: STRICT CONTROL OF SHARE TRANSFER & EXIT POLICY
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-750">
                      <li>Shares cannot be sold, gifted, or transferred to any external third-party without presenting a **First Right of Refusal** to existing Board Directors.</li>
                      <li>Any member wishing to exit the project must provide a **90-Day Written Notice** to the Board of Directors. It is the responsibility of the Board to either buy-back the shares pro-rata or facilitate another Sylhet-origin partner.</li>
                      <li>If an external transfer is permitted, it requires more than **75% written approval (Special Resolution)** of the Class A Directors.</li>
                    </ul>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      <strong>বঙ্গানুবাদ:</strong> কোনো সদস্য তাহার শেয়ার অন্য কোনো বাইরের তৃতীয় পক্ষের নিকট পরিচালনা পর্যদের লিখিত অনুমতি ব্যতীত বিক্রয় করিতে পারিবেন না। কোনো সদস্য প্রস্থান করিতে চাহিলে ৯০ দিন পূর্বে লিখিত নোটিশ দিতে হইবে এবং পরিচালনা পর্ষদ প্রাহমিকভাবে মূল্য নির্ধারণ সাপেক্ষে নিজেরাই শেয়ার ক্রয় করার অগ্রাধিকার রাখিবেন।
                    </p>
                  </div>

                  {/* Art 4: Board, Directors and voting */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <h4 className="font-extrabold text-slate-900 uppercase text-xs font-sans text-emerald-800">
                      ARTICLE 4: DIRECTORS & GOVERNING BOARD STRUCTURE
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-750">
                      <li>The number of directors of the Company shall not be more than 25 (the twenty-five founding directors).</li>
                      <li><strong>Director Qualification:</strong> Each Class A director must hold at least { (directorContrib / shareValue).toLocaleString('en-IN') } qualification shares of the Company (which equals 5 shares at ৳1,00,000 face value).</li>
                      <li><strong>Votes of Members:</strong> Every director has exactly **1 vote** in the board meetings. General shareholders do not interfere in weekly management but hold full pro-rata dividend voting on AGM.</li>
                    </ul>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      <strong>বঙ্গানুবাদ (পরিচালক কোয়ালিফিকেশন ও ভোটাধিকার):</strong> পরিচালনা পর্ষদের সদস্য বা পরিচালক (Director) হওয়ার জন্য যোগ্যতা শেয়ার বা 'Qualification Shares' অন্তত ৫টি (যার আর্থিক মূল্য ৳৫,০০,০০০ টাকা) ধারণ করা আবশ্যক। পরিচালক সংখ্যা সর্বোচ্চ ২৫ জন থাকিবে। প্রতিটি জরুরি সভায় পরিচালকদের সিদ্ধান্ত এক পরিচালক এক ভোটের ভিত্তিতে পাস করা হইবে।
                    </p>
                  </div>

                  {/* Art 5: Double & Triple signature banking protection */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <h4 className="font-extrabold text-slate-900 uppercase text-xs font-sans text-rose-800">
                      ARTICLE 5: THE CORE DOUBLE & TRIPLE SIGNATORY BANK RULES (তহবিল রক্ষা)
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-750">
                      <li>All Bank operations of the Company shall be handled by a joint account in any schedule bank in Sylhet, Bangladesh.</li>
                      <li><strong>Withdrawal Signature Safeguard:</strong> Any monetary cheque, pay-order request, land buy-bid, or operational remittance MUST be signed by at least TWO designated directors: The **Managing Director (MD)** and jointly with either the **Treasurer/CFO** or the **Chairman**. No single person can signature-verify bank funds.</li>
                      <li>All land buying purchases must have a clear physical vetting report signed by the corporate lawyer before bank funds are released.</li>
                    </ul>
                    <p className="text-slate-600 text-[11px] leading-relaxed animate-pulse">
                      <strong>বঙ্গানুবাদ (কঠোর ব্যাংক নিরাপত্তা):</strong> ব্যাংক অ্যাকাউন্ট যৌথভাবে পরিচালিত হইবে এবং টাকা চেক পাস হইতে কমপক্ষে ২ জনের যৌথ স্বাক্ষর আবশ্যক (ব্যবস্থাপনা পরিচালক এবং চেয়ারম্যান অথবা অর্থ বিষয়ক পরিচালক)। কোনো একক স্বাক্ষর দ্বারা ফান্ডের অপব্যবহার করা যাইবে না।
                    </p>
                  </div>

                  {/* Art 6: Accounts and Audit */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <h4 className="font-extrabold text-slate-900 uppercase text-xs font-sans">
                      ARTICLE 6: MANDATORY EXTERNAL CHARTERED CA AUDITING
                    </h4>
                    <p className="text-slate-700">
                      The Directors shall cause proper books of accounts to be kept with respect to all assets, transactions, sales, and land clearances. At least once a year, the books of accounts shall be audited by a registered **Chartered Accountant (CA Firm)** compliant with Bangladesh NBR rules, with reports sent directly via email/WhatsApp to all fifty members.
                    </p>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      <strong>বঙ্গানুবাদ:</strong> প্রতি বছর বহিরাগত রেজিস্টার্ড চার্টার্ড অ্যাকাউন্ট্যান্ট ফার্ম দ্বারা কোম্পানির বাৎসরিক হিসাব অডিট করা বাধ্যতামূলক এবং উহার অনুলিপি সকল ৫০ জন সদস্যদের ইমেইলে প্রেরণ করিতে হইবে।
                    </p>
                  </div>

                  {/* Art 7: Dispute Resolution and Arbitration */}
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <h4 className="font-extrabold text-slate-900 uppercase text-xs font-sans text-emerald-800">
                      ARTICLE 7: DISPUTE RESOLUTION AND SYLHET COURT ARBITRATION (বিরোধ নিষ্পত্তি)
                    </h4>
                    <p className="text-slate-750">
                      In case of any dispute, difference, or question arising between the directors, shareholders, or legal heirs concerning the meaning of clauses or operations:
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>The members shall first submit the dispute to an **Internal Arbitration Committee of 5 Senior Board Members** who have no conflict of interest.</li>
                        <li>If unresolved, the dispute shall be governed under the **Arbitration Act, 2001 (Bangladesh)** with proceedings conducted in Sylhet Sadar jurisdiction.</li>
                      </ul>
                    </p>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      <strong>বঙ্গানুবাদ:</strong> যেকোনো অভ্যন্তরীণ দ্বন্দ্ব বা শেয়ার বিতর্ক প্রথমে কোম্পানির ৫ সদস্যের "সালিসি কমিটি" মাধ্যমে সিলেট কোর্টের বাইরে আপোষ করা হইবে। ব্যর্থ হইলে সালিশি আইন ২০০১ মোতাবেক নিষ্পত্তি করা হইবে।
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* 3. SIGNATORIES / SUBSCRIBERS TABLE PREVIEW */}
            {activeDocument === 'subscribers' && (
              <div className="space-y-6 text-xs" id="subscribers-text-content">
                
                <div className="space-y-2 border-b border-slate-200 pb-4">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase">
                    ৫০ জন সম্মানিত শেয়ার গ্রাহকের বিবরণী ও স্বাক্ষর পৃষ্ঠা (Subscriber Signatures & Shares)
                  </h3>
                  <p className="text-slate-500 text-[11px]">
                    নিচে ৫০ জন সদস্যের তালিকা ও তাদের মোট ক্রয়কৃত শেয়ার ও পরিশোধিত টাকার ঘর সুনির্দিষ্ট করা হলো। RJSC সাবমিশনের পূর্বে নামের পাশে ভোটার আইডি (NID) মিলিয়ে নিতে হবে। আপনি চাইলে সরাসরি ঘরগুলো কাস্টম এডিট করতে পারেন:
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-[10px] text-slate-900 border-collapse border border-slate-300">
                    <thead>
                      <tr className="bg-slate-100 text-center font-bold">
                        <th className="border border-slate-300 p-2">সদস্য নং</th>
                        <th className="border border-slate-300 p-2 text-left">সদস্যের নাম, পিতা ও ঠিকানা (Subscriber Details)</th>
                        <th className="border border-slate-300 p-2">জাতীয়তা ও NID</th>
                        <th className="border border-slate-300 p-2">সদস্য ধরণ</th>
                        <th className="border border-slate-300 p-2">শেয়ার সংখ্যা</th>
                        <th className="border border-slate-300 p-2 text-right">পরিশোধিত টাকা (৳)</th>
                        <th className="border border-slate-300 p-2">গ্রাহকের স্বাক্ষর ও টিপ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {signatories.map((sig, idx) => (
                        <tr key={sig.id} className="hover:bg-slate-50/50">
                          <td className="border border-slate-300 p-2 text-center font-sans font-semibold">
                            {sig.serial}
                          </td>
                          <td className="border border-slate-300 p-2 space-y-1">
                            <input 
                              type="text" 
                              value={sig.name}
                              onChange={(e) => handleEditSignatory(sig.id, 'name', e.target.value)}
                              className="font-bold text-[11px] text-slate-900 bg-transparent border-b border-transparent focus:border-emerald-500 focus:bg-white w-full px-1"
                            />
                            <input 
                              type="text" 
                              value={sig.fatherName}
                              onChange={(e) => handleEditSignatory(sig.id, 'fatherName', e.target.value)}
                              className="text-[10px] text-slate-500 bg-transparent border-b border-transparent focus:border-emerald-500 focus:bg-white w-full px-1 italic"
                              placeholder="Fathers Name"
                            />
                            <input 
                              type="text" 
                              value={sig.address}
                              onChange={(e) => handleEditSignatory(sig.id, 'address', e.target.value)}
                              className="text-[10px] text-slate-600 bg-transparent border-b border-transparent focus:border-emerald-500 focus:bg-white w-full px-1"
                            />
                          </td>
                          <td className="border border-slate-300 p-2 space-y-1">
                            <span className="block font-sans font-semibold">{sig.nationality}</span>
                            <input 
                              type="text" 
                              value={sig.nid}
                              onChange={(e) => handleEditSignatory(sig.id, 'nid', e.target.value)}
                              className="font-sans text-[10px] bg-transparent border-b border-transparent focus:border-emerald-500 focus:bg-white w-full px-1"
                            />
                          </td>
                          <td className="border border-slate-300 p-2 text-center">
                            <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold ${
                              sig.class.includes('Director') 
                                ? "bg-emerald-50 text-emerald-800 border border-emerald-100" 
                                : "bg-blue-50 text-blue-800 border border-blue-100"
                            }`}>
                              {sig.class}
                            </span>
                          </td>
                          <td className="border border-slate-300 p-2 text-center font-sans font-bold">
                            {sig.shares.toLocaleString('en-IN')}
                          </td>
                          <td className="border border-slate-300 p-2 text-right font-sans font-bold text-slate-800">
                            ৳{(sig.shares * shareValue).toLocaleString('en-IN')}
                          </td>
                          <td className="border border-slate-300 p-2 text-center text-slate-300 italic text-[9px]">
                            {sig.name} (স্বাক্ষর)
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-slate-900 text-white font-extrabold font-sans text-center">
                        <td colSpan={4} className="border border-slate-350 p-2.5 text-right font-sans">
                          সর্বমোট (Total Subscription Pool):
                        </td>
                        <td className="border border-slate-350 p-2.5">
                          {totalShares.toLocaleString('en-IN')} টি শেয়ার
                        </td>
                        <td className="border border-slate-350 p-2.5 text-right text-emerald-400">
                          ৳{totalPaidUpCapital.toLocaleString('en-IN')} BDT
                        </td>
                        <td className="border border-slate-350 p-2.5 text-xs">
                          ৫০ জন নিবন্ধিত
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                {/* Witness Signature Block */}
                <div className="pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-200">
                    <span className="font-extrabold text-slate-900 uppercase block tracking-wide">
                      WITNESS TO SUSBSCRIBERS SIGNATURES (সাক্ষীদের বিবরণী):
                    </span>
                    <p className="font-semibold text-slate-850">
                      Name: **{witnessName}**
                    </p>
                    <p className="text-slate-650 leading-relaxed font-sans">
                      Address: {witnessAddress}
                    </p>
                    <p className="text-slate-500">
                      Occupation: **Advocate of Supreme Court / Bangladesh Bar Council**
                    </p>
                    <div className="pt-3 border-t border-slate-200 text-slate-300 italic">
                      Witness signature / signature line 
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50/50 rounded-xl space-y-2 border border-yellow-200 text-amber-900 leading-relaxed justify-center flex flex-col">
                    <h5 className="font-bold flex items-center gap-1.5 text-amber-950 text-xs">
                      <Award className="h-4.5 w-4.5 text-amber-600" /> ল্যান্ড কোম্পানির সাবলীল নিবন্ধন পরামর্শ
                    </h5>
                    <p className="text-xs">
                      RJSC অনলাইনে এই তালিকা প্রেরণের পূর্বে অবশ্যই প্রত্যকের TIN সার্টিফিকেট এবং পাসপোর্ট সাইজ ছবি সংগ্রহে রাখতে হবে। এনআরবি (NRB) প্রবাসীদের ক্ষেত্রে পাসপোর্ট নোটারী কপি বা ডুয়াল নাগরিকত্ব কাগজের স্ক্যান মডিউলে জমা রাখতে হবে যাতে RJSC অফিসার ফাইল পাস করাতে কোনো প্রকার সময়ক্ষেপণ না করেন।
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* Custom footer indicating compliance and legal validity */}
            <div className="mt-8 pt-4 border-t border-slate-200 text-[10px] text-slate-400 flex flex-wrap justify-between items-center gap-3">
              <span>Shahjalal Land Development & Assets Limited • MoA & AoA Draft v2.5</span>
              <span className="flex items-center gap-1"><Scale className="h-3.5 w-3.5" /> Compliant with Companies Act 1994, Bangladesh</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
