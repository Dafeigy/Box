<script setup lang="ts">
import { ArrowUpIcon, AtSign, InfoIcon, PlusIcon, Settings2 } from 'lucide-vue-next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
import { Separator } from '@/components/ui/separator'
import StarGazerSettings from '@/components/stargazer/StarGazerSettings.vue';
</script>

<template>
  <div class="grid w-full max-w-3xl gap-6">

    <InputGroup>
        <InputGroupAddon align="block-start">
        <InputGroupButton
          variant="outline"
          class="rounded-full"
          size="icon-xs"
        >
          <AtSign class="size-4" />
        </InputGroupButton>
        <InputGroupButton
          variant="outline"
          class="rounded-full"
          size="icon-xs"
        >
        <StarGazerSettings/>
          
        </InputGroupButton>
        </InputGroupAddon>
      <InputGroupTextarea placeholder="Ask, Search or Chat..." class="max-h-16 scrollbar-hide" />
      <InputGroupAddon align="block-end">
        <InputGroupButton
          variant="outline"
          class="rounded-full"
          size="icon-xs"
        >
          <PlusIcon class="size-4" />
        </InputGroupButton>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <InputGroupButton variant="ghost">
              Auto
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            align="start"
            class="[--radius:0.95rem]"
          >
            <DropdownMenuItem>Auto</DropdownMenuItem>
            <DropdownMenuItem>Agent</DropdownMenuItem>
            <DropdownMenuItem>Manual</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <InputGroupText class="ml-auto">
          52% used
        </InputGroupText>
        <Separator orientation="vertical" class="!h-4" />
        <InputGroupButton
          variant="default"
          class="rounded-full"
          size="icon-xs"
          disabled
        >
          <ArrowUpIcon class="size-4" />
          <span class="sr-only">Send</span>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>

<style>
/* 隐藏滚动条但保留滚动功能 */

.scrollbar-hide::-webkit-scrollbar {
  height: 6px;
  margin: 0 12px;
}
.scrollbar-hide::-webkit-scrollbar-track {
  background-color: #2a2b2d;
  border-radius: 3px;
}

.scrollbar-hide::-webkit-scrollbar-thumb {
  border-radius: 3px;
  transition: background-color 0.2s ease;
  display: none;
}

.scrollbar-hide::-webkit-scrollbar-thumb:hover {
  display: none;
}

.scrollbar-hide {  
  scrollbar-color: transparent transparent;
  transition: scrollbar-color 0.2s ease;
}
.scrollbar-hide:hover {  
  scrollbar-color: #1a050545 transparent;
}                                                                                                              

</style>
