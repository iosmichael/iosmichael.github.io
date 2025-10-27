import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";
import { Separator } from "./components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
import {
  Mail,
  Github,
  Linkedin,
  Globe,
  Menu,
  ArrowRight,
  PlayCircle,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react";
import { motion } from "motion/react";

// --- Editable content (change these to your real info) ---
const PROFILE = {
  nameEn: "Chelsey Huang",
  title:
    "AI × Crypto Builder | Founding Partner @ CSIL.AI | Pitch.MCN",
  bio: "创业者 / 投资人 / 内容创作者，专注 AI 与加密金融的交叉地带，打造能落地的智能产品与品牌",
  location: "Palo Alto · NYC",
  email: "chenxi.huang1028@gmail.com",
  links: {
    website: "https://your-site.com",
    github: "https://github.com/yourname",
    linkedin:
      "https://www.linkedin.com/in/chenxi-huang-017107327/",
  },
  heroImage:
    "/images/gallery/personal_pic.jpg",
};

const csil = {
  name: "CSIL.AI",
  subtitle: "Crypto Quant Fund",
  blurb:
    "CSIL.AI 是一家成立于 2023 年的 AI 驱动量化交易公司，由来自 JP Morgan、Google、字节跳动等全球顶尖金融与科技机构的量化对冲基金专家与算法工程师组成。团队自主研发交易智能体与多策略系统，覆盖费率套利、期权与永续对冲、趋势追踪、跨平台套利等领域，致力于以低回撤与高夏普实现稳健复利。依托可快速迭代的数据-研究-交易闭环平台，CSIL.AI 为机构与高净值客户提供透明、定制化的量化资产管理服务，打造全球领先的智能交易与风险控制体系。",
  highlights: [
    "稳健收益与低回撤",
    "AI 驱动的多策略组合",
    "全面风险管理体系",
  ],
  ctas: [
    { label: "Deck", href: "#" },
    { label: "联系合作", href: "#contact" },
  ],
};

const pitch = {
  name: "Pitch.MCN",
  subtitle: "内容 × 孵化联合体",
  blurb:
    "拓点Pitch.是国内首批创业工作室，也是一家致力于推动消费&科技产业的媒体型投资公司，我们专注于加速创业项目的产业化落地，聚集流量、产业、智库与资本的力量，减少创业者的试错成本，孵化出下N个产业黑马",
  incubationsMine: [
    {
      name: "Zhang's Mouth 张的嘴",
      desc: "Healthy instant food reimagined through technology Founded in NAPA VALLY.",
      tags: ["Consumer", "Health", "FoodTech"],
    },
    {
      name: "Cicada Finance",
      desc: "Tokenized yield assets for the on-chain economy.",
      tags: ["DeFi", "Asset Management", "Web3"],
    },
  ],
  incubationsPitch: [
    {
      name: "ByeCode",
      desc: "No-code platform for building beautiful websites instantly.",
      tags: ["SaaS", "No-Code", "Web"],
    },
    {
      name: "SuXiaoHe",
      desc: "Modern vegan restaurant chain for conscious, healthy living.",
      tags: ["Consumer", "Health", "Food"],
    },
    {
      name: "Jimu AI",
      desc: "AI tools that accelerate creativity and automate workflows.",
      tags: ["AI", "Productivity", "Tools"],
    },
    {
      name: "Little Yellow Cup Coffee",
      desc: "Specialty coffee brand blending taste, design, and culture.",
      tags: ["Consumer", "Lifestyle", "F&B"],
    },
  ],
  ctas: [
    { label: "合作与投放", href: "#contact" },
    { label: "孵化申请", href: "#contact" },
  ],
};

const blogger = {
  title: "博主 · 黄小茜",
  blurb: "记录创业、投资与海外生活。",
  gallery: [
    // Example: Upload your own images to /public/images/gallery/ folder
    // Then reference them like this:
    {
      src: "/images/gallery/your-photo-1.jpg",
      caption: "Event Hosting",
    },

    // Temporary placeholder images (replace these with your own):
    {
      src: "https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnQlMjBob3N0aW5nfGVufDF8fHx8MTc2MTQyOTIzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Event Hosting",
    },
    {
      src: "https://images.unsplash.com/photo-1561491431-71b89da6056a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lbCUyMGRpc2N1c3Npb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjE0MjkyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Panel Talk",
    },
    {
      src: "https://images.unsplash.com/photo-1759668358660-0d06064f0f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbm9tYWQlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNDE1NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Travel Work",
    },
    {
      src: "https://images.unsplash.com/photo-1706824250412-42b8ba877abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkaW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEzMjk3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Studio Shoot",
    },
    {
      src: "https://images.unsplash.com/photo-1526164899963-7e52f9cc9e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBvdXRkb29yfGVufDF8fHx8MTc2MTQyOTI0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Climbing",
    },
    {
      src: "https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjEzMDQzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Conference",
    },
  ],
  videos: [
    {
      thumb:
        "https://images.unsplash.com/photo-1561491431-71b89da6056a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lbCUyMGRpc2N1c3Npb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjE0MjkyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "AI × Crypto 圆桌",
      url: "https://www.youtube.com/watch?v=xxxx",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1683089884249-a6c5f364edaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjE0MjkyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "创业日常 Vlog",
      url: "https://www.youtube.com/watch?v=xxxx",
    },
  ],
};

const roseever = {
  name: "ROSÉEVER",
  subtitle: "Preserved Flower Studio",
  blurb:
    "ROSÉEVER Founded in Irvine USA，Modern floral design blending art, emotion, and everyday beauty. Preserved flowers, car trunk blooms, and indoor installations crafted to last.",
  bullets: [
    "鲜花/永生花伴手礼",
    "花花后备箱，室内花艺布置，无框画，玩偶花束，花墙",
    "团队分工与增长数据复盘",
  ],
};

const education = {
  schools: [
    {
      name: "Your University",
      program:
        "B.S. / M.S. — Computer Science, Entrepreneurship",
      details: "研究方向：AI 应用、区块链产品、量化交易",
      years: "2018 – 2022",
    },
  ],
};

const socials = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    href: PROFILE.links.linkedin,
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    href: PROFILE.links.github,
  },
  {
    icon: <Globe size={18} />,
    label: "Website",
    href: PROFILE.links.website,
  },
];

// --- UI helpers ---
const Section = ({ id, title, subtitle, children, titleClassName }: any) => (
  <section id={id} className="py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-8 md:mb-12">
        <h2 className={titleClassName || "tracking-tight"}>{title}</h2>
        {subtitle && (
          <p className="mt-2 text-muted-foreground max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  </section>
);

const ProjectCard = ({ name, desc, tags, href }: any) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>{name}</span>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1"
          >
            Visit <ExternalLink size={16} />
          </a>
        )}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags?.map((t: string, i: number) => (
          <Badge key={i} variant="secondary">
            {t}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function PersonalSite() {
  const [dark, setDark] = useState(true);
  return (
    <TooltipProvider>
      <div className={dark ? "dark" : ""}>
        <div className="min-h-screen bg-background text-foreground transition-colors">
          {/* Navbar */}
          <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <a href="#top" className="tracking-tight">
                {PROFILE.nameEn} · {PROFILE.nameZh}
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#about">About</a>
                <a href="#csil">CSIL.AI</a>
                <a href="#pitch">Pitch.MCN</a>
                <a href="#blogger">Blogger</a>
                <a href="#roseever">Roseever</a>
                <a href="#education">School</a>
                <a href="#contact">Contact</a>
              </nav>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDark(!dark)}
                  aria-label="toggle theme"
                >
                  {dark ? (
                    <Sun size={18} />
                  ) : (
                    <Moon size={18} />
                  )}
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="md:hidden"
                    >
                      <Menu size={18} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-64">
                    <SheetHeader>
                      <SheetTitle>导航</SheetTitle>
                    </SheetHeader>
                    <nav className="mt-6 flex flex-col gap-4">
                      {[
                        ["About", "#about"],
                        ["CSIL.AI", "#csil"],
                        ["Pitch.MCN", "#pitch"],
                        ["Blogger", "#blogger"],
                        ["Roseever", "#roseever"],
                        ["School", "#education"],
                        ["Contact", "#contact"],
                      ].map(([label, href]) => (
                        <a
                          key={label}
                          href={href}
                          className="hover:underline"
                          aria-label={label as string}
                        >
                          {label}
                        </a>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </header>

          {/* Hero */}
          <section
            id="top"
            className="relative overflow-hidden border-b"
          >
            <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-12 gap-8 px-4 py-16 md:py-24">
              <div className="md:col-span-7 flex flex-col justify-center">
                <motion.h1
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="tracking-tight text-6xl"
                >
                  {PROFILE.nameEn}{" "}
                  <span className="opacity-60">
                    {PROFILE.nameZh}
                  </span>
                </motion.h1>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                  {PROFILE.title}
                </p>
                <p className="mt-3 text-muted-foreground max-w-2xl">
                  {PROFILE.bio}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {socials.map((s, i) => (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <a
                          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {s.icon} {s.label}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>{s.href}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-border">
                  <img
                    src={PROFILE.heroImage}
                    alt="Chelsey portrait"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 rounded-full bg-background/70 px-3 py-1">
                    {PROFILE.location}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About */}
          <Section
            id="about"
            title="About"
            subtitle="A builder at the edge of AI, crypto, and media."
            titleClassName="tracking-tight text-5xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>What I Do</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    量化策略与风控设计（CEX / Derivatives /
                    Stat-Arb）。
                  </p>
                  <p>
                    AI 原生产品：语音情绪、Agent
                    工作流、数据管线。
                  </p>
                  <p>品牌与叙事：从 Deck 到 增长与商业化。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Focus 2025</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    Voice-native Emotional OS（AI × Mental
                    Wellness）。
                  </p>
                  <p>稳定币支付与风控数据基础设施。</p>
                  <p>AI × Web3 融合的消费级体验与硬件。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Open to</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    LP / 战略合作 / 顾问 / 讲座主持 & 圆桌策划。
                  </p>
                  <p>跨学科科研与产业落地项目。</p>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* CSIL.AI */}
          <Section
            id="csil"
            title="CSIL.AI"
            subtitle={csil.subtitle}
            titleClassName="tracking-tight text-5xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>关于 CSIL.AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {csil.blurb}
                  </p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {csil.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2"
                      >
                        <Badge variant="outline">亮点</Badge>{" "}
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {csil.ctas.map((c, i) => (
                      <Button key={i} asChild>
                        <a href={c.href}>
                          {c.label}{" "}
                          <ArrowRight
                            className="ml-2"
                            size={16}
                          />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>策略与能力</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>Cex - Dex资费套利策略</p>
                  <p>Pendle Portfolio策略</p>
                  <p>多因子CTA策略</p>
                  <p>Long - Short策略</p>
                  <p>跨所监控 · 自动化风控 · 极端行情响应</p>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* Pitch.MCN */}
          <Section
            id="pitch"
            title="Pitch.MCN"
            subtitle={pitch.subtitle}
            titleClassName="tracking-tight text-5xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>我们做什么</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {pitch.blurb}
                  </p>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="mb-2">我主导的孵化</h4>
                      <div className="space-y-3">
                        {pitch.incubationsMine.map((p, i) => (
                          <ProjectCard key={i} {...p} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2">Pitch 孵化的项目</h4>
                      <div className="space-y-3">
                        {pitch.incubationsPitch.map((p, i) => (
                          <ProjectCard key={i} {...p} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {pitch.ctas.map((c, i) => (
                      <Button
                        key={i}
                        asChild
                        variant="secondary"
                      >
                        <a href={c.href}>{c.label}</a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>服务模块</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
                  <p>品牌定位与叙事设计</p>
                  <p>Pitch.Show</p>
                  <p>拓点学习室</p>
                  <p>拓点流量矩阵</p>
                  <p>Startup School</p>
                  <p>拓点创业社区 </p>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* Blogger */}
          <Section
            id="blogger"
            title="博主 · 照片与视频"
            subtitle={blogger.blurb}
            titleClassName="tracking-tight text-5xl"
          >
            <Tabs defaultValue="photos" className="w-full">
              <TabsList>
                <TabsTrigger value="photos">照片集</TabsTrigger>
                <TabsTrigger value="videos">视频</TabsTrigger>
              </TabsList>
              <TabsContent value="photos" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {blogger.gallery.map((g, i) => (
                    <Dialog key={i}>
                      <DialogTrigger asChild>
                        <div className="group cursor-zoom-in overflow-hidden rounded-xl ring-1 ring-border">
                          <img
                            src={g.src}
                            alt={g.caption}
                            className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="p-2 text-center text-muted-foreground">
                            {g.caption}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>{g.caption}</DialogTitle>
                        </DialogHeader>
                        <img
                          src={g.src}
                          alt={g.caption}
                          className="w-full rounded-lg object-contain"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="videos" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {blogger.videos.map((v, i) => (
                    <a
                      key={i}
                      href={v.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-xl ring-1 ring-border">
                        <img
                          src={v.thumb}
                          alt={v.title}
                          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-background/70 p-2">
                            <PlayCircle />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">{v.title}</div>
                    </a>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Section>

          {/* Roseever */}
          <Section
            id="roseever"
            title="Roseever"
            subtitle={roseever.subtitle}
            titleClassName="tracking-tight text-5xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>项目回顾</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {roseever.blurb}
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-1">
                    {roseever.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>资料与链接</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <a
                    className="inline-flex items-center gap-2 underline"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    项目概览 <ExternalLink size={16} />
                  </a>
                  <a
                    className="inline-flex items-center gap-2 underline"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    设计稿 <ExternalLink size={16} />
                  </a>
                  <a
                    className="inline-flex items-center gap-2 underline"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    电商链接 <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* Education */}
          <Section
            id="education"
            title="School"
            subtitle="Education & Research"
            titleClassName="tracking-tight text-5xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.schools.map((s, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{s.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground space-y-1">
                    <p>{s.program}</p>
                    <p>{s.details}</p>
                    <p>{s.years}</p>
                  </CardContent>
                </Card>
              ))}
              <Card>
                <CardHeader>
                  <CardTitle>课程 / 研究兴趣</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-1">
                  <p>
                    AI Agents · LLM 应用工程 · 量化交易 ·
                    合规与安全
                  </p>
                  <p>
                    区块链系统设计 · 数据工程 · HCI & Growth
                  </p>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* Contact */}
          <Section
            id="contact"
            title="Contact"
            subtitle="合作 / 演讲 / 顾问 / 媒体"
            titleClassName="tracking-tight text-5xl"
          >
            <Card>
              <CardContent className="pt-6">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your name / 你的名字" />
                  <Input type="email" placeholder="Email" />
                  <Input
                    placeholder="Company / 机构"
                    className="md:col-span-2"
                  />
                  <Textarea
                    placeholder="Message / 留言"
                    className="md:col-span-2 min-h-[120px]"
                  />
                  <div className="md:col-span-2 flex items-center justify-between">
                    <div className="text-muted-foreground">
                      或直接发邮件至：{PROFILE.email}
                    </div>
                    <Button type="button">Send</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Section>

          {/* Footer */}
          <footer className="border-t py-10">
            <div className="mx-auto max-w-6xl px-4 text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
              <div>
                © {new Date().getFullYear()} {PROFILE.nameEn}.
                All rights reserved.
              </div>
              <div className="flex items-center gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    {s.icon}{" "}
                    <span className="hidden sm:inline">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </TooltipProvider>
  );
}