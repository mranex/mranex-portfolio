export type Locale = "vi" | "en";

export interface BilingualText {
  vi: string;
  en: string;
}

export interface ClinicalParameterSpec {
  code: string;
  name: BilingualText;
  role: BilingualText;
}

export interface PaperItem {
  id: string;
  year: string;
  publishedAt: string;
  title: string;
  englishContext: string;
  journal: string;
  role: BilingualText;
  doi: string;
  methodSummary: BilingualText;
  parameters: ClinicalParameterSpec[];
  note: BilingualText;
}

export interface CertificateItem {
  name: BilingualText;
  issuer: BilingualText;
  hoursOrGrade: BilingualText;
  date: string;
}

export interface RoleplayArchLayer {
  code: string;
  name: string;
  summary: BilingualText;
}

export interface WorkflowNodeSpec {
  step: string;
  title: BilingualText;
  detail: BilingualText;
}

export type ArchiveCategory =
  | "all"
  | "translation-ocr"
  | "media-tools"
  | "publishing-agents"
  | "game";

export interface ArchiveProject {
  id: string;
  priority: number;
  code: string;
  name: string;
  subtitle: BilingualText;
  category: Exclude<ArchiveCategory, "all">;
  status: BilingualText;
  summary: BilingualText;
  details: BilingualText;
  features: {
    vi: string[];
    en: string[];
  };
  stack: string[];
  repoUrl: string | null;
  liveUrl: string | null;
  isPrivateShipped?: boolean;
  highlightEcosystem?: boolean;
  factualNote?: BilingualText;
  roadmapNote?: BilingualText;
  metricsNote?: BilingualText;
}

/**
 * Central configuration for mranex.com.
 * Add portraitUrl, cvPdfUrl in /public or set draciaPressUrl once subdomain DNS is live.
 */
export const siteConfig = {
  domain: "https://mranex.com",
  github: "https://github.com/mranex",
  email: "elsgman1999@gmail.com",
  phoneDisplay: "0971 965 391",
  phoneHref: "tel:+84971965391",
  portraitUrl: null as string | null,
  cvPdfUrl: null as string | null,
  draciaPressUrl: null as string | null,
};

export const portfolioData = {
  nav: {
    links: [
      { id: "research", label: { vi: "Nghiên cứu (DOI)", en: "Research (DOI)" } },
      { id: "clinical", label: { vi: "Đào tạo & Lâm sàng", en: "Clinical & CV" } },
      { id: "outreach", label: { vi: "Cộng đồng", en: "Outreach" } },
      { id: "engineering", label: { vi: "Phần mềm & AI", en: "Software & AI" } },
      { id: "capabilities", label: { vi: "Năng lực", en: "Capabilities" } },
      { id: "contact", label: { vi: "Liên hệ", en: "Contact" } },
    ],
  },

  hero: {
    mastheadLeft: {
      vi: "HỒ SƠ HỌC THUẬT, LÂM SÀNG & KỸ THUẬT · CẦN THƠ",
      en: "CLINICAL, ACADEMIC & TECHNICAL MONOGRAPH · CAN THO",
    },
    mastheadRight: "MRANEX.COM · REV. 11/2026",
    specialtyBadge: {
      vi: "THẠC SĨ BÁC SĨ CHUYÊN NGÀNH NỘI KHOA",
      en: "MASTER OF MEDICINE · INTERNAL MEDICINE",
    },
    fullName: {
      vi: "ThS. BS. Nguyễn Trường Ân",
      en: "Nguyễn Trường Ân, M.Med., M.D.",
    },
    subline: {
      vi: "Thạc sĩ Bác sĩ Nội khoa · Nghiên cứu Y khoa · Kỹ sư Phần mềm & AI Độc lập (MRANEX)",
      en: "M.Med. Internal Medicine · Medical Researcher · Independent Software & AI Developer (MRANEX)",
    },
    bio: {
      vi: "Nguyễn Trường Ân là Thạc sĩ Bác sĩ chuyên ngành Nội khoa, tốt nghiệp Trường Đại học Y Dược Cần Thơ. Hoạt động chuyên môn tập trung vào Nội khoa tổng quát, nghiên cứu khoa học trong Nội Thần kinh và Hô hấp – Hồi sức tích cực, tham gia biên soạn giáo trình và hỗ trợ đào tạo sinh viên y khoa. Song song với y học lâm sàng, tự thiết kế và phát triển các hệ thống phần mềm, ứng dụng AI và công cụ tổng hợp tri thức dưới tên MRANEX.",
      en: "Nguyễn Trường Ân holds a Master of Medicine in Internal Medicine from Can Tho University of Medicine and Pharmacy. His clinical and academic focus spans General Internal Medicine, Neurology, and Pulmonology–Critical Care research alongside medical curriculum drafting and student mentoring. In parallel, he designs and builds independent software systems, AI architectures, and medical knowledge workflows under the handle MRANEX.",
    },
    ctaResearch: { vi: "Xem Công trình & DOI", en: "Published Research (DOI)" },
    ctaClinical: { vi: "Học vấn & Chứng chỉ", en: "Education & Credentials" },
    ctaEngineering: { vi: "Phụ lục Phần mềm & AI", en: "Software & AI Appendix" },
    ledgerTitle: {
      vi: "TÓM TẮT HỒ SƠ CHUYÊN MÔN",
      en: "CLINICAL & ACADEMIC LEDGER",
    },
    ledgerRows: [
      {
        label: { vi: "Học vị cao nhất", en: "Highest Degree" },
        value: {
          vi: "Thạc sĩ Y khoa · Nội khoa (2024–2026)",
          en: "M.Med. Internal Medicine (2024–2026)",
        },
      },
      {
        label: { vi: "Đơn vị đào tạo", en: "Institution" },
        value: {
          vi: "Trường ĐH Y Dược Cần Thơ (Xếp loại Khá)",
          en: "Can Tho Univ. of Medicine & Pharmacy (Good)",
        },
      },
      {
        label: { vi: "Hướng nghiên cứu", en: "Research Domains" },
        value: {
          vi: "Hô hấp – Hồi sức tích cực · Nội Thần kinh",
          en: "Pulmonology–ICU · Internal Neurology",
        },
      },
      {
        label: { vi: "Công bố khoa học", en: "Peer-Reviewed DOI" },
        value: {
          vi: "02 bài báo (Chủ nhiệm · Tác giả thứ nhất)",
          en: "02 papers (Principal Investigator · First Author)",
        },
      },
      {
        label: { vi: "Phục vụ cộng đồng", en: "Community Service" },
        value: {
          vi: "~1.500 lượt siêu âm · 11 xã (An Minh, 07/2024)",
          en: "~1,500 ultrasounds · 11 communes (07/2024)",
        },
      },
      {
        label: { vi: "Giấy phép hành nghề", en: "Practicing License" },
        value: {
          vi: "Đang chờ cấp (theo CV)",
          en: "Pending issuance (per CV)",
        },
        highlightNeutral: true,
      },
      {
        label: { vi: "Hệ thống Phần mềm & AI", en: "Software & AI Work" },
        value: {
          vi: "12 dự án (Trọng tâm: Roleplay & Writing Machine)",
          en: "12 systems (Flagships: Roleplay & Writing Machine)",
        },
      },
    ],
  },

  research: {
    eyebrow: { vi: "PHẦN I · NGHIÊN CỨU KHOA HỌC", en: "SECTION I · CLINICAL RESEARCH" },
    title: {
      vi: "Công trình nghiên cứu đã công bố (DOI)",
      en: "Published Scientific Papers (DOI)",
    },
    subtitle: {
      vi: "Hai công trình nghiên cứu lâm sàng được công bố trên Tạp chí Y Dược học Cần Thơ với vai trò Chủ nhiệm đề tài và Tác giả thứ nhất.",
      en: "Two peer-reviewed clinical studies published in the Can Tho Journal of Medicine and Pharmacy as Principal Investigator and First Author.",
    },
    papers: [
      {
        id: "paper-2026",
        year: "2026",
        publishedAt: "08/2026",
        title:
          "Giá trị chỉ số P0.1 và một số chỉ số khác trong tiên lượng cai máy thở thành công ở bệnh nhân đợt cấp COPD",
        englishContext:
          "Prognostic value of P0.1 and related respiratory indices in predicting successful ventilator weaning in patients with acute exacerbation of COPD",
        journal: "Tạp chí Y Dược học Cần Thơ",
        role: {
          vi: "Chủ nhiệm đề tài · Tác giả thứ nhất",
          en: "Principal Investigator · First Author",
        },
        doi: "https://doi.org/10.58490/ctjump.2026i101.4601",
        methodSummary: {
          vi: "Đánh giá các chỉ số cơ học hô hấp và xây dựng mô hình tiên lượng kết cục cai máy thở bằng hồi quy logistic.",
          en: "Evaluates bedside respiratory drive and mechanics indices to model ventilator weaning outcomes via logistic regression.",
        },
        parameters: [
          {
            code: "P0.1",
            name: { vi: "Áp lực hít vào 0,1 giây đầu", en: "Airway Occlusion Pressure (100ms)" },
            role: { vi: "Đánh giá trung tâm hô hấp", en: "Central respiratory drive index" },
          },
          {
            code: "RSBI",
            name: { vi: "Chỉ số thở nhanh nông (f/VT)", en: "Rapid Shallow Breathing Index" },
            role: { vi: "Sàng lọc sẵn sàng cai máy", en: "Bedside weaning readiness ratio" },
          },
          {
            code: "MIP",
            name: { vi: "Áp lực hít vào tối đa", en: "Maximal Inspiratory Pressure" },
            role: { vi: "Đánh giá sức cơ hô hấp", en: "Inspiratory muscle strength" },
          },
          {
            code: "P0.1 × RSBI",
            name: { vi: "Tích hợp hai chỉ số", en: "Combined Product Index" },
            role: { vi: "Đầu vào hồi quy logistic", en: "Logistic regression predictor" },
          },
        ],
        note: {
          vi: "Cùng hướng nghiên cứu với Luận văn Thạc sĩ Nội khoa về tiên lượng cai máy thở ở bệnh nhân đợt cấp COPD.",
          en: "Aligned with the Master of Medicine thesis research on ventilator weaning prognosis in acute COPD exacerbations.",
        },
      },
      {
        id: "paper-2024",
        year: "2024",
        publishedAt: "04/2024",
        title:
          "Nghiên cứu đặc điểm lâm sàng và các yếu tố nguy cơ của bệnh nhân nhồi máu não tái phát tại Bệnh viện Đa khoa Trung Ương Cần Thơ",
        englishContext:
          "Clinical characteristics and risk factors of patients with recurrent ischemic stroke at Can Tho Central General Hospital",
        journal: "Tạp chí Y Dược học Cần Thơ",
        role: {
          vi: "Chủ nhiệm đề tài · Tác giả thứ nhất",
          en: "Principal Investigator · First Author",
        },
        doi: "https://doi.org/10.58490/ctump.2024i73.2116",
        methodSummary: {
          vi: "Khảo sát đặc điểm lâm sàng và phân tích các yếu tố nguy cơ liên quan ở quần thể bệnh nhân nhồi máu não tái phát.",
          en: "Analyzes clinical presentation patterns and associated cardiovascular/metabolic risk factors in recurrent ischemic stroke.",
        },
        parameters: [
          {
            code: "STROKE PROFILE",
            name: { vi: "Đặc điểm lâm sàng thần kinh", en: "Neurological Presentation" },
            role: { vi: "Ghi nhận tại BVĐK TW Cần Thơ", en: "Can Tho Central General Hospital cohort" },
          },
          {
            code: "RISK FACTORS",
            name: { vi: "Phân tích yếu tố nguy cơ", en: "Risk-Factor Stratification" },
            role: { vi: "Phòng ngừa thứ phát Nội Thần kinh", en: "Secondary stroke prevention context" },
          },
        ],
        note: {
          vi: "Nghiên cứu lâm sàng thực hiện trong lĩnh vực Nội Thần kinh tại Bệnh viện Đa khoa Trung Ương Cần Thơ.",
          en: "Clinical neurology study conducted at Can Tho Central General Hospital.",
        },
      },
    ] as PaperItem[],
  },

  clinical: {
    eyebrow: {
      vi: "PHẦN II · ĐÀO TẠO, LÂM SÀNG & GIẢNG DẠY",
      en: "SECTION II · EDUCATION, CLINICAL SCOPE & CREDENTIALS",
    },
    title: {
      vi: "Quá trình đào tạo, thực hành và văn bằng chứng chỉ",
      en: "Academic training, clinical focus, and verified credentials",
    },
    subtitle: {
      vi: "Tổng hợp theo hồ sơ CV gốc: quá trình đào tạo đại học – sau đại học, phạm vi chuyên môn Nội khoa, tham gia biên soạn học liệu và 7 chứng chỉ đào tạo chính quy.",
      en: "Compiled strictly from verified CV records: undergraduate and postgraduate degrees, Internal Medicine clinical focus, curriculum drafting, and 7 formal certifications.",
    },
    educationLabel: { vi: "Quá trình đào tạo đại học & sau đại học", en: "Academic Degrees" },
    education: [
      {
        period: "2024 – 2026",
        degree: {
          vi: "Thạc sĩ Y khoa · Chuyên ngành Nội khoa",
          en: "Master of Medicine · Internal Medicine",
        },
        school: {
          vi: "Trường Đại học Y Dược Cần Thơ",
          en: "Can Tho University of Medicine and Pharmacy",
        },
        grade: { vi: "Xếp loại theo CV: Khá", en: "CV Classification: Good (Khá)" },
      },
      {
        period: "2017 – 2023",
        degree: {
          vi: "Bác sĩ Y khoa (Y đa khoa)",
          en: "Doctor of Medicine (General Medicine)",
        },
        school: {
          vi: "Trường Đại học Y Dược Cần Thơ",
          en: "Can Tho University of Medicine and Pharmacy",
        },
        grade: { vi: "Xếp loại theo CV: Khá", en: "CV Classification: Good (Khá)" },
      },
    ],
    licenseTitle: {
      vi: "Tình trạng Giấy phép hành nghề",
      en: "Medical License Status",
    },
    licenseNotice: {
      vi: "Hiện đang chờ cấp Giấy phép hành nghề (ghi nhận theo CV; hồ sơ không giới thiệu là đã cấp GPHN).",
      en: "Currently pending issuance of the medical practicing license (stated transparently per CV).",
    },
    clinicalLabel: {
      vi: "Lĩnh vực lâm sàng & Kỹ năng cận lâm sàng",
      en: "Clinical Focus & Diagnostic Training",
    },
    clinicalFocus: {
      vi: [
        "Nội khoa: tiếp nhận, đánh giá, chẩn đoán và xử trí các bệnh lý nội khoa thường gặp.",
        "Hô hấp – Hồi sức tích cực: quan tâm chuyên sâu hỗ trợ hô hấp, thở máy và tiên lượng cai máy thở.",
        "Nội Thần kinh: nghiên cứu đặc điểm lâm sàng và yếu tố nguy cơ nhồi máu não tái phát.",
        "Kỹ năng hỗ trợ chẩn đoán: siêu âm tổng quát/siêu âm tim, đọc điện tâm đồ (ECG), phân tích khí máu và xử lý số liệu lâm sàng.",
      ],
      en: [
        "Internal Medicine: clinical assessment, diagnosis, and management of common medical conditions.",
        "Pulmonology & Critical Care: mechanical ventilation support and weaning prognostication.",
        "Neurology: clinical characteristics and risk-factor modeling in recurrent ischemic stroke.",
        "Diagnostic Foundations: general and cardiac ultrasound, ECG interpretation, arterial blood gas, and clinical biostatistics.",
      ],
    },
    teachingLabel: {
      vi: "Giảng dạy y khoa & Biên soạn học liệu",
      en: "Medical Pedagogy & Curriculum Drafting",
    },
    teachingPoints: {
      vi: [
        "Tham gia biên soạn giáo trình đại học và hỗ trợ sinh viên y khoa tiếp cận kiến thức chuyên môn, thực hành lâm sàng.",
        "Tham gia biên soạn 6/12 chương bản thảo một giáo trình/tài liệu hồi sức sau đại học cùng giảng viên hướng dẫn (trạng thái bản thảo chưa xuất bản).",
        "Được đào tạo bài bản về Sư phạm Y học cơ bản, Phương pháp dạy – học lâm sàng và Nghiệp vụ sư phạm cao đẳng/đại học.",
        "Ứng dụng công cụ AI để thiết kế học liệu, tổng hợp tài liệu tham khảo và hỗ trợ học tập tương tác.",
      ],
      en: [
        "Contributed to undergraduate medical curriculum materials and mentored medical students in clinical reasoning.",
        "Drafted 6 of 12 chapters of a postgraduate critical care manuscript alongside faculty supervisors (manuscript draft, not claimed as a published book).",
        "Formally trained in Basic Medical Pedagogy, Clinical Teaching Methods, and Higher Education Pedagogy.",
        "Applies AI workflows to structure reference synthesis and interactive study aids for medical education.",
      ],
    },
    certsLabel: {
      vi: "Bảng văn bằng & chứng chỉ đào tạo (07)",
      en: "Certifications & Formal Training Ledger (07)",
    },
    certColumns: {
      name: { vi: "Văn bằng / Chứng chỉ", en: "Certification / Training" },
      issuer: { vi: "Đơn vị cấp", en: "Issuing Institution" },
      hours: { vi: "Thời lượng / Xếp loại", en: "Hours / Grade" },
      date: { vi: "Ngày cấp", en: "Date" },
    },
    certificates: [
      {
        name: { vi: "Siêu âm tổng quát và siêu âm tim", en: "General & Cardiac Ultrasound" },
        issuer: { vi: "Bệnh viện Chợ Rẫy", en: "Cho Ray Hospital" },
        hoursOrGrade: { vi: "696 tiết", en: "696 hours" },
        date: "23/07/2024",
      },
      {
        name: { vi: "Điện tâm đồ", en: "Electrocardiography (ECG)" },
        issuer: { vi: "Trường Đại học Y Dược Cần Thơ", en: "Can Tho Univ. of Medicine & Pharmacy" },
        hoursOrGrade: { vi: "660 tiết", en: "660 hours" },
        date: "19/03/2026",
      },
      {
        name: { vi: "Sư phạm Y học cơ bản", en: "Basic Medical Pedagogy" },
        issuer: { vi: "Viện Khoa học Quản lý Y tế", en: "Institute of Health Management Science" },
        hoursOrGrade: { vi: "80 tiết", en: "80 hours" },
        date: "07/09/2024",
      },
      {
        name: { vi: "Phương pháp dạy – học lâm sàng", en: "Clinical Teaching & Learning Methods" },
        issuer: { vi: "Trường Đại học Y Dược Cần Thơ", en: "Can Tho Univ. of Medicine & Pharmacy" },
        hoursOrGrade: { vi: "40 tiết", en: "40 hours" },
        date: "09/12/2024",
      },
      {
        name: { vi: "Nghiệp vụ sư phạm cao đẳng đại học", en: "Higher Education Pedagogy" },
        issuer: { vi: "Học viện Quản lý Giáo dục", en: "National Academy of Education Management" },
        hoursOrGrade: { vi: "Loại Giỏi", en: "Excellent" },
        date: "27/11/2024",
      },
      {
        name: { vi: "Chứng chỉ Ngoại ngữ VSTEP Bậc 4/6", en: "English Proficiency VSTEP Level 4/6" },
        issuer: { vi: "Trường Đại học Cần Thơ", en: "Can Tho University" },
        hoursOrGrade: { vi: "Điểm 7.0", en: "Score 7.0" },
        date: "26/12/2025",
      },
      {
        name: { vi: "Ứng dụng công nghệ thông tin cơ bản", en: "Applied Information Technology" },
        issuer: { vi: "Trường Đại học Cần Thơ", en: "Can Tho University" },
        hoursOrGrade: { vi: "Hoàn thành", en: "Certified" },
        date: "01/02/2023",
      },
    ] as CertificateItem[],
  },

  outreach: {
    eyebrow: { vi: "PHẦN III · HOẠT ĐỘNG CỘNG ĐỒNG", en: "SECTION III · COMMUNITY MEDICAL SERVICE" },
    title: {
      vi: "Khám bệnh & siêu âm sàng lọc miễn phí tại An Minh",
      en: "Free Medical Screening & Ultrasound Outreach in An Minh",
    },
    subtitle: {
      vi: "Công tác thiện nguyện chuyên môn phối hợp cùng Bệnh viện Đa khoa huyện An Minh, tỉnh Kiên Giang (tháng 07/2024).",
      en: "Field clinical outreach alongside An Minh District General Hospital, Kiên Giang province (July 2024).",
    },
    dispatchCode: {
      vi: "ĐỢT CÔNG TÁC THỰC ĐỊA · 07/2024 · AN MINH, KIÊN GIANG",
      en: "FIELD SERVICE RECORD · 07/2024 · AN MINH, KIEN GIANG",
    },
    description: {
      vi: "Tham gia liên tục 11 ngày tại 11 xã trên địa bàn huyện An Minh (địa danh tại thời điểm diễn ra chương trình). Phụ trách chính mảng siêu âm tổng quát phục vụ sàng lọc và phát hiện bất thường, đồng thời hỗ trợ khám, tư vấn và quản lý các bệnh lý nội khoa mạn tính thường gặp.",
      en: "Served across 11 communes over 11 consecutive days in An Minh district (jurisdictional name at time of service). Led general ultrasound screening to detect abdominal abnormalities while assisting with primary counseling for chronic internal medicine conditions.",
    },
    conditionsLabel: {
      vi: "Nhóm bệnh nội khoa trọng tâm tư vấn & sàng lọc",
      en: "Primary Chronic Conditions Managed",
    },
    conditions: {
      vi: ["Tăng huyết áp", "Đái tháo đường", "Bệnh thận mạn", "Sàng lọc bất thường qua siêu âm tổng quát"],
      en: ["Hypertension", "Diabetes Mellitus", "Chronic Kidney Disease", "General Ultrasound Screening"],
    },
    metrics: [
      { value: "11", unit: { vi: "xã / 11 ngày liên tục", en: "communes / 11 consecutive days" } },
      { value: "~1.500", unit: { vi: "lượt siêu âm tổng quát", en: "general ultrasound exams" } },
      { value: "07/2024", unit: { vi: "BVĐK huyện An Minh", en: "An Minh Dist. General Hospital" } },
    ],
  },

  engineering: {
    eyebrow: {
      vi: "PHẦN IV · HỆ THỐNG PHẦN MỀM & AI ĐỘC LẬP (MRANEX LAB)",
      en: "SECTION IV · INDEPENDENT SOFTWARE & AI SYSTEMS (MRANEX LAB)",
    },
    title: {
      vi: "Các hệ thống phần mềm, OCR, AI Agent & tổng hợp tri thức",
      en: "Software products, VLM/OCR pipelines, AI agents, and knowledge tools",
    },
    subtitle: {
      vi: "Song song với hoạt động y khoa, tự thiết kế và xây dựng 12 hệ thống phần mềm — dẫn đầu bởi Roleplay Machine và Writing Machine, cùng kho công cụ dịch thuật, OCR và Dracia Press.",
      en: "Developed alongside medical academia: 12 independent software and AI projects, led by Roleplay Machine and Writing Machine, plus open-source OCR/translation tools and Dracia Press.",
    },
    flagshipHeading: {
      vi: "A. HAI DỰ ÁN PHẦN MỀM TRỌNG TÂM (ANDROID)",
      en: "A. PRIMARY SOFTWARE SYSTEMS (ANDROID)",
    },
    roleplay: {
      code: "01",
      name: "Roleplay Machine",
      subtitle: {
        vi: "Nền tảng Roleplay & Kể chuyện Tương tác AI",
        en: "AI Roleplay & Interactive Storytelling Platform",
      },
      platform: "Android",
      status: {
        vi: "Đang phát triển & nâng cấp liên tục",
        en: "Active Development",
      },
      summary: {
        vi: "Ứng dụng roleplay và kể chuyện tương tác bằng AI, giải quyết bài toán duy trì nhân vật, bối cảnh, trí nhớ và quy tắc thế giới qua hàng trăm đến hàng nghìn lượt tương tác. Thay vì là một hộp chat gửi prompt trực tiếp, hệ thống phân tách rõ nội dung nhân vật, định tuyến mô hình, kỹ năng và trạng thái.",
        en: "An AI roleplay and interactive storytelling platform built to sustain character, context, memory, and world rules across hundreds to thousands of turns. Rather than a thin LLM chat wrapper, it isolates character specs, model routing, skill execution, and runtime state.",
      },
      modes: ["Chat Mode", "Interactive Story Mode", "Multi-Actor Systems"],
      schematicTitle: {
        vi: "SƠ ĐỒ KIẾN TRÚC PHÂN TẦNG (5 LỚP)",
        en: "LAYERED ARCHITECTURE SCHEMATIC (5 TIERS)",
      },
      layers: [
        {
          code: "L1",
          name: "Multi-Provider & Manual Routing",
          summary: {
            vi: "Kết nối & luân chuyển OpenAI, Anthropic, Google, endpoint tương thích OpenAI; định tuyến mô hình theo lượt.",
            en: "Switches across OpenAI, Anthropic, Google, and OpenAI-compatible endpoints with manual per-turn routing.",
          },
        },
        {
          code: "L2",
          name: "Skill Engine",
          summary: {
            vi: "Điều khiển hành vi AI qua thời lượng hiệu lực, giới hạn số kỹ năng hoạt động, giới hạn gọi công cụ/lượt, thư viện import/export.",
            en: "Governs model behavior with active skill caps, TTL duration, per-turn tool limits, and import/export libraries.",
          },
        },
        {
          code: "L3",
          name: "Active & Long-Term Memory",
          summary: {
            vi: "Phân tách ngữ cảnh phiên, bộ nhớ đang hoạt động và bộ nhớ dài hạn để giữ nhất quán qua chuỗi lượt dài.",
            en: "Separates session windows, active memory, and long-term memory stores to prevent factual drift.",
          },
        },
        {
          code: "L4",
          name: "Character / Scene / Vibe & Multi-Actor",
          summary: {
            vi: "Định nghĩa tách biệt nhân vật, cảnh, không khí (vibe) và phối hợp phát ngôn giữa nhiều nhân vật.",
            en: "Decouples Character Cards, Scene Cards, Vibe modifiers, and multi-character turn coordination.",
          },
        },
        {
          code: "L5",
          name: "Context Viewer & Debug",
          summary: {
            vi: "Kiểm tra trực tiếp gói ngữ cảnh lắp ráp, kỹ năng kích hoạt và thống kê token để đối chiếu hành vi mô hình.",
            en: "Inspects assembled context payloads, active skills, and token telemetry to trace model behavior.",
          },
        },
      ] as RoleplayArchLayer[],
      challengesLabel: { vi: "Vấn đề kỹ thuật giải quyết", en: "Engineering Problems Addressed" },
      challenges: {
        vi: [
          "Phân tách suy luận mô hình (inference) khỏi lớp trạng thái và quy tắc (state/rules).",
          "Kiểm soát tính nhất quán nhân vật trong hội thoại dài hàng trăm đến hàng nghìn lượt.",
          "Đảm bảo đầu ra mô hình bám sát cấu hình người dùng qua Skill Engine và Context Debug.",
        ],
        en: [
          "Decoupling model inference from deterministic state and behavioral rule enforcement.",
          "Preserving character and world consistency over 100s–1,000s of conversational turns.",
          "Enforcing predictable user-configured behavior via Skill Engine and Context Debug.",
        ],
      },
      explorationNote: {
        vi: "Hướng mở rộng (chưa phát hành): Mô-đun trạng thái thế giới (World module), nhiều NPC và trình diễn Visual Novel đang được nghiên cứu; chưa tính là tính năng phát hành.",
        en: "Exploration direction (unshipped): World-state module, expanded NPCs, and Visual Novel presentation remain active research tracks rather than shipped features.",
      },
    },
    writing: {
      code: "02",
      name: "Writing Machine",
      subtitle: {
        vi: "Ứng dụng Sáng tác Tương tác AI",
        en: "AI Interactive Writing Application",
      },
      platform: "Android",
      status: {
        vi: "Sản phẩm đang hoạt động",
        en: "Working Product",
      },
      summary: {
        vi: "Ứng dụng viết truyện và phát triển văn bản tự sự dài theo mô hình người dùng đóng vai “đạo diễn”. Thay vì phản hồi chat rời rạc, AI tạo đoạn văn dài bám theo pacing, giọng văn và chỉ dẫn diễn biến, đồng thời hỗ trợ Rewind quay lại các mốc trước để rẽ nhánh câu chuyện.",
        en: "An interactive narrative writing application where the user acts as director—seeding scenarios, steering pacing and voice, generating long-form narrative prose rather than short chat fragments, and using Rewind to return to earlier checkpoints and test alternate branches.",
      },
      schematicTitle: {
        vi: "QUY TRÌNH SÁNG TÁC TƯƠNG TÁC & REWIND",
        en: "DIRECTORIAL WORKFLOW & REWIND TOPOLOGY",
      },
      workflowNodes: [
        {
          step: "01",
          title: { vi: "Khởi tạo kịch bản", en: "Premise Seed" },
          detail: { vi: "Ý tưởng nền, giọng văn & nhân vật", en: "Scenario brief, voice & characters" },
        },
        {
          step: "02",
          title: { vi: "Sinh tự sự dài", en: "Long-Form Narrative" },
          detail: { vi: "Pacing mạch lạc thay vì chat ngắn", en: "Coherent long prose over chat replies" },
        },
        {
          step: "03",
          title: { vi: "Chỉ dẫn đạo diễn", en: "Directorial Cues" },
          detail: { vi: "Tiếp tục cảnh hoặc chuyển hướng", en: "Advance scene or pivot action" },
        },
        {
          step: "04",
          title: { vi: "Rewind & Rẽ nhánh", en: "Rewind Branching" },
          detail: { vi: "Quay lại mốc cũ thử nhánh khác", en: "Step back to branch storylines" },
        },
      ] as WorkflowNodeSpec[],
      usageNote: {
        vi: "Ghi nhận sử dụng nội bộ: Đã thử nghiệm tạo một câu chuyện tương tác dài khoảng 20.000 chữ trong quy trình sử dụng thực tế của tác giả (ví dụ cá nhân, không phải benchmark chuẩn).",
        en: "Internal author usage example: Tested in practice to draft an interactive story of roughly 20,000 words (personal usage example, not a formal benchmark).",
      },
      explorationNote: {
        vi: "Định hướng mở rộng: Tích hợp Skill Engine kiểm soát hành vi sáng tác theo thể loại; TTS offline từng được thảo luận như hướng mở rộng và chưa gắn nhãn đã tích hợp.",
        en: "Planned & explored extensions: Genre-aware Skill Engine integration is planned; offline TTS was explored as a future option and is not claimed as shipped.",
      },
    },
    archiveHeading: {
      vi: "B. KHO DỰ ÁN KỸ THUẬT (#03 – #12)",
      en: "B. TECHNICAL ARCHIVE (#03 – #12)",
    },
    categories: [
      { id: "all" as ArchiveCategory, label: { vi: "Tất cả (10)", en: "All (10)" } },
      { id: "translation-ocr" as ArchiveCategory, label: { vi: "Dịch thuật & OCR", en: "Translation & OCR" } },
      { id: "media-tools" as ArchiveCategory, label: { vi: "Media & Desktop", en: "Media & Desktop" } },
      { id: "publishing-agents" as ArchiveCategory, label: { vi: "Báo chí & AI Agent", en: "Publishing & Agents" } },
      { id: "game" as ArchiveCategory, label: { vi: "Game", en: "Game" } },
    ],
    items: [
      {
        id: "manga-translator",
        priority: 3,
        code: "03",
        name: "Manga Translator Studio",
        subtitle: {
          vi: "Công cụ biên tập & dịch manga theo pipeline human-in-the-loop",
          en: "AI-Assisted Manga Translation Workbench",
        },
        category: "translation-ocr",
        status: { vi: "Public GitHub · Có Demo", en: "Public GitHub · Demo" },
        summary: {
          vi: "Pipeline 10 bước tách độc lập từ phát hiện bong bóng thoại, OCR, dịch đa provider, tạo mask inpainting đến typesetting và xuất ảnh.",
          en: "Modular 10-stage human-in-the-loop workbench spanning bubble detection, OCR, multi-provider translation, mask inpainting, and typesetting.",
        },
        details: {
          vi: "Cân bằng giữa tự động hóa và kiểm soát biên tập trung gian. Mỗi công đoạn lưu cache độc lập, hỗ trợ chế độ tự động hoặc bán tự động.",
          en: "Balances batch automation with human-in-the-loop oversight. Each stage caches intermediate artifacts for manual review or automated runs.",
        },
        features: {
          vi: [
            "Phát hiện vùng chữ, bong bóng thoại và OCR chuẩn bị văn bản.",
            "Dịch bằng nhiều provider AI, cho phép rà soát và chỉnh sửa.",
            "Tạo mask và inpainting xóa chữ nguồn, bảo toàn hình vẽ.",
            "Typesetting, xem trước trang và xuất ảnh manga hoàn chỉnh.",
            "Pipeline 10 stage độc lập, lưu cache và theo dõi tiến độ.",
          ],
          en: [
            "Text region and speech bubble detection with intermediate text editing.",
            "Multi-provider AI translation with manual review and revision.",
            "Mask generation and image inpainting preserving artwork.",
            "Typesetting, live page preview, and final manga export.",
            "10 independent cached stages with auto and semi-auto execution.",
          ],
        },
        stack: ["Python", "PyQt6", "PaddleOCR", "llama.cpp", "Chrome Lens", "LLM API", "Inpainting"],
        repoUrl: "https://github.com/mranex/my_manga_translator",
        liveUrl: null,
        metricsNote: {
          vi: "35 stars · 12 forks (GitHub snapshot, 20/11/2026) · Video demo từng chia sẻ đạt ~20.000 lượt xem.",
          en: "35 stars · 12 forks (GitHub snapshot, Nov 20, 2026) · Shared intro video reached ~20,000 views.",
        },
      },
      {
        id: "ln-ocr-tool",
        priority: 4,
        code: "04",
        name: "Light Novel OCR Tool",
        subtitle: {
          vi: "Công cụ OCR chuyên biệt cho light novel & văn bản Nhật dọc",
          en: "Private Production CJK & Vertical Light Novel OCR",
        },
        category: "translation-ocr",
        status: { vi: "Hoàn thiện · Dùng cá nhân", en: "Shipped · Private Tool" },
        summary: {
          vi: "Sản phẩm đã xuất xưởng dùng cho workflow cá nhân: chạy PaddleOCR-VL 1.6 GGUF cục bộ trên GPU 8 GB VRAM, giao diện 3 khung và xuất JSON/JSONL.",
          en: "Finished private production tool running PaddleOCR-VL 1.6 GGUF locally on 8 GB VRAM GPUs with vertical Japanese support and tri-pane UI.",
        },
        details: {
          vi: "Công cụ đã hoàn thiện phục vụ trích xuất và biên tập light novel cá nhân (không phải prototype). Hỗ trợ văn bản Nhật dọc, đối chiếu tri-pane và xuất dữ liệu cấu trúc JSON/JSONL.",
          en: "Shipped personal workflow tool—not a prototype. Supports vertical Japanese and CJK layouts, local 8 GB VRAM inference, tri-pane verification, and structured JSON/JSONL output.",
        },
        features: {
          vi: [
            "Inference cục bộ qua PaddleOCR-VL 1.6 định dạng GGUF.",
            "Tối ưu bộ nhớ vận hành trên GPU VRAM 8 GB.",
            "Hỗ trợ văn bản tiếng Nhật dọc và tài liệu CJK.",
            "Giao diện 3 khung (tri-pane) phục vụ đối chiếu và biên tập.",
            "Xuất dữ liệu cấu trúc JSON / JSONL sang bước xử lý sau.",
          ],
          en: [
            "Local GGUF inference powered by PaddleOCR-VL 1.6.",
            "Tuned for 8 GB VRAM GPU hardware.",
            "Dedicated handling for vertical Japanese and dense CJK layouts.",
            "Tri-pane workspace for side-by-side page verification and editing.",
            "Structured JSON / JSONL export for downstream translation pipelines.",
          ],
        },
        stack: ["PaddleOCR-VL 1.6", "GGUF", "Local Inference", "Tri-Pane UI", "JSON / JSONL"],
        repoUrl: null,
        liveUrl: null,
        isPrivateShipped: true,
        factualNote: {
          vi: "Công cụ hoàn thiện dùng riêng; không công khai mã nguồn hoặc liên kết tải xuống.",
          en: "Private shipped personal tool; no public repository or download link is provided.",
        },
        metricsNote: {
          vi: "Personal benchmark: ~2 giây/trang trên GPU 8 GB VRAM (phụ thuộc cấu hình và tài liệu thử nghiệm).",
          en: "Personal benchmark: ~2 seconds/page on 8 GB VRAM (author test hardware and sample dependent).",
        },
      },
      {
        id: "manual-studio-v3",
        priority: 5,
        code: "05",
        name: "Manual Studio v3",
        subtitle: {
          vi: "Môi trường dịch truyện dài theo quy trình manual-in-the-loop",
          en: "Light Novel & Web Novel Translation Workbench",
        },
        category: "translation-ocr",
        status: { vi: "Public GitHub", en: "Public GitHub" },
        summary: {
          vi: "Quản lý glossary, character canon và xưng hô qua nhiều chương; tạo prompt có kiểm soát gửi LLM và kiểm duyệt thủ công.",
          en: "Manages glossaries, character canon, and pronouns across long series with controlled LLM prompt generation and manual-in-the-loop QA.",
        },
        details: {
          vi: "Thiết kế cho quy trình manual-in-the-loop có sự giám sát của người dịch, không tự động gọi API dịch hàng loạt thiếu kiểm soát.",
          en: "Engineered explicitly around manual-in-the-loop discipline rather than unattended bulk API translation.",
        },
        features: {
          vi: [
            "Cấu trúc hóa văn bản nguồn và bản dịch theo từng thành phần.",
            "Quản lý glossary, character/canon và quan hệ nhân vật liên chương.",
            "Tạo prompt có kiểm soát để đưa qua LLM và kiểm tra phản hồi trả về.",
            "Kiểm soát chất lượng thủ công, biên tập và xuất bản.",
          ],
          en: [
            "Structured segmentation of source manuscripts and translated units.",
            "Multi-chapter glossary, canon, and character relationship tracking.",
            "Controlled prompt generation and verified response re-ingestion.",
            "Manual QA review, editorial polishing, and clean export.",
          ],
        },
        stack: ["Python", "PyQt6", "JSON Workflow", "Prompt-Driven LLM"],
        repoUrl: "https://github.com/mranex/translate-LN-pipeline",
        liveUrl: null,
        factualNote: {
          vi: "Quy trình manual-in-the-loop có giám sát, không phải ứng dụng tự động dịch toàn bộ không kiểm duyệt.",
          en: "Manual-in-the-loop architecture by design; not an unattended auto-translation app.",
        },
      },
      {
        id: "novel-translation-studio",
        priority: 6,
        code: "06",
        name: "Novel Translation Studio",
        subtitle: {
          vi: "Studio dịch tiểu thuyết offline-first trên FastAPI & React",
          en: "Offline-First Novel Translation Studio",
        },
        category: "translation-ocr",
        status: { vi: "MVP 00–11 · Public Repo", en: "MVP Phases 00–11 · Public Repo" },
        summary: {
          vi: "Lưu dự án thuần JSON/Markdown dễ sao lưu; quản lý phân đoạn, timeline quan hệ nhân vật, nhãn speaker/listener và Prompt Studio.",
          en: "Portable offline-first translation studio storing JSON/Markdown with segment IDs, relationship timelines, speaker/listener labels, and Prompt Studio.",
        },
        details: {
          vi: "Offline-first, single-user; tách luồng xử lý rõ từ source → segment → item → sub-item → glossary/relationship → translation → polishing/export.",
          en: "Single-user offline-first architecture spanning source → segment → item → sub-item → glossary/relationship → translation → polishing/export.",
        },
        features: {
          vi: [
            "Lưu dữ liệu portable qua JSON/Markdown, offline-first.",
            "Timeline quan hệ nhân vật và xưng hô theo tiến trình truyện.",
            "Gán nhãn speaker/listener, Database Editor và Prompt Studio.",
            "Hỗ trợ API tương thích OpenAI và xuất bản dạng văn bản.",
          ],
          en: [
            "Portable offline-first storage built on JSON and Markdown files.",
            "Chronological character relationship and honorific timeline.",
            "Speaker/listener tagging, Database Editor, and Prompt Studio.",
            "OpenAI-compatible API integration and clean text export.",
          ],
        },
        stack: ["Python", "FastAPI", "Pydantic", "React", "TypeScript", "Vite", "JSON/Markdown"],
        repoUrl: "https://github.com/mranex/novel_studio",
        liveUrl: null,
        roadmapNote: {
          vi: "Đã triển khai các phase MVP 00–11 theo README; các mục roadmap tương lai không tính là đã hoàn thành.",
          en: "MVP phases 00–11 implemented per README; later roadmap items remain future scope.",
        },
      },
      {
        id: "vocra",
        priority: 7,
        code: "07",
        name: "VoCRA & VoCRA Translator",
        subtitle: {
          vi: "Trích xuất phụ đề cứng từ video & dịch bảo toàn chuẩn SRT/ASS/VTT",
          en: "Video OCR Extractor & AI Subtitle Translator",
        },
        category: "translation-ocr",
        status: { vi: "Public GitHub", en: "Public GitHub" },
        summary: {
          vi: "Gồm Extractor (chọn vùng, lọc trùng SSIM, OCR đồng bộ timestamp) và Translator (biên tập, cache có chữ ký cấu hình, giữ chuẩn SRT/ASS/VTT).",
          en: "Two-module suite: Extractor uses SSIM frame dedupe for VLM OCR timing sync; Translator pairs config-signed caching with SRT/ASS/VTT format preservation.",
        },
        details: {
          vi: "Xử lý pipeline phụ đề video từ trích xuất khung hình rõ nét qua OpenCV/SSIM đến quản lý inference VLM cục bộ (GGUF) hoặc cloud API.",
          en: "Handles end-to-end video hardsub processing via OpenCV/SSIM frame selection and flexible local GGUF or cloud VLM translation.",
        },
        features: {
          vi: [
            "VoCRA Extractor: khoanh vùng hình ảnh, lọc frame trùng bằng SSIM, OCR đồng bộ mốc thời gian.",
            "Hỗ trợ llama.cpp / VLM GGUF cục bộ hoặc API tương thích OpenAI.",
            "VoCRA Translator: trình biên tập nguồn/đích và cache dịch có chữ ký cấu hình.",
            "Chuyển đổi và bảo toàn toàn vẹn cấu trúc SRT, ASS, VTT.",
          ],
          en: [
            "VoCRA Extractor: region selection, SSIM frame deduplication, sharpness picking, timestamp sync.",
            "Supports local llama.cpp / VLM GGUF inference or OpenAI-compatible APIs.",
            "VoCRA Translator: side-by-side editor with config-signed incremental translation cache.",
            "Preserves structural formatting tags across SRT, ASS, and VTT files.",
          ],
        },
        stack: ["Python", "PySide6", "OpenCV", "SSIM", "llama.cpp", "VLM GGUF"],
        repoUrl: "https://github.com/mranex/VOCra",
        liveUrl: null,
      },
      {
        id: "dracia-press",
        priority: 8,
        code: "08",
        name: "Dracia Press",
        subtitle: {
          vi: "Hệ thống RSS tổng hợp & hệ thống hóa cập nhật tri thức y khoa",
          en: "Medical Knowledge RSS Aggregation Platform",
        },
        category: "publishing-agents",
        status: { vi: "Đang triển khai · mranex.com", en: "In Development · mranex.com" },
        summary: {
          vi: "Cầu nối giữa Y khoa và hệ thống phần mềm: nền tảng web RSS tổng hợp và phân loại tin tức y khoa hằng ngày cho giảng viên, sinh viên và nhân viên y tế.",
          en: "Bridge between medicine and engineering: RSS aggregation platform organizing daily medical literature updates for lecturers, medical students, and clinicians.",
        },
        details: {
          vi: "Thuộc hệ sinh thái tên miền mranex.com, kết nối với các quy trình agent biên tập tự động nhằm giúp theo dõi tài liệu y khoa hằng ngày gọn gàng và có hệ thống.",
          en: "Part of the mranex.com domain ecosystem, connecting RSS feeds and editorial automation to streamline daily medical literature tracking.",
        },
        features: {
          vi: [
            "Tự động tổng hợp bài viết từ các nguồn RSS y khoa.",
            "Phân loại và hệ thống hóa nội dung chuyên ngành hằng ngày.",
            "Hướng tới giảng viên, sinh viên y khoa và nhân viên y tế.",
          ],
          en: [
            "Automated ingestion from curated medical RSS feeds.",
            "Specialty-oriented classification for daily academic reading.",
            "Designed for medical faculty, students, and healthcare staff.",
          ],
        },
        stack: ["RSS Aggregation", "Next.js / Web", "AI Workflows", "mranex.com Ecosystem"],
        repoUrl: null,
        liveUrl: siteConfig.draciaPressUrl,
        highlightEcosystem: true,
        factualNote: {
          vi: "Đang triển khai và kết nối tên miền; đường dẫn subdomain chính thức sẽ gắn trực tiếp khi hoàn tất DNS/deployment.",
          en: "Currently in development and domain configuration; subdomain URL will be linked once DNS/deployment is live.",
        },
      },
      {
        id: "tv-ez-stream",
        priority: 9,
        code: "09",
        name: "TV Ez Stream",
        subtitle: {
          vi: "Trình phát video mạng tối ưu cho Android TV & điều khiển remote",
          en: "Android TV Network Media Player",
        },
        category: "media-tools",
        status: { vi: "Đã xây dựng · Android TV", en: "Built · Android TV" },
        summary: {
          vi: "Trình phát video màn hình lớn trên Media3 / ExoPlayer, hỗ trợ HTTP Range, resume playback và tốc độ phát 1.25–2x.",
          en: "Android TV player built on Media3 / ExoPlayer with HTTP Range seeking, resume playback, 1.25–2x speed, and remote-first UI.",
        },
        details: {
          vi: "Thiết kế cho trải nghiệm điều khiển bằng remote trên TV màn hình lớn với phát video qua mạng ổn định.",
          en: "Focused on television D-pad ergonomics and reliable network video playback.",
        },
        features: {
          vi: [
            "Phát video qua mạng với HTTP Range seeking.",
            "Lưu mốc thời gian để tiếp tục phát (resume playback).",
            "Hỗ trợ điều chỉnh tốc độ phát 1.25–2x và giao diện tối ưu TV.",
          ],
          en: [
            "Network playback supporting HTTP Range requests.",
            "Automatic resume playback across viewing sessions.",
            "1.25–2x playback speed controls and 10-foot TV navigation.",
          ],
        },
        stack: ["Android TV", "Media3", "ExoPlayer", "HTTP Range"],
        repoUrl: null,
        liveUrl: null,
      },
      {
        id: "anime-vault",
        priority: 10,
        code: "10",
        name: "Anime Vault",
        subtitle: {
          vi: "Ứng dụng desktop quản lý thư viện anime đa ổ cứng cục bộ",
          en: "Multi-Drive Desktop Anime Media Library",
        },
        category: "media-tools",
        status: { vi: "Public GitHub", en: "Public GitHub" },
        summary: {
          vi: "Ứng dụng desktop Tauri v2/Rust, React/Vite và FastAPI/SQLite để đăng ký nhiều ổ cứng rời, quét thư mục, đồng bộ metadata/cover và chọn ngẫu nhiên.",
          en: "Desktop app using Tauri v2/Rust, React/Vite, and FastAPI/SQLite to index registered local drives, track covers/metadata, and pick random titles.",
        },
        details: {
          vi: "Quản lý bộ sưu tập anime nằm rải rác trên nhiều ổ đĩa vật lý tại máy tính cá nhân với cơ sở dữ liệu SQLite.",
          en: "Organizes local anime collections distributed across multiple registered drives with SQLite indexing.",
        },
        features: {
          vi: [
            "Theo dõi nhiều ổ cứng đã đăng ký và quét thư mục cục bộ.",
            "Lưu trữ metadata, ảnh bìa (cover) và công cụ chọn ngẫu nhiên.",
          ],
          en: [
            "Tracks registered physical drives and scans local collections.",
            "Metadata/cover library browsing with a random selector.",
          ],
        },
        stack: ["Tauri v2", "Rust", "React", "Vite", "Python", "FastAPI", "SQLite"],
        repoUrl: "https://github.com/mranex/Anime_Vault",
        liveUrl: null,
        roadmapNote: {
          vi: "Chỉ liệt kê chức năng thư viện cục bộ đã triển khai; mục streaming tương lai trong README giữ ở phạm vi roadmap.",
          en: "Lists implemented local catalog features only; future streaming items in README remain roadmap scope.",
        },
      },
      {
        id: "isekai-machine",
        priority: 11,
        code: "11",
        name: "Isekai Machine",
        subtitle: {
          vi: "Game tu tiên theo lượt với YearResolver RNG & biên niên sử AI",
          en: "Turn-Based Cultivation RNG Game",
        },
        category: "game",
        status: { vi: "Playable Prototype", en: "Playable Prototype" },
        summary: {
          vi: "Mỗi lần tu luyện tăng một năm ảnh hưởng thuộc tính, thọ nguyên, cảnh giới và lựa chọn Nghịch Thiên Cải Mệnh; AI chỉ diễn giải kết quả từ state snapshot.",
          en: "Turn-based cultivation game advancing one year per cycle across realms, stats, lifespan, and NTCM choices; AI interprets deterministic engine outcomes.",
        },
        details: {
          vi: "Tách biệt logic game tất định (YearResolver, state snapshot và khôi phục trạng thái RNG) khỏi tầng ngôn ngữ AI viết biên niên sử.",
          en: "Keeps game rules inside a deterministic YearResolver with restorable RNG snapshots while AI serves solely as the chronicle narrator.",
        },
        features: {
          vi: [
            "Hệ thống cảnh giới, tầng tu luyện, chỉ số cốt lõi và chiến đấu.",
            "Lựa chọn Nghịch Thiên Cải Mệnh (NTCM), bạn đồng hành, sự kiện và bảo hộ.",
            "YearResolver và state snapshot cho phép lưu/khôi phục trạng thái RNG.",
          ],
          en: [
            "Cultivation realms, tiers, core stats, and combat attributes.",
            "NTCM perks, companions, event pool, and mortality protection.",
            "YearResolver with state snapshots and reproducible RNG state.",
          ],
        },
        stack: ["YearResolver", "Deterministic RNG", "State Snapshot", "AI Chronicle"],
        repoUrl: null,
        liveUrl: null,
        roadmapNote: {
          vi: "Đã có prototype chơi được; tiếp tục mở rộng event pool, NTCM và giao diện.",
          en: "Playable prototype; roadmap focuses on expanding event pools, NTCM, and UI.",
        },
      },
      {
        id: "muse-agents",
        priority: 12,
        code: "12",
        name: "Muse Agents",
        subtitle: {
          vi: "Hệ thống AI Agent chuyên trách & quy trình tự động hóa",
          en: "Specialized AI Agents & Automation Workflows",
        },
        category: "publishing-agents",
        status: { vi: "Đang vận hành & thử nghiệm", en: "Experimental · Active Workflows" },
        summary: {
          vi: "Đặc tả vai trò, định tuyến tác vụ, quản lý ngữ cảnh và kết nối công cụ cho các agent dịch thuật, tổng hợp nội dung và vận hành tin tức Dracia Press.",
          en: "Agent role specifications, task routing, context control, and tool workflows supporting translation and Dracia Press content curation.",
        },
        details: {
          vi: "Lớp tự động hóa đứng sau việc tổng hợp nguồn tin và hỗ trợ các quy trình xử lý tri thức định kỳ.",
          en: "Orchestration layer supporting recurring RSS synthesis and specialized knowledge workflows.",
        },
        features: {
          vi: [
            "Đặc tả vai trò/identity cho từng agent chuyên biệt.",
            "Định tuyến tác vụ, quản lý ngữ cảnh và kết nối công cụ với Dracia Press.",
          ],
          en: [
            "Structured role/identity specs per specialized agent.",
            "Task routing, context scoping, and tool links to Dracia Press.",
          ],
        },
        stack: ["Agent Specs", "Task Routing", "Context Control", "RSS Workflows"],
        repoUrl: null,
        liveUrl: null,
      },
    ] as ArchiveProject[],
  },

  capabilities: {
    eyebrow: {
      vi: "PHẦN V · NĂNG LỰC CHUYÊN MÔN & QUAN TÂM",
      en: "SECTION V · COMPETENCIES & INTERESTS",
    },
    title: {
      vi: "Phương pháp nghiên cứu y học, ngôn ngữ & công nghệ",
      en: "Clinical research methodology, pedagogy & software stack",
    },
    subtitle: {
      vi: "Sắp xếp từ chuyên môn y khoa – thống kê đến công nghệ phần mềm; chỉ liệt kê công cụ thực tế đã sử dụng, không tự gán thang điểm hoặc số năm kinh nghiệm.",
      en: "Ordered from clinical research and pedagogy to software engineering; lists directly applied tools without arbitrary proficiency percentages.",
    },
    groups: [
      {
        code: "01",
        title: {
          vi: "Nghiên cứu & Thống kê Y học",
          en: "Clinical Research & Biostatistics",
        },
        items: {
          vi: [
            "Thiết kế nghiên cứu lâm sàng và đánh giá bằng chứng y văn",
            "Phân tích yếu tố nguy cơ & mô hình tiên lượng (hồi quy logistic)",
            "Phân tích dữ liệu nghiên cứu bằng SPSS, R, Python và Excel",
            "Soạn thảo báo cáo khoa học và công trình đăng tạp chí chuyên ngành",
          ],
          en: [
            "Clinical study design and critical literature appraisal",
            "Risk-factor analysis and prognostic modeling (logistic regression)",
            "Statistical data analysis using SPSS, R, Python, and Excel",
            "Scientific manuscript preparation for peer-reviewed medical journals",
          ],
        },
      },
      {
        code: "02",
        title: {
          vi: "Ngoại ngữ & Sư phạm Y khoa",
          en: "Languages & Medical Pedagogy",
        },
        items: {
          vi: [
            "Tiếng Anh: VSTEP Bậc 4/6 (7.0) — đọc hiểu y văn quốc tế và tài liệu kỹ thuật",
            "Tiếng Trung: tự học ở trình độ sơ cấp (chưa có chứng chỉ)",
            "Sư phạm Y học cơ bản, dạy – học lâm sàng & nghiệp vụ sư phạm ĐH",
            "Kinh nghiệm hỗ trợ sinh viên y khoa và tham gia biên soạn giáo trình",
          ],
          en: [
            "English: VSTEP Level 4/6 (7.0) — fluent in medical literature and technical docs",
            "Chinese: Elementary self-study level (no formal certificate)",
            "Certified in Basic Medical Pedagogy, Clinical Teaching & Higher Ed Pedagogy",
            "Experience mentoring medical students and drafting curriculum materials",
          ],
        },
      },
      {
        code: "03",
        title: {
          vi: "Hệ thống AI / LLM / VLM",
          en: "AI / LLM / VLM Systems",
        },
        items: {
          vi: [
            "Tích hợp đa provider LLM API & endpoint tương thích OpenAI",
            "Thiết kế định tuyến model, quản lý phiên, memory & Skill Engine",
            "VLM / OCR trích xuất văn bản CJK & tiếng Nhật dọc",
            "Inference cục bộ qua llama.cpp, GGUF trên GPU 8 GB VRAM",
            "Xây dựng workflow AI Agent hỗ trợ dịch thuật và tổng hợp RSS",
          ],
          en: [
            "Multi-provider LLM API integration and OpenAI-compatible routing",
            "Session management, tiered memory, and Skill Engine runtimes",
            "VLM / OCR pipelines for dense CJK and vertical Japanese text",
            "Local GGUF inference via llama.cpp tuned for 8 GB VRAM GPUs",
            "AI agent workflows for translation and RSS knowledge curation",
          ],
        },
      },
      {
        code: "04",
        title: {
          vi: "Kỹ thuật Phần mềm (Software Engineering)",
          en: "Software Engineering",
        },
        items: {
          vi: [
            "Ngôn ngữ: Python, Kotlin/Android, TypeScript, JavaScript, Rust/Tauri",
            "Ứng dụng: Android SDK, Media3/ExoPlayer, PyQt6, PySide6, Tauri v2, React, Vite",
            "Dữ liệu & Backend: FastAPI, REST API, SQLite, JSON / JSONL / Markdown",
            "Xử lý ảnh/video: OpenCV, SSIM, OCR pipeline, image inpainting",
          ],
          en: [
            "Languages: Python, Kotlin/Android, TypeScript, JavaScript, Rust/Tauri",
            "Frameworks: Android SDK, Media3/ExoPlayer, PyQt6, PySide6, Tauri v2, React, Vite",
            "Data & Backend: FastAPI, REST integration, SQLite, JSON / JSONL / Markdown",
            "Vision & Video: OpenCV, SSIM, OCR pipelines, image inpainting",
          ],
        },
      },
    ],
    interestsLabel: { vi: "Sở thích & hướng quan tâm", en: "Personal Interests" },
    interests: {
      vi: [
        "Y học lâm sàng & truyền đạt tri thức y khoa",
        "Trí tuệ nhân tạo & ứng dụng liên ngành",
        "Văn học cổ điển, hiện đại & light novel / web novel",
        "Sáng tác, worldbuilding, điện ảnh & game",
        "Bóng chuyền, bóng đá, cầu lông & esports giải trí",
      ],
      en: [
        "Clinical medicine & medical knowledge sharing",
        "Artificial intelligence & interdisciplinary software",
        "Classical/modern literature, light novels & web novels",
        "Creative writing, worldbuilding, cinema & game design",
        "Volleyball, football, badminton & casual esports",
      ],
    },
  },

  contact: {
    eyebrow: { vi: "LIÊN HỆ & HỆ SINH THÁI", en: "CONTACT & DIRECTORY" },
    title: {
      vi: "Trao đổi chuyên môn y khoa, nghiên cứu hoặc dự án phần mềm.",
      en: "Connect regarding clinical research, medical education, or software.",
    },
    subtitle: {
      vi: "Kênh liên hệ trực tiếp tại Cần Thơ và thông tin kết nối hệ sinh thái mranex.com.",
      en: "Direct contact channels in Can Tho and links across the mranex.com ecosystem.",
    },
    copyLabel: { vi: "Sao chép", en: "Copy" },
    copiedLabel: { vi: "Đã chép", en: "Copied" },
    emailLabel: "EMAIL",
    phoneLabel: { vi: "ĐIỆN THOẠI", en: "PHONE" },
    githubLabel: "GITHUB",
    ecosystemTitle: { vi: "DANH MỤC HỆ SINH THÁI MRANEX.COM", en: "MRANEX.COM DIRECTORY" },
    ecosystemNodes: [
      {
        label: "mranex.com",
        role: {
          vi: "Hồ sơ học thuật, lâm sàng & kỹ thuật chính thức",
          en: "Official Clinical & Technical Monograph",
        },
        status: { vi: "Vercel Ready", en: "Vercel Ready" },
      },
      {
        label: "Dracia Press",
        role: {
          vi: "Tờ báo RSS cập nhật tri thức y khoa",
          en: "Medical Knowledge RSS Press",
        },
        status: {
          vi: siteConfig.draciaPressUrl ? "Đang hoạt động" : "Đang kết nối subdomain",
          en: siteConfig.draciaPressUrl ? "Live" : "Connecting Subdomain",
        },
      },
      {
        label: "github.com/mranex",
        role: {
          vi: "Kho mã nguồn 5 dự án phần mềm công khai",
          en: "5 Public Open-Source Repositories",
        },
        status: { vi: "Công khai", en: "Public" },
      },
    ],
    colophon: {
      vi: "© 2026 ThS. BS. Nguyễn Trường Ân (MRANEX) · Cần Thơ, Việt Nam · Hồ sơ biên tập trên nền tảng Newsreader, Be Vietnam Pro & JetBrains Mono.",
      en: "© 2026 Nguyễn Trường Ân, M.Med., M.D. (MRANEX) · Can Tho, Vietnam · Typeset in Newsreader, Be Vietnam Pro & JetBrains Mono.",
    },
  },
};
