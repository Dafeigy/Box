<script setup lang="ts">
import { Card, CardFooter, CardHeader,CardContent} from "@/components/ui/card"
import { Avatar, AvatarFallback,AvatarImage} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Quote, ArrowRight } from "lucide-vue-next";

defineProps<{
  searchResult: {
    repoName: string
    repoDescription: string
    repoUrl: string
    author: string
    avatarUrl: string
    starCount: number
    forkCount: number
  }
}>()

</script>

<template>
    <Card class="relative w-full max-w-sm gap-0 border-none bg-muted/70 pt-0 pb-4 shadow-none">
      <Quote class="absolute top-3 right-2 h-16 w-16 stroke-[1.5px] text-foreground/10" />
      <CardHeader class="py-5">
        <div class="flex items-center gap-3">
          <Avatar class="h-12 w-12">
            <AvatarImage src={{ searchResult.avatarUrl }} />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
          <div class="flex flex-col gap-1">
            <span class="font-semibold text-[15px] leading-none">
              {{ searchResult.repoName }}
            </span>
            <span class="text-muted-foreground text-sm leading-none">
              <a :href=searchResult.repoUrl target="blank">@{{ searchResult.avatarUrl }}</a>
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p class="text-[15px] text-muted-foreground">
          {{ searchResult.repoDescription }}
        </p>
      </CardContent>
      <CardFooter class="mt-6">
        <Button :href="searchResult.repoUrl">
          Explore Repo  <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
</template>