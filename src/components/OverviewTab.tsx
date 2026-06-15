import { Users, Landmark, Wallet, ShieldCheck, ArrowUpRight, Award, MapPin, Building2 } from 'lucide-react';

interface OverviewTabProps {
  onNavigate: (tab: string) => void;
}

export default function OverviewTab({ onNavigate }: OverviewTabProps) {
  return (
    <div className="space-y-8">
      {/* Hero Welcome Slide Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-slate-900 via-slate-800 to-emerald-950 p-8 text-white shadow-2xl md:p-12">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-emerald-550/10 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl opacity-30"></div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold tracking-wide text-emerald-400 backdrop-blur-xs">
            <Award className="h-3.5 w-3.5" /> রিয়েল এস্টেট বিজনেস প্রপোজাল
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white font-sans leading-tight">
            শাহজালাল অ্যাসোসিয়েশন (সিলেট) <br />
            <span className="bg-linear-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              পূর্ণাঙ্গ যৌথ ভূমি ও সম্পদ বিনিয়োগ রূপরেখা
            </span>
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg leading-relaxed">
            সিলেটের সম্ভাবনাময় আবাসন খাতে একটি সুরক্ষিত ও সুপরিকল্পিত যৌথ উদ্যোগ। নিরাপদ আইনি ফ্রেমওয়ার্ক, ট্রিপল-সিগনেচার ব্যাংক অ্যাকাউন্ট এবং ৫০ জনের সম্মিলিত শক্তি নিয়ে ১.৭৫ কোটি টাকার ল্যান্ড ইনভেস্টমেন্ট প্রজেক্ট।
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('funding')}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition-all hover:bg-emerald-600 hover:shadow-emerald-900/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              বিনিয়োগ ও পুঁজি কাঠামো দেখুন
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
            <button 
              onClick={() => onNavigate('legal')}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 hover:bg-slate-700/80 px-5 py-3 text-sm font-medium text-slate-200 transition-all hover:-translate-y-0.5"
            >
              আইনি প্রক্রিয়া (A to Z)
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Bento-Grid Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Metric 1 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:shadow-md hover:border-slate-300">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
              <Landmark className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">নিরাপদ সম্পদ</span>
          </div>
          <div className="mt-4">
            <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">মোট প্রারম্ভিক শেয়ার মূলধন</h3>
            <p className="mt-1 text-3xl font-bold text-slate-900">১.৭৫ কোটি টাকা</p>
            <p className="mt-1 text-xs text-slate-550">১,৭৫,০০,০০০ BDT (১০০% মূলধন সংগৃহীত)</p>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:shadow-md hover:border-slate-300">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600 group-hover:bg-blue-100 transition-colors">
              <Users className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">ম্যানেজমেন্ট বোর্ড</span>
          </div>
          <div className="mt-4">
            <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">পরিচালক পর্ষদ (Directors)</h3>
            <p className="mt-1 text-3xl font-bold text-slate-900">২৫ জন সম্মানিত সদস্য</p>
            <p className="mt-1 text-xs text-slate-550">প্রতিজন ৫ লক্ষ টাকা মূলধন বিনিয়োগকারী</p>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:shadow-md hover:border-slate-300 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-violet-50 p-3 text-violet-600 group-hover:bg-violet-100 transition-colors">
              <Wallet className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-1 rounded-md">সাধারণ শেয়ারহোল্ডার</span>
          </div>
          <div className="mt-4">
            <h3 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">শেয়ারহোল্ডার পর্ষদ (Shareholders)</h3>
            <p className="mt-1 text-3xl font-bold text-slate-900">২৫ জন বিনিয়োগকারী</p>
            <p className="mt-1 text-xs text-slate-550">প্রতিজন ২ লক্ষ টাকা মূলধন বিনিয়োগকারী</p>
          </div>
        </div>
      </div>

      {/* Core Objectives & Strategy Description */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Vision and Purpose (2 Columns Wide) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs md:p-8 lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="h-6 w-1 rounded-full bg-emerald-500 inline-block"></span>
            আমাদের সিলেটি ল্যান্ড মার্কেট ভিশন ও ডিল পাওয়ার
          </h2>
          
          <p className="text-slate-650 leading-relaxed text-sm sm:text-base">
            আমাদের ব্যবসা মডেলটি মূলত বৃহত্তর সিলেট অঞ্চলের সম্ভাবনাময় প্রপার্টি খাতে দীর্ঘমেয়াদী এবং সুরক্ষিত আয়ের সুযোগ তৈরির জন্য সাজানো হয়েছে। ১.৭৫ কোটি টাকার ডেডিকেটেড ক্যাশ সচল থাকায় আমরা সিলেটের সবচেয়ে চাহিদাসম্পন্ন এলাকাগুলোতে দ্রুত বায়নার মাধ্যমে অত্যন্ত সাশ্রয়ী মূল্যে জমি বা প্রপার্টি ক্রয় করতে সমর্থ হব, যা প্রবাসী (Londoni/NRB) ক্রয়ের আকর্ষণে দ্রুত মূল্যায়িত হবে।
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
            <div className="flex gap-3.5 items-start p-4 rounded-xl bg-slate-50">
              <MapPin className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">সিলেট হট-স্পট ল্যান্ড পারচেজ</h4>
                <p className="text-xs text-slate-500 mt-1">বিমানবন্দর (Airport Road) বাইপাস, খাদিম নগর বিসিক সংলগ্ন, কড়ইটুলা বা দক্ষিণ সুরমা রিং রোডের দ্রুত বর্ধনশীল নিষ্কণ্টক জমি স্বল্পমূল্যে সংগ্রহ করা।</p>
              </div>
            </div>

            <div className="flex gap-3.5 items-start p-4 rounded-xl bg-slate-50">
              <Building2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">বাণিজ্যিক ও রেসিডেন্সিয়াল প্লটিং</h4>
                <p className="text-xs text-slate-500 mt-1">জমি ক্রয় করে বালু ভরাট, বাউন্ডারি ও রোড লেআউট তৈরি করে প্রবাসী সিলেটিদের কাছে আকর্ষণীয় মূল্যে ছোট ছোট কাস্টমাইজড প্লট আকারে পুনরায় বিক্রয় করা।</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 mt-6">
            <h3 className="font-semibold text-slate-900 text-sm mb-3">কেন ৫০ জনের এই বড় টিম সফল হবে?</h3>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <strong>আর্থিক শক্তির সুবিধা</strong> - ১.৭৫ কোটি নগদ টাকা একবারে বড় ডিল করতে সহায়তা করবে।
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <strong>নেটওয়ার্কের সুবিধা</strong> - ৫০ জনের বৈচিত্র্যময় পরিচিতি ও বিজনেস সোর্স থাকবে।
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <strong>যৌথ প্রজ্ঞা</strong> - ২৫ জন পরিচালকের সম্মিলিত দক্ষতায় ভুল সিদ্ধান্তের ঝুঁকি শূন্যে নেমে আসবে।
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <strong>আইনি নিরাপত্তা</strong> - লিমিটেড কোম্পানি আইন অনুযায়ী ৫০ জনই সম্পূর্ণ সুরক্ষিত থাকবে।
              </li>
            </ul>
          </div>
        </div>

        {/* Core Guarantees & Safeguards Sidebar */}
        <div className="rounded-2xl bg-linear-to-b from-slate-50 to-slate-100 p-6 border border-slate-200/60 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              ব্যবসায়ের মূল স্তম্ভ ও নিরাপত্তা
            </h3>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              যৌথ উদ্যোগে সাধারণত আস্থার অভাব হয়। তবে এই পরিকল্পনায় আইনগত এবং হিসাবগত স্বচ্ছতা নিশ্চিত করা হয়েছে যাতে প্রতিটি টাকা সম্পূর্ণ নিরাপদ থাকে।
            </p>

            <div className="space-y-3 pt-2">
              <div className="rounded-lg bg-white p-3 border border-slate-200/50">
                <h5 className="font-bold text-slate-900 text-xs text-emerald-700">১. RJSC রেজিস্টার্ড কোম্পানি</h5>
                <p className="text-[11px] text-slate-550 mt-1">প্রকল্পটি কোন মনগড়া সমিতি নয়, বরং জয়েন্ট স্টক কোম্পানি ১৯৯৪ এর অধীনে নিবন্ধিত প্রাইভেট লিমিটেড কোম্পানি হবে।</p>
              </div>
              <div className="rounded-lg bg-white p-3 border border-slate-200/50">
                <h5 className="font-bold text-slate-900 text-xs text-emerald-700">২. ডাবল-সিগনেচার ব্যাংক অ্যাকাউন্ট</h5>
                <p className="text-[11px] text-slate-550 mt-1">কোম্পানির ফান্ড পরিচালনা করতে কমপক্ষে ৩ জন নির্বাচিত পরিচালকের যৌথ স্বাক্ষর লাগবে এবং সর্বদা অডিট রিপোর্ট পেশ করতে হবে।</p>
              </div>
              <div className="rounded-lg bg-white p-3 border border-slate-200/50">
                <h5 className="font-bold text-slate-900 text-xs text-emerald-700">৩. ডিজিটাল ল্যান্ড ভেটিং প্রসেস</h5>
                <p className="text-[11px] text-slate-550 mt-1">আইনজীবী, স্থানীয় সার্ভেয়ার এবং রেজিস্ট্রি অফিস ডাবল ভেরিফিকেশন ছাড়া কোম্পানি কোনো জমি বা সম্পদ ক্রয় করবে না।</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 mt-6 lg:mt-0">
            <div className="flex items-center gap-3 bg-emerald-50 rounded-xl p-3 border border-emerald-100">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
              <p className="text-xs font-semibold text-emerald-950">
                আপনার পরবর্তী পদক্ষেপ: <span onClick={() => onNavigate('funding')} className="underline hover:text-emerald-700 cursor-pointer">অর্থায়ন টেবিল দেখুন</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
