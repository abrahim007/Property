import { useState } from 'react';
import { Scale, CheckSquare, Square, Info, ShieldAlert, Award, FileText, Download, Users, Coins, Briefcase, ShieldCheck } from 'lucide-react';
import { LegalTask } from '../types';

export default function LegalTab() {
  const [activeStructure, setActiveStructure] = useState<'ltd' | 'coop' | 'deed' | 'partnership'>('ltd');

  // Existing Limited Company (LTD) Tasks
  const [ltdTasks, setLtdTasks] = useState<LegalTask[]>([
    {
      id: "ltd-1",
      phase: "registration",
      title: "নামের ছাড়পত্র সংগ্রহ (Name Clearance Certificate)",
      authority: "RJSC (Registrar of Joint Stock Companies & Firms)",
      duration: "২ - ৩ কার্যদিবস",
      description: "কোম্পানির প্রস্তাবিত ইউনিক নাম (যেমন: 'শাহজালাল অ্যাসোসিয়েশন পিএলসি' বা 'শাহজালাল ল্যান্ড ডেভেলপমেন্ট লিমিটেড') সরকারি সিস্টেমে চেক করে অনুমোদন নেওয়া। নামের ছাড়পত্রের মেয়াদ ৩০ দিন থাকে।",
      requiredDocs: ["প্রস্তাবিত ৩টি নাম পছন্দক্রম অনুযায়ী", "আবেদনকারীর ইমেইল ও মোবাইল নম্বর"]
    },
    {
      id: "ltd-2",
      phase: "registration",
      title: "MoA এবং AoA খসড়া প্রস্তুতকরণ (Drafting MoA & AoA)",
      authority: "নিবন্ধিত আইনজীবী বা চার্টার্ড অ্যাকাউন্ট্যান্ট (CA)",
      duration: "৪ - ৭ কার্যদিবস",
      description: "Memorandum of Association (MoA) এবং Articles of Association (AoA) তৈরি। এখানে কোম্পানির কাজের ক্ষেত্র, ২৫ জন ডিরেক্টর এবং ২৫ জন শেয়ারহোল্ডারের লাভ বণ্টন, ভোটাধিকার এবং শেয়ারের হস্তান্তরযোগ্যতার কঠোর ধারাগুলো সুনির্দিষ্ট করতে হবে।",
      requiredDocs: ["৫০ জনের জাতীয় পরিচয়পত্র (NID) ও ছবি", "ডিরেক্টরদের পদবী বণ্টন ও শেয়ার অনুপাত", "নিবন্ধন ফি হিসেব"]
    },
    {
      id: "ltd-3",
      phase: "registration",
      title: "অস্থায়ী যৌথ ব্যাংক হিসাব খোলা ও তহবিল স্থানান্তর",
      authority: "যেকোনো বাণিজ্যিক ব্যাংক (যেমন: সিটি ব্যাংক, ব্র্যাক ব্যাংক)",
      duration: "৩ - ৫ কার্যদিবস",
      description: "কোম্পানির পেইড-আপ ক্যাপিটাল (১.৭৫ কোটি টাকা) জমা করার জন্য একটি ব্যাংক অ্যাকাউন্ট খোলা। প্রতিটি সদস্যের ব্যাংক ট্র্যান্সফারের ট্র্যাকিং এখানে সুন্দরভাবে জমা হবে।",
      requiredDocs: ["RJSC নামের ছাড়পত্র", "খসড়া MoA/AoA", "বোর্ড রেজল্যুশন"]
    },
    {
      id: "ltd-4",
      phase: "registration",
      title: "RJSC নিবন্ধন ও সার্টিফিকেট অফ ইনকর্পোরেশন সংগ্রহ",
      authority: "RJSC বাংলাদেশ",
      duration: "৭ - ১০ কার্যদিবস",
      description: "নিবন্ধন ফি, ই-স্ট্যাম্প ফি পরিশোধ করে অনলাইনে সব ফাইল সাবমিট করা। ফাইল সঠিক থাকলে RJSC নিবন্ধনের পর সার্টিফিকেট অফ ইনকর্পোরেশন (Certificate of Incorporation) ও অনুমোদিত MoA, Form XII প্রদান করবে।",
      requiredDocs: ["চূড়ান্ত MoA/AoA", "পরিচালকদের সম্মতিপত্র (Form IX)", "পরিচালকদের বিবরণী (Form XII)", "ব্যাংক ডিপোজিট প্রমাণ"]
    },
    {
      id: "ltd-5",
      phase: "operational",
      title: "কোম্পানি ট্রেড লাইসেন্স সংগ্রহ (Trade License)",
      authority: "সিলেট সিটি কর্পোরেশন / সংশ্লিষ্ট ইউনিয়ন পরিষদ",
      duration: "৩ - ৫ কার্যদিবস",
      description: "কোম্পানি নিবন্ধিত ঠিকানায় বাণিজ্যিকভাবে রিয়েল এস্টেট বা জমি ক্রয়ের ব্যবসা পরিচালনার আইনি ট্রেড লাইসেন্স সংগ্রহ করা।",
      requiredDocs: ["সার্টিফিকেট অফ ইনকর্পোরেশন", "MoA/AoA অনুলিপি", "অফিস ভাড়ার চুক্তিপত্র বা ট্যাক্স রসিদ", "চেয়ারম্যান/ডিরেক্টরের ছবি ও NID"]
    },
    {
      id: "ltd-6",
      phase: "operational",
      title: "করপোরেট ই-টিন (e-TIN) এবং ভ্যাট (BIN) রেজিস্ট্রেশন",
      authority: "জাতীয় রাজস্ব বোর্ড (NBR)",
      duration: "২ - ৪ কার্যদিবস",
      description: "কোম্পানি নামে ই-টিন এবং ভ্যাট প্রদানের জন্য Business Identification Number (BIN) সংগ্রহ করা। এটি করপোরেট ব্যাংক একাউন্ট চূড়ান্ত করতে এবং জমি ক্রয়ে কর ছাড়ের জন্য আবশ্যক।",
      requiredDocs: ["কোম্পানি ইনকর্পোরেশন সার্টিফিকেট", "ট্রেড লাইসেন্স", "ব্যাংক হিসাব বিবরণী"]
    },
    {
      id: "ltd-7",
      phase: "vetting",
      title: "জমি বা প্রপার্টি ক্রয়ের পূর্বে আইনি স্ক্রুটিনি (Property Vetting & Search)",
      authority: "সাব-রেজিস্ট্রি অফিস, এসি ল্যান্ড ও ভূমি মন্ত্রণালয়",
      duration: "৭ - ১৫ কার্যদিবস (প্রতি প্রপার্টি অনুযায়ী)",
      description: "যৌথ মূলধনে কোনো জমি ক্রয়ের পূর্বে তার গত ৩০ বছরের দলিলের ইতিহাস, বায়া দলিল, আরএস/বিএস সিএস পর্চা খতিয়ান এবং নামজারী (Mutation) সঠিক আছে কিনা তা দক্ষ ল্যান্ড আইনজীবী দিয়ে তল্লাশি করানো।",
      requiredDocs: ["মূল দলিল ও বায়া দলিল সমূহ", "হাল সনের ভূমি উন্নয়ন কর দাখিলা", "সিএস, এসএ, আরএস, বিএস পর্চা খতিয়ান"]
    }
  ]);

  // Cooperative Society (সমবায় সমিতি) Tasks
  const [coopTasks, setCoopTasks] = useState<LegalTask[]>([
    {
      id: "coop-1",
      phase: "registration",
      title: "উদ্যোক্তা ও এড-হক কমিটি গঠন এবং উপ-আইন (By-laws) ড্রাফট",
      authority: "স্থানীয় সমবায় এডভোকেট / সমবায় অধিদপ্তর মনোনীত ব্যক্তি",
      duration: "৩ - ৫ কার্যদিবস",
      description: "কমপক্ষে ২০ জন সদস্য মিলে প্রাথমিক সাধারণ সভা আহ্বান করা এবং সমিতির উদ্দেশ্য, ১.৭৫ কোটি মূলধন সংগ্রহ, সঞ্চয় পলিসি ও ব্যবস্থাপনা কমিটি নির্বাচনের নিয়মাবলী ঠিক করে উপ-আইন (By-laws) ড্রাফট করা।",
      requiredDocs: ["সকল সদস্যদের ছবি ও NID", "উদ্যোক্তাদের সম্মতি স্বাক্ষর", "প্রাথমিক বাই-লজ কপি"]
    },
    {
      id: "coop-2",
      phase: "registration",
      title: "সমবায় সমিতির নাম অনুমোদন (Name Clearance Certificate)",
      authority: "জেলা সমবায় কার্যালয়, সিলেট (কোর্ট রোড / সুনামগঞ্জ রোড)",
      duration: "২ - ৩ কার্যদিবস",
      description: "প্রস্তাবিত নাম (যেমন: 'শাহজালাল বহুমুখী সমবায় সমিতি লিমিটেড') অন্য কোনো সমিতির সাথে হুবহু মিলে না গেলে জেলা সমবায় অফিসার থেকে নামের ছাড়পত্র বা এনওসি নেওয়া।",
      requiredDocs: ["নির্ধারিত ফরমে আবেদন", "প্রস্তাবিত নামের তালিকা"]
    },
    {
      id: "coop-3",
      phase: "registration",
      title: "রেজিস্ট্রেশন ফি জমাদান এবং সমবায় রেজিস্ট্রেশন সার্টিফিকেট সংগ্রহ",
      authority: "বিভাগীয়/জেলা সমবায় কার্যালয়, সিলেট",
      duration: "১০ - ১৫ কার্যদিবস",
      description: "সহজ দপ্তরের মাধ্যমে সমবায়ের জন্য সরকারি রেজিস্ট্রেশন ফি জমা দেওয়া (মাত্র ২,০০০ - ৫,০০০ টাকা)। সমবায় অফিসার সব কাগজপত্র ও সদস্য তালিকা যাচাই করে অফিশিয়াল রেজিস্ট্রেশন সার্টিফিকেট প্রদান করবেন।",
      requiredDocs: ["অনুমোদিত ৩ কপি উপ-আইন (By-laws)", "সদস্যদের তিন বছরের অডিট ও সঞ্চয় অঙ্গীকার", "ব্যাংক একাউন্ট খোলার বোর্ড রেজল্যুশন"]
    },
    {
      id: "coop-4",
      phase: "operational",
      title: "সমিতির নামে অফিশিয়াল ব্যাংক হিসাব সচলকরণ",
      authority: "যেকোনো বাণিজ্যিক ব্যাংক বা সমবায় ব্যাংক",
      duration: "২ - ৪ কার্যদিবস",
      description: "সমবায় সমিতির নামে ডাবল/ট্রিপল সিগনেচার হিসাব খোলা যেখানে সভাপতির সাথে যৌথ সিলেকশনে ক্যাশিয়ার এবং সাধারণ সম্পাদকের সাক্ষর থাকবে। ১.৭৫ কোটি টাকার ল্যান্ড তহবিল এখানে সরাসরি জমা হবে।",
      requiredDocs: ["রেজিস্ট্রেশন সার্টিফিকেট", "অনুমোদিত উপ-আইন বা বাই-লজ", "নির্বাচিত কমিটি মেম্বারদের বিবরণ"]
    },
    {
      id: "coop-5",
      phase: "vetting",
      title: "সমিতির রেজল্যুশন অনুযায়ী জমি বায়না ও সমিতি নামে নামজারি",
      authority: "সিলেট সাব-রেজিস্ট্রি এবং এসি ল্যান্ড অফিস",
      duration: "৭ - ১৫ কার্যদিবস",
      description: "সমবায় সমিতির সাধারণ সভার সিদ্ধান্তপত্রের রেজল্যুশন পাস করে জমি বায়না করা এবং সাব-রেজিস্ট্রি অফিসে সরাসরি 'শাহজালাল বহুমুখী সমবায় সমিতি'র নামে সাফ-কবলা দলিল সম্পাদন করা ও এসি ল্যান্ড থেকে নামজারি সম্পন্ন করা।",
      requiredDocs: ["সমিতির রেজল্যুশন কপি", "জমি ক্রয়ের বায়া দলিল ও খতিয়ান", "ভূমি উন্নয়ন কর রসিদ"]
    }
  ]);

  // Registered Co-ownership Deed (রেজিস্টার্ড যৌথ মালিকানা চুক্তি) Tasks
  const [deedTasks, setDeedTasks] = useState<LegalTask[]>([
    {
      id: "deed-1",
      phase: "registration",
      title: "যৌথ মূলধন ও পরিচালন চুক্তিপত্র খসড়া (Deed of Agreement Draft)",
      authority: "অভিজ্ঞ দলিলের লেখক / আইন উপদেষ্টা",
      duration: "৩ - ৫ কার্যদিবস",
      description: "সবচেয়ে নিরাপদ এবং আইনি জটিলতাহীন কম খরচের উপায়। ৫০ জন সদস্যের প্রত্যেকের নামের পাশে তাদের বিনিয়োগকৃত টাকা (ডিরেক্টর ৩.৫ লাখ করে ও শেয়ারহোল্ডার ১.৫ লাখ করে), লাভের বণ্টন অনুপাত এবং জমি ক্রয়ের সিদ্ধান্ত গ্রহণের ধারা উল্লেখ করে চুক্তির বিস্তারিত খসড়া করা।",
      requiredDocs: ["৫০ জনের সম্পূর্ণ ভোটার আইডি (NID) অনুলিপি", "টাকার রসিদ বা ব্যাংক ট্রান্সফার রশিদ", "বণ্টন অনুপাত ছক"]
    },
    {
      id: "deed-2",
      phase: "registration",
      title: "নন-জুডিশিয়াল স্ট্যাম্পে চুক্তি মুদ্রণ ও নোটারাইজেশন / সাব-রেজিস্ট্রি দলীল",
      authority: "নোটারি পাবলিক / সাব-রেজিস্ট্রি অফিস, সিলেট",
      duration: "১ - ২ কার্যদিবস",
      description: "৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে প্রিন্ট করে সকল ৫০ জনের সশরীরে সাক্ষর নিয়ে চুক্তিটি নোটারী করা এবং সর্বোচ্চ নিরাপত্তার জন্য সাব-রেজিস্ট্রি অফিসে অংশীদারিত্বের দলিল (Deed of Partnership/Co-ownership) হিসেবে রেজিস্ট্রি করা।",
      requiredDocs: ["প্রিন্টেড স্ট্যাম্প পেপার", "সকল সদস্যের পাসপোর্ট ছবি ও সাক্ষর", "সাক্ষীদের তালিকা ও স্বাক্ষর"]
    },
    {
      id: "deed-3",
      phase: "operational",
      title: "নমনীয় প্রধান ম্যানেজারের নামে ট্রেড লাইসেন্স বা ট্রাস্ট প্রতিষ্ঠা",
      authority: "সিলেট সিটি কর্পোরেশন",
      duration: "২ - ৩ কার্যদিবস",
      description: "ব্যবসায়িক কার্যক্রম সচল রাখতে প্রধান ডিরেক্টরের একক মালিকানা (Sole Proprietorship) ট্রেড লাইসেন্স ব্যবহার করা, যা চুক্তির দ্বারা ৫০ জন সদস্যের সাথে আইনিভাবে দায়বদ্ধ থাকবে। এতে আইনি লাইসেন্স জটিলতা এক নিমেষে দূর হয়ে খরচ মাত্র ২,০০০-৩,০০০ টাকায় নেমে আসে।",
      requiredDocs: ["প্রধান ডিরেক্টরের NID", "অফিস ভাড়া চুক্তি নামমাত্র", "ইউটিলিটি বিলের কপি"]
    },
    {
      id: "deed-4",
      phase: "operational",
      title: "যৌথ এসক্রো/পাওয়ার অব অ্যাটর্নি ব্যাংক হিসাব সচল",
      authority: "কর্পোরেট ব্যাংক অফ সিলেটে যৌথ হিসাব",
      duration: "২ - ৩ কার্যদিবস",
      description: "৩ জন মনোনীত সদস্যদের স্বাক্ষরে ব্যাংক অ্যাকাউন্ট পরিচালনা। টাকা উত্তোলনের জন্য ডাবল সিগনেচার পদ্ধতি চালু থাকবে যাতে কেউ এককভাবে ফান্ড অপব্যবহার করতে না পারে।",
      requiredDocs: ["রেজিস্টার্ড অংশীদারিত্ব চুক্তি পত্র", "মনোনীত ট্রাস্টিদের আইডি ও রেজল্যুশন"]
    }
  ]);

  // Partnership Firm (অংশীদারি কারবার) Tasks
  const [partnershipTasks, setPartnershipTasks] = useState<LegalTask[]>([
    {
      id: "partner-1",
      phase: "registration",
      title: "অংশীদারি দলিল খসড়া ও রেজিস্ট্রি (Partnership Deed)",
      authority: "সাব-রেজিস্ট্রি অফিস / নোটারি পাবলিক, সিলেট",
      duration: "৩ - ৪ কার্যদিবস",
      description: "অংশীদারি আইন ১৯৩২ (Partnership Act) অনুযায়ী সর্বোচ্চ ২০ জনের সদস্যসীমায় চুক্তিপত্র তৈরি। ৫০ জনের ক্ষেত্রে ২৫ জন পরিচালকদের মধ্য থেকে প্রধান প্রতিনিধি (ধরুন ১০ জন প্রধান অংশীদার) নিয়ে ১টি রেজিস্টার্ড পার্টনারশিপ ফার্ম খোলা যা পুরো ১.৭৫ কোটির প্রজেক্টের লিড পার্টনার হবে। বাকি বন্ধুদের শেয়ার দলিলের মাধ্যমে এই অংশীদারদের সাথে সুরক্ষিত থাকবে।",
      requiredDocs: ["প্রধান অংশীদারদের ছবি ও NID", "ফার্মের ঠিকানা চুক্তিনামা", "অংশীদারি চুক্তিপত্র"]
    },
    {
      id: "partner-2",
      phase: "registration",
      title: "RJSC উইদাউট লিমিটেড কোম্পানি ফার্ম নিবন্ধন (Form I)",
      authority: "RJSC বাংলাদেশ",
      duration: "৫ - ৭ কার্যদিবস",
      description: "কোম্পানি নিবন্ধনের চেয়ে অনেক কম খরচে (শুধুমাত্র ১,০০০ টাকার ব্যাংক চালান দিয়ে) RJSC থেকে যৌথ অংশীদারি ফার্মের সীলমোহর ও অফিসিয়াল 'সার্টিফিকেট অফ রেজিস্ট্রেশন অফ ফার্ম' সংগ্রহ করা।",
      requiredDocs: ["পার্টনারশিপ দলিলের অনুলিপি", "নির্ধারিত ফর্ম-১ পূরণ ও স্বাক্ষর", "রেজিস্ট্রেশন ফি চালানের রশিদ"]
    },
    {
      id: "partner-3",
      phase: "operational",
      title: "ফার্মের নামে ট্রেড লাইসেন্স ও ব্যাংক একাউন্ট স্থাপন",
      authority: "সিলেট সিটি কর্পোরেশন ও যেকোনো বাণিজ্যিক ব্যাংক",
      duration: "৩ - ৫ কার্যদিবস",
      description: "যৌথ ফার্মের নামে সিলেট সিটি কর্পোরেশন থেকে ট্রেড লাইসেন্স সংগ্রহ করে সরাসরি বিশ্বস্ত ব্যাংকে কারেন্ট একাউন্ট ট্রিপল-সিগনেচার মোডে সেট করা।",
      requiredDocs: ["RJSC ফার্ম রেজিস্ট্রেশন সার্টিফিকেট", "হালনাগাদ ট্রেড লাইসেন্স", "পার্টনারশিপ দলিলের সত্যায়িত কপি"]
    }
  ]);

  const toggleTask = (id: string, type: 'ltd' | 'coop' | 'deed' | 'partnership') => {
    if (type === 'ltd') {
      setLtdTasks(ltdTasks.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
    } else if (type === 'coop') {
      setCoopTasks(coopTasks.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
    } else if (type === 'deed') {
      setDeedTasks(deedTasks.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
    } else if (type === 'partnership') {
      setPartnershipTasks(partnershipTasks.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
    }
  };

  const getActiveTasks = () => {
    switch (activeStructure) {
      case 'ltd': return ltdTasks;
      case 'coop': return coopTasks;
      case 'deed': return deedTasks;
      case 'partnership': return partnershipTasks;
    }
  };

  const getActiveTitle = () => {
    switch (activeStructure) {
      case 'ltd': return 'প্রাইভেট লিমিটেড কোম্পানি (Private Ltd)';
      case 'coop': return 'সমবায় সমিতি (Cooperative Society)';
      case 'deed': return 'রেজিস্টার্ড যৌথ মালিকানা চুক্তি (Co-ownership Deed)';
      case 'partnership': return 'রেজিস্টার্ড অংশীদারি কারবার (Partnership Firm)';
    }
  };

  const activeTasks = getActiveTasks();
  const completedCount = activeTasks.filter(t => t.checked).length;
  const progressPercent = activeTasks.length > 0 ? Math.round((completedCount / activeTasks.length) * 100) : 0;

  return (
    <div className="space-y-8">
      
      {/* Dynamic Header & Switcher */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
              <Scale className="h-3.5 w-3.5" /> শাহজালাল অ্যাসোসিয়েশন • Sylhet Property Project
            </span>
            <h2 className="text-xl font-extrabold text-slate-900">ব্যবসায়িক আইনি কাঠামো নির্বাচন করুন (বিকল্প কম খরচের উপাদায়সহ)</h2>
            <p className="text-xs text-slate-600">
              আপনি কম খরচে ও নিরাপদ আইনি পদ্ধতিতে প্রপার্টি ব্যবসা শুরু করার জন্য নিচের যেকোনো একটি কাঠামো বেছে নিতে পারেন। আগের লিমিটেড কোম্পানির কাঠামোটি অক্ষুণ্ণ রেখে নতুন সহজ সমাধানসমূহ নিচে যোগ করা হলো:
            </p>
          </div>
        </div>

        {/* Beautiful Segmented Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
          <button 
            onClick={() => setActiveStructure('ltd')}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
              activeStructure === 'ltd' 
                ? "border-emerald-500 bg-emerald-50/20 text-emerald-950 font-bold" 
                : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-700"
            }`}
          >
            <Briefcase className="h-5 w-5 mb-1 text-teal-600" />
            <span className="text-xs">প্রাইভেট লিমিটেড</span>
            <span className="text-[9px] text-slate-500 font-semibold mt-0.5">সরকারি অনুমোদন ও মর্যাদা</span>
          </button>

          <button 
            onClick={() => setActiveStructure('coop')}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
              activeStructure === 'coop' 
                ? "border-emerald-500 bg-emerald-50/20 text-emerald-950 font-bold" 
                : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-700"
            }`}
          >
            <Users className="h-5 w-5 mb-1 text-emerald-600" />
            <span className="text-xs">সমবায় সমিতি</span>
            <span className="text-[9px] text-emerald-600 font-bold mt-0.5">সবচেয়ে প্রস্তাবিত (৫০+ জন)</span>
          </button>

          <button 
            onClick={() => setActiveStructure('deed')}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
              activeStructure === 'deed' 
                ? "border-emerald-500 bg-emerald-50/20 text-emerald-950 font-bold" 
                : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-700"
            }`}
          >
            <Coins className="h-5 w-5 mb-1 text-sky-600" />
            <span className="text-xs">যৌথ মালিকানা চুক্তি</span>
            <span className="text-[9px] text-amber-600 font-bold mt-0.5">সবচেয়ে কম খরচ (No RJSC)</span>
          </button>

          <button 
            onClick={() => setActiveStructure('partnership')}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
              activeStructure === 'partnership' 
                ? "border-emerald-500 bg-emerald-50/20 text-emerald-950 font-bold" 
                : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-700"
            }`}
          >
            <ShieldCheck className="h-5 w-5 mb-1 text-indigo-600" />
            <span className="text-xs">অংশীদারি কারবার</span>
            <span className="text-[9px] text-slate-500 font-semibold mt-0.5">সহজ ও দ্রুত (সীমা ২০ জন)</span>
          </button>
        </div>
      </div>

      {/* Comparison Matrix Card (Always Visible) */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white space-y-4">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-emerald-400" />
          <h3 className="text-base font-bold font-sans">১.৭৫ কোটির শাহজালাল প্রজেক্টের জন্য কাঠামো তুলনা ও সিলেটে উপযোগিতা ছক</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-[11px] text-slate-300 text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-450 text-xs text-center">
                <th className="py-2.5 px-3 text-left">ব্যবসায় কাঠামো</th>
                <th className="py-2.5 px-3">আনুমানিক লিগ্যাল শুরু খরচ (BDT)</th>
                <th className="py-2.5 px-3">৫০ জন সদস্যের সুযোগ?</th>
                <th className="py-2.5 px-3">বাৎসরিক অডিট ও সরকারি করপোরেট ট্যাক্স</th>
                <th className="py-2.5 px-3">সিলেটে আস্থার পরিধি (Londoni Trust)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b border-slate-800/50 hover:bg-slate-800/30 text-center ${activeStructure === 'ltd' ? 'bg-emerald-950/20 font-medium' : ''}`}>
                <td className="py-3 px-3 text-left font-bold text-teal-405">প্রাইভেট লিমিটেড (LTD)</td>
                <td className="py-3 px-3">৯৫,০০০ - ১,২৫,০০০+ টাকা</td>
                <td className="py-3 px-3 text-yellow-400">হ্যাঁ (সর্বোচ্চ ক্যাপ ৫০ ডিরেক্টর/মেম্বার)</td>
                <td className="py-3 px-3">বাৎসরিক অডিট বাধ্যতামূলক। করপোরেট ট্যাক্স ২৭.৫%</td>
                <td className="py-3 px-3 text-emerald-400">অত্যন্ত উচ্চ গ্রেড (সবচেয়ে নিরাপদ অনুভূতি)</td>
              </tr>
              <tr className={`border-b border-slate-800/50 hover:bg-slate-800/30 text-center ${activeStructure === 'coop' ? 'bg-emerald-950/20 font-medium' : ''}`}>
                <td className="py-3 px-3 text-left font-bold text-emerald-400">সমবায় সমিতি (Cooperative)</td>
                <td className="py-3 px-3 text-emerald-400 font-bold">৫,০০০ - ১০,০০০ টাকা (৯৩% সাশ্রয়!)</td>
                <td className="py-3 px-3 text-emerald-400 text-center">হ্যাঁ (সদস্য আনলিমিটেড নেওয়া যাবে)</td>
                <td className="py-3 px-3">সমবায় অডিট ফি নামমাত্র। সমবায় কর ছাড়সহ মাত্র ১৫% ট্যাক্স</td>
                <td className="py-3 px-3 text-emerald-400">খুবই ভালো (সিলেটের আবাসন খাতে সমবায় অত্যন্ত জনপ্রিয়)</td>
              </tr>
              <tr className={`border-b border-slate-800/50 hover:bg-slate-800/30 text-center ${activeStructure === 'deed' ? 'bg-emerald-950/20 font-medium' : ''}`}>
                <td className="py-3 px-3 text-left font-bold text-sky-450">যৌথ মালিকানা চুক্তি (Deed)</td>
                <td className="py-3 px-3 text-emerald-400 font-bold">১০,০০০ - ১৫,০০০ টাকা (৯৭% সাশ্রয়!)</td>
                <td className="py-3 px-3 text-emerald-400">হ্যাঁ (দলিল বা চুক্তির পাতায় সীমানাহীন)</td>
                <td className="py-3 px-3 text-sky-400">শূন্য কর্পোরেট ঝামেলা। ব্যক্তি-মালিকানার স্বাভাবিক ট্যাক্স</td>
                <td className="py-3 px-3">ব্যক্তিগত আস্থার ভিত্তি (চুক্তি আদালতে বৈধ হলেও প্রচার কম)</td>
              </tr>
              <tr className={`hover:bg-slate-800/30 text-center ${activeStructure === 'partnership' ? 'bg-emerald-950/20 font-medium' : ''}`}>
                <td className="py-3 px-3 text-left font-bold text-indigo-400">অংশীদারি কারবার (Partnership)</td>
                <td className="py-3 px-3">১০,০০০ - ১৫,০০০... টাকা</td>
                <td className="py-3 px-3 text-rose-400">আংশিক (২০ জন লিমিট; ২ ভাগে কাজ করা সম্ভব)</td>
                <td className="py-3 px-3">বার্ষিক RJSC ফি নেই। স্বাভাবিক করপোরেট রিটার্ন</td>
                <td className="py-3 px-3">মাঝারি ধরনের ট্রাস্ট</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic Legal Stat Limit Alerts Based on Selected Model */}
      {activeStructure === 'ltd' && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-6 flex flex-col md:flex-row gap-5 items-start">
          <div className="rounded-xl bg-rose-100 p-3 text-rose-600 shrink-0">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-bold text-rose-950 font-sans">
              আইনি ও কোম্পানির সর্বোচ্চ সদস্য সীমা সতর্কতা (LTD ৫০ জনের ক্যাপ)
            </h3>
            <p className="text-xs text-rose-900 leading-relaxed max-w-3xl">
              বাংলাদেশ কোম্পানি আইন ১৯৯৪ অনুযায়ী, একটি প্রাইভেট লিমিটেড কোম্পানিতে সর্বোচ্চ শেয়ারহোল্ডার সংখ্যা ৫০ জন হতে পারে। 
              আপনার ২৫ জন পরিচালক + ২৫ জন বাহ্যিক শেয়ারহোল্ডার মিলে ঠিক ৫০ জন শেয়ারহোল্ডার হওয়াতে ভীতি আছে। ভবিষ্যতে সদস্য বাড়াতে রেজিস্টার্ড লিমিটেড পিএলসি কোম্পানিতে রূপান্তর করতে হবে যা অনেক বেশি সময় ও খরচের ব্যাপার।
            </p>
          </div>
        </div>
      )}

      {activeStructure === 'coop' && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 flex flex-col md:flex-row gap-5 items-start">
          <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600 shrink-0">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-bold text-emerald-950 font-sans">
              সমবায় সমিতি (Cooperative) সুবিধা ও সিলেটের পরিস্থিতি
            </h3>
            <p className="text-xs text-emerald-900 leading-relaxed max-w-3xl">
              <strong>সিলেটের লন্ডন প্রবাসী এবং স্থানীয়দের জন্য সবচেয়ে উপযুক্ত মডেল:</strong> 
              খুবই অল্প নিবন্ধনে আপনি এটি চালাতে পারবেন। এর প্রধান সুবিধা হলো, আপনি ৫০ মানুষের জায়গাতে ৩০০ বা ৫০০ মানুষকেও যুক্ত করতে পারবেন কোনো আইনি সীমাবদ্ধতা ছাড়াই। তাছাড়া সমবায় আইনের অধীনে ট্যাক্সের হার সরকারিভাবে অনেক শিথিল (শুধু ১৫% ফিক্সড)। সিলেটের আবাসন প্রজেক্ট ও জমি কেনা-বেচায় বহুমুখী সমবায় সমিতি আইনসম্মতভাবে শতভাগ নিরাপদ ও আস্থার আধার।
            </p>
          </div>
        </div>
      )}

      {activeStructure === 'deed' && (
        <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-6 flex flex-col md:flex-row gap-5 items-start">
          <div className="rounded-xl bg-sky-100 p-3 text-sky-600 shrink-0">
            <Info className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-bold text-sky-950 font-sans">
              রেজিস্টার্ড যৌথ মালিকানা চুক্তি (Registered Deed) এবং নমনীয়তা
            </h3>
            <p className="text-xs text-sky-900 leading-relaxed max-w-3xl">
              <strong>কোনো সরকারি ঝামেলা নেই, ফি নামমাত্র:</strong> 
              যদি আপনারা কোনো ধরনের সরকারি দপ্তর (RJSC, সমবায়) এর নিয়মিত বার্ষিক রিটার্ন সাবমিট, জটিল অডিটর ভাড়া করা, এবং বছর বছর অডিট রিপোর্ট তৈরির ব্যয়ভার না নিতে চান, তবে এটিই একমাত্র সেরা রাস্তা। সিলেটের স্থানীয় দলীল লেখক ও অ্যাডভোকেট দিয়ে ৩ শত টাকার নন-জুডিশিয়াল স্ট্যাম্প পেপারে ৫০ জনের চুক্তিনামা করে সাব-রেজিস্ট্রেশনে একটি ‘যৌথ মালিকানা দলিল’ করে নিবেন। এতে ১.৭৫ কোটি সম্পূর্ণ সেফ থাকে কোনো কোম্পানি আইনের বেড়াজাল ছাড়াই।
            </p>
          </div>
        </div>
      )}

      {activeStructure === 'partnership' && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 flex flex-col md:flex-row gap-5 items-start">
          <div className="rounded-xl bg-amber-100 p-3 text-amber-600 shrink-0">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-bold text-amber-950 font-sans">
              অংশীদারি কারবার (Partnership Firm) মেম্বার লিমিট সতর্কতা
            </h3>
            <p className="text-xs text-amber-900 leading-relaxed max-w-3xl">
              <strong>২০ জনের লিমিটেশন:</strong> 
              অংশীদারি আইন অনুযায়ী ২০ জনের বেশি সদস্য অংশীদার হতে পারে না। তবে সিলেটে ৫০ জনের মূলধনের ক্ষেত্রে ২৫ জন পরিচালকদের মধ্যে প্রধান ১০ জন বা ১৫ জনকে পার্টনার করে এবং বাকি সদস্যদের ট্রাস্ট চুক্তির ভিতরে রেখে কাজ করা সম্ভব। এটিও লিমিটেড কোম্পানির চেয়ে অনেক সাশ্রয়ী।
            </p>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Progress Tracker Sidebar (Left) */}
        <div className="lg:col-span-1 rounded-2xl border border-slate-200 bg-white p-6 space-y-6">
          <div className="space-y-3">
            <h3 className="text-md font-bold text-slate-900 flex items-center gap-1.5">
              <Scale className="h-5 w-5 text-emerald-600" />
              অগ্রগতি ট্র্যাক করুন
            </h3>
            <p className="text-xs text-slate-500">
              {getActiveTitle()} বাস্তবায়ন ধাপগুলো সম্পন্ন হয়েছে কিনা চিহ্নিত করুন।
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>বাস্তবায়ন অগ্রগতি</span>
              <span>{completedCount} / {activeTasks.length} ধাপ সম্পন্ন</span>
            </div>
            
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Quick Legal Requirements Bullet Guidelines */}
          <div className="space-y-3 border-t border-slate-100 pt-5 text-xs text-slate-650">
            <span className="font-bold text-slate-800 uppercase tracking-wide block">আনুমানিক সরকারি ও লিগ্যাল খরচ বিবরণী:</span>
            
            {activeStructure === 'ltd' && (
              <ul className="space-y-2.5">
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>নাম ছাড়পত্র সরকারি ফি</span>
                  <span className="font-semibold text-slate-900">১,১৫০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>১.৭৫ কোটি অনুযায়ী RJSC সরকারি ফি</span>
                  <span className="font-semibold text-slate-900">প্রায় ৬৫,০০০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>নন-জুডিশিয়াল স্ট্যাম্প ফি (RJSC)</span>
                  <span className="font-semibold text-slate-900">১২,০০০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>ট্রেড লাইসেন্স ৩ বছরের জন্য</span>
                  <span className="font-semibold text-slate-900">১৫,০০০ টাকা</span>
                </li>
                <li className="flex justify-between cursor-pointer items-center text-emerald-600 font-bold hover:underline pt-1">
                  <span>মোট আনুমানিক খরচ (আইনজীবীসহ)</span>
                  <span>৯৫,০০০+ টাকা</span>
                </li>
              </ul>
            )}

            {activeStructure === 'coop' && (
              <ul className="space-y-2.5">
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>সমবায় সমিতির নাম ও ফর্ম ফি</span>
                  <span className="font-semibold text-slate-900">৫০০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>রেজিস্ট্রেশন ফি (সিলেট জেলা সমবায়)</span>
                  <span className="font-semibold text-slate-900">৩,০০০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>বাই-লজ মুদ্রণ ও সাবমিশন ই-স্ট্যাম্প</span>
                  <span className="font-semibold text-slate-900">১,৫০০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>ট্রেড লাইসেন্স ৩ বছরের জন্য</span>
                  <span className="font-semibold text-slate-900">৩,৫০০ টাকা (কম ট্যাক্স)</span>
                </li>
                <li className="flex justify-between cursor-pointer items-center text-emerald-600 font-bold hover:underline pt-1">
                  <span>মোট আনুমানিক খরচ (সমবায় সরকারি)</span>
                  <span>৮,৫০০ টাকা</span>
                </li>
              </ul>
            )}

            {activeStructure === 'deed' && (
              <ul className="space-y-2.5">
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>নন-জুডিশিয়াল স্ট্যাম্প পেপার (৩ কপি)</span>
                  <span className="font-semibold text-slate-900">৯০০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>দলীল লেখক ফি / ড্রাফটিং এডভোকেট</span>
                  <span className="font-semibold text-slate-900">৫,০০০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>নোটারি পাবলিক সত্যায়ন ফি</span>
                  <span className="font-semibold text-slate-900">১,৫০০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>নেতৃত্বাধীন ট্রেড লাইসেন্স ৩ বছরের জন্য</span>
                  <span className="font-semibold text-slate-900">৩,০০০ টাকা</span>
                </li>
                <li className="flex justify-between cursor-pointer items-center text-emerald-600 font-bold hover:underline pt-1">
                  <span>মোট আনুমানিক চুক্তি ভিত্তিক খরচ</span>
                  <span>১০,৪০০ টাকা</span>
                </li>
              </ul>
            )}

            {activeStructure === 'partnership' && (
              <ul className="space-y-2.5">
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>পার্টনারশিপ দলিল স্ট্যাম্প ফি</span>
                  <span className="font-semibold text-slate-900">২,০০০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>RJSC আবেদন ও চালান সরকারি ফি</span>
                  <span className="font-semibold text-slate-900">১,২০০ টাকা</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-50 pb-1.5">
                  <span>ট্রেড লাইসেন্স (সিলেট সিটি কর্পোরেশন)</span>
                  <span className="font-semibold text-slate-900">৫,০০০ টাকা</span>
                </li>
                <li className="flex justify-between cursor-pointer items-center text-emerald-600 font-bold hover:underline pt-1">
                  <span>মোট আনুমানিক অংশীদারি খরচ</span>
                  <span>৯,২০০+ টাকা</span>
                </li>
              </ul>
            )}
          </div>

          <div className="pt-2">
            <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 py-3 text-xs font-semibold text-white transition-all cursor-pointer">
              <Download className="h-3.5 w-3.5" /> অফিশিয়াল মো দলিল ও চুক্তিনামা ডেমো ডাউনলোড
            </button>
          </div>
        </div>

        {/* Steps List (Right, 2 columns wide) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-1">
            <FileText className="h-5 w-5 text-emerald-600" />
            বাস্তাবায়নের ধারাবাহিক আইনি ধাপসমূহ (A to Z Step Checklist)
          </h3>
          <p className="text-xs text-slate-500 pb-1">
            নিচের ধাপগুলো সিরিয়াল অনুযায়ী সম্পন্ন করতে হবে। ধাপটি ক্লিক করে বা সম্পন্ন চিহ্নিত করে ট্র্যাক রাখুন:
          </p>

          <div className="space-y-4">
            {activeTasks.map((task) => (
              <div 
                key={task.id}
                onClick={() => toggleTask(task.id, activeStructure)}
                className={`group cursor-pointer rounded-xl border p-5 transition-all outline-hidden block select-none ${
                  task.checked 
                    ? "border-emerald-250 bg-emerald-50/20" 
                    : "border-slate-200 bg-white hover:border-slate-350"
                }`}
              >
                <div className="flex items-start gap-4">
                  <button className="mt-1 shrink-0 rounded text-slate-400 hover:text-emerald-600 transition-colors">
                    {task.checked ? (
                      <CheckSquare className="h-5 w-5 text-emerald-600 fill-emerald-50" />
                    ) : (
                      <Square className="h-5 w-5" />
                    )}
                  </button>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className={`text-sm font-bold transition-all ${
                        task.checked ? "text-emerald-950 line-through decoration-slate-400" : "text-slate-900"
                      }`}>
                        {task.title}
                      </h4>
                      <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                        {task.duration}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {task.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-[11px] text-slate-500 border-t border-slate-100/60 mt-3">
                      <div>
                        <span className="font-bold text-slate-700 block">অনুমোদনকারী ও সম্পাদনকারী কর্তৃপক্ষ:</span>
                        <p className="mt-0.5 text-slate-600">{task.authority}</p>
                      </div>

                      <div>
                        <span className="font-bold text-slate-700 block">প্রয়োজনীয় কাগজপত্র:</span>
                        <ul className="mt-1 space-y-1 text-[10px] leading-relaxed text-slate-605">
                          {task.requiredDocs.map((doc, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="h-1 w-1 bg-slate-400 rounded-full"></span>
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeStructure === 'ltd' && (
            <div className="rounded-xl bg-blue-50/50 border border-blue-200 p-4 flex gap-3 text-xs text-blue-900 leading-relaxed">
              <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong>সুপারিশ:</strong> যৌথ কোম্পানি গঠনের ক্ষেত্রে ২৫ জন পরিচালকের মধ্যে থেকে ৫ জনের একটি <strong>&quot;আইনি ও খসড়া নথিপত্র পর্যালোচনা সাব-কমিটি&quot;</strong> তৈরি করুন। এই সাব-কমিটি আইনজীবীর সাথে সমন্বয় করে MoA ও AoA চুক্তিতে সকল সদস্যের বিশেষ ধারা (Dispute settlement, Share transfer restriction) সন্নিবেশ করতে কাজ করবে।
              </span>
            </div>
          )}

          {activeStructure === 'coop' && (
            <div className="rounded-xl bg-blue-50/50 border border-blue-200 p-4 flex gap-3 text-xs text-blue-900 leading-relaxed">
              <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong>সমবায় স্মার্ট টিপস:</strong> সিলেটে প্রবাসীদের জন্য সমবায় সমিতি করা অত্যন্ত সহজ ও ফলপ্রসূ। সমবায় আইনের অধীনে বাৎসরিক লাভ বণ্টনের হিসাব অত্যন্ত সহজ এবং সরকারি ট্যাক্স সাধারণ লিমিটেড কমার্শিয়াল ট্যাক্স (২৭.৫%) এর তুলনায় প্রায় অর্ধেক (১২% থেকে ১৫%)। তাই খরচ ও কর বাঁচানোর এটিই সবচেয়ে নিরাপদ সিলেটি মডেল।
              </span>
            </div>
          )}

          {activeStructure === 'deed' && (
            <div className="rounded-xl bg-blue-50/50 border border-blue-200 p-4 flex gap-3 text-xs text-blue-900 leading-relaxed">
              <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong>চুক্তিভিত্তিক স্মার্ট টিপস:</strong> ৫০ জনের সম্মতিক্রমে একটি সুনির্দিষ্ট যৌথ ব্যাংক অ্যাকাউন্ট ৩ জনের নামে খুলে 'ডাবল বা ট্রিপল সিগনেচার' সচল করে রাখুন। প্রতিটি টাকা জমি কেনার ডিল চূড়ান্ত হবার পরই শুধু ব্যাঙ্ক থেকে উইথড্র হবে তা চুক্তির স্ট্যাম্প পেপারে রেজিষ্ট্রেশন করে নিলে আপনাদের প্রত্যেকে শতভাগ সুরক্ষিত থাকবেন এবং সরকারি কোনো নিবন্ধনের বা ট্যাক্স দেওয়ার বার্ষিক ভেজাল থাকবে না।
              </span>
            </div>
          )}

          {activeStructure === 'partnership' && (
            <div className="rounded-xl bg-blue-50/50 border border-blue-200 p-4 flex gap-3 text-xs text-blue-900 leading-relaxed">
              <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong>অংশীদারি কারবার টিপস:</strong> মেম্ববার লিমিট ২০ জনের সীমাবদ্ধতা এড়াতে আপনারা শাহজালাল অ্যাসোসিয়েশনকে ২-৩ টি স্মল পার্টনারশিপ ফার্মে (যেমন: শাহজালাল অ্যাসোসিয়েট ১, শাহজালাল অ্যাসোসিয়েট ২) সাব-ডিভাইড করতে পারেন যা যৌথ হোল্ডিং প্রজেক্ট দেখভাল করবে এবং চূড়ান্ত পর্যায়ে ল্যান্ড কিনে রেগুলার বণ্টন করবে।
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
