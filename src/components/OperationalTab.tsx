import { useState } from 'react';
import { Users, Shield, Briefcase, Award, TrendingUp, Landmark, ChevronRight, Fingerprint, Coins } from 'lucide-react';

interface RoleDetail {
  title: string;
  count: string;
  responsibilities: string[];
  power: string;
  governance: string;
}

export default function OperationalTab() {
  const [activeRole, setActiveRole] = useState<string>("ec");

  const roleDetails: Record<string, RoleDetail> = {
    gb: {
      title: "সাধারণ সাধারণ পর্ষদ (General Body)",
      count: "৫০ জনের টিম (২৫ ডিরেক্টর + ২৫ শেয়ারহোল্ডার)",
      responsibilities: [
        "বার্ষিক সাধারণ সভা (AGM) বা জরুরি সভায় (EGM) সক্রিয় অংশগ্রহণ করা",
        "কোম্পানির বার্ষিক নিরীক্ষিত (Audited) আয়-ব্যয়ের হিসাব ও লভ্যাংশ অনুমোদন করা",
        "নতুন পরিচালক নির্বাচন বা কোনো বিশেষ ধারা মেমোরেন্ডামে সংশোধন করা",
        "কোম্পানি বিলুপ্তি বা ভবিষ্যৎ রূপান্তর সংক্রান্ত সিদ্ধান্ত পাস করা"
      ],
      power: "সর্বোচ্চ নীতিনির্ধারণী ক্ষমতা (বড় সিদ্ধান্ত ভোটে পাস করা)। প্রতি ১ শেয়ার বা ২ লক্ষ টাকা বিনিয়োগ ১টি সাধারণ ভোটের সমান গণ্য হতে পারে (যৌথ সম্মতি অনুযায়ী)।",
      governance: "বছরে অন্তত ১টি বাধ্যতামূলক AGM মিটিং যেখানে সকল সদস্য উপস্থিত থাকবে।"
    },
    bod: {
      title: "পরিচালনা পর্ষদ (Board of Directors - BOD)",
      count: "২৫ জনের পর্ষদ (Direct Investor - ৫ লাখ টাকা ক্যাটাগরি)",
      responsibilities: [
        "কোম্পানির স্ট্র্যাটেজিক পরিকল্পনা, ভিশন ও বাৎসরিক বাজেট প্রস্তুতকরণ",
        "যেকোনো জমি বা প্রপার্টি কেনার প্রস্তাবনা পর্যালোচনা ও অনুমোদন করা",
        "প্রজেক্ট ডেভেলপমেন্ট সাব-কমিটি গঠন এবং তাদের কাজের ত্রৈমাসিক রিপোর্ট অডিট করা",
        "কার্যনির্বাহী কমিটির সদস্যদের নির্বাচন ও তদারক করা"
      ],
      power: "প্রতিটি প্রপার্টি ক্রয়ের ডিল ফাইনাল করতে বোর্ড অফ ডিরেক্টরস এর কমপক্ষে ২/৩ অংশ বা সিংহভাগের লিখিত রেজল্যুশন প্রয়োজন।",
      governance: "বছরে ৪টি ত্রৈমাসিক বোর্ড মিটিং বাধ্যতামূলক।"
    },
    ec: {
      title: "কার্যনির্বাহী কমিটি (Executive Committee - EC)",
      count: "৫ থেকে ৭ জন (২৫ ডিরেক্টরদের মধ্য থেকে নির্বাচিত বা মনোনীত)",
      responsibilities: [
        "কোম্পানির দৈনন্দিন অপারেশন, সরকারি অফিস ও ব্যাংকের সাথে যোগাযোগ বজায় রাখা",
        "নতুন বিক্রয় উপযোগী জমি বা ফ্ল্যাট খোঁজা এবং দরাদাম করা",
        "ব্যাংক অ্যাকাউন্ট ট্রানজেকশন পরিচালনা করা এবং অডিটকারীদের ডেটা সরবরাহ করা",
        "প্রজেক্ট বাস্তবায়নকারী দল বা থার্ড-পার্টি ডেভেলপারদের কাজ মনিটর করা"
      ],
      power: "দৈনন্দিন কাজের খরচের জন্য নির্ধারিত পকেট বাজেট লিমিট থাকবে, তবে ডিল ফাইনাল করার জন্য বোর্ডের লিখিত রেজল্যুশন নিতে হবে।",
      governance: "প্রতি সপ্তাহে বা ১৫ দিনে অন্তত একবার অপারেশন্স মিটিং।"
    },
    md: {
      title: "ব্যবস্থাপনা পরিচালক (Managing Director - MD)",
      count: "১ জন (EC এর প্রধান নির্বাহী)",
      responsibilities: [
        "কোম্পানির ফেস ও প্রধান প্রতিনিধি হিসেবে কাজ করা",
        "অনুমোদিত সকল দলিলের রেজিস্ট্রেশনে স্বাক্ষর বা কোম্পানির পক্ষে আইনি চুক্তি স্বাক্ষর",
        "অন্যান্য ডিরেক্টর এবং শেয়ারহোল্ডারদের নিয়মিত প্রগতি রিপোর্ট (Progress Report) পাঠানো",
        "জমি ক্রয়ের দালালি বা রিয়েল এস্টেট সিন্ডিকেটের হাত থেকে ফান্ড বাঁচিয়ে সরাসরি ডিল করা"
      ],
      power: "কোম্পানির পরিচালনা রেজল্যুশন বা ডিক্লারেশন অনুযায়ী সিগনেচার ও ডেলিগেশন অফ অথরিটি ব্যবহার করতে পারবেন।",
      governance: "পূর্ণকালীন বা পার্ট-টাইম পেশাদারী সার্ভিস যা বোর্ড দ্বারা মূল্যায়নযোগ্য।"
    }
  };

  return (
    <div className="space-y-8">
      {/* Visual Hierarchy Flow Header Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Fingerprint className="h-5 w-5 text-emerald-600" />
          রিয়েল এস্টেট কোম্পানির সুগঠিত পরিচালনা মডেল
        </h2>
        <p className="text-xs text-slate-500 mb-6 max-w-xl">
          ৫০ জনের এই বড় তহবিলে বিশৃঙ্খলা এড়াতে ও সুষ্ঠু কাজের গতি ধরে রাখতে দ্বিমাত্রিক স্বায়ত্তশাসিত পরিচালনা কাঠামো ডিজাইন করা হয়েছে।
        </p>

        {/* 3 Step Flowchart Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-slate-100">
          <div 
            onClick={() => setActiveRole("gb")}
            className={`cursor-pointer rounded-xl p-4 border transition-all text-center space-y-2 ${
              activeRole === "gb" ? "border-emerald-300 bg-emerald-50/20 shadow-xs" : "border-slate-200 bg-slate-50 hover:bg-slate-100/50"
            }`}
          >
            <div className="mx-auto h-10 w-10 text-slate-650 bg-slate-200/60 rounded-full flex items-center justify-center font-bold text-sm">১</div>
            <h4 className="font-bold text-slate-900 text-xs">সাধারণ পর্ষদ (General Body)</h4>
            <p className="text-[10px] text-slate-500">২৫ পরিচালক + ২৫ সাধারণ শেয়ারহোল্ডার</p>
          </div>

          <div 
            onClick={() => setActiveRole("bod")}
            className={`cursor-pointer rounded-xl p-4 border transition-all text-center space-y-2 ${
              activeRole === "bod" ? "border-emerald-300 bg-emerald-50/20 shadow-xs" : "border-slate-200 bg-slate-50 hover:bg-slate-100/50"
            }`}
          >
            <div className="mx-auto h-10 w-10 text-emerald-600 bg-emerald-100 rounded-full flex items-center justify-center">
              <Landmark className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-xs">পরিচালনা পর্ষদ (BOD)</h4>
            <p className="text-[10px] text-slate-500">২৫ পরিচালকদের নীতিনির্ধারণী ফোরাম</p>
          </div>

          <div 
            onClick={() => setActiveRole("ec")}
            className={`cursor-pointer rounded-xl p-4 border transition-all text-center space-y-2 ${
              activeRole === "ec" ? "border-emerald-300 bg-emerald-50/20 shadow-xs" : "border-slate-200 bg-slate-50 hover:bg-slate-100/50"
            }`}
          >
            <div className="mx-auto h-10 w-10 text-blue-600 bg-blue-100 rounded-full flex items-center justify-center">
              <Briefcase className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-xs">কার্যনির্বাহী কমিটি & MD</h4>
            <p className="text-[10px] text-slate-500">৫-৭ ডিরেক্টরের ডে-টু-ডে অপারেশন দল</p>
          </div>
        </div>

        {/* Selected Role Interactive Details Box */}
        <div className="mt-6 p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-205 border-slate-200/60 pb-3">
            <h3 className="text-sm font-bold text-slate-950 flex items-center gap-2">
              <Award className="h-4 w-4 text-emerald-600" />
              {roleDetails[activeRole].title}
            </h3>
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/60 px-3 py-0.5 rounded-full">
              {roleDetails[activeRole].count}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 text-xs">
            <div className="space-y-3">
              <span className="font-bold text-slate-800 tracking-wide uppercase block">মূল দায়িত্ব ও কার্যাবলী:</span>
              <ul className="space-y-2.5">
                {roleDetails[activeRole].responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2.5 text-slate-705 shrink-0">
                    <ChevronRight className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 bg-white p-4 rounded-lg border border-slate-200/50 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-bold text-slate-800 tracking-wide uppercase block">আইনি সিদ্ধান্ত নেয়ার ক্ষমতা:</span>
                <p className="text-slate-650 leading-relaxed">{roleDetails[activeRole].power}</p>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <span className="font-bold text-slate-700 tracking-wide uppercase block text-[10px]">বৈঠক ও রিপোর্টিং চক্র:</span>
                <p className="text-slate-550 mt-0.5">{roleDetails[activeRole].governance}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Operational Governance Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {/* Core Bank Account Protection */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4 shadow-2xs hover:border-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
            <Landmark className="h-3.5 w-3.5" /> তহবিল নিয়ন্ত্রণ ও ট্রিপল-সিগনেচার রুল
          </span>
          <p className="text-slate-600 leading-relaxed">
            একটি বড় কোম্পানিতে তহবিলের তছরূপ ঠেকাতে ব্যাংক অ্যাকাউন্ট অ্যাক্সেস করতে যৌথ স্বাক্ষরের সিস্টেম অপরিহার্য। প্রস্তাবিত নীতিমালা নিচে দেওয়া হলো:
          </p>
          <ul className="space-y-2 list-disc pl-4 text-slate-650">
            <li><strong>ব্যাংক অ্যাকাউন্ট টাইপ:</strong> করপোরেট কারেন্ট অ্যাকাউন্ট (কোম্পানির টাইটেলে)।</li>
            <li><strong>যৌথ স্বাক্ষর ব্যবস্থা:</strong> তিনটি নির্দিষ্ট স্বাক্ষরের মধ্যে কমপক্ষে ২টি স্বাক্ষর মিললে ব্যাংক উইথড্রয়াল বা চেক পাস হবে:
              <br />
              <span className="text-[10px] text-emerald-700 font-semibold">(১. ব্যবস্থাপনা পরিচালক + ২. চেয়ারম্যান + ৩. অর্থ পরিচালক)</span>
            </li>
            <li><strong>ডিজিটাল ট্রানজেকশন ট্র্যাকিং:</strong> প্রতিটি দলিলের কেনাবেচায় কোনো প্রকার ক্যাশ বা নগদ ট্রানজেকশন করা যাবে না। সব ডিল আবশ্যিকভাবে পে-অর্ডার বা সরাসরি ব্যাংক-টু-ব্যাংক আরটিজিএস (RTGS) ট্র্যান্সফার হিসেবে নিষ্পন্ন হবে।</li>
          </ul>
        </div>

        {/* Audit, Transparency & Conflict Protocols */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4 shadow-2xs hover:border-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
            <Coins className="h-3.5 w-3.5" /> স্বচ্ছতা, অডিট ও প্রস্থান (Exit Policy)
          </span>
          <p className="text-slate-600 leading-relaxed">
            বিনিয়োগকারীদের আস্থা নিশ্চিত রাখতে নিয়মিত রিপোর্ট এবং সুষ্ঠু বিদায় প্রক্রিয়া চুক্তিতে (AoA) লিপিবদ্ধ থাকতে হবে:
          </p>
          <ul className="space-y-2 list-disc pl-4 text-slate-650">
            <li><strong>দ্বিমাসিক আপডেট:</strong> প্রতি ২ মাস পর পর প্রতিটি প্রজেক্টের কাজের বর্তমান প্রগতি এবং জমা তহবিলের ব্যাংক স্টেটমেন্ট ডিজিটাল গ্রুপ শেয়ারিং করা।</li>
            <li><strong>বহিরাগত অডিট (Audit):</strong> চার্টার্ড অ্যাকাউন্ট্যান্ট ফার্ম দ্বারা প্রতি বছর কোম্পানির আয় ও ব্যয়ের খাতওয়ারী হিসাব সম্পন্ন করে ৫০ সদস্যকে প্রতিবেদন সরবরাহ করা।</li>
            <li><strong>প্রস্থান নীতি (Exit Policy):</strong> কো-শেয়ারহোল্ডারদের কোনো জরুরি কারণে টাকা তুলে নিতে হলে কোম্পানির অন্যান্য সদস্যকে ২৫% পর্যন্ত ডিসকাউন্টে শেয়ার অফার করার বা যথাযথ ভ্যালুয়েশন সাপেক্ষে ২ বছরের মধ্যে টাকা ক্রমান্বয়ে ফেরত পাওয়ার চমৎকার নীতি থাকবে।</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
