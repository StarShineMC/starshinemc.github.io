import { Box, Globe, Github, Cpu, Sparkles, Zap } from 'lucide-react';
import { TeamMember, Feature, SocialLink } from './types';

export const SERVER_IP = "mc.8bc.top:40001";
export const QQ_GROUP_URL = "https://qm.qq.com/q/FKll6UwOE8"; 

export const NAV_LINKS = [
  { name: '特色', href: '#features' },
  { name: '展望', href: '#future' },
  { name: '团队', href: '#team' },
  { name: '连接', href: '#connect' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Xk233",
    role: "服主 / Owner",
    avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=3477822048&spec=640&img_type=jpg",
    description: "服务器主要负责人，拥有多年运维经验，致力于提供最稳定的物理机公网体验。"
  },
  {
    name: "Mai",
    role: "首席建筑师 / Lead Builder",
    avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=195066&spec=640&img_type=jpg",
    description: "具有极高的审美与建筑造诣，负责服务器主城与RPG地图的宏大场景设计。"
  },
  {
    name: "Mu_xinf",
    role: "创始人/合伙人",
    avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=3572115328&spec=640&img_type=jpg",
    description: "服务器创始人之一，负责整体规划与战略决策，带领团队不断发展壮大。"
  },
  {
    name: "huoda520",
    role: "协管/建筑师",
    avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=2762686795&spec=640&img_type=jpg",
    description: "擅长建筑设计与服务器管理，协助维护服务器秩序并参与重要建筑项目。"
  },
  {
    name: "Qicwken",
    role: "技术协助",
    avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=3129666215&spec=640&img_type=jpg",
    description: "负责服务器技术支持与插件维护，保障服务器稳定运行与功能优化。"
  },
  {
    name: "冥",
    role: "协管",
    avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=2188273644&spec=640&img_type=jpg",
    description: "协助管理服务器日常事务，维护社区秩序与玩家体验。"
  },
  {
    name: "QD_OS",
    role: "协管",
    avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=1419863485&spec=640&img_type=jpg",
    description: "积极参与服务器管理与运营，协助处理玩家问题与活动组织。"
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Java & 基岩互通",
    description: "打破平台壁垒，无论你是电脑端还是手机端玩家，都能在同一片星空下共同建设，数据完美同步。",
    icon: Globe
  },
  {
    title: "实体公网服务器",
    description: "拒绝VPS卡顿，采用高性能物理机托管，2024年底全新上线。高频CPU加持，为您提供极致流畅的游戏体验。",
    icon: Zap
  },
  {
    title: "技术优越的管理团队",
    description: "我们的管理组拥有深厚的技术积累与运维经验，专业护航，确保服务器长期稳定运行，只为做最好的服务。",
    icon: Cpu
  },
  {
    title: "宝藏小服",
    description: "我们是一个精致温馨的宝藏社区。这里没有复杂的商业套路，只有纯粹的热爱，期待与你开启一段美好的创作之旅。",
    icon: Sparkles
  }
];

export const SOCIALS: SocialLink[] = [
  {
    name: "Bilibili",
    url: "https://space.bilibili.com",
    icon: Box 
  },
  {
    name: "GitHub",
    url: "https://github.com/StarShineMC",
    icon: Github
  }
];

