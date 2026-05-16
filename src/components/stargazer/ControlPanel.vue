<script setup lang="ts">
import type { CarouselApi } from '@/components/ui/carousel'
import { watchOnce } from '@vueuse/core'
import { ref } from 'vue'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import SearchResult from '@/components/stargazer/SearchResult.vue'

const api = ref<CarouselApi>()
const totalCount = ref(0)
const current = ref(1)

function setApi(val: CarouselApi) {
  api.value = val
}

watchOnce(api, (api) => {
  if (!api)
    return

  current.value = api.selectedScrollSnap() + 1

  totalCount.value = api.scrollSnapList().length

  api.on('select', () => {
    current.value = api.selectedScrollSnap() + 1
  })
})


const data = [
    {
        'repoName': 'string1',
        'repoDescription': '正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋',
        'repoUrl': "https://example.com",
        'author': "string",
        'avatarUrl': "string",
        'starCount': 123,
        'forkCount': 123
    },
    {
        'repoName': 'string2',
        'repoDescription': '正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋',
        'repoUrl': "https://example.com",
        'author': "string",
        'avatarUrl': "string",
        'starCount': 123,
        'forkCount': 123
    },
    {
        'repoName': 'string3',
        'repoDescription': '正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋',
        'repoUrl': "https://example.com",
        'author': "string",
        'avatarUrl': "string",
        'starCount': 123,
        'forkCount': 123
    },
    {
        'repoName': 'string4',
        'repoDescription': '正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋',
        'repoUrl': "https://example.com",
        'author': "string",
        'avatarUrl': "string",
        'starCount': 123,
        'forkCount': 123
    },
    {
        'repoName': 'string5',
        'repoDescription': '正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋',
        'repoUrl': "https://example.com",
        'author': "string",
        'avatarUrl': "string",
        'starCount': 123,
        'forkCount': 123
    },
]
</script>

<!-- :class="index!==current?'scale-[0.6]':''" -->

<template>
  <div class="w-full sm:w-auto">
    <Carousel class="relative w-full max-w-5xl" @init-api="setApi" :opts="{
      loop: true,
    }">
      <CarouselContent class="py-3">
        <CarouselItem class="aspect-square basis-[33%]" v-for="(item, index) in data" :key="index">
          <SearchResult :searchResult="item" :class="index !== current-1?'scale-[0.7]':''" class="size-full rounded-xl object-cover transition-transform"/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <div class="py-2 text-center text-sm text-muted-foreground">
      Result {{ current }} and of {{ totalCount }}
    </div>
  </div>
</template>
