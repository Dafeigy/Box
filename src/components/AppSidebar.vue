<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar"

import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Star,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-vue-next"

import NavFavorites from "@/components/NavFavorites.vue"
import NavMain from "@/components/NavMain.vue"
import NavSecondary from "@/components/NavSecondary.vue"
import NavWorkspaces from "@/components/NavWorkspaces.vue"
import TeamSwitcher from "@/components/TeamSwitcher.vue"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const props = defineProps<SidebarProps>()

// This is sample data.
const data = {
  teams: [
    {
      name: "Ptolemaeus",
      logo: Command,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "ptolemaeus",
      url: "#",
      icon: Star,
      badge: "10",
    },
  ],
  navSecondary: [ 
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
  ],
  workspaces: [
    {
      name: "Personal Life Management",
      emoji: "🏠",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "#",
          emoji: "📔",
        },
        {
          name: "Health & Wellness Tracker",
          url: "#",
          emoji: "🍏",
        },
        {
          name: "Personal Growth & Learning Goals",
          url: "#",
          emoji: "🌟",
        },
      ],
    },
    {
      name: "Professional Development",
      emoji: "💼",
      pages: [
        {
          name: "Career Objectives & Milestones",
          url: "#",
          emoji: "🎯",
        },
        {
          name: "Skill Acquisition & Training Log",
          url: "#",
          emoji: "🧠",
        },
        {
          name: "Networking Contacts & Events",
          url: "#",
          emoji: "🤝",
        },
      ],
    },
  ]
}
</script>

<template>
  <Sidebar class="border-r-0" v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
      <NavMain :items="data.navMain" />
    </SidebarHeader>
    <SidebarContent>
      <!-- <NavFavorites :favorites="data.favorites" /> -->
      <!-- <NavWorkspaces :workspaces="data.workspaces" /> -->
      <NavSecondary :items="data.navSecondary" class="mt-auto" />
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
