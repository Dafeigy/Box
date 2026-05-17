<script setup lang="ts">
import ChatComponents from '@/components/stargazer/StarGazerChat.vue';
import ControlPannel from '@/components/stargazer/ControlPanel.vue';

const data = {
    searchResult:{
        'repoName': 'string',
        'repoDescription': '正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋正则表达式 国际象棋',
        'repoUrl': "https://example.com",
        'author': "string",
        'avatarUrl': "string",
        'starCount': 123,
        'forkCount': 123
    }
}
</script>

<template>
    <div class="w-full h-full flex flex-col justify-between items-center">
        <div>hello</div>
        <!-- <SearchResult :items="data.searchResult"/> -->
        <ControlPannel />
        <ChatComponents/>
    </div>
</template>
