<script setup>
import { useApiRequestStore } from '@/stores/ApiRequestStore';
import apiData from '@/data/api_data.json';


const api_req_store = useApiRequestStore();

const language = apiData.language;
const audio_codecks = apiData.audio_codecks;
const audio_formats = apiData.audio_formats;
</script>

<template>
    <div class="api__modifications-container">
        <label>Выбрать язык:</label>
        <select v-model="api_req_store.language" value="English (Great Britain)">
            <option v-for="item in language" :value="item.lang_key">
                {{ item.lang }}
            </option>
        </select>
    </div>
    <div class="api__modifications-container">
        <label>Выбрать аудио формат:</label>
        <select v-model="api_req_store.audio_codeck" value="MP3">
            <option v-for="item in audio_codecks" :value="item.codeck">
                {{ item.codeck }}
            </option>
        </select>
    </div>
    <div class="api__modifications-container">
        <label>Выбрать аудио битрейт:</label>
        <select v-model="api_req_store.audio_format" value="8khz_8bit_mono">
            <option v-for="item in audio_formats" :value="item.audio_format">
                {{ item.audio_format }}
            </option>
        </select>
    </div>
    <div class="api__modifications-container">
        <label for="speed">Задать скорость: {{ api_req_store.speed }}</label>
        <input id="speed" type="range" min="-10" max="10" step="1" :value="api_req_store.speed"
            @input="(e) => { api_req_store.speed = e.target.value }" />
    </div>
</template>

<style>
.api__modifications-container {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.api__modifications-container select {
    all: unset;
    background-color: rgb(58, 58, 58);
    border-radius: 5px;
    padding: 10px;
}

.api__modifications-container select:hover,
input[id="speed"]:hover {
    transform: scale(1.03);
    transition: all 0.1s ease;
}

.api__modifications-container select::-webkit-scrollbar {
    width: 10px;
}

.api__modifications-container select::-webkit-scrollbar-track {
    background-color: rgb(58, 58, 58);
    border-radius: 5px;
}

.api__modifications-container select::-webkit-scrollbar-thumb {
    background-color: rgb(0, 126, 215);
    border-radius: 5px;
}

.api__modifications-container select::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 125, 215, 0.7);
}
</style>