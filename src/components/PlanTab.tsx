import React, { useState } from 'react';
import { 
  TrendingUp, 
  Layers, 
  Home, 
  Compass, 
  Coins, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Percent, 
  UserCheck, 
  Map, 
  TreePine, 
  Droplet,
  Flame,
  Wand2,
  AlertTriangle,
  Lightbulb,
  DollarSign
} from 'lucide-react';

export default function PlanTab() {
  const [selectedPlanTab, setSelectedPlanTab] = useState<'short' | 'medium' | 'long' | 'all'>('all');
  const [showBaynaSimulator, setShowBaynaSimulator] = useState<boolean>(true);
  const [baynaLandValue, setBaynaLandValue] = useState<number>(5000000); // 50 Lakh
  const [baynaPercent, setBaynaPercent] = useState<number>(15); // 15% booking money
  const [sellingPriceIncrease, setSellingPriceIncrease] = useState<number>(20); // 20% price flip increase

  // Projecting the short term booking flip
  const calculatedBaynaAmount = (baynaLandValue * baynaPercent) / 100;
  const targetSoldValue = baynaLandValue * (1 + (sellingPriceIncrease / 100));
  const estimatedProfit = targetSoldValue - baynaLandValue;
  const returnOnCashInput = calculatedBaynaAmount > 0 ? (estimatedProfit / calculatedBaynaAmount) * 100 : 0;

  const strategies = [
    {
      id: 'short-term',
      type: 'short',
      title: '১. স্বল্পমেয়াদী কুইক-ফ্লিপ পরিকল্পনা (৩ - ৬ মাস)',
      subtitle: 'বায়না চুক্তিভিত্তিক স্পেকুলেশন ব্যবসা',
      emoji: '⚡',
      duration: '৩ থেকে ৬ মাস',
      riskLevel: 'মাঝারি (আইনি স্ক্রুটিনি নির্ভর)',
      capitalRequired: '১৫% - ২৫% বুকিং মানি (৭-১০ লাখ টাকা)',
      focusAreas: 'সিলেট এয়ারপোর্ট রোড, বটেশ্বর, শালুটিকর বাইপাস সংলগ্ন অঞ্চল।',
      explanation: 'আমরা সম্পূর্ণ জমির রেজিস্ট্রি মূল্য একবারে পরিশোধ না করে ২০% ডাউনপেমেন্ট এবং ৩-৬ মাসের সময়সীমা সম্বলিত রেজিস্টার্ড বায়না দলিল (Agreement to Sale) সম্পাদন করব। এরপর এই মধ্যবর্তী সময়ে এলাকার জমির দাম বৃদ্ধি পাওয়ার সাথে সাথে বা অন্য কোনো বড় প্রবাসী ক্রেতা পেলে আমাদের বায়না চুক্তির স্বত্ব ট্রান্সফার বা পাওয়ার অব অ্যাটর্নি হস্তান্তরের মাধ্যমে আকর্ষণীয় প্রিমিয়াম প্রফিটে সম্পূর্ণ জমিটি অন্য ক্রেতার কাছে রেজিস্ট্রি করিয়ে তুলব।',
      steps: [
        'হটস্পট অঞ্চলে বাজারদরের চেয়ে ২০-৩০% সস্তা এবং জরুরি বিক্রয়যোগ্য জমি চিহ্নিত করা।',
        'জমির দলিল, বায়া দলিল, আরএস/নামজারি অত্যন্ত গভীরভাবে লিগ্যাল ভেরিফিকেশন করা।',
        '১৫-২০% বায়না টাকা দিয়ে সাফ-বায়না দলিল রেজিস্ট্রি করা এবং আইনি মেয়াদ ৬ মাস লিখিয়ে নেওয়া।',
        'আমাদের ৫০ জনের ডিরেক্টর ও প্রবাসী সিলেটিদের নেটওয়ার্ক ব্যবহার করে দ্রুত চূড়ান্ত ক্রেতা খুঁজে বের করা।',
        '৩-৬ মাসের মধ্যে চূড়ান্ত ক্রেতার কাছে জমি রেজিস্ট্রির মাধ্যমে মূল বায়না টাকা ফেরত সহ মুনাফা লাভ করা।'
      ],
      pros: 'খুবই কম পুঁজি ব্লক রেখে একসাথে একাধিক জমি লক করা যায়। নগদ প্রবাহ বজায় থাকে।',
      cons: 'চুক্তির মেয়াদ (৬ মাস) শেষ হওয়ার আগে সঠিক ক্রেতা না পাওয়া গেলে রেজিস্ট্রির সম্পূর্ণ টাকা জোগাড় বা সময় বাড়ানোর জরিমানা লাগতে পারে।'
    },
    {
      id: 'medium-term',
      type: 'medium',
      title: '২. মধ্যমেয়াদী ল্যান্ড প্লটিং প্রজেক্ট (২ - ৩ বছর)',
      subtitle: 'বাণিজ্যিক ও রেসিডেন্সিয়াল কাস্টম ট্রাস্ট লেআউট',
      emoji: '📐',
      duration: '২ থেকে ৩ বছর',
      riskLevel: 'খুবই কম ও নিরাপদ',
      capitalRequired: '৬০% - ৮০% মূলধন একত্রীকরণ',
      focusAreas: 'খাদিম নগর বিসিক সংলগ্ন এক্সটেনশন, কড়ইটুলা বা দক্ষিণ সুরমা বাইপাস সংযোগ সড়ক।',
      explanation: '১.৭৫ কোটি টাকার সম্পূর্ণ বা আংশিক সলিড ফান্ড ব্যবহার করে আমরা ২ থেকে ৫ একর কাঁচা নিচু বা টিলাভাত জমি সরাসরি সম্পূর্ণ পেমেন্টে কিনে নেব। এরপর আমাদের কোম্পানির খরচে ড্রেজার দিয়ে বালু ভরাট করে, ১২-১৫ ফুট চওড়া ইটের বা সলিড রাস্তা তৈরি করে, বাউন্ডারি ওয়াল এবং আকর্ষণীয় শাহজালাল গেট বা লেআউট তৈরি করে ৫-৭ শতকের ছোট ছোট ছোট প্লট আকারে সিলেটি প্রবাসী ও স্থানীয়দের কাছে কিস্তিতে অথবা নগদে উচ্চমূল্যে পুনরায় রি-সেল করব।',
      steps: [
        'সিলেট সিটি কর্পোরেশনের বর্ধিত এলাকায় বড় সাইজের নিচু অথবা কাঁচা জমি কমদামে ক্রয়।',
        'কোম্পানির খরচে মাটি ভরাট, লেক ভরাট এবং সীমানা বাউন্ডারি দিয়ে দৃষ্টিনন্দন করা।',
        '৫০ ফিটের মেইন রোড সংলগ্ন সাইটের ভিতরে ১০-১২ ফুটের ছোট সংযোগকারী অভ্যন্তরীণ রাস্তা তৈরি করা।',
        'রঙিন ডিজিটাল নকশা এঁকে ' + '"' + 'শাহজালাল সিটি' + '"' + ' বা ' + '"' + 'শাহজালাল কটেজ স্কয়ার' + '"' + ' ব্র্যান্ডিং এ ৩, ৪ বা ৫ শতকের রেডি প্লট হিসেবে বাজারে প্রচার।',
        'প্রবাসী সিলেটিদের কাছে নিষ্কণ্টক রেডি প্লট বিক্রি শুরু করে বাৎসরিক উচ্চ প্রবৃদ্ধি ঘরে তোলা।'
      ],
      pros: 'সিলেটের প্রবাসীরা রেডি বাউন্ডারি ও রাস্তাওয়ালা প্লট বেশি দামে কিনতে অভ্যস্ত। এটি অত্যন্ত লাভজনক ও সম্পূর্ণ সুরক্ষিত।',
      cons: 'মাটি ভরাট এবং সীমানা প্রাচীর নির্মাণের জন্য অতিরিক্ত বাজেটের প্রয়োজন পড়ে।'
    },
    {
      id: 'long-term',
      type: 'long',
      title: '৩. দীর্ঘমেয়াদী হাউজিং ও ডেভেলপার প্রজেক্ট (৫+ বছর)',
      subtitle: 'যৌথ কন্ডোমিনিয়াম, ডুপ্লেক্স রিসোর্ট ও কমার্শিয়েল রিয়েল এস্টেট',
      emoji: '🏢',
      duration: '৫+ বছর',
      riskLevel: 'মাঝারি (মার্কেট ডেভেলপমেন্ট স্পীড অনুযায়ী)',
      capitalRequired: '১০০% রি-ইনভেস্টেড প্রফিট + কাস্টমার বুকিং ক্যাশ',
      focusAreas: 'সিলেট উপশহর, শেখঘাট, শাহী ঈদগাহ, অথবা সিলেট এয়ারপোর্ট লাক্সারি জোন।',
      explanation: 'প্রথম ৫ বছরে ক্রমাগত জমি ক্রয়-বিক্রয়ের লাভ থেকে কোম্পানির মূল রিজার্ভ যখন ৫ থেকে ১০ কোটি ছাড়িয়ে যাবে, তখন আমরা ডেভলপমেন্ট উইং চালু করব। আমরা সিলেটের মেইন টাউনে অথবা এয়ারপোর্ট রোডের পাশে ৩ থেকে ৫ কাঠা জমিতে যৌথ অংশীদারিত্বে (Landowner JV) বিলাসবহুল ডুপ্লেক্স রিসোর্ট ভিলা, আধুনিক ক্যারেক্টার অ্যাপার্টমেন্ট বিল্ডিং বা ৩ তলা বাণিজ্যিক শো-রুম তৈরি করে ফ্ল্যাট ও স্পেস বিক্রি করব। এছাড়াও দীর্ঘমেয়াদে প্রবাসী সিলেটের প্রবাসীদের জন্য আধুনিক গেটেড কমিউনিটি হাউজিং প্রতিষ্ঠা হবে আমাদের প্রধান ফ্ল্যাগশিপ প্রজেক্ট।',
      steps: [
        'নিজস্ব জমির উপর অথবা সিলেট শহরের কোনো ল্যান্ডওনারের সাথে ৫০:৫০ রেশিওতে অংশীদারি চুক্তি নিশ্চিতকরণ।',
        'রাজউক/সিলেট সিটি কর্পোরেশন ও পরিবেশ অধিদপ্তর থেকে বহুতল বা কটেজ নির্মাণের নকশা অনুমোদন করা।',
        'ডিজিটাল ব্রোশার প্রকাশ করে গ্রাহকদের কাছ থেকে কিস্তিতে বুকিং অর্থ সংগ্রহ ও নির্মাণ কাজ শুরু করা।',
        'আধুনিক কন্ডোমিনিয়াম ও প্রবাসী উপযোগী লাক্সারি ডুপ্লেক্স গেটেড ভিলেজ ক্লাস্টার বা কটেজ রেডি করা।',
        'দখল ও চাবি হস্তান্তর করে বড় মাপের ডিভিডেন্ড ও রিটেইন্ড প্রফিট কোম্পানির অ্যাকাউন্টে রি-ইনজেক্ট করা।'
      ],
      pros: 'রিয়েল এস্টেট খাতের সবচেয়ে বড় আইনি মর্যাদা এবং টেকসই কয়েকশো কোটি টাকার ব্র্যান্ড ইমেজের জন্ম দেয়।',
      cons: 'প্রচুর দীর্ঘমেয়াদী পেশাদার লোকবল, সিভিল ইঞ্জিনিয়ার এবং সময়োপযোগী ফান্ডের সচলতা আবশ্যক।'
    },
    {
      id: 'nrb-trust',
      type: 'medium',
      title: '৪. প্রবাসী লন্ডন ট্রাস্ট পোর্টফোলিও (NRB Trust Portfolio)',
      subtitle: 'বিদেশের মাটিতে বসেই সরাসরি ল্যান্ড ইনভেস্টমেন্ট ও ডাবল-সিগনেচার ট্রাস্ট',
      emoji: '🇬🇧',
      duration: '১ থেকে ৫ বছর',
      riskLevel: 'একেবারেই শূন্য রেটিং',
      capitalRequired: 'কোন ন্যূনতম কোটা নেই (১০-১৫ লাখ টাকার শেয়ার প্যাকেজ)',
      focusAreas: 'UK, USA এবং ইউরোপের প্রবাসী সিলেটি বিনিয়োগকারী মহল।',
      explanation: 'প্রবাসী সিলেটিদের কষ্টার্জিত অর্থের নিরাপত্তায় সিলেটে প্রায়ই ট্রাস্ট বা আস্থার ঘাটতি দেখা যায়। এই ঘাটতি দূর করতে আমাদের অ্যাসোসিয়েশন একটি বিশেষ পোর্টফোলিও স্কিম চালু করবে। প্রবাসীদের প্রেরিত অর্থ সরাসরি তাদের নামে রেজিস্টার্ড বায়না বা কোম্পানির যৌথ ডাবল-সিগনেচার ট্রাস্ট অ্যাকাউন্টে জমা হবে। দূরবর্তী ক্যামেরা নেটওয়ার্ক এবং জিপিএস ট্র্যাকিং বা ড্রোনের সাহায্যে প্রবাসীরা ঘরে বসেই তাদের কেনা জমির উন্নয়ন সরাসরি অ্যাপ বা ওয়েবসাইটে লাইভ ট্র্যাক করতে পারবেন।',
      steps: [
        'প্রবাসীদের জন্য বিশেষ ট্রাস্ট লিগ্যাল এগ্রিমেন্ট ডিড এর খসড়া তৈরি যা ব্রিটিশ ও বাংলাদেশ আদালতে সমান কার্যকরী।',
        'প্রবাসী প্রতিনিধিদের নিয়ে ৩ সদস্যের অডিট বোর্ড গঠন যারা প্রতি ৬ মাস পর সিলেটে এসে জমির ফিজিক্যাল অস্তিত্ব নিরীক্ষা করবেন।',
        'জমির সীমানা প্রাচীরে হাই-ডেফিনিশন ক্লোজ সার্কিট ক্যামেরা বা প্রতিমাসে ড্রোনের সাহায্য ছবি পাঠন।',
        'মুনাফা সরাসরি তাদের ফরেন রেমিটেন্স অ্যাকাউন্টে ট্যাক্স ফ্রি উপায়ে সরকারি ২.৫% প্রণোদনাসহ প্রেরণ করা।'
      ],
      pros: 'প্রবাসীদের সিলেটে বিনিয়োগের ভয় দূর হবে, যার মাধ্যমে খুব দ্রুত কয়েক কোটি টাকার নতুন তহবিল সংগ্রহ সম্ভব হবে।',
      cons: 'ইউকে ট্যাক্স ও রেমিটেন্স পলিসি মেনে টাকা আনয়ন ও স্থানান্তরে কিছুটা আইনি প্রক্রিয়া অনুসরণ করতে হয়।'
    },
    {
      id: 'category-conversion',
      type: 'short',
      title: '৫. শ্রেণি রূপান্তর ও টিলা সমতলী কৌশল (Category Conversion & Value Addition)',
      subtitle: 'কৃষি বা নিচু জমিকে বাণিজ্যিক-ভিটাতে রূপান্তরের মাধ্যমে ৩ গুণ মূল্য তৈরি',
      emoji: '🚜',
      duration: '৬ থেকে ১২ মাস',
      riskLevel: 'মাঝারি (সরকারি নীতি ও অনুমোদন সাপেক্ষ)',
      capitalRequired: '২০% অতিরিক্ত আইনি ও ভরাট খরচ',
      focusAreas: 'সিলেট সদরের বাইপাস সড়ক, হরিপুর, দরবস্ত ও ডিবির হাওর সংলগ্ন সম্ভাবনাময় সড়ক।',
      explanation: 'সিলেটের অনেক রুরাল এলাকায় অনাবাদী ফসলহীন নিচু বা জলাভূমি পড়ে থাকে যা অত্যন্ত সস্তায় কেনা যায়। আমরা এসি ল্যান্ড ও ইউনিয়ন ভূমি অফিস থেকে আইনি প্রক্রিয়ায় কৃষি জমি থেকে ' + '"' + 'বাণিজ্যিক' + '"' + ' বা ' + '"' + 'ভিটা' + '"' + ' ও ' + '"' + 'শিল্প' + '"' + ' শ্রেণীতে রূপান্তরের (Category Mutation) কাজ করব। এরপর মাটি ভরাট করে জমির ব্যবহার উপযোগিতা বাড়িয়ে কয়েকগুণ বেশি দামে রিয়েল এস্টেট ব্যবসায়ীদের কাছে সেল করব।',
      steps: [
        'সরকারি মহাসড়কের ৫ ফুটের মধ্যে থাকা নিচু জলাভূমি বা রিসিভড ল্যান্ড অত্যন্ত দরাদরি করে অল্প মূল্যে ক্রয়।',
        'সহকারী কমিশনার (ভূমি) এর নিকট জমির যৌক্তিক নকশাসহ শ্রেণী পরিবর্তন অনুমোদন ফর্ম দাখিল।',
        'উপযুক্ত ড্রেজার ভাড়ার মাধ্যমে দ্রুত বালি ও লাল মাটি ফেলে ভরাট সম্পন্নকরণ।',
        'শ্রেণী পরিবর্তন সম্পন্ন করে উচ্চ করপোরেট ও বাণিজ্যিক প্লট হিসেবে ৩ গুণ মূল্যে বাজারে রিলিজ।'
      ],
      pros: 'অভাবনীয় মুনাফার মার্জিন (১০০% থেকে ৩০০% পর্যন্ত লাভ মাত্র ১ বছরেই সম্ভব)।',
      cons: 'অনুমোদনের জন্য সরকারি লাল ফিতার জটিলতা ও সিলেট পরিবেশ অধিদপ্তরের ছাড়পত্র পেতে অতিরিক্ত সময়ের প্রয়োজন হতে পারে।'
    }
  ];

  const filteredStrategies = selectedPlanTab === 'all' 
    ? strategies 
    : strategies.filter(s => s.type === selectedPlanTab);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Intro Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
              <TrendingUp className="h-3.5 w-3.5" /> শাহজালাল অ্যাসোসিয়েশন • Sylhet Business Strategy Hub
            </span>
            <h2 className="text-xl font-extrabold text-slate-900">যৌথ প্রপার্টি ব্যবসায়িক পরিকল্পনা ও কৌশল সমূহ (All-in-One Plans)</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              স্বল্প খরচ ও দীর্ঘমেয়াদী ধারাবাহিক উন্নয়নের উপর ভিত্তি করে আমাদের বহুমুখী পরিকল্পনা সাজানো হয়েছে। কম পুঁজিতে কুইক রোটেশন থেকে শুরু করে বড় আকারের হাউজিং মেগা প্রজেক্টের নীল নকশা নিচে বিশদভাবে প্রদর্শন করা হলো।
            </p>
          </div>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          <button 
            onClick={() => setSelectedPlanTab('all')}
            className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedPlanTab === 'all' 
                ? "bg-emerald-600 text-white shadow-xs" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            সব পরিকল্পনা একত্রে ({strategies.length})
          </button>
          
          <button 
            onClick={() => setSelectedPlanTab('short')}
            className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedPlanTab === 'short' 
                ? "bg-emerald-600 text-white shadow-xs" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            ⚡ কুইক-ফ্লিপ / স্বল্পমেয়াদী
          </button>

          <button 
            onClick={() => setSelectedPlanTab('medium')}
            className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedPlanTab === 'medium' 
                ? "bg-emerald-600 text-white shadow-xs" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            📐 প্লটিং ও রি-সেল / মধ্যমেয়াদী
          </button>

          <button 
            onClick={() => setSelectedPlanTab('long')}
            className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedPlanTab === 'long' 
                ? "bg-emerald-600 text-white shadow-xs" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            🏢 হাউজিং ও কন্ডো / দীর্ঘমেয়াদী
          </button>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Strategy List (Left 2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          {filteredStrategies.map((strat) => (
            <div 
              key={strat.id} 
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow duration-300 space-y-5"
            >
              {/* Card Title Box */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{strat.emoji}</span>
                    <h3 className="text-md font-extrabold text-slate-900">{strat.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold pl-8">{strat.subtitle}</p>
                </div>
                <div className="shrink-0 text-center">
                  <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                    {strat.duration}
                  </span>
                </div>
              </div>

              {/* Strategy Parameters Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 rounded-xl p-4 text-xs">
                <div>
                  <span className="block text-slate-400 font-semibold mb-0.5">আনুমানিক প্রয়োজনীয় মূলধন:</span>
                  <span className="font-bold text-slate-800">{strat.capitalRequired}</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-semibold mb-0.5">আইনি ঝুঁকিমাত্রা:</span>
                  <span className="font-bold text-rose-600">{strat.riskLevel}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="block text-slate-400 font-semibold mb-0.5">টার্গেট বা ফোকাস এরিয়া:</span>
                  <span className="font-bold text-slate-800">{strat.focusAreas}</span>
                </div>
              </div>

              {/* Comprehensive Description text */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-900 block flex items-center gap-1">
                  <Wand2 className="h-3.5 w-3.5 text-emerald-600" /> ব্যবসায়িক রূপরেখা ও কার্যপ্রণালী:
                </span>
                <p className="text-xs leading-relaxed text-slate-650">
                  {strat.explanation}
                </p>
              </div>

              {/* Implementation Path Steps (Timeline inside card) */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-900 block">ধাপে ধাপে বাস্তবায়ন প্রক্রিয়া:</span>
                <div className="space-y-2.5 pl-2 border-l-2 border-slate-100">
                  {strat.steps.map((step, i) => (
                    <div key={i} className="relative pl-5 text-xs text-slate-650 leading-relaxed">
                      <span className="absolute -left-[27px] top-[1.5px] h-4 w-4 rounded-full bg-slate-150 text-slate-700 flex items-center justify-center text-[10px] font-extrabold border-2 border-white">
                        {i + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons Box */}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/50 space-y-1">
                  <span className="font-bold text-emerald-800 flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" /> প্রধান সুবিধা (Pros)
                  </span>
                  <p className="text-slate-650 text-[11px]">{strat.pros}</p>
                </div>
                <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100/50 space-y-1">
                  <span className="font-bold text-rose-800 flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5" /> সম্ভাব্য চ্যালেঞ্জ (Cons)
                  </span>
                  <p className="text-slate-650 text-[11px]">{strat.cons}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Sidebar Interactive Bayna simulator & strategy summary (Right 1 column) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Interactive Calculator for Booking / Bayna Speculation */}
          <div className="rounded-2xl border border-slate-205 border-slate-200 bg-white p-6 shadow-xs space-y-5">
            <div className="space-y-1.5 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-emerald-600" />
                <h3 className="text-sm font-extrabold text-slate-900 font-sans">কুইক বায়না (Bayna) লাভ সিমুলেটর</h3>
              </div>
              <p className="text-[11px] text-slate-500">
                ৩-৬ মাসের বায়না ফ্লিপ প্রজেক্টে কম টাকা বিনিয়োগ করে আনুমানিক কত লাভ হতে পারে তা লাইভ হিসাব করুন।
              </p>
            </div>

            {/* Price slider */}
            <div className="space-y-4 text-xs">
              <div className="space-y-2">
                <div className="flex justify-between items-center font-semibold text-slate-700">
                  <span>জমির প্রারম্ভিক বাজারমূল্য</span>
                  <span className="text-slate-905 text-emerald-600 font-bold font-mono">{(baynaLandValue / 100000).toFixed(1)} লক্ষ BDT</span>
                </div>
                <input 
                  type="range" 
                  min="2000000" 
                  max="20000000" 
                  step="500000"
                  value={baynaLandValue}
                  onChange={(e) => setBaynaLandValue(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Bayna Booking % */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-semibold text-slate-700">
                  <span>বায়না বুকিং পেমেন্ট (%)</span>
                  <span className="text-slate-905 text-emerald-600 font-bold font-mono">{baynaPercent}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="30" 
                  step="5"
                  value={baynaPercent}
                  onChange={(e) => setBaynaPercent(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                  <span>১০% (ন্যূনতম)</span>
                  <span>৩০% (সর্বাধিক)</span>
                </div>
              </div>

              {/* Selling Price flip increase */}
              <div className="space-y-2">
                <div className="flex justify-between items-center font-semibold text-slate-700">
                  <span>৩-৬ মাসে জমির মূল্য বৃদ্ধি (%)</span>
                  <span className="text-slate-900 font-bold font-mono text-emerald-600">+{sellingPriceIncrease}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  step="5"
                  value={sellingPriceIncrease}
                  onChange={(e) => setSellingPriceIncrease(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Results Calculations Area */}
              <div className="bg-slate-900 text-white rounded-xl p-4 space-y-3.5 font-sans mt-2">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-[10px] font-semibold text-slate-400">আপনার নগদ বায়না ইনপুট:</span>
                  <span className="font-mono text-xs font-bold text-teal-300">{(calculatedBaynaAmount / 100000).toFixed(2)} লক্ষ টাকা</span>
                </div>

                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-[10px] font-semibold text-slate-400">টার্গেট ৩-৬ মাসের বিক্রয়মূল্য:</span>
                  <span className="font-mono text-xs font-bold">{(targetSoldValue / 100000).toFixed(2)} লক্ষ টাকা</span>
                </div>

                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-[10px] font-semibold text-slate-400">জমির মোট প্রজেক্টেড লাভ:</span>
                  <span className="font-mono text-xs font-bold text-emerald-400">+{(estimatedProfit / 100005).toFixed(2)} লক্ষ টাকা</span>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-[10px] font-extrabold text-teal-400 uppercase">নগদ ফান্ডের বার্ষিক রিটার্ন (ROI):</span>
                  <span className="font-mono font-extrabold text-teal-300 text-sm">+{returnOnCashInput.toFixed(0)}% ROI</span>
                </div>
              </div>

              <div className="flex gap-2 items-start text-[10px] text-slate-500 leading-normal border-t border-slate-100 pt-3">
                <Lightbulb className="h-4 w-4 text-amber-500 shrink-0" />
                <p>
                  <strong>সতর্কতা:</strong> বায়না সম্পত্তি লক করার পূর্বে নিশ্চিত করুন চুক্তিপত্রে যাতে তৃতীয়পক্ষের নিকট চুক্তি বিক্রয়ের (Right of Resale/Nominate Transfer) স্পষ্ট আইনি ক্ষমতা আপনাকে দেওয়া হয়েছে।
                </p>
              </div>

            </div>
          </div>

          {/* Strategic Action Summary Card */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <h3 className="text-xs font-extrabold text-emerald-950 uppercase tracking-wide">শাহজালাল যৌথ সফলতার রোড লুপ</h3>
            </div>
            <p className="text-xs leading-relaxed text-emerald-900">
              আমাদের তহবিল ১.৭৫ কোটি সরাসরি ক্যাশ থাকায় বাজারে আমরা ক্রেতা হিসেবে অত্যন্ত শক্তিশালী অবস্থানে থাকব। সিলেটের হট-স্পটগুলোতে যেখানে মানুষের ব্যক্তিগত ক্যাশ ফ্লো কম থাকে, সেখানে নগদের ক্ষমতায় বায়ানার সুযোগে কম মূল্যে জমি নিজেদের সুবিধামতো বুক করা সম্ভব হবে।
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">যৌথ চুক্তি নিরাপত্তা চালিকা:</span>
              <ul className="space-y-1 text-[11px] text-slate-700">
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-emerald-600 rounded-full"></span>
                  ৫৩ মেম্বার আইনি ট্রাস্ট দলিল
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-emerald-600 rounded-full"></span>
                  ১০০% পে-অর্ডার ট্রানজেকশন
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-emerald-600 rounded-full"></span>
                  ডাবল ব্যাংকিং সিগনেচার লুপ
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
