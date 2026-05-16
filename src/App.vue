<script setup lang="ts">
// import Main from '@/pages/sidebar/index.vue';
import AppSidebar from "@/components/AppSidebar.vue"
// import NavActions from "@/components/NavActions.vue"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-14 shrink-0 items-center gap-2">
        <div class="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            class="mr-2 "
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage class="line-clamp-1">
                  StarGazer
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div class="flex flex-1 flex-col py-10 items-center justify-center">
        <!-- <div class="bg-muted/50 mx-auto h-24 w-full max-w-3xl rounded-xl" /> -->
        <!-- <div class="bg-muted/50 mx-auto h-full w-full max-w-3xl rounded-xl" /> -->
         <!-- <Chat></Chat> -->
        <RouterView />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>