import { useState } from 'react';
import { Calendar, CheckCircle2, Circle, Clock, Map, Sparkles, Building, Landmark } from 'lucide-react';
import { TimelineMilestone } from '../types';

export default function RoadmapTab() {
  const [milestones, setMilestones] = useState<TimelineMilestone[]>([
    {
      id: "m1",
      phase: "Phase ১: প্রস্তুতি ও নিবন্ধন (Month ১ - ২)",
      title: "কোম্পানি কাঠামো ও প্রাথমিক লজিস্টিকস",
      duration: "৬০ দিন",
      description: "৫০ সদস্যের পূর্ণ সহযোগিতা ও চুক্তি সম্পন্ন করা। প্রাইভেট লিমিটেড কোম্পানি নিবন্ধন সম্পন্ন করে করপোরেট ব্যাংক একাউন্ট সক্রিয় করা।",
      steps: [
        "২৫ জন পরিচালক ও ২৫ জন শেয়ারহোল্ডারের সম্মিলিত সাইনিং ও এনআইডি ডাবল-চেক সম্পন্ন করা",
        "RJSC নামের ছাড়পত্র এবং মেমোরেন্ডাম (MoA/AoA) আইনজীবী দ্বারা সম্পন্ন করা",
        "১.৭৫ কোটি টাকা কোম্পানির করপোরেট যৌথ হিসেবে নগদ জমা করা",
        "ট্রেড লাইসেন্স ও কোম্পানির ই-টিন, ভ্যাট সার্টিফিকেট সংগ্রহ করা"
      ],
      status: "completed"
    },
    {
      id: "m2",
      phase: "Phase ২: সম্পত্তি নির্বাচন ও আইনি যাচাই (Month ৩ - ৪)",
      title: "নিষ্কণ্টক লাভজনক জমি বা সম্পদ অনুসন্ধান",
      duration: "৬০ দিন",
      description: "বাজারমূল্যের চেয়ে কম দামে বিক্রয় করতে ইচ্ছুক এমন বিপদে পড়া বিক্রেতা বা নতুন সম্ভাবনাময় হটস্পটে প্রপার্টি লোকেশন খুঁজে বের করা।",
      steps: [
        "নির্বাহী কমিটির মাধ্যমে কমপক্ষে ৩টি আলাদা জমির দলিলপত্র সংগ্রহ ও যাচাই করা",
        "সাব-রেজিস্ট্রি এবং এসি ল্যান্ড অফিসে আইনজীবীদের মাধ্যমে তল্লাশি (Search) রেজাল্ট বের করা",
        "জমির ফিজিক্যাল দখল সঠিক আছে কিনা তা স্থানীয় মুরব্বিদের সাথে চেক করা",
        "পরিচালনা পর্ষদের (BOD) মিটিং ডেকে ডিলটি বাৎসরিক বাজেটে পাস করা"
      ],
      status: "ongoing"
    },
    {
      id: "m3",
      phase: "Phase ৩: সম্পদ ক্রয় ও দাগ সংশোধন (Month ৫ - ৬)",
      title: "ভূমি রেজিস্ট্রি এবং দখল গ্রহণ",
      duration: "৬০ দিন",
      description: "আইন অনুযায়ী যথাযথ রেজিস্ট্রি ট্যাক্স বা ভ্যাপ প্রদান করে জমি কোম্পানির টাইটেলে রেজিস্ট্রি করা ও সশরীরে জমির সীমানা প্রাচীর দিয়ে কোম্পানির সাইনবোর্ড দেওয়া।",
      steps: [
        "ব্যাংকের মাধ্যমে সরাসরি ওয়ান-টু-ওয়ান পে-অর্ডার ইস্যু করা (কোন ক্যাশ ট্রানজেকশন নাই)",
        "সাব-রেজিস্ট্রি অফিসে জমি ক্রয় সম্পন্ন করে ডিসিআর ও মূল দলিলের রসিদ সংগ্রহ করা",
        "সহকারী কমিশনার (ভূমি) বা এসি ল্যান্ড অফিসে নিজ কোম্পানি নামে নামজারি বা Mutation করা",
        "জমির সীমানা প্রাচীর নির্মাণ এবং 'শাহজালাল অ্যাসোসিয়েশন' সম্বলিত দৃশ্যমান সাইনবোর্ড স্থাপন করা"
      ],
      status: "pending"
    },
    {
      id: "m4",
      phase: "Phase ৪: জমি সংস্কার ও ভ্যালু অ্যাডিশন (Month ৭ - ১৮)",
      title: "প্যাসিভ হোল্ডিং ও ল্যান্ড ডেভেলপমেন্ট",
      duration: "১২ মাস",
      description: "কাঁচা জমি ভরাট করে প্লটিং করা, বড় বাণিজ্যিক রোড বা রিং রোডের পাশে সাইটের মান বাড়িয়ে তোলা যাতে সম্ভাব্য ডবল ভ্যালু রিটার্ন পাওয়া যায়।",
      steps: [
        "প্রয়োজনীয় রাজউক/সিডিএ বা পরিবেশ অধিদপ্তর থেকে খসড়া লে-আউট অনুমতি ও ছাড়পত্র নেওয়া",
        "নিচু জমি হলে বালু ভরাট করে ব্যবহারের উপযোগী বা ফ্ল্যাট তৈরির উপযোগী করে তোলা",
        "প্রয়োজনে থার্ড-পার্টি বিশ্বস্ত রিয়েল এস্টেট ডেভেলপার কোম্পানির সাথে যৌথ ফ্ল্যাট নির্মাণের অংশীদারত্ব আলোচনা করা",
        "জমির চারপাশে সরকারি রাস্তা প্রসারণের গতিবিধি লক্ষ্য করে বিক্রির উপযুক্ত সময়ের অপেক্ষা করা"
      ],
      status: "pending"
    },
    {
      id: "m5",
      phase: "Phase ৫: প্রস্থান পরিকল্পনা ও লভ্যাংশ বণ্টন (Month ১৯ - ২৪)",
      title: "সম্পত্তি বিক্রয় ও মুনাফা ঘরে তোলা",
      duration: "৬ মাস",
      description: "প্রপার্টির চূড়ান্ত বিক্রয় সম্পন্ন রূপরেখায় রূপান্তর করা। কোম্পানি ব্যাংক অ্যাকাউন্টের মাধ্যমে ৫০ জনের মধ্যে যার যার শেয়ার অনুযায়ী প্র-রাটা পেমেন্ট বণ্টন।",
      steps: [
        "জমির প্লটগুলো খুচরা ক্রেতা বা হোলসেলার রিয়েল এস্টেটের কাছে লাভজনক মূল্যে বিক্রির জন্য মার্কেটিং বা প্রপোজাল দেওয়া",
        "যৌথ বোর্ড রেজল্যুশনের মাধ্যমে চূড়ান্ত বিক্রয় দর নির্ধারণ ও টাকা বুঝে নেওয়া",
        "কোম্পানির অডিট রিপোর্ট আপডেট করে করপোরেট ইনকাম ট্যাক্স রিটার্ন ফাইল করা",
        "সকল ডিরেক্টর ও শেয়ারহোল্ডারের ব্যাংক অ্যাকাউন্টে মূল টাকা এবং অর্জিত লভ্যাংশ সফলভাবে স্থানান্তর করা"
      ],
      status: "pending"
    }
  ]);

  const toggleStatus = (id: string) => {
    setMilestones(milestones.map(m => {
      if (m.id === id) {
        const nextStatus = m.status === 'pending' ? 'ongoing' : m.status === 'ongoing' ? 'completed' : 'pending';
        return { ...m, status: nextStatus };
      }
      return m;
    }));
  };

  const statusIcons = {
    completed: <CheckCircle2 className="h-6 w-6 text-emerald-605 text-emerald-500 fill-emerald-50" />,
    ongoing: <Clock className="h-6 w-6 text-blue-500 animate-spin" style={{ animationDuration: '6s' }} />,
    pending: <Circle className="h-6 w-6 text-slate-300" />
  };

  const statusBadges = {
    completed: "bg-emerald-100 text-emerald-800 border-emerald-250",
    ongoing: "bg-blue-100 text-blue-800 border-blue-250",
    pending: "bg-slate-100 text-slate-650 border-slate-205"
  };

  const statusTextBengali = {
    completed: "সম্পন্ন",
    ongoing: "চলমান",
    pending: "অপেক্ষমান"
  };

  return (
    <div className="space-y-8">
      {/* Intro section with dynamic interactive hint */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-emerald-600" />
              ২৪ মাসের রোড়ম্যাপ ও প্রজেক্ট মাইলস্টোন
            </h2>
            <p className="text-xs text-slate-650 max-w-xl leading-relaxed">
              পরিকল্পনা থেকে শুরু করে সফল প্রস্থান (Exit) পর্যন্ত পুরো ২৪ মাসের একটি বাস্তবসম্মত রোডম্যাপ প্রস্তুত করা হয়েছে। প্রতিটি কার্ডের আইকনে ক্লিক করে স্ট্যাটাস পরিবর্তন করতে পারেন।
            </p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 p-3 rounded-xl border border-emerald-100/60 text-xs shrink-0">
            <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" />
            <span className="font-semibold text-emerald-950">মাইলস্টোনে ক্লিক করে অগ্রগতি ট্র্যাক করুন</span>
          </div>
        </div>

        {/* Timeline representation */}
        <div className="mt-10 relative pl-4 sm:pl-8 before:absolute before:top-0 before:left-[15px] sm:before:left-[31px] before:bottom-0 before:w-0.5 before:bg-slate-200">
          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                {/* Visual Circle with state tracker */}
                <button 
                  onClick={() => toggleStatus(milestone.id)}
                  className="absolute left-[-12px] sm:left-[-41px] bg-white rounded-full p-1 z-10 hover:scale-110 active:scale-95 transition-transform"
                >
                  {statusIcons[milestone.status]}
                </button>

                <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-slate-350 transition-all space-y-4">
                  {/* Card Header information */}
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-50 pb-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                        {milestone.phase}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {milestone.title}
                      </h3>
                    </div>
                    <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusBadges[milestone.status]}`}>
                      {statusTextBengali[milestone.status]} ({milestone.duration})
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Bullet points for the phase */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">বাস্তবায়নযোগ্য নির্দিষ্ট টাস্ক সমূহ (Deliverables):</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      {milestone.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-slate-650 bg-slate-50 p-2.5 rounded-lg border border-slate-200/40">
                          <span className="h-4 w-4 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold inline-flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-snug">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety contingency plan notice */}
      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 space-y-3">
        <h3 className="text-sm font-bold text-blue-950 flex items-center gap-1.5">
          <Landmark className="h-4 w-4 text-blue-600" />
          জরুরি রি-গ্রুপ ও কনটিনজেন্সি প্ল্যান (Contingency Backup)
        </h3>
        <p className="text-xs text-blue-900 leading-relaxed">
          রিয়েল এস্টেট ব্যবসায় বাজারের গতি ধীর হতে পারে। ২ বছর পর যদি জমি আশানুরূপ মূল্যে বিক্রি না হয়, তবে আমাদের ৩টি বিকল্প প্রস্থান পথ (Alternate exit loops) থাকবে:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-800 pt-1">
          <div className="bg-white p-3.5 rounded-lg border border-blue-105 space-y-1.5">
            <h5 className="font-bold text-blue-800 text-xs">১. ডেভেলপার চুক্তি</h5>
            <p className="text-[11px] text-slate-550 leading-relaxed">উন্নয়নকারী কোম্পানির সাথে ৫০:৫০ ফ্ল্যাট বা কমার্শিয়াল এরিয়া চুক্তিতে বিল্ডিং তৈরি করা যা থেকে স্থায়ী ভাড়া (Monthly dividend) আসবে।</p>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-blue-105 space-y-1.5">
            <h5 className="font-bold text-blue-800 text-xs">২. আংশিক লিজ বা ভাড়া</h5>
            <p className="text-[11px] text-slate-550 leading-relaxed">সম্পূর্ণ বিক্রি অমীমাংসিত থাকলে জমিটি অটোমোবাইল গ্যারেজ, ইঁট বালুর ডিপো বা সুপারশপকে লিজ দিয়ে মাসিক আয় সচল রাখা।</p>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-blue-105 space-y-1.5">
            <h5 className="font-bold text-blue-800 text-xs">৩. সহজ কিস্তি বা সেল</h5>
            <p className="text-[11px] text-slate-550 leading-relaxed">প্লটগুলোকে সহজ কিস্তিতে রিটেইল বা সাধারণ গ্রাহকদের কাছে বিক্রি করা যাতে করে মূলধনের সর্বোচ্চ রিয়েল এস্টেট প্রিমিয়াম আদায় হয়।</p>
          </div>
        </ul>
      </div>
    </div>
  );
}
