import { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, ShieldCheck, Scale, Award, Info } from 'lucide-react';
import { FaqItem } from '../types';

export default function FaqTab() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqItems: FaqItem[] = [
    {
      question: "৫০ জনের এত বড় যৌথ উদ্যোগে সিদ্ধান্ত কিভাবে নেওয়া হবে? কোনো চরম মতবিরোধ হলে সমাধান কি?",
      answer: "কোম্পানি আইন অনুযায়ী সকল ডিল সরাসরি পরিচালনা করার জন্য ২৫ জন ডিরেক্টর বা পরিচালকের মধ্য থেকে ৫-৭ জনের বোর্ড-অনুমোদিত 'কার্যনির্বাহী কমিটি' থাকবে। বড় কোনো সিদ্ধান্ত যেমন জমি কেনা বা লাভজনক প্রপার্টি বিক্রির ক্ষেত্রে পরিচালনা পর্ষদ (BOD) মিটিংয়ে কমপক্ষে দুই-তৃতীয়াংশ (২/৩) বা ৭৫% ডিরেক্টরের লিখিত ভোট লাগবে। কোনো বিষয়ে যৌথ ডিরেক্টরদের মধ্যে সমতা (Tie) দেখা দিলে কোম্পানির আর্টিকেলে চেয়ারম্যানের ‘কাস্টিং ভোট’ (অতিরিক্ত মীমাংসাকারী ১ ভোট) থাকার আইনি ক্লজ যোগ থাকবে যাতে সিদ্ধান্ত ঝুলে না থাকে।",
      tag: "decisions"
    },
    {
      question: "কোম্পানির যৌথ ব্যাংক অ্যাকাউন্ট বা ১.৭৫ কোটির তহবিলের সর্বোচ্চ নিরাপত্তা কিভাবে নিশ্চিত করা হবে?",
      answer: "১.৭৫ কোটির প্রারম্ভিক তহবিলের ১ টাকাও ক্যাশ বা নগদে ট্রানজেকশন করা যাবে না। সকল ফি পে-অর্ডার বা সরাসরি ব্যাংক-টু-ব্যাংক আরটিজিএস (RTGS) প্রসেসে যাবে। কোম্পানির ব্যাংক অ্যাকাউন্ট পরিচালনায় কমপক্ষে ৩ জন মনোনীত পরিচালকের স্বাক্ষর থাকবে, জাস্ট ১ জন টাকা তুলতে পারবে না। উইথড্র করতে ব্যবস্থাপনা পরিচালক (MD), চেয়ারম্যান এবং অর্থ পরিচালক (CFO) এই ৩ জনের মধ্য থেকে অন্তত যেকোনো ২ জনের আসল যৌথ স্বাক্ষর লাগবে। এছাড়া প্রতি মাসে ব্যাংক স্টেটমেন্ট ও ট্রানজেকশন হিস্ট্রি সরাসরি সম্পূর্ণ ৫০ সদস্যের হোয়াটসঅ্যাপ বা ইমেল পোর্টালে প্রকাশ করা হবে।",
      tag: "security"
    },
    {
      question: "কোনো সদস্য যদি তার আসল শেয়ার অন্য কারোর কাছে বিক্রি করে চলে যেতে চান (Exit Plan)? নিয়ম কি?",
      answer: "প্রাইভেট লিমিটেড কোম্পানির নিয়ম অনুযায়ী বাহ্যিক বা বাইরের যেকোনো অচেনা ব্যক্তির কাছে সরাসরি শেয়ার বিক্রি বা হস্তান্তর কঠোরভাবে সীমাবদ্ধ (Restriction on Transfer of Shares)। যদি কোনো ডিরেক্টর বা শেয়ারহোল্ডার শেয়ার বিক্রি করে চলে যেতে চান, তবে তাকে অবশ্যই কোম্পানি আর্টিকেলের ‘Right of First Refusal’ রুল মেনে প্রথমে বর্তমান সদস্যদের ডিলটি অফার করতে হবে। বর্তমান সদস্যদের কেউ কিনতে অপারগ হলে, বাকি বোর্ডের অনুমতি সাপেক্ষে বহিরাগত ব্যক্তির ব্যাকগ্রাউন্ড চেকপূর্বক নতুন সদস্য হিসেবে অন্তর্ভুক্ত করা হবে। শেয়ার হস্তান্তরের সম্পূর্ণ ট্যাক্স ও সরকারি স্ট্যাম্প খরচ বিক্রেতা সদস্যকে বহন করতে হবে।",
      tag: "equity"
    },
    {
      question: "রিয়েল এস্টেট বাজারে যদি মন্দাভাব বা কোনো প্রজেক্টে লোকসান হয়, সেক্ষেত্রে কি ব্যাকআপ বা বাফার থাকবে?",
      answer: "ব্যবসায়ের জন্য ১.৭৫ কোটির পুরো টাকা জমি কেনার কাজে ব্যবহার করা হচ্ছে না। ৫% বা ৮.৭৫ লক্ষ টাকা সর্বদাই ‘জরুরি ব্যাকআপ রিজার্ভ’ হিসেবে ব্যাংকে ফিক্সড ডিপোজিট (FDR) থাকবে যা দিয়ে ট্যাক্স, অকস্মাৎ মামলা বা অন্যান্য উন্নয়ন ট্যাক্স ব্যাকআপ করা হবে। যদি বাজারের মন্দাভাবের কারণে জমি বিক্রি ২ বছরের বদলে ৩ বছর অপেক্ষা করতে বলা হয়, তবে জমিটিতে বালু ভরাট করে ল্যান্ড প্যাসিভ লিজ বা রেন্ট করা হব। যার থেকে অর্জিত মাসিক আয় দিয়ে কোম্পানির বাৎসরিক ট্যাক্স রিটার্ন ও রানিং পরিচালনা খরচ কভার করে লিকুইডিটি ধরে রাখা হবে।",
      tag: "security"
    },
    {
      question: "জমি বা প্রপার্টি ক্রয়ের আগে জাল দলিলের জালিয়াতি কিভাবে এড়ানো হবে?",
      answer: "১.৭৫ কোটি মূলধন দিয়ে জমি ক্রয়ের পূর্বে কোম্পানি অনুমোদিত অন্তত ২ জন পৃথক ল্যান্ড আইনজীবীকে দিয়ে জমির দলিল, বায়া দলিল, আরএস/বিএস পর্চা খতিয়ান ও আরজেএসবির নামজாரி পর্চা ডাবল-ভেরিফিকেশন তল্লাশি করানো হবে। স্থানীয় সার্ভেয়ার পাঠিয়ে প্রপার্টির ভৌত বা ফিজিক্যাল সীমানা ও মালিকানার অতীত ইতিহাস পর্যালোচনা করা হবে। রেজিস্ট্রি অফিসে কোনো ধরণের আইনি কুয়াশা ও বিরোধ (Litigation) ধরা পড়লে ওই সম্পত্তি ক্রয় সম্পূর্ণ বাতিল করা হবে, কোনো প্রপার্টি ক্রয়ে আপোষ করা হবে না।",
      tag: "vetting"
    },
    {
      question: "পরিচালক (৫ লক্ষ টাকা ক্যাটাগরি) ও শেয়ারহোল্ডার (২ লক্ষ টাকা ক্যাটাগরি) ফান্ডের মধ্যে মৌলিক বৈষম্য কি?",
      answer: "মৌলিক বৈষম্য ২টি ক্ষেত্রে: (১) ভোটাধিকার এবং (২) কোম্পানির পরিচালনা কাঠামো। ২৫ জন পরিচালক সরাসরি পরিচালনা কমিটির অংশ হবেন অথবা কার্যনির্বাহী কমিটি গঠনে ভূমিকা রাখবেন। ডিরেক্টরদের কোম্পানি রিপ্রেজেন্ট করার ক্ষমতা থাকবে। অন্যদিকে ২৫ জন সাধারণ শেয়ারহোল্ডার প্রধানত প্যাসিভ বিনিয়োগকারী বা স্লিপিং পার্টনার হিসেবে কাজ করবেন যা তাদের প্রফেশনাল লাইফ ঠিক রেখে বাড়তি মুনাফা নিশ্চিত করবে। তবে লাভ বণ্টনের হিসাব দুই ক্যাটাগরির জন্য এক, প্রত্যেকেই তাদের বিনিয়োগকৃত টাকার অংকের শতাংশ অনুযায়ী (প্রো-রাটা) মুনাফা সমান অনুপাতে বুঝে পাবেন।",
      tag: "equity"
    }
  ];

  const tags = [
    { value: "all", label: "সব প্রশ্ন" },
    { value: "decisions", label: "নীতিনির্ধারণ ও সিদ্ধান্ত" },
    { value: "security", label: "তহবিল ও নিরাপত্তা" },
    { value: "equity", label: "শেয়ার ও প্রস্থান নীতি" },
    { value: "vetting", label: "জমি যাচাই লিগ্যাল" }
  ];

  const filteredFaqs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "all" || item.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="যশোনী, সিদ্ধান্ত, নিরাপত্তা অথবা শেয়ার হস্তান্তর নিয়মাবলি খুঁজুন..."
            className="w-full rounded-xl border border-slate-250 bg-slate-50/50 pl-10 pr-4 py-3 text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-hidden"
          />
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag.value}
              onClick={() => setSelectedTag(tag.value)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedTag === tag.value 
                  ? "bg-slate-900 text-white shadow-xs" 
                  : "bg-slate-100 hover:bg-slate-200 text-slate-750"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 rounded-xl bg-slate-50 border border-slate-205 text-slate-500 text-xs">
            দুঃখিত, অনুসন্ধানকৃত তথ্যের সাথে মেলে এমন কোনো প্রশ্নোত্তর খুঁজে পাওয়া যায়নি।
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-xl border transition-all ${
                  isOpen ? "border-emerald-250 bg-emerald-50/10 shadow-3xs" : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex justify-between items-start gap-4 cursor-pointer focus:outline-hidden select-none"
                >
                  <div className="flex gap-3 items-start">
                    <HelpCircle className={`h-5 w-5 shrink-0 mt-0.5 ${isOpen ? "text-emerald-600" : "text-slate-400"}`} />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                      {faq.question}
                    </h4>
                  </div>
                  <span className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </span>
                </button>

                {/* Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100/60 text-xs sm:text-sm text-slate-650 leading-relaxed space-y-2">
                    <p>{faq.answer}</p>
                    
                    {/* Tags Badge in bottom FAQ footer */}
                    <div className="pt-3 flex gap-2 border-t border-slate-100/50 mt-4 text-[10px] font-bold text-slate-450 uppercase">
                      <span>ট্যাগ:</span>
                      <span className="text-emerald-700 bg-emerald-50/50 px-2 py-0.5 rounded">
                        {faq.tag === 'decisions' ? 'সিদ্ধান্ত ও নীতিনির্ধারণ' : faq.tag === 'security' ? 'নিরাপত্তা ও ব্যাংক' : faq.tag === 'equity' ? 'শেয়ার ও এক্সিট' : 'আইনি যাচাই ও দলিল'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Advisory Note */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm md:p-8">
        <h3 className="text-base font-bold text-slate-950 flex items-center gap-1.5">
          <Scale className="h-5 w-5 text-emerald-600" />
          সম্মিলিত ব্যবসায়িক সংবিধান (Partnership Constitution & Shareholder Agreement)
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          জয়েন্ট স্টক কোম্পানি আইন অনুযায়ী কোম্পানির Articles of Association (AoA) একটি সুনির্দিষ্ট সংবিধান। তবে ৫০ জনের এই বিশেষ কাঠামোর জন্য নিবন্ধন সম্পূর্ণ করার পূর্বেই একটি সচিত্র 
          <strong>&quot;শেয়ারহোল্ডারদের পার্টনারশিপ এগ্রিমেন্ট (Shareholders Agreement)&quot;</strong> সম্পাদন করে নোটারি করে রাখা সুপারিশযোগ্য। এতে কোম্পানি আইনের খুঁটিনাটি খুব সহজ সরল উপায়ে সংজ্ঞায়িত থাকবে যাতে ভবিষ্যতে কোনো ভুল বোঝাবুঝি বা আদালতে মামলা-মোকদ্দমার অবকাশ না থাকে। 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
          <div className="p-3.5 bg-slate-50 rounded-xl space-y-1 text-[11px] leading-relaxed">
            <h5 className="font-bold text-slate-900">১. পার্টনার সিকিউরিটি</h5>
            <p className="text-slate-550">কোনো সদস্যের মৃত্যুর কিস্তিতে তার আইনি উত্তরাধিকার বা নমিনী নির্বিঘ্নে শেয়ারের মালিকানা বুঝে পাওয়ার শর্তাবলি।</p>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl space-y-1 text-[11px] leading-relaxed">
            <h5 className="font-bold text-slate-900">২. ফিক্সড ল্যাপ অফ ডিল</h5>
            <p className="text-slate-550">কোম্পানি কোনো সদস্যের ব্যক্তিগত ব্যবসা বা ল্যান্ড দালালি পকেটের কাজে ব্যবহার করা যাবে না - স্বার্থের দ্বন্দ্ব নিরসন নীতিমালার বাস্তবায়ন।</p>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl space-y-1 text-[11px] leading-relaxed">
            <h5 className="font-bold text-slate-905">৩. স্বাধীন মধ্যস্থতাকারী</h5>
            <p className="text-slate-550">কোনো চরম বিবাদ তৈরি হলে তা কোম্পানি পরিচালনা ট্রাইব্যুনাল বা আইনি সালিশ আইন (Arbitration Act 2051/2001) দিয়ে সুলভ খরচে সমাধান করা।</p>
          </div>
        </div>
      </div>
    </div>
  );
}
